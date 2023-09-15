import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // pre-build css styles

/* Add all components and directives, for dev & prototyping only. */
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/* Add build-in icon used internally in various components */
/* Described in https://next.vuetifyjs.com/en/features/icon-fonts/ */
import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg';
const aliases = allAliases;

export default defineNuxtPlugin((nuxtApp) => {

  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi }
    }
  });

  nuxtApp.vueApp.use(vuetify);

  if (!process.server) console.log('❤️ Initialized Vuetify 3', vuetify);
});
