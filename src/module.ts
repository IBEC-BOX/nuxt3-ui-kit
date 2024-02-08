import {addComponent, addPlugin, createResolver, defineNuxtModule} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-ui-kit',
    configKey: 'nuxt3UIKit'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    theme: 'light'
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve('./runtime')

    const isDevelopment = runtimeDir.endsWith('src/runtime') || runtimeDir.endsWith('src\\runtime')

    const extension = isDevelopment ? 'scss' : 'css'

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    nuxt.options.css.push(resolver.resolve(`./runtime/plugins/vuetify/styles.${extension}`))

    // Components
    addComponent({
      name: 'pagesTestVuetify', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/Pages/TestVuetify.vue')
    })

    addComponent({
      name: 'partsFooterDefault', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/Parts/Footer/Default.vue')
    })

    addComponent({
      name: 'partsCard', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/Parts/Card.vue')
    })

    addComponent({
      name: 'partsForms', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/Parts/Forms.vue')
    })

    addComponent({
      name: 'partsErgVacancies', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/Parts/ErgVacancies.vue')
    })

    // Header
    addComponent( {
      name: 'partsHeaderDefault',
      filePath: resolver.resolve('runtime/components/Parts/Header/Default.vue')
    })

    addComponent( {
      name: 'partsHeaderErg',
      filePath: resolver.resolve('runtime/components/Parts/Header/Erg.vue')
    })

    // Modal
    addComponent( {
      name: 'partsModal',
      filePath: resolver.resolve('runtime/components/Parts/Modal.vue')
    })

    //Slider
    addComponent({
      name: 'partsSlider',
      filePath: resolver.resolve('runtime/components/Parts/Slider.vue')
    })

    addComponent({
      name: 'partsNews',
      filePath: resolver.resolve('runtime/components/Parts/News.vue')
    })

    addComponent({
      name: 'partsFilesDownloadFiles',
      filePath: resolver.resolve('runtime/components/Parts/Files/DownloadFiles.vue')
    })
  }
})
