<template>
  <v-app-bar
    class="py-2 erg-header"
    :class="[menu_open ? 'position-fixed bg-white' : 'position-relative', bgClassHeader]"
    :elevation="elevation || 0"
  >
    <v-container class="d-flex align-center justify-space-between py-0">
      <div class="d-flex flex-grow-1 align-center">
        <nuxt-link
          :to="logo.link || '/'"
          :style="logoStyle"
          :class="columnGapList > 28 ? 'mr-md-10' : 'mr-md-6'"
          class="erg-header-logo-link"
        >
          <v-img
            class="erg-header-logo"
            :src="logo.url"
            :height="logo.height"
            :alt="logo.alt || 'Logo'"
            v-bind="logo.attrs"
          />
        </nuxt-link>
        <div class="justify-center align-start d-lg-flex d-none flex-column erg-header-wrapper-list">
          <ul
            class="d-flex align-center erg-header-list"
            :style="{'column-gap': columnGapList + 'px'}"
          >
            <li
              v-for="menu_item in menu"
              :key="`header-menu-item-${menu_item.id}`"
              class="erg-header-item"
            >
              <NuxtLink
                v-if="menu_item.type !== 'anchor'"
                :to="menu_item.to"
                class="erg-header-link"
                :class="colorClassMenu || 'text-primary'"
              >
                {{ menu_item.title }}
              </NuxtLink>
              <NuxtLink
                v-else
                class="erg-header-link"
                :class="colorClassMenu || 'text-primary'"
                @click.prevent="scrollToElement(menu_item.to)"
              >
                {{ menu_item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>


      <div class="d-flex align-center">
        <v-select
          v-model="selectLang"
          :items="filteredLangs"
          item-title="name"
          item-value="code"
          hide-details="true"
          variant="solo"
          class="mr-2 mr-sm-4 bg-none erg-header-select"
          @update:model-value="updateSelectLang"
          :menu-props="{ class: 'select-lang-header-menu' }"
          v-bind="selectAttrs"
        />
        <v-btn
          class="bg-white text-none text-body-1 erg-header-button"
          rounded="xl"
          :class="burger === true ? 'd-none d-lg-block' : ''"
          @click="buttonClick"
          v-bind="buttonAttrs"
        >
          <span class="erg-header-btn-text btn-text-full">{{ textBtn || 'Связаться с нами' }}</span>
          <span class="erg-header-btn-text btn-text-short">{{ getFirstWord(textBtn) || 'Связаться' }}</span>
        </v-btn>
        <v-app-bar-nav-icon
          v-if="burger"
          class="d-block d-lg-none my-auto"
          @click="menu_open = !menu_open"
        />
      </div>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
    v-if="burger"
    v-model="menu_open"
    class="w-100 h-100 d-flex d-lg-none py-5 px-4"
    location="left"
  >
    <ul
      class="header-menu-mobile w-100 d-flex flex-column"
      :class="{'open': menu_open}"
    >
      <li
        v-for="menu_item in menu"
        :key="`header-menu-item-${menu_item.id}`"
      >
        <NuxtLink
          class="header-menu-link"
          active-class="header-menu-link-active"
          :to="menu_item.to"
        >
          {{ menu_item.title }}
        </NuxtLink>
      </li>
    </ul>

    <v-btn
      class="bg-white text-none text-body-1"
      block
      size="large"
      rounded="xl"
      @click="buttonClick"
    >
      {{ textBtn || 'Связаться с нами' }}
    </v-btn>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch, computed, useAttrs } from "vue"
import { useMainStore } from "../../../store/mainStore";
const mainStore = useMainStore();

const attrs = useAttrs();
const selectAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "select"),
};

const buttonAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "button"),
};

