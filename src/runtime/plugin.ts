import { defineNuxtPlugin } from '#app'

import vuetify from './plugins/vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by NUXT3-UI-KIT!')
  nuxtApp.vueApp.use(vuetify);

  if (!process.server) console.log('❤️ Initialized Vuetify 3', vuetify);
})
