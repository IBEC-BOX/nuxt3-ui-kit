export default defineNuxtConfig({
  modules: ['../src/module', '@pinia/nuxt'],
  nuxt3UIKit: {
    theme: {
      defaultTheme: 'light',
      themes: {
        dark: {
          dark: true,
          colors: {
            'black': '#fff',
            primary: "#545151",
            'primary-gray': '#74767A',
            secondary: "#8e44ad",
            background: "#2f3640",
            error: "#c0392b",
            info: "#2980b9",
            success: "#27ae60",
            warning: "#f1c40f",
          }
        },
        light: {
          dark: false,
          colors: {
            primary: "#545151",
            'primary-gray': '#74767A',
            secondary: "#8e44ad",
            background: "#ecf0f1",
            error: "#c0392b",
            'red': "#FB2424",
            info: "#2980b9",
            success: "#27ae60",
            'green': "#44AE76",
            warning: "#f1c40f",
          }
        },
      },
    },
    components: [
      'pagesTestVuetify',
      'partsFooterDefault',
      'partsForms',
      'partsErgVacancies',
      'partsHeaderDefault',
      'partsHeaderErg',
      'partsSlider',
      'partsNews',
      'partsModal',
      'partsCardDefault',
      'partsCardScale',
      'partsCardErgNews',
      'partsFilesErg',
      'partsPagination'
    ]
  },
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify'],
  }
})
