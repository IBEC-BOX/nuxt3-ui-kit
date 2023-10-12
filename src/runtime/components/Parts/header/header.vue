<template>
  <div class="w-100">
    <v-app-bar
      class="header"
      :class="[headerActiveLinkVariant]"
      :height="screen_width > 959 ? headerHeight : 78"
      :elevation="menu_open ? 0 : 1"
    >
      <div class="d-flex flex-column w-100 h-100">
        <!-- Header top bar -->
        <div
          v-if="variant === 'top-bar' || variant === 'tabs'"
          class="header-top d-none d-md-block"
          :class="topClass"
        >
          <v-container class="py-0 d-flex h-100">
            <div class="d-flex w-100 border-b border-grey-darken-1">
              <ul class="header-menu h-100" v-if="variant === 'top-bar'">
                <li v-for="menu_item in topMenu" :key="`header-top-menu-item-${menu_item.id}`">
                  <nuxt-link :to="menu_item.url" class="header-menu-link text-subtitle-2">
                    {{ menu_item.title }}
                  </nuxt-link>
                </li>
              </ul>

              <div class="d-flex mx-n4" v-if="variant === 'tabs'">
                <nuxt-link
                  class="mx-4 py-5 position-relative text-decoration-none text-grey-darken-2"
                  active-class="tab-link-active"
                  v-for="tab in tabs"
                  :key="tab.id"
                  :to="tab.url"
                >
                  {{ tab.title }}
                </nuxt-link>
              </div>

              <div class="header-top-right ml-auto d-flex align-center">
                <v-btn
                  v-for="link in topLinks"
                  :key="link.id"
                  class="header-top-right-item d-flex text-body-2 text-grey-darken-1 mb-0 d-inline-block"
                  variant="text"
                  color="grey-darken-2"
                  :prepend-icon="link.prepend_icon"
                  :append-icon="link.append_icon"
                  :href="link.url">
                  {{ link.title }}
                </v-btn>

                <slot name="append-top" />
              </div>
            </div>
          </v-container>
        </div>
        <!-- Header top bar END -->

        <!-- Header main -->
        <v-container class="d-flex align-stretch py-0 flex-grow-1">
          <!-- Burger -->
          <v-app-bar-nav-icon class="d-block d-md-none my-auto" @click="menu_open = !menu_open" />
          <!-- Burger END -->

          <!-- Logo -->
          <div class="d-flex align-center flex-grow-1">
            <v-img
              :src="logo"
              max-width="48"
              alt="Logo"
            />
          </div>
          <!-- Logo END -->

          <!-- Menu -->
          <div class="ml-auto flex-grow-1 justify-center d-md-flex d-none flex-column">
            <div class="d-flex mx-n3 pt-5 mb-2" v-if="variant === 'menu-top-bar'">
              <nuxt-link
                v-for="menu_top_link in topMenu"
                :key="menu_top_link"
                class="d-inline-block px-3 text-body-2 text-decoration-none"
                :class="[`text-${menuTopLinksColor}`]"
                :to="menu_top_link.url"
              >
                {{ menu_top_link.title }}
              </nuxt-link>
            </div>

            <slot name="menu">
              <ul class="header-menu flex-grow-1">
                <li v-for="menu_item in menu" :key="`header-menu-item-${menu_item.id}`">
                  <NuxtLink
                    class="header-menu-link"
                    :class="{'align-start' : variant === 'menu-top-bar'} "
                    active-class="header-menu-link-active"
                    :to="menu_item.url"
                  >
                    {{ menu_item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </slot>
          </div>
          <!-- Menu END -->

          <!-- Buttons -->
          <div class="mx-n2 d-flex align-center gap-1">
            <v-btn
              class="text-body-1 mx-2"
              :class="[button.class]"
              v-for="button in buttons"
              :key="`header-button-${button.id}`"
              :elevation="'elevation' in button ? button.elevation : '0'"
              :variant="button.variant"
              :color="button.color"
              @click="button.function"
            >
              {{ button.text }}
            </v-btn>

            <slot name="buttons" />
          </div>
          <!-- Buttons END -->
        </v-container>
        <!-- Header main -->
      </div>
    </v-app-bar>

    <v-navigation-drawer class="w-100 d-flex d-md-none" v-model="menu_open" location="left">
      <!-- Menu -->
      <ul
        class="header-menu header-menu-mobile w-100 bg-white d-md-none d-flex flex-column"
        :class="{'open': menu_open}"
      >
        <li v-for="menu_item in menu" :key="`header-menu-item-${menu_item.id}`">
          <NuxtLink
            class="header-menu-link"
            active-class="header-menu-link-active"
            :to="menu_item.url"
          >
            {{ menu_item.title }}
          </NuxtLink>
        </li>
      </ul>
      <!-- Menu END -->

      <div class="d-flex flex-column px-4" v-if="variant === 'top-bar' || variant === 'menu-top-bar'">
        <nuxt-link
          class="text-decoration-none text-grey-darken-2 text-subtitle-2 py-3"
          v-for="link in topMenu"
          :key="link.id"
          :to="link.url"
        >
          {{ link.title }}
        </nuxt-link>
      </div>

      <slot name="header-top-bar-mobile" />
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  //Header main props
  logo: {
    type: String,
    default: 'data:image/svg+xml,%3Csvg width=\'46\' height=\'20\' viewBox=\'0 0 46 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0.86 15V0.879999H2.84V13.28H9.18V15H0.86ZM9.93766 9.92C9.93766 8.41333 10.4643 7.16 11.5177 6.16C12.571 5.14667 13.8577 4.64 15.3777 4.64C16.911 4.64 18.2043 5.14 19.2577 6.14C20.311 7.14 20.8377 8.4 20.8377 9.92C20.8377 11.44 20.311 12.7067 19.2577 13.72C18.2043 14.7333 16.9177 15.24 15.3977 15.24C13.8777 15.24 12.5843 14.7333 11.5177 13.72C10.4643 12.7067 9.93766 11.44 9.93766 9.92ZM11.9177 9.92C11.9177 10.9733 12.251 11.8467 12.9177 12.54C13.5977 13.22 14.4243 13.56 15.3977 13.56C16.3577 13.56 17.1777 13.2133 17.8577 12.52C18.5377 11.8267 18.8777 10.96 18.8777 9.92C18.8777 8.88 18.5377 8.02 17.8577 7.34C17.1777 6.66 16.3577 6.32 15.3977 6.32C14.4243 6.32 13.5977 6.66 12.9177 7.34C12.251 8.02 11.9177 8.88 11.9177 9.92ZM24.1358 16.84C25.0424 17.2933 25.9691 17.52 26.9158 17.52C27.8624 17.52 28.6291 17.2867 29.2158 16.82C29.8158 16.3667 30.1158 15.66 30.1158 14.7V13.88L30.1758 13.24H30.1358C29.4824 14.3333 28.4691 14.88 27.0958 14.88C25.7224 14.88 24.6224 14.3933 23.7958 13.42C22.9824 12.4467 22.5758 11.2133 22.5758 9.72C22.5758 8.22667 22.9691 7.00667 23.7558 6.06C24.5424 5.11333 25.6224 4.64 26.9958 4.64C27.6758 4.64 28.3024 4.76667 28.8758 5.02C29.4491 5.27333 29.8891 5.66 30.1958 6.18H30.2558C30.2158 6.1 30.1958 6 30.1958 5.88V4.88H32.0558V14.58C32.0558 15.38 31.9091 16.0867 31.6158 16.7C31.3358 17.3133 30.9491 17.7933 30.4558 18.14C29.9624 18.5 29.4224 18.7667 28.8358 18.94C28.2491 19.1133 27.6224 19.2 26.9558 19.2C25.7691 19.2 24.6158 18.92 23.4958 18.36L24.1358 16.84ZM24.5358 9.66C24.5358 10.7267 24.7958 11.5867 25.3158 12.24C25.8491 12.88 26.5691 13.2 27.4758 13.2C28.2624 13.2 28.9024 12.9267 29.3958 12.38C29.9024 11.8333 30.1558 10.9467 30.1558 9.72C30.1558 7.45333 29.2024 6.32 27.2958 6.32C26.4291 6.32 25.7491 6.62 25.2558 7.22C24.7758 7.80667 24.5358 8.62 24.5358 9.66ZM34.3908 9.92C34.3908 8.41333 34.9174 7.16 35.9708 6.16C37.0241 5.14667 38.3108 4.64 39.8308 4.64C41.3641 4.64 42.6574 5.14 43.7108 6.14C44.7641 7.14 45.2908 8.4 45.2908 9.92C45.2908 11.44 44.7641 12.7067 43.7108 13.72C42.6574 14.7333 41.3708 15.24 39.8508 15.24C38.3308 15.24 37.0374 14.7333 35.9708 13.72C34.9174 12.7067 34.3908 11.44 34.3908 9.92ZM36.3708 9.92C36.3708 10.9733 36.7041 11.8467 37.3708 12.54C38.0508 13.22 38.8774 13.56 39.8508 13.56C40.8108 13.56 41.6308 13.2133 42.3108 12.52C42.9908 11.8267 43.3308 10.96 43.3308 9.92C43.3308 8.88 42.9908 8.02 42.3108 7.34C41.6308 6.66 40.8108 6.32 39.8508 6.32C38.8774 6.32 38.0508 6.66 37.3708 7.34C36.7041 8.02 36.3708 8.88 36.3708 9.92Z\' fill=\'black\'/%3E%3C/svg%3E%0A'
  },

  menu: {
    type: Array,
    default:() => []
  },

  buttons: {
    type: Array,
    default:() => []
  },

  headerActiveLinkVariant: {
    type: String,
    default: '',
  },

  mobileHeight: {
    type: Number,
    default: 78,
  },

  variant: {
    type: String,
    default: '',
  }, // variants: top-bar, menu-top-bar, tabs

  //Header top bar props
  topBackground: {
    type: String,
    default: 'white'
  },

  topClass: {
    type: String,
    default: '',
  },

  topMenu: {
    type: Array,
    default: () => {}
  },

  topLinks: {
    type: Array,
    default: () => [],
  },

  //Header menu top bar props
  menuTopLinks: {
    type: Array,
    default: () => []
  },

  menuTopLinksColor: {
    type: String,
    default: 'grey-lighten-1'
  },

  //Header tabs props
  tabs: {
    type: Array,
    default: () => [],
  }
})

