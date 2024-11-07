import { defineNuxtPlugin } from '#app'

import vuetify from './plugins/vuetify/index'
import { vMaska } from "maska"

export default defineNuxtPlugin(nuxtApp => {
  console.log('Plugin injected by NUXT3-UI-KIT!');

  const vuetifyInstance = vuetify(nuxtApp);
  nuxtApp.vueApp.use(vuetifyInstance);
  nuxtApp.vueApp.directive("maska", vMaska);

  if (!process.server && process.env.NODE_ENV !== 'production') console.log('❤️ Initialized Vuetify 3', vuetifyInstance);
});
