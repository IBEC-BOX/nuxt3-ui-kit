<template>
  <v-footer
    class="footer"
    :class="bgClass"
  >
    <v-container class="px-0">
      <div
        v-if="Object.keys(firstStyleTop).length"
        class="footer-top-first"
      >
        <v-row class="px-0 py-10 py-sm-11">
          <v-col
            cols="12"
            align="center"
            justify="center"
            class="mb-4 mb-sm-6"
          >
            <v-img
              aspect-ratio="1/1"
              cover
              :width="60"
              :src="logo.img"
            />
          </v-col>
          <v-col
            cols="12"
            align="center"
            justify="center"
            class="mb-4 mb-sm-6 px-0"
          >
            <p class="d-block mb-2 mb-sm-4 text-h6 text-sm-h4 text-primary">
              {{ firstStyleTop.text_top.title }}
            </p>
            <p class="d-block text-body-1 text-sm-h6 text-primary-gray font-weight-regular">
              {{ firstStyleTop.text_top.subtitle }}
            </p>
          </v-col>
          <v-col
            cols="12"
            class="d-flex justify-center align-center px-0 flex-wrap"
          >
            <v-btn
              v-for="(button, index) in firstStyleTop.button_top"
              :key="button.id"
              class="mr-sm-2 mr-3 border text-body-1 mb-4"
              elevation="0"
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
      <div
        v-if="Object.keys(secondStyleTop).length"
        class="footer-top-second"
      >
        <v-row class="px-0 pt-10 pt-sm-11">
          <v-col
            cols="12"
            md="7"
          >
            <p class="mb-2 text-h6 text-primary font-weight-regular">
              {{ secondStyleTop.title }}
            </p>
            <p class="text-subtitle-1 text-primary-gray">
              {{ secondStyleTop.subtitle }}
            </p>
          </v-col>
          <v-col
            cols="12"
            md="5"
            class="px-0"
          >
            <div class="footer-top-input">
              <slot name="input" />
            </div>
          </v-col>
        </v-row>
      </div>
      <div
        v-if="menu.length || logoInBody === true || store.length"
        class="footer-menu"
      >
        <v-row :class="Object.keys(firstStyleTop).length ? 'pb-10 py-sm-15' : ''">
          <v-col
            v-if="logoInBody === true"
            cols="12"
            :md="menu.length ? '3' : '10'"
          >
            <v-img
              v-if="logo.img"
              :src="logo.img"
              :width="60"
              :heigth="60"
              :class="logo.title || logo.subtitle ? 'mb-7' : 'mb-10'"
              v-bind="logo.attrs"
            />
            <p
              v-if="logo.title"
              v-bind="logo.titleAttrs"
            >
              {{ logo.title }}
            </p>
            <p
              v-if="logo.subtitle"
              v-bind="logo.subtitleAttrs"
              style="max-width: 265px"
            >
              {{ logo.subtitle }}
            </p>
            <ul
              v-if="nav.length && navInBottom === false"
              class="d-flex flex-wrap"
              style="column-gap: 24px"
            >
              <li
                v-for="item in nav"
                :key="item.id"
                v-bind="navAttrs"
              >
                <nuxt-link
                  :to="item.link"
                >
                  {{ item.text }}
                </nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col
            v-for="(menuItem, index) in menu"
            :key="menuItem.id"
            cols="6"
            :sm="logoInBody === true ? '4' : '3'"
            :md="logoInBody === true ? (index === menu.length - 1 ? '1' : '2') : '2'"
          >
            <p class="text-primary-gray mb-4 mb-sm-5 text-body-2">
              {{ menuItem.title }}
            </p>
            <ul>
              <li
                v-for="item in menuItem.links"
                :key="item.id"
                class="mb-2 text-body-1"
              >
                <nuxt-link
                  class="text-primary"
                  :to="item.link"
                >
                  {{ item.text }}
                </nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col
            v-if="store.length"
            :cols="menu.length ? '6' : '12'"
            :sm="menu.length ? '2' : '8' "
            :md="menu.length ? '2' : '2'"
            :class="{'d-sm-none': storeOnlyMob}"
          >
            <p
              v-if="store[0].title"
              class="text-primary mb-5"
            >
              {{ store[0].title }}
            </p>
            <ul
              class="d-flex justify-start flex-row justify-lg-end flex-lg-column flex-wrap"
              :class="{'flex-column': menu.length}"
            >
              <li
                v-for="item in store"
                :key="item.id"
                class="mr-4"
              >
                <a
                  v-if="item.img"
                  :href="item.link"
                  v-bind="item.linkAttrs"
                >
                  <v-img
                    v-if="item.img"
                    class="mb-4"
                    :width="140"
                    aspect-ratio="16/9"
                    :src="item.img"
                    v-bind="item.imgAttrs"
                  />
                </a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
      <hr
        v-if="showBorder === true"
        class="text-primary-gray"
      >
      <div class="footer-bottom">
        <v-row
          class="d-flex align-center"
          :class="Object.keys(firstStyleTop).length ? 'pt-7 pb-sm-15' : 'py-3'"
        >
          <v-col
            v-if="logoInBottom === true"
            cols="12"
            sm="6"
          >
            <v-img
              aspect-ratio="4/3"
              cover
              :width="60"
              :src="logo.img"
              v-bind="logo.attrs"
            />
            <p v-bind="logo.attrs">
              {{ logo.title }}
            </p>
          </v-col>
          <v-col
            v-if="copyright"
            cols="12"
            sm="6"
          >
            <p
              :class="logoInBottom === true ? 'justify-end' : 'justify-start'"
              class="d-flex"
              v-bind="copyright.attrs"
            >
              {{ copyright.text }}
            </p>
          </v-col>
          <v-col
            v-if="navInBottom === true"
            cols="12"
            sm="6"
          >
            <ul
              class="d-flex flex-wrap justify-end"
              style="column-gap: 20px"
            >
              <li
                v-for="item in nav"
                :key="item.id"
                v-bind="navAttrs"
              >
                <nuxt-link
                  :to="item.link"
                >
                  {{ item.text }}
                </nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col
            v-if="social.length"
            cols="12"
            sm="6"
          >
            <ul
              class="d-flex flex-wrap justify-end"
              style="column-gap: 10px"
            >
              <li
                v-for="item in social"
                :key="item.id"
              >
                <a :href="item.link">
                  <v-img
                    aspect-ratio="1/1"
                    class="cursor-pointer mb-4 mb-sm-0"
                    :width="32"
                    :src="item.img"
                  />
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
import { useMainStore } from "../../../store/mainStore.js";
import {useAttrs} from "vue";
const mainStore = useMainStore();

const attrs = useAttrs();
const navAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "nav"),
};

const props = defineProps({
  logo: { type: Object, default: () => ({}) },
  firstStyleTop: { type: Object, default: () => ({}) },
  secondStyleTop: { type: Object, default: () => ({}) },

  menu: { type: Array, default: () => [] },
  store: { type: Array, default: () => [] },
  nav: { type: Array, default: () => [] },
  bgClass: { type: String, default: () => 'bg-none' },
  social: { type: Array, default: () => [] },

  showBorder: { type: Boolean, default: false },
  logoInBody: { type: Boolean, default: false },
  logoInBottom: { type: Boolean, default: false },
  navInBottom: { type: Boolean, default: false },
  storeOnlyMob: { type: Boolean, default: false },

  copyright: { type: Object, default: () => ({
    text: '2023 Untitled UI. All rights reserverd',
    attrs: {

    }
  })},
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
