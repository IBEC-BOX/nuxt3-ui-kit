import {
  addComponent,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  theme: {
    defaultTheme: string,
    themes?: {
      [key: string]: {
        dark: boolean,
        colors: Record<string, string>
      }
    }
  };
  components: string[];
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt3-ui-kit",
    configKey: "nuxt3UIKit",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    theme: {
      defaultTheme: 'light',
      themes: {}
    },
    components: []
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    const runtimeDir = resolver.resolve("./runtime");

    nuxt.options.runtimeConfig.public.nuxt3UIKitTheme = options.theme;

    const isDevelopment =
      runtimeDir.endsWith("src/runtime") || runtimeDir.endsWith("src\\runtime");

    const extension = isDevelopment ? "scss" : "css";

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));

    nuxt.options.css.push(
      resolver.resolve(`./runtime/plugins/vuetify/styles.${extension}`)
    );

    // Components

    if (options.components.includes("pagesTestVuetify")) {
      addComponent({
        name: "pagesTestVuetify", // name of the component to be used in vue templates
        filePath: resolver.resolve("runtime/components/Pages/TestVuetify.vue"),
      });
    }

    if (options.components.includes("partsFooterDefault")) {
      addComponent({
        name: "partsFooterDefault", // name of the component to be used in vue templates
        filePath: resolver.resolve(
          "runtime/components/Parts/Footer/Default.vue"
        ),
      });
    }

    if (options.components.includes("partsCard")) {
      addComponent({
        name: "partsCard", // name of the component to be used in vue templates
        filePath: resolver.resolve("runtime/components/Parts/Card.vue"),
      });
    }

    if (options.components.includes("partsForms")) {
      addComponent({
        name: "partsForms", // name of the component to be used in vue templates
        filePath: resolver.resolve("runtime/components/Parts/Forms.vue"),
      });
    }

    if (options.components.includes("partsErgVacancies")) {
      addComponent({
        name: "partsErgVacancies", // name of the component to be used in vue templates
        filePath: resolver.resolve("runtime/components/Parts/ErgVacancies.vue"),
      });
    }

    // Header
    if (options.components.includes("partsHeaderDefault")) {
      addComponent({
        name: "partsHeaderDefault",
        filePath: resolver.resolve(
          "runtime/components/Parts/Header/Default.vue"
        ),
      });
    }

    if (options.components.includes("partsHeaderErg")) {
      addComponent({
        name: "partsHeaderErg",
        filePath: resolver.resolve("runtime/components/Parts/Header/Erg.vue"),
      });
    }

    // Modal
    if (options.components.includes("partsModal")) {
      addComponent({
        name: "partsModal",
        filePath: resolver.resolve("runtime/components/Parts/Modal.vue"),
      });
    }

    //Slider
    if (options.components.includes("partsSlider")) {
      addComponent({
        name: "partsSlider",
        filePath: resolver.resolve("runtime/components/Parts/Slider.vue"),
      });
    }

    if (options.components.includes("partsNews")) {
      addComponent({
        name: "partsNews",
        filePath: resolver.resolve("runtime/components/Parts/News.vue"),
      });
    }

    if (options.components.includes("partsFilesDownloadFiles")) {
      addComponent({
        name: "partsFilesDownloadFiles",
        filePath: resolver.resolve(
          "runtime/components/Parts/Files/DownloadFiles.vue"
        ),
      });
    }
  },
});
