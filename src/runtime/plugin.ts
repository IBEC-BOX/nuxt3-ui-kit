import { defineNuxtPlugin } from '#app'

import vuetify from './plugins/vuetify/index'
import { Mask } from "maska"

export default defineNuxtPlugin(nuxtApp => {
  const vuetifyInstance = vuetify(nuxtApp);
  nuxtApp.vueApp.use(vuetifyInstance);
  // @ts-ignore
  nuxtApp.vueApp.directive("maska", Mask);
});
