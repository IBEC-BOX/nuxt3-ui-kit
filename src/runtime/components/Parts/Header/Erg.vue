<template>
  <v-app-bar
    class="py-2 erg-header pt-5"
    :class="[menu_open ? 'position-fixed bg-white' : 'position-relative', bgClassHeader, burger ? 'erg-header-burger' : '']"
    :elevation="elevation || 0"
    :style="menu_open ? 'position: fixed !important;' : ''"
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
            :class="{'open-menu-header-logo': menu_open}"
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
          class="bg-none erg-header-select"
          :class="[showButton ? 'mr-2 mr-sm-4' : '', burger ? 'control-select' : '']"
          :menu-props="{ class: classMenuSelect }"
          v-bind="selectAttrs"
          @update:model-value="updateSelectLang"
        />
        <v-btn
          class="text-none text-body-1 erg-header-button"
          rounded="xl"
          :class="showButton ? burger ?  'd-none d-lg-block' : '' : 'd-none'"
          v-bind="buttonAttrs"
          @click="buttonClick"
        >
          <span class="erg-header-btn-text btn-text-full">{{ textBtn || 'Связаться с нами' }}</span>
          <span
            v-if="!wordButtonMobile.length"
            class="erg-header-btn-text btn-text-short"
          >{{ getFirstWord(textBtn) || 'Связаться' }}</span>
          <span
            v-else
            class="erg-header-btn-text btn-text-short"
          >{{ wordButtonMobile }}</span>
        </v-btn>
        <v-btn
          v-if="burger"
          icon
          class="d-block d-lg-none"
          @click="menu_open = !menu_open"
        >
          <v-icon :color="menu_open ? colorBurgerOpen : colorBurger">
            {{ menu_open ? 'mdi-close' : 'mdi-menu' }}
          </v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
    v-if="burger"
    v-model="menu_open"
    class="w-100 h-100 d-flex d-lg-none py-5 px-4 pb-16 custom-navigation-drawer"
    location="top"
    v-bind="navigationDrawerAttrs"
  >
    <div class="d-flex flex-column">
      <ul
        class="header-menu-mobile w-100 d-flex flex-column mb-10 align-center"
        :class="{'open': menu_open}"
      >
        <li
          v-for="(menu_item, index) in menuMobile"
          :key="`header-menu-item-${menu_item.id}`"
          :class="index === menuMobile.length - 1 ? '' : 'mb-6'"
        >
          <NuxtLink
            class="header-menu-link d-flex align-center"
            active-class="header-menu-link-active"
            :to="menu_item.to"
            :href="menu_item.href"
            rel="noopener noreferrer"
            :target="menu_item.href ? '_target' : '_parent'"
          >
            {{ menu_item.title }}
            <v-img
              v-if="menu_item.icon"
              :src="menu_item.icon"
              v-bind="menu_item.iconAttrs"
            />
          </NuxtLink>
        </li>
      </ul>
      <div class="d-flex justify-center mb-16">
        <v-btn
          v-for="(lang, index) in setLang"
          :key="`lang-mobile-${index}`"
          v-bind="selectLangMobileButtonAttrs"
          variant="text"
          class="text-h6"
          @click="updateSelectLang(lang.code)"
        >
          <span :class="activeLang === lang.code ? colorActiveLangMobile : colorLangMobile">
            {{ lang.name }}
          </span>
        </v-btn>
      </div>
    </div>

    <v-btn
      v-if="showButton"
      class="text-none text-body-1 erg-header-button mt-10 mb-16"
      rounded="xl"
      block
      v-bind="buttonDrawerAttrs"
      size="x-large"
      color="primary"
      @click="buttonClick; menu_open = false"
    >
      <span class="erg-header-btn-text btn-text-full">{{ textBtn || 'Связаться с нами' }}</span>
      <span
        v-if="!wordButtonMobile.length"
        class="erg-header-btn-text btn-text-short"
      >{{ getFirstWord(textBtn) || 'Связаться' }}</span>
      <span
        v-else
        class="erg-header-btn-text btn-text-short"
      >{{ wordButtonMobile }}</span>
    </v-btn>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch, computed, useAttrs } from "vue"
import { useMainStore } from "../../../store/mainStore";
const mainStore = useMainStore();

const attrs = useAttrs();
const selectAttrs = ref({
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "select"),
});
const buttonAttrs = ref({
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "button"),
});
const buttonDrawerAttrs = ref({
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "button-drawer"),
});
const selectLangMobileButtonAttrs = ref({
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "select-lang-mobile"),
});
const navigationDrawerAttrs = ref({
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "navigation-drawer"),
})

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
        href: "/"
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
  menuMobile: {
    type: Array,
    default: () => ([])
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
  burger: { type: Boolean, default: true },
  showButton: { type: Boolean, default: true },
  columnGapList: { type: Number, default: 32 },
  classMenuSelect: { type: String, default: () => 'select-lang-header-menu' },
  wordButtonMobile: { type: String, default: () => '' },
  colorActiveLangMobile: { type: String, default: () => '' },
  colorLangMobile: { type: String, default: () => '' },
  colorBurger: { type: String, default: () => '' },
  colorBurgerOpen: { type: String, default: () => '' }
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
.open-menu-header-logo {
  filter: invert(19%) sepia(10%) saturate(398%) hue-rotate(169deg) brightness(100%) contrast(0%);
}
.custom-navigation-drawer {
  position: relative;
  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .v-btn--block {
    flex: 0 0 auto
  }
  ul {
    list-style: none;
  }
  .header-menu-link {
    text-decoration: none;
    font-size: 32px;
  }
  .erg-header-logo-link {
    position: absolute;
    top: 0px;
    z-index: 10;
    img {

    }
  }
}
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

.control-select {
  display: none;
  @media(min-width: 1280px) {
    display: grid;
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

  &-item {
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
