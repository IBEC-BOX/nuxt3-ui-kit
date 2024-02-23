export default defineNuxtConfig({
  modules: ['../src/module', '@pinia/nuxt'],
  nuxt3UIKit: {
    theme: 'dark',
    components: [
      'pagesTestVuetify',
      'partsFooterDefault',
      'partsCard',
      'partsForms',
      'partsErgVacancies',
      'partsHeaderDefault',
      'partsHeaderErg',
      'partsSlider',
      'partsNews'
    ]
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  }
})
