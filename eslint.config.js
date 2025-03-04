import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import storybook from "eslint-plugin-storybook";

export default [
  {
    ignores: [
      "node_modules",
      "dist",
      ".storybook",
      "storybook-static",
      "test",
      ".nuxt",
      ".output",
      "playground",
      "src/runtime/components/Pages/TestVuetify.vue"
    ],
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        process: "readonly",
        DOMParser: "readonly",
        YT: "readonly"
      },
    },
  },
  js.configs.recommended,
  {
    plugins: {
      vue,
      storybook,
    },
    rules: {
      ...vue.configs["vue3-strongly-recommended"].rules,
      "vue/no-unused-vars": "warn",
      "vue/no-v-html": "off",
      "no-console": "warn",
      ...storybook.configs.recommended.rules,
      "no-unused-vars": ["warn", { "varsIgnorePattern": "^_" }],
    },
  },
  {
    files: ["**/*.stories.js"],
    languageOptions: {
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-console": "off",
    },
  },
];
