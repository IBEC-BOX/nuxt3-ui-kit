import { setup } from "@storybook/vue3";
import { withVuetifyTheme, DEFAULT_THEME } from "./withVuetifyTheme.decorator";
import { createPinia } from 'pinia';

const pinia = createPinia();

import vuetify from '../src/runtime/plugins/vuetify'

setup((app) => {
  // Registers your app's plugins into Storybook
  app.use(vuetify(app))
  app.use(pinia)
});

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

export const decorators = [withVuetifyTheme];
