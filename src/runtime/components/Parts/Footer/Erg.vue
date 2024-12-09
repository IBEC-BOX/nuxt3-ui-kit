<template>
  <v-footer
    class="footer"
    :class="bgClass"
  >
    <v-container>
      <v-row
        v-if="contacts&&contacts.length"
        class="mb-10"
      >
        <v-col
          v-for="(contact) in contacts"
          :key="contact.title"
          cols="12"
          :md="contacts.length === 2 ? 6 : 12"
          class="d-flex footer-contacts"
          :class="contacts.length === 2 ? 'not-limit-width' : ''"
        >
          <v-sheet
            color="none"
            class="footer-contacts-sheet d-flex w-100"
            :class="contacts.length === 2 ? 'd-flex flex-column ' : 'justify-space-between'"
          >
            <h2 class="text-dark-1 text-h6 text-sm-h5 font-weight-medium mb-4">
              {{ contact?.title }}
            </h2>
            <ul class="footer-contacts-list d-flex" :class="contacts.length === 2 ? 'flex-column' : ''">
              <li
                v-if="contact.phone"
                class="d-flex align-start footer-contacts-list-item"
                :class="contacts.length === 2 ? 'mb-4' : ''"
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
                :class="contacts.length === 2 ? 'mb-4' : ''"
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
                :class="contacts.length === 2 ? 'mb-4' : ''"
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
        <v-col
          cols="12"
          lg="2"
        >
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
        <v-col
          cols="12"
          lg="5"
          class="d-flex ps-0"
        >
          <div class="footer-copyright footer-copyright-cert">
            <v-dialog max-width="500">
              <template #activator="{ props: activatorProps }">
                <div>
                  <p
                    v-bind="activatorProps"
                    class="text-decoration-underline"
                    v-html="copyrightCert.title"
                  />
                </div>
              </template>

              <template #default="{ isActive }">
                <v-img
                  :src="copyrightCert.cert"
                  cover
                  class="rounded-md-32"
                />
              </template>
            </v-dialog>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="2"
          class="d-flex justify-end"
        >
          <div class="footer-copyright footer-copyright-made">
            <p v-html="copyrightMade" />
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="3"
          class="d-flex justify-end"
        >
          <div class="footer-copyright">
            <p v-html="copyright" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
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
  &-contacts.not-limit-width {
    .footer-contacts-list {
      column-gap: 0;
      &-item {
        p {
          max-width: 412px !important;
          letter-spacing: 0 !important;
        }
        &:nth-child(1) {
          p {
            min-width: 0;
          }
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