// Class list for top bar
const topClass = ref([`bg-${props.topBackground}`, props.topClass])

// Calculate header height
const getHeight = (variant) => {
  const heights = {
    'top-bar': 110,
    'menu-top-bar': 88,
    'tabs': 130
  }

  return heights[variant]
}

let headerHeight = getHeight(props.variant)

// Init screen width
let screen_width

if (process.client) {
  screen_width = window.innerWidth
}

// Menu
const menu_open = ref(false)
</script>

<style lang="scss">
.header {
  &-menu {
    list-style: none;
    display: flex;
    gap: 48px;

    &-link {
      display: inline-flex;
      align-items: center;
      height: 100%;
      position: relative;
      color: #74767A;
      font-weight: 400;
      text-decoration: none;
    }
  }

  &-menu-mobile {
    padding: 8px 18px;
    gap: 0;
    //transition: .3s ease;

    & .header-menu-link {
      width: 100%;
      padding: 20px 0;
      font-weight: 400;
      color: black;
      border-bottom: 1px solid #E6E7EB;
    }
  }
}

.bottom_line {
  .header-menu-link-active:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #74767A;
    left: 0;
  }
}

.middle_line {
  .header-menu-link-active:after {
    content: '';
    position: absolute;
    bottom: 13px;
    width: 100%;
    height: 2px;
    background: #74767A;
    left: 0;
  }
}

.black {
  .header-menu-link-active {
    color: #000;
  }
}

.bold {
  .header-menu-link-active {
    font-weight: bold;
  }
}

.tab-link-active:after {
  content: '';
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #000;
  position: absolute;
}
</style>
