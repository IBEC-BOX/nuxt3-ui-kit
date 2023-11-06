export default defineNuxtConfig({
  modules: ['../src/module', '@pinia/nuxt'],
  nuxt3UIKit: {
    theme: 'green'
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  }
})
