<template>
  <div class="w-100 erg-header">
    <v-app-bar
      class="py-2"
      :class="[menu_open ? 'position-fixed bg-white' : 'position-relative', bgClassHeader || 'bg-none']"
      :elevation="elevation || 0"
    >
      <v-container class="d-flex align-center justify-lg-space-between py-0">
        <div class="d-flex flex-grow-1 flex-lg-grow-0 align-center" :style="'width: ' + logo.width * 1.1 + 'px'">
          <nuxt-link to="/">
            <v-img
              :src="logo.url"
              :max-width="logo.max_width"
              :width="logo.width"
              :height="logo.height"
              :alt="logo.alt || 'Logo'"
            />
          </nuxt-link>
        </div>

        <div class="mr-auto justify-center align-start d-lg-flex d-none flex-column">
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
                :to="menu_item.url"
                class="erg-header-link"
                :class="colorClassMenu || 'text-primary'"
              >
                {{ menu_item.title }}
              </NuxtLink>
              <NuxtLink
                v-else
                class="erg-header-link"
                :class="colorClassMenu || 'text-primary'"
                @click.prevent="scrollToElement(menu_item.url)"
              >
                {{ menu_item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="d-flex align-center">
          <v-select
            v-model="selectLang"
            :items="filteredLangs"
            hide-details="true"
            variant="solo"
            class="mr-4 bg-none"
            @update:modelValue="updateSelectLang"
          />
          <v-btn
            class="bg-white text-none text-body-1 d-none d-lg-block"
            rounded="xl"
            @click="buttonClick"
          >
            {{ textBtn || 'Связаться с нами' }}
          </v-btn>
        </div>

        <v-app-bar-nav-icon
          class="d-block d-lg-none my-auto"
          @click="menu_open = !menu_open"
        />
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
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
            :to="menu_item.url"
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
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue"

const props = defineProps({
  logo: {
    type: Object,
    default: () => ({
      url: 'https://s3-alpha-sig.figma.com/img/222c/02bf/df2277b790ec617d5a2f748736bfdc5a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BjEYx20siAJOsNnjkamNkI-f35Bqi8qtCAvaJ4Oxthy2my4acTfctcKVovI2Yp6v2KugOl61Oat9sQjS0violwagFG2Gie8a48IvmcxllwmkVOESFSBVwWx1D3eP0t5bQit2x3qDF~nfdHh-kMBUSdgwzS1UojssqLJ0NCo6WuUQDz2cbyVZl2RLsSZSgbrLz3agCXXACVU7XH6eTJmE0ZVskZhSgx53dxt~s6Jqrr8l7mcp2C03PxkUbXy1A3bvGxQFdVyVmpx0YSk2PXWwnJZFoX85JHFKzxvLJKWXH7rA1GY~Cx3L8ZI48mB1ybzaIZFXs1KakjD-hDzzyDPITw__',
      width: 174,
      height: 70,
    })
  },
  elevation: Number,
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
  textBtn: String,
  bgClassHeader: String,
  colorClassMenu: String,
})

const emits = defineEmits(['select-lang', 'button-click'])

const menu_open = ref(false)
const selectLang = ref('Ru')

const filteredLangs = computed(() => {
  if (!selectLang.value) return props.setLang;
  return props.setLang.filter(lang => lang !== selectLang.value);
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

watch(menu_open, (newValue) => {
  toggleBodyScroll(newValue);
});

function buttonClick() {
  emits('button-click')
}
</script>

<style lang="scss">
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
