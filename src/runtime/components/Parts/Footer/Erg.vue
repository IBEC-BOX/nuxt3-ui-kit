<template>
  <v-footer
    class="footer"
    :class="bgClass"
  >
    <v-container>
      <v-row
        v-if="contacts&&contacts.length"
        class="mb-4 mb-md-10"
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
            class="footer-contacts-sheet d-flex w-100 ga-lg-16"
            :class="contacts.length === 2 ? 'd-flex flex-column ' : 'flex-column flex-lg-row justify-space-between'"
          >
            <h2 class="text-dark-1 footer-contacts-sheet-title font-weight-medium mb-6 mb-lg-4">
              {{ contact?.title }}
            </h2>
            <v-row class="footer-contacts-list d-flex">
              <v-col
                cols="12"
                sm="6"
                :md="getContactColSize(contact)"
                v-if="contact.phone"
                class="d-flex align-start footer-contacts-list-item"
              >
                <div
                  class="d-flex"
                  :class="isMultiParagraph(contact.phone) ? 'align-start' : 'align-center'"
                >
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
              </v-col>
              <v-col
                cols="12"
                sm="6"
                :md="getContactColSize(contact)"
                v-if="contact.mail"
                class="d-flex align-start footer-contacts-list-item footer-contacts-list-item-mail"
              >
                <div
                  class="d-flex"
                  :class="isMultiParagraph(contact.mail) ? 'align-start' : 'align-center'"
                >
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
              </v-col>
              <v-col
                cols="12"
                sm="6"
                :md="getContactColSize(contact)"
                v-if="contact.location"
                class="d-flex align-start footer-contacts-list-item"
              >
                <div
                  class="d-flex"
                  :class="isMultiParagraph(contact.location) ? 'align-start' : 'align-center'"
                >
                  <div class="bg-img mr-4">
                    <v-img
                      :src="contact.imageLocation ? contact.imageLocation : '/location.png'"
                      width="20"
                    />
                  </div>
                  <div class="d-flex flex-column text-dark-1 font-weight-regular text-body-1 footer-contacts-list-item-text geo">
                    <p v-html="contact?.location" />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
      <div>
        <slot name="otherContent" />
      </div>
      <v-row class="align-center mt-0">
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
          class="d-flex ps-lg-0"
        >
          <div>
            <div
              v-for="cert in copyrightCert"
              :key="cert.title"
              class="footer-copyright footer-copyright-cert"
            >
              <v-dialog
                v-if="cert.type === 'image'"
                content-class="footer-copyright-cert-modal"
              >
                <template #activator="{ props: activatorProps }">
                  <div>
                    <p
                      v-bind="activatorProps"
                      class="text-decoration-underline cursor-pointer"
                      v-html="cert.title"
                    />
                  </div>
                </template>

                <template #default>
                  <v-img
                    :src="cert.cert"
                    cover
                    class="rounded-md-32"
                  />
                </template>
              </v-dialog>
              <a
                v-else-if="cert.type === 'link'"
                :href="cert.cert"
                class="footer-copyright-cert-link text-decoration-underline cursor-pointer footer-copyright"
                rel="noreferrer noopener"
                target="_blank"
              >
                {{ cert.title }}
              </a>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="2"
          class="d-flex justify-lg-end"
        >
          <div class="footer-copyright footer-copyright-made">
            <p v-html="copyrightMade" />
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="3"
          class="d-flex justify-lg-end"
        >
          <div class="footer-copyright">
            <p v-html="copyright" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const _props = defineProps({
  contacts: { type: Array, default: () => [] },
  socials: { type: Array, default: () => [] },
  bgClass: { type: String, default: () => 'bg-none' },
  copyright: { type: String, default: () => "" },
  copyrightMade: { type: String, default: () => '' },
  copyrightCert: { type: Array, default: () => ([]) }
})

const isMultiParagraph = (html) => {
  if (!html || import.meta.env.SSR) return false;
  if (html.length >= 57) return true;
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const paragraphs = doc.querySelectorAll('p, a, br');
  return paragraphs.length > 2;
};

const getContactColSize = (contact) => {
  let count = 0;
  if (contact.phone) count++;
  if (contact.mail) count++;
  if (contact.location) count++;

  if (count === 1) return 12;
  if (count === 2) return 6;
  return 4;
};
</script>

<style scoped lang="scss">
.footer {
  &-contacts {
    &-sheet {
      &-title {
        max-width: 300px;
        width: 100%;
        font-size: 28px;
        line-height: normal;
        font-family: "Roboto", sans-serif;
        @media (max-width: 1280px) {
          font-size: 32px;
        }
        @media (max-width: 960px) {
          font-size: 24px;
        }
        @media (max-width: 600px) {
          font-size: 24px;
        }
      }
    }
    &-list {
      &-item {
        p {
          letter-spacing: 0 !important;
        }
        .bg-img {
          background: #fff;
          padding: 10px;
          border-radius: 11px;
        }
        &-text {
          &.geo {
            min-width: 240px;
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
