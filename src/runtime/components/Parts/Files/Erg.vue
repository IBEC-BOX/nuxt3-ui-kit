<script setup lang="ts">
import { ref } from "vue";

const tabDocs = ref<number | null>(null)

const props = defineProps({
  contentTabs: { type: Object, default: () => ({}) },
  theme: { type: String, default: () => 'white' },
  colorThemeWhite: { type: String, default: () => 'white' },
  colorThemeBlack: { type: String, default: () => 'black' },
})
</script>

<template>
  <v-card
    class="bg-none report__card"
    elevation="0"
  >
    <v-tabs
      v-model="tabDocs"
      :color="theme ? colorThemeWhite : colorThemeBlack"
      class="mb-8"
      show-arrows
    >
      <v-tab
        v-for="(tab, index) in contentTabs"
        :key="`tab-${index}`"
        :value="index + 1"
        class="text-h5 px-0"
        :class="theme ? colorThemeWhite : colorThemeBlack"
      >
        {{ tab.year }}
      </v-tab>
    </v-tabs>
    <v-window
      v-model="tabDocs"
      class="mb-9 mb-md-10"
    >
      <v-window-item
        v-for="(content, index) in contentTabs"
        :key="`content-${index}`"
        :value="index + 1"
      >
        <a
          v-for="item in content.data"
          :key="item.title"
          ref="noreferrer noopener"
          :href="item.file || item.link"
          class="text-decoration-none text-white d-flex align-start align-md-center mb-7"
          target="_blank"
        >
          <div
            class="pa-2 rounded mr-4 my-1 my-md-2"
            :class="theme ? colorThemeWhite : colorThemeBlack"
          >
            <v-img
              :src="item.file_icon"
              width="28"
              cover
            />
          </div>
          <div class="d-flex flex-column">
            <h6
              class="text-body-1 text-md-h5 mb-1"
              :class="theme ? colorThemeWhite : colorThemeBlack"
            >
              {{ item.title }}
            </h6>
            <div class="d-flex">
              <span class="text-13 text-dark-3">
                <label class="text-uppercase">
                  {{ item.extension }},
                </label>
                <span v-if="item.file_size_kb">{{ item.file_size_kb }}, </span>
                <span>{{ item.published_file }}</span>
              </span>
            </div>
          </div>
        </a>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped lang="scss">
.report__card {
  .v-tab.v-tab {
    min-width: 60px;
    margin-right: 32px;
  }
  .v-btn {
    text-indent: 0;
  }
}
</style>
