<template>
  <v-footer class="footer">
    <v-container>
      <div class="footer-top-first" v-if="Object.keys(firstStyleTop).length">
        <v-row class="py-11">
          <v-col cols="12" align="center" justify="center" class="mb-6">
            <img :src="firstStyleTop.logo.img" :alt="firstStyleTop.logo.alt">
          </v-col>
          <v-col cols="12" align="center" justify="center" class="footer-top-text mb-6 px-0">
            <p v-for="text in firstStyleTop.text_top" :key="text.id">
              {{ text.text }}
            </p>
          </v-col>
          <v-col cols="12" class="d-flex justify-center align-center">
            <v-btn
              class="mr-sm-2 mr-3 border text-body-1"
              elevation="0"
              v-for="button in firstStyleTop.button_top"
              :key="button.id"
              :color="button.backgroundColor"
              :prepend-icon="button.leftIcon"
              :append-icon="button.rightIcon"
              :style="{ 'border-radius': button.borderRadius + 'px'}"
            >
              {{ button.text }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="footer-top-second" v-if="Object.keys(secondStyleTop).length">
        <v-row class="px-0 pt-11">
          <v-col cols="12" md="7">
            <p style="font-size: 20px; color: #4D4E52; margin-bottom: 8px;">{{ secondStyleTop.title }}</p>
            <p style="font-size: 13px; color: #A5A7AD">{{ secondStyleTop.subtitle }}</p>
          </v-col>
          <v-col cols="12" md="5" class="px-0">
            <div class="footer-top-input">
              <slot name="input"></slot>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="footer-menu" v-if="Object.keys(middleMenu).length">
        <v-row class="py-15">
          <v-col
            cols="12"
            :md="middleMenu.menu ? '3' : '10'"
            v-if="middleMenu.logo"
          >
            <img
              style="width: 60px; height: 60px"
              v-if="middleMenu.logo.img && middleMenu.logo.alt"
              :src="middleMenu.logo.img"
              :alt="middleMenu.logo.alt"
            >
            <p class="font-weight-medium mb-7" style="font-size: 15px; color: #4D4E52;">{{ middleMenu.logo.title }}</p>
            <p class="mb-7" style="font-size: 13px; color: #A5A7AD; max-width: 255px">{{ middleMenu.logo.subtitle }}</p>
            <ul class="d-flex flex-wrap" style="column-gap: 24px" v-if="middleMenu.nav">
              <li v-for="item in middleMenu.nav" :key="item.id">
                <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="6"
            :sm="middleMenu.logo ? '4' : '3'"
            :md="middleMenu.logo ? (index === middleMenu.menu.length - 1 ? '1' : '2') : '2'"
            v-for="(menu, index) in middleMenu.menu"
            :key="menu.id"
          >
            <ul>
              <li v-for="item in menu.menu" :key="item.id">
                {{ item.title }}
                <a :href="item.link">{{ item.text }}</a>
                <a :href="item.link" v-if="item.img && item.alt">
                  <img :src="item.img" :alt="item.alt"  style="margin-bottom: 1rem">
                </a>
              </li>
            </ul>
          </v-col>
          <v-col
            :cols="middleMenu.menu ? '6' : '12'"
            sm="2"
            v-if="middleMenu.store"
          >
            <p style="font-size: 18px; color: #4D4E52; margin-bottom: 20px;">{{ middleMenu.store[0].title }}</p>
            <ul class="d-flex justify-end flex-column store">
              <li
                v-for="item in middleMenu.store"
                :key="item.id"
                v-show="item.img && item.alt"
              >
                <a :href="item.link" v-if="item.img && item.alt">
                  <img :src="item.img" :alt="item.alt"  style="margin-bottom: 1rem" v-if="item.img && item.alt">
                </a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
      <hr v-if="showBorder === true" style="color: #E6E7EB" />
      <div class="footer-bottom" v-if="Object.keys(footerBottom).length">
        <v-row class="pt-7 pb-15">
          <v-col cols="12" sm="6" v-if="footerBottom.logo">
            <img
              style="width: 60px; height: 60px"
              v-if="footerBottom.logo.img && footerBottom.logo.alt"
              :src="footerBottom.logo.img"
              :alt="footerBottom.logo.alt"
            >
            <p class="font-weight-medium" style="color: #4D4E52; font-size: 24px">{{ footerBottom.logo.title }}</p>
          </v-col>
          <v-col cols="12" sm="6" v-if="footerBottom.copyright">
            <p
              style="color: #A5A7AD; font-size: 15px;"
              :class="{ 'justify-end': footerBottom.logo, 'justify-start': !footerBottom.logo }"
              class="d-flex"
            >{{ footerBottom.copyright.title }}</p>
          </v-col>
          <v-col cols="12" sm="6" v-if="footerBottom.nav">
            <ul class="d-flex flex-wrap justify-end" style="column-gap: 20px">
              <li v-for="item in footerBottom.nav" :key="item.id">
                <a :href="item.link" style="font-size: 15px; color: #A5A7AD">{{ item.text }}</a>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" v-if="footerBottom.social">
            <ul class="d-flex flex-wrap justify-end" style="column-gap: 20px">
              <li v-for="item in footerBottom.social" :key="item.id">
                <a :href="item.link">
                  <img :src="item.img" :alt="item.alt" style="width: 32px; height: 32px; cursor: pointer">
                </a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
const props = defineProps({
  firstStyleTop: {type: Object, default: () => ({}) },
  secondStyleTop: { type: Object, default: () => ({}) },

  middleMenu: { type: Object, default: () => ({}) },

  footerBottom: { type: Object, default: () => ({}) },
  showBorder: { type: Boolean, default: true}
})
</script>

<style lang="scss">
.footer {
  .footer-top-first {
    img {
      width: 60px;
      height: 60px;
    }
    .footer-top-text {
      p:nth-child(1) {
        color: #4D4E52;
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      p:nth-child(2) {
        font-size: 1.25rem;
        color: #74767A;
      }
    }
    @media(max-width: 600px) {
      .footer-top-text {
        p:nth-child(1) {
          font-size: 1.20rem;
          margin-bottom: .5rem;
        }
        p:nth-child(2) {
          font-size: .925rem;
        }
      }
    }
    .v-btn {
      height: 48px;
    }
  }
  .footer-top-input {
    position: relative;
    .v-input {
      background: #F3F3F5;
      border-radius: 32px;
      &__details {
        display: none;
      }
    }
    .v-field__outline {
      display: none;
    }
    .v-field__input {
      max-width: 270px;
    }
    .v-field__overlay {
      border-radius: 32px;
    }
    .v-btn {
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 32px;
      height: 56px;
    }
    @media(max-width: 600px) {
      .v-field__input {
        max-width: 150px;
      }
    }
  }
  ul {
    list-style: none;
    li {
      margin-bottom: .5rem;
      &:nth-child(1) {
        margin-bottom: 1.25rem;
        color: #A5A7AD;
      }
      a {
        font-size: 18px;
        color: #4D4E52;
        text-decoration: none;
      }
    }
    @media(max-width: 600px) {
      li {
        font-size: 15px;
        a {
          font-size: 15px;
        }
      }
    }
  }
  @media(max-width: 600px) {
    .footer-top-first, .footer-top-second, .footer-menu {
      .v-row {
        padding: 40px 0 !important;
      }
    }
    .footer-bottom {
      .v-row {
        padding: 28px 0 40px 0 !important;
        ul, p {
          justify-content: flex-start !important;
        }
      }
    }
    .store {
      flex-direction: row !important;
      justify-content: flex-start !important;
      li {
        margin-right: 1rem;
      }
    }
  }
}
</style>
