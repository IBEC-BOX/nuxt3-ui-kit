import { defineNuxtPlugin } from '#app'

import vuetify from './plugins/vuetify/index'
import { vMaska } from "maska"

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by NUXT3-UI-KIT!')
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.directive("maska", vMaska)

  if (!process.server) console.log('❤️ Initialized Vuetify 3', vuetify);
})
