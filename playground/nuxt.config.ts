export default defineNuxtConfig({
  modules: ['../src/module'],
  nuxt3UIKit: {
    theme: 'green'
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  }
})
