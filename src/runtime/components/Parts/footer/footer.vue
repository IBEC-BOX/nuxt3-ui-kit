<template>
  <v-footer class="footer">
    <v-container>
      <div class="footer-top-first" v-if="Object.keys(firstStyleTop).length">
        <v-row class="px-0 py-10 py-sm-11">
          <v-col cols="12" align="center" justify="center" class="mb-4 mb-sm-6">
            <v-img
              aspect-ratio="1/1"
              cover
              :width="60"
              :src="firstStyleTop.logo.img"
              :alt="firstStyleTop.logo.alt"
            />
          </v-col>
          <v-col cols="12" align="center" justify="center" class="mb-4 mb-sm-6 px-0">
            <p class="d-block mb-2 mb-sm-4 text-h6 text-sm-h4 text-primary">
              {{ firstStyleTop.text_top.title }}
            </p>
            <p class="d-block text-body-1 text-sm-h6 text-primary-gray font-weight-regular">
              {{ firstStyleTop.text_top.subtitle }}
            </p>
          </v-col>
          <v-col cols="12" class="d-flex justify-center align-center">
            <v-btn
              class="mr-sm-2 mr-3 border text-body-1"
              elevation="0"
              v-for="(button, index) in firstStyleTop.button_top"
              :key="button.id"
              :color="index === 1 ? 'primary' : button.backgroundColor"
              :prepend-icon="button.leftIcon"
              :append-icon="button.rightIcon"
              :size="button.size ? button.size : 'large'"
              :rounded="button.rounded ? button.rounded : 'lg'"
            >
              {{ button.text }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="footer-top-second" v-if="Object.keys(secondStyleTop).length">
        <v-row class="px-0 pt-10 pt-sm-11">
          <v-col cols="12" md="7">
            <p class="mb-2 text-h6 text-primary font-weight-regular">{{ secondStyleTop.title }}</p>
            <p class="text-subtitle-1 text-primary-gray">{{ secondStyleTop.subtitle }}</p>
          </v-col>
          <v-col cols="12" md="5" class="px-0">
            <div class="footer-top-input">
              <slot name="input"></slot>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="footer-menu" v-if="Object.keys(middleMenu).length">
        <v-row class="pb-10 py-sm-15">
          <v-col
            cols="12"
            :md="middleMenu.menu ? '3' : '10'"
            v-if="middleMenu.logo"
          >
            <v-img
              v-if="middleMenu.logo.img && middleMenu.logo.alt"
              :src="middleMenu.logo.img"
              :alt="middleMenu.logo.alt"
              :width="60"
              :heigth="60"
            />
            <p class="font-weight-medium mb-3 mb-sm-7 text-primary text-subtitle-1" v-if="middleMenu.logo.title">
              {{ middleMenu.logo.title }}
            </p>
            <p class="mb-5 mb-sm-7 text-primary-gray text-body-2" style="max-width: 265px" v-if="middleMenu.logo.subtitle">
              {{ middleMenu.logo.subtitle }}
            </p>
            <ul class="d-flex flex-wrap" style="column-gap: 24px" v-if="middleMenu.nav">
              <li class="mb-4 mb-sm-2" v-for="item in middleMenu.nav" :key="item.id">
                <nuxt-link class="text-primary text-body-1" :to="item.link">
                  {{ item.text }}
                </nuxt-link>
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
              <p class="text-primary-gray mb-4 mb-sm-5 text-body-2">{{ menu.title }}</p>
              <li class="mb-2 text-body-1" v-for="item in menu.links" :key="item.id">
                <nuxt-link class="text-primary" :to="item.link">{{ item.text }}</nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col
            :cols="middleMenu.menu ? '6' : '12'"
            sm="2"
            v-if="middleMenu.store"
          >
            <p v-if="middleMenu.store[0].title" class="text-primary mb-5">{{ middleMenu.store[0].title }}</p>
            <ul class="d-flex justify-start flex-row justify-lg-end flex-lg-column">
              <li
                v-for="item in middleMenu.store"
                :key="item.id"
                class="mr-4"
              >
                <nuxt-link :to="item.link" v-if="item.img && item.alt">
                  <v-img
                    class="mb-4"
                    :width="140"
                    aspect-ratio="16/9"
                    v-if="item.img && item.alt"
                    :src="item.img"
                    :alt="item.alt"
                  />
                </nuxt-link>
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
      <hr v-if="showBorder === true" style="color: #E6E7EB" />
      <div class="footer-bottom" v-if="Object.keys(footerBottom).length">
        <v-row class="pt-7 pb-sm-15">
          <v-col cols="12" sm="6" v-if="footerBottom.logo">
            <v-img
              aspect-ratio="4/3"
              cover
              :width="32"
              :src="footerBottom.logo.img"
              :alt="footerBottom.logo.alt"
            />
            <p class="font-weight-medium" style="color: #4D4E52; font-size: 24px">{{ footerBottom.logo.title }}</p>
          </v-col>
          <v-col cols="12" sm="6" v-if="footerBottom.copyright">
            <p
              :class="{ 'justify-end': footerBottom.logo, 'justify-start': !footerBottom.logo }"
              class="d-flex text-primary-gray"
            >{{ footerBottom.copyright.title }}</p>
          </v-col>
          <v-col cols="12" sm="6" v-if="footerBottom.nav">
            <ul class="d-flex flex-wrap justify-end" style="column-gap: 20px">
              <li v-for="item in footerBottom.nav" :key="item.id">
                <nuxt-link class="text-primary-gray" :to="item.link">{{ item.text }}</nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" v-if="footerBottom.social">
            <ul class="d-flex flex-wrap justify-end" style="column-gap: 20px">
              <li v-for="item in footerBottom.social" :key="item.id">
                <a :href="item.link">
                  <v-img class="cursor-pointer" :width="32" :src="item.img" :alt="item.alt" />
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
  }
  a {
    text-decoration: none;
  }
  @media(max-width: 600px) {
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
