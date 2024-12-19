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

    // ============= Pages =============

    if (options.components.includes("pagesTestVuetify")) {
      addComponent({
        name: "pagesTestVuetify",
        filePath: resolver.resolve("runtime/components/Pages/TestVuetify.vue"),
      });
    }

    // ======= Error =======
    if (options.components.includes("pagesErrorErg")) {
      addComponent({
        name: "pagesErrorErg",
        filePath: resolver.resolve(
          "runtime/components/Pages/Error/Erg.vue"
        ),
      });
    }

    // ============= Components =============

    // ======= Footers =======
    if (options.components.includes("partsFooterErg")) {
      addComponent({
        name: "partsFooterErg",
        filePath: resolver.resolve(
          "runtime/components/Parts/Footer/Erg.vue"
        ),
      });
    }

    // ======= Cards =======
    if (options.components.includes("partsCardDefault")) {
      addComponent({
        name: "partsCardDefault",
        filePath: resolver.resolve("runtime/components/Parts/Card/Default.vue"),
      });
    }

    if (options.components.includes("partsCardScale")) {
      addComponent({
        name: "partsCardScale",
        filePath: resolver.resolve("runtime/components/Parts/Card/Scale.vue"),
      });
    }

    if (options.components.includes("partsCardErgNews")) {
      addComponent({
        name: "partsCardErgNews",
        filePath: resolver.resolve("runtime/components/Parts/Card/ErgNews.vue"),
      });
    }

    // ======= Forms =======
    if (options.components.includes("partsFormsDefault")) {
      addComponent({
        name: "partsFormsDefault",
        filePath: resolver.resolve("runtime/components/Parts/Forms/Default.vue"),
      });
    }

    // ======= Vacancies =======
    if (options.components.includes("partsVacanciesErg")) {
      addComponent({
        name: "partsVacanciesErg",
        filePath: resolver.resolve("runtime/components/Parts/Vacancies/Erg.vue"),
      });
    }

    // ======= Headers =======
    if (options.components.includes("partsHeaderErg")) {
      addComponent({
        name: "partsHeaderErg",
        filePath: resolver.resolve("runtime/components/Parts/Header/Erg.vue"),
      });
    }

    // ======= Modals =======
    if (options.components.includes("partsModalDefault")) {
      addComponent({
        name: "partsModalDefault",
        filePath: resolver.resolve("runtime/components/Parts/Modal/Default.vue"),
      });
    }

    // ======= Sliders =======
    if (options.components.includes("partsSliderDefault")) {
      addComponent({
        name: "partsSliderDefault",
        filePath: resolver.resolve("runtime/components/Parts/Slider/Default.vue"),
      });
    }

    // ======= Files =======
    if (options.components.includes("partsFilesErg")) {
      addComponent({
        name: "partsFilesErg",
        filePath: resolver.resolve(
          "runtime/components/Parts/Files/Erg.vue"
        ),
      });
    }

    // ======= Pagination =======
    if (options.components.includes("partsPagination")) {
      addComponent({
        name: "partsPagination",
        filePath: resolver.resolve(
          "runtime/components/Parts/Default.vue"
        ),
      });
    }

    // ======= Galleries =======
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
  },
});
