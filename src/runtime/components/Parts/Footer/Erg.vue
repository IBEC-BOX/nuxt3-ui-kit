<template>
  <v-footer
    class="footer"
    :class="bgClass"
  >
    <v-container>
      <v-row v-if="contacts&&contacts.length" class="mb-10">
        <v-col
          v-for="(contact, index) in contacts"
          :key="contact.title"
          cols="12"
          class="d-flex footer-contacts"
        >
          <v-sheet
            color="none"
            class="footer-contacts-sheet d-flex justify-space-between w-100"
          >
            <h2 class="text-dark-1 text-h6 text-sm-h5 font-weight-medium mb-4">
              {{ contact?.title }}
            </h2>
            <ul class="footer-contacts-list d-flex">
              <li
                v-if="contact.phone"
                class="d-flex align-start footer-contacts-list-item"
              >
                <div class="d-flex align-center">
                  <div class="bg-img mr-4">
                    <v-img
                      :src="contact.imagePhone ? contact.imagePhone : '/phone.svg'"
                      width="20"
                    />
                  </div>
                  <div class="d-flex flex-column text-dark-1 font-weight-regular text-body-1">
                    <p v-html="contact?.phone" />
                  </div>
                </div>
              </li>
              <li
                v-if="contact.mail"
                class="d-flex align-start footer-contacts-list-item"
              >
                <div class="d-flex align-center">
                  <div class="bg-img mr-4">
                    <v-img
                      :src="contact.imageMail ? contact.imageMail : '/mail.svg'"
                      width="20"
                    />
                  </div>
                  <div class="d-flex flex-column text-dark-1 font-weight-regular text-body-1">
                    <p v-html="contact?.mail" />
                  </div>
                </div>
              </li>
              <li
                v-if="contact.location"
                class="d-flex align-start footer-contacts-list-item"
              >
                <div class="d-flex align-start">
                  <div class="bg-img mr-4">
                    <v-img
                      :src="contact.imageLocation ? contact.imageLocation : '/location.png'"
                      width="20"
                    />
                  </div>
                  <div class="d-flex flex-column text-dark-1 font-weight-regular text-body-1">
                    <p v-html="contact?.location" />
                  </div>
                </div>
              </li>
            </ul>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col cols="12" lg="2">
          <ul
            class="d-flex flex-wrap"
            style="column-gap: 10px"
          >
            <li
              v-for="item in socials"
              :key="item.id"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="item.link"
              >
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
        <v-col cols="12" lg="5" class="d-flex ps-0">
          <div class="footer-copyright footer-copyright-cert">
            <v-dialog max-width="500">
              <template v-slot:activator="{ props: activatorProps }">
                <div>
                  <p v-bind="activatorProps" v-html="copyrightCert.title" class="text-decoration-underline"></p>
                </div>
              </template>

              <template v-slot:default="{ isActive }">
                <v-img :src="copyrightCert.cert" cover class="rounded-md-32" />
              </template>
            </v-dialog>
          </div>
        </v-col>
        <v-col cols="12" lg="2" class="d-flex justify-end">
          <div class="footer-copyright footer-copyright-made">
            <p v-html="copyrightMade"></p>
          </div>
        </v-col>
        <v-col cols="12" lg="3" class="d-flex justify-end">
          <div class="footer-copyright">
            <p v-html="copyright"></p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { useMainStore } from "../../../store/mainStore";
import { useAttrs } from "vue";
const mainStore = useMainStore();

const attrs = useAttrs();
const navAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "nav"),
};

const props = defineProps({
  contacts: { type: Array, default: () => [] },
  socials: { type: Array, default: () => [] },

  bgClass: { type: String, default: () => 'bg-none' },

  copyright: { type: String, default: () => "2024 TOO “BTS”. Все права защищены." },
  copyrightMade: { type: String, default: () => '<span>Сделано в </span><a class="text-decoration-underline">IBEC SYSTEMS</a>' },
  copyrightCert: { type: Object, default: () => ( { title: 'Сертификат соответствия системы менеджмента требованиям стандартов ISO', cert: '' } ) }
})
</script>

<style scoped lang="scss">
.footer {
  &-contacts {
    &-sheet {

    }
    &-list {
      column-gap: 52.5px;
      &-item {
        p {
          max-width: 240px;
          letter-spacing: 0 !important;
        }
        &:nth-child(1) {
          p {
            min-width: 233px;
          }
        }
        .bg-img {
          background: #fff;
          padding: 10px;
          border-radius: 11px;
        }
      }
    }
  }
  &-copyright {
    color: #A5A7AD;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
  }
}
</style>
