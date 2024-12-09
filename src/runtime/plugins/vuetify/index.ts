import type {ThemeDefinition} from "vuetify";
import {createVuetify} from 'vuetify';
import 'vuetify/styles'; // pre-build css styles

/* Add all components and directives, for dev & prototyping only. */
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/* Add build-in icon used internally in various components */
/* Described in https://next.vuetifyjs.com/en/features/icon-fonts/ */
import {aliases as allAliases, mdi} from 'vuetify/iconsets/mdi';
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#d35400",
    'primary-gray': '#74767A',
    secondary: "#8e44ad",
    background: "#ecf0f1",
    error: "#c0392b",
    'red': "#FB2424",
    info: "#2980b9",
    success: "#27ae60",
    'green': "#44AE76",
    warning: "#f1c40f",
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    'black': '#fff',
    primary: "#d35400",
    'primary-gray': '#74767A',
    secondary: "#8e44ad",
    background: "#2f3640",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

const vuetify = (nuxtApp: any) => {
  const themes = nuxtApp?.$config?.public?.nuxt3UIKitTheme || {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    }
  };

  return createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases: allAliases,
      sets: {mdi},
    },
    theme: themes
  });
};


//
// const vuetify = createVuetify({
//   components,
//   directives,
//   icons: {
//     defaultSet: 'mdi',
//     aliases,
//     sets: { mdi }
//   },
//   theme: {
//     defaultTheme: "light",
//     themes: {
//       light: lightTheme,
//       dark: darkTheme,
//       yellow: {
//         primary: 'asd'
//       }
//     },
//   }
// });


export default vuetify


