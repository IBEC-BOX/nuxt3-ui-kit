import { defineNuxtPlugin } from '#app'

import vuetify from './plugins/vuetify/index'
import { vMaska } from "maska"

export default defineNuxtPlugin(nuxtApp => {
  const vuetifyInstance = vuetify(nuxtApp);
  nuxtApp.vueApp.use(vuetifyInstance);
  nuxtApp.vueApp.directive("maska", vMaska);
});
