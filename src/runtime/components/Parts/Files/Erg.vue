<template>
  <v-card
    v-if="displayMode === 'tabs'"
    class="bg-none report__card"
    elevation="0"
  >
    <v-tabs
      v-model="tabDocs"
      :color="theme === 'white' ? colorThemeWhite : colorThemeBlack"
      class="mb-8"
      show-arrows
    >
      <v-tab
        v-for="(tab, index) in contentTabs"
        :key="`tab-${index}`"
        :value="index + 1"
        class="text-h5 px-0"
        :class="theme === 'white' ? colorThemeWhite : colorThemeBlack"
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
          :href="item.file?.url || item.link"
          class="text-decoration-none text-white d-flex align-start align-md-center mb-7"
          target="_blank"
        >
          <div
            class="pa-2 rounded mr-4 my-1 my-md-2"
            :class="theme === 'white' ? colorBackgroundImageWhite : colorBackgroundImageBlack"
          >
            <v-img
              :src="item.file_icon"
              width="28"
              cover
              v-bind="imageAttrs"
            />
          </div>
          <div class="d-flex flex-column">
            <h6
              class="text-body-1 text-md-h5 mb-1"
              :class="theme === 'white' ? colorThemeWhite : colorThemeBlack"
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
  <v-card
    v-else-if="displayMode === 'select'"
    class="bg-none pt-2 report__card"
    elevation="0"
  >
    <v-select
      v-model="select"
      :items="filteredContentSelect"
      item-title="year"
      item-value="data"
      return-object
      v-bind="settingSelect"
      variant="outlined"
      style="width: 213px"
      rounded="lg"
      hide-details
      class="report__card-select mb-5 mb-md-10"
      :menu-props="{ class: 'report__card-menu' }"
    >
    </v-select>


    <v-sheet class="mb-9 mb-md-10 bg-transparent" >
      <a
        v-for="item in select.data"
        :key="item.title"
        rel="noreferrer noopener"
        :href="item.file?.url || item.link"
        class="text-decoration-none text-white d-flex align-start align-md-center mb-7"
        target="_blank"
      >
        <div
          class="pa-2 rounded mr-4 my-1 my-md-2"
          :class="theme === 'white' ? colorBackgroundImageWhite : colorBackgroundImageBlack"
        >
          <v-img
            :src="item.file_icon"
            width="28"
            cover
            v-bind="imageAttrs"
          />
        </div>
        <div class="d-flex flex-column">
          <h6
            class="text-body-1 text-md-h5 mb-1"
            :class="theme === 'white' ? colorThemeWhite : colorThemeBlack"
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
    </v-sheet>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMainStore } from "../../../store/mainStore";
import { useAttrs } from "vue";

const mainStore = useMainStore()
const attrs = useAttrs()
const imageAttrs = ref({
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'image')
})

const props = defineProps({
  contentTabs: { type: Object, default: () => ({}) },
  contentSelect: { type: Array, default: () => [] },
  theme: { type: String, default: () => 'white' },
  colorThemeWhite: { type: String, default: () => 'white' },
  colorThemeBlack: { type: String, default: () => 'black' },
  colorBackgroundImageWhite: { type: String, default: () => '' },
  colorBackgroundImageBlack: { type: String, default: () => '' },

  displayMode: { type: String, default: 'tabs' },
  settingSelect: { type: Object, default: () => ({}) }
})

const tabDocs = ref(null)
const select = ref(props.contentSelect[0])
const filteredContentSelect = computed(() => {
  return props.contentSelect.filter(item => item.year !== select.value.year);
});
</script>

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
