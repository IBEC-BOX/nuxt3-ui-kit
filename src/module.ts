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

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Components
    addComponent({
      name: 'pagesTestVuetify', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/Pages/testVuetify.vue')
    })

    addComponent({
      name: 'partsFooter', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/Parts/footer/footer.vue')
    })

    addComponent({
      name: 'partsCard', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/Parts/Card.vue')
    })

    // Header
    addComponent( {
      name: 'partsHeader',
      filePath: resolver.resolve('runtime/components/Parts/header.vue')
    })

    // Modal
    addComponent( {
      name: 'partsModal',
      filePath: resolver.resolve('runtime/components/Parts/modal.vue')
    })

    //Slider
    addComponent({
      name: 'Slider',
      filePath: resolver.resolve('runtime/components/Parts/slider.vue')
    })

    addComponent({
      name: 'News',
      filePath: resolver.resolve('runtime/components/Parts/News.vue')
    })

    addComponent({
      name: 'downloadFiles',
      filePath: resolver.resolve('runtime/components/Parts/files/downloadFiles.vue')
    })
  }
})
