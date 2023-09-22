import { createVuetify } from 'vuetify';
import type { ThemeDefinition } from "vuetify";
import 'vuetify/styles'; // pre-build css styles

/* Add all components and directives, for dev & prototyping only. */
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/* Add build-in icon used internally in various components */
/* Described in https://next.vuetifyjs.com/en/features/icon-fonts/ */
import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg';
const aliases = allAliases;

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#d35400",
    secondary: "#8e44ad",
    background: "#ecf0f1",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#d35400",
    secondary: "#8e44ad",
    background: "#2f3640",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  }
});

export default vuetify

