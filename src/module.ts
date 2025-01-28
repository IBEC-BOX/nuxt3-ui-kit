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
    // const runtimeDir = resolver.resolve("./runtime");

    // @ts-ignore
    nuxt.options.runtimeConfig.public.nuxt3UIKitTheme = options.theme;

    // const isDevelopment =
    //   runtimeDir.endsWith("src/runtime") || runtimeDir.endsWith("src\\runtime");
    //
    // const extension = isDevelopment ? "scss" : "css";

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));

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

    if (options.components.includes("partsFooterErg")) {
      addComponent({
        name: "partsFooterErg", // name of the component to be used in vue templates
        filePath: resolver.resolve(
          "runtime/components/Parts/Footer/Erg.vue"
        ),
      });
    }

    // cards

    if (options.components.includes("partsCardDefault")) {
      addComponent({
        name: "partsCardDefault", // name of the component to be used in vue templates
        filePath: resolver.resolve("runtime/components/Parts/Card/Default.vue"),
      });
    }

    if (options.components.includes("partsCardScale")) {
      addComponent({
        name: "partsCardScale", // name of the component to be used in vue templates
        filePath: resolver.resolve("runtime/components/Parts/Card/Scale.vue"),
      });
    }

    if (options.components.includes("partsCardErgNews")) {
      addComponent({
        name: "partsCardErgNews", // name of the component to be used in vue templates
        filePath: resolver.resolve("runtime/components/Parts/Card/ErgNews.vue"),
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

    // files

    if (options.components.includes("partsFilesDownloadFiles")) {
      addComponent({
        name: "partsFilesDownloadFiles",
        filePath: resolver.resolve(
          "runtime/components/Parts/Files/DownloadFiles.vue"
        ),
      });
    }

    if (options.components.includes("partsFilesErg")) {
      addComponent({
        name: "partsFilesErg",
        filePath: resolver.resolve(
          "runtime/components/Parts/Files/Erg.vue"
        ),
      });
    }

    // pagination

    if (options.components.includes("partsPagination")) {
      addComponent({
        name: "partsPagination",
        filePath: resolver.resolve(
          "runtime/components/Parts/Pagination.vue"
        ),
      });
    }

    // error page

    if (options.components.includes("pagesErrorErg")) {
      addComponent({
        name: "pagesErrorErg",
        filePath: resolver.resolve(
          "runtime/components/Pages/Error/Erg.vue"
        ),
      });
    }

    // Gallery

    if (options.components.includes("partsGalleryRow")) {
      addComponent({
        name: "partsGalleryRow",
        filePath: resolver.resolve(
          "runtime/components/Parts/Gallery/Row.vue"
        ),
      });
    }

    if (options.components.includes("partsGalleryView")) {
      addComponent({
        name: "partsGalleryView",
        filePath: resolver.resolve(
          "runtime/components/Parts/Gallery/View.vue"
        ),
      });
    }

    // cookie
    if (options.components.includes("partsCookieErg")) {
      addComponent({
        name: "partsCookieErg",
        filePath: resolver.resolve(
          "runtime/components/Parts/Cookie/Erg.vue"
        ),
      });
    }

    // player
    if (options.components.includes("partsPlayerYoutube")) {
      addComponent({
        name: "partsPlayerYoutube",
        filePath: resolver.resolve(
          "runtime/components/Parts/Player/Youtube.vue"
        ),
      });
    }
  },
});
