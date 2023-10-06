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

    nuxt.options.css.push(resolver.resolve('./runtime/style/vuetify.scss'))

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

    // Headers
    addComponent({
      name: 'HeaderOne',
      filePath: resolver.resolve('runtime/components/Parts/HeaderOne.vue')
    })

    addComponent({
      name: 'HeaderTwo',
      filePath: resolver.resolve('runtime/components/Parts/HeaderTwo.vue')
    })

    addComponent({
      name: 'HeaderThree',
      filePath: resolver.resolve('runtime/components/Parts/HeaderThree.vue')
    })

    addComponent({
      name: 'HeaderFour',
      filePath: resolver.resolve('runtime/components/Parts/HeaderFour.vue')
    })
  }
})