const props = defineProps({
  logo: {
    type: Object,
    default: () => ({
      url: '/logoerg.svg',
      maxWidth: 125,
      height: 78,
    })
  },
  elevation: { type: Number, default: 0},
  menu: {
    type: Array,
    default: () => [
      {
        title: "О компании",
        url: "/about"
      },
      {
        title: "Продукты и услуги",
        url: '#footer'
      },
      {
        title: "Преимущества"
      },
      {
        title: "Вакансии"
      },
      {
        title: "Контакты"
      }
    ]
  },
  setLang: {
    type: Array,
    default: () => [
      {
        code: 'ru',
        name: "Рус"
      },
      {
        code: 'kk',
        name: "Каз"
      },
      {
        code: 'en',
        name: "Eng"
      }
    ]
  },
  activeLang: { type: String, default: () => '' },
  textBtn: { type: String, default: () => '' },
  bgClassHeader: { type: String, default: () => '' },
  colorClassMenu: { type: String, default: () => '' },
  burger: { type: Boolean, default: true},
  columnGapList: { type: Number, default: 32 }
})

const emits = defineEmits(['select-lang', 'button-click'])

const menu_open = ref(false)
const selectLang = ref(props.activeLang)

const filteredLangs = computed(() => {
  if (!selectLang.value) return props.setLang;
  return props.setLang.filter(lang => lang.name !== selectLang.value);
})

const logoStyle = computed(() => {
  if (typeof window === 'undefined') return;

  const isMobile = window.innerWidth <= 600;
  const maxWidth = isMobile
    ? `${parseInt(props.logo.maxWidth) - 15}px`
    : `${props.logo.maxWidth}px`;

  const height = isMobile
    ? `${parseInt(props.logo.height) - 29}px`
    : `${props.logo.height}px`;

  return {
    width: '100%',
    maxWidth: maxWidth,
    height: height
  };
})

function updateSelectLang(selectedLang: string) {
  selectLang.value = selectedLang;
  emits('select-lang', selectLang.value);
}

const scrollToElement = (selector) => {
  const element = document.querySelector( selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleBodyScroll(isOpen: boolean) {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
  } else {
    document.body.style.overflow = '';
    document.body.style.position = '';
  }
}

function getFirstWord(text = '') {
  return text.split(' ')[0];
}

watch(menu_open, (newValue) => {
  toggleBodyScroll(newValue);
});

function buttonClick() {
  emits('button-click')
}
</script>

<style lang="scss">
.select-lang-header-menu {
  box-shadow: none !important;
  .v-select__content {
    box-shadow: none;
  }
  .v-list {
    padding: 0px 0px;
    background: rgba(255, 255, 255, 0.34) !important;
    @media(max-width: 600px) {
      background: rgba(255, 255, 255, 1) !important;
    }
    border-radius: 16px !important;
    margin-top: 10px !important;
    box-shadow: none !important;
    .v-list-item {
      color: #fff !important;
      @media(max-width: 600px) {
        color: #000 !important;
      }
    }
  }
}

@media (max-width: 600px) {
  .btn-text-full {
    display: none;
  }
  .btn-text-short {
    display: block;
  }
}

@media (min-width: 601px) {
  .btn-text-full {
    display: block;
  }
  .btn-text-short {
    display: none;
  }
}

.erg-header {
  .v-select--active-menu {
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.34) !important;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .erg-header-link {
    transition: background 0.3s ease;
    border-radius: 50px;
    padding: 8px 10px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.34);
    }
  }
  .v-field--variant-solo {
    background: none;
    box-shadow: 0 0 0 0;
    transition: background 0.3s ease;
    border-radius: 50px;
    color: #fff;
    &:hover {
      background: rgba(255, 255, 255, 0.34);
    }
  }
  .v-field__input {
    min-height: 36px;
    padding-inline-start: var(--v-field-padding-start);
    padding-inline-end: var(--v-field-padding-end);
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .v-btn__content {
    letter-spacing: 0px
  }
  .header-menu-mobile {
    padding: 8px 0px;
    .header-menu-link {
      display: block;
      width: 100%;
      padding: 20px 0;
      font-weight: 400;
      border-bottom: 1px solid #a8a8a9;
    }
  }
}

</style>
