<template>
  <v-app-bar
    class="py-2 erg-header"
    :class="[menu_open ? 'position-fixed bg-white' : 'position-relative', bgClassHeader || 'bg-none']"
    :elevation="elevation || 0"
  >
    <v-container class="d-flex align-center justify-space-between py-0">
      <div class="d-flex flex-grow-1 align-center">
        <nuxt-link
          to="/"
          class="mr-md-10"
          :style="logoStyle"
        >
          <v-img
            :src="logo.url"
            :height="logo.height"
            :alt="logo.alt || 'Logo'"
          />
        </nuxt-link>
        <div class="justify-center align-start d-lg-flex d-none flex-column">
          <ul
            class="d-flex align-center"
            style="column-gap: 32px"
          >
            <li
              v-for="menu_item in menu"
              :key="`header-menu-item-${menu_item.id}`"
              class=""
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
          hide-details="true"
          variant="solo"
          class="mr-2 mr-sm-4 bg-none"
          @update:model-value="updateSelectLang"
        />
        <v-btn
          class="bg-white text-none text-body-1"
          rounded="xl"
          :class="burger === true ? 'd-none d-lg-block' : ''"
          @click="buttonClick"
        >
          <span class="btn-text-full">{{ textBtn || 'Связаться с нами' }}</span>
          <span class="btn-text-short">{{ getFirstWord(textBtn) || 'Связаться' }}</span>
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
import { ref, watch, computed } from "vue"

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
      'Ru',
      'Kz',
      'En'
    ]
  },
  textBtn: { type: String, default: () => '' },
  bgClassHeader: { type: String, default: () => '' },
  colorClassMenu: { type: String, default: () => '' },
  burger: { type: Boolean, default: true}
})

const emits = defineEmits(['select-lang', 'button-click'])

const menu_open = ref(false)
const selectLang = ref('Ru')

const filteredLangs = computed(() => {
  if (!selectLang.value) return props.setLang;
  return props.setLang.filter(lang => lang !== selectLang.value);
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
  emits('select-lang', selectedLang);
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
      background: rgba(255, 255, 255, 0.39);
    }
  }
  .v-field--variant-solo {
    background: none;
    box-shadow: 0 0 0 0;
    transition: background 0.3s ease;
    border-radius: 50px;
    color: #fff;
    &:hover {
      background: rgba(255, 255, 255, 0.39);
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
