import { mergeConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-designs"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [{ from: '../playground/public/', to: '/' }],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vue()],
    });
  },
};

export default config;
