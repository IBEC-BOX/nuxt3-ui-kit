<template>
  <v-container class="erg-vacancies">
    <div class="position-relative">
      <v-img
        :src="backgroundImage.image"
        cover
        class="h-100 w-100 erg-vacancies-bg"
        v-bind="backgroundImage.attrs"
        :min-height="536"
      />
      <v-sheet
        v-bind="sheetAttrs"
        class="sheet position-absolute bg-none"
        :class="backgroundImage ? 'position-absolute' : ''"
      >
        <v-row class="h-100">
          <v-col
            v-if="Object.keys(leftImage).length"
            cols="12"
            md="6"
            :style="Object.keys(leftImage).length ? '' : 'display: contents'"
          >
            <v-img
              :src="leftImage.image"
              v-bind="leftImage.attrs"
            />
          </v-col>
          <v-col
            cols="12"
            :md="Object.keys(leftImage).length || Object.keys(rightImage).length ? 6 : 12"
            v-bind="bodyAttrs"
            class="py-0  "
            :class="Object.keys(leftImage).length || Object.keys(rightImage).length ? 'px-5' : ''"
          >
            <v-chip
              v-if="chip"
              v-bind="chip.attrs"
              class="z-index-2"
            >
              {{ chip.text }}
            </v-chip>
            <div class=" d-flex flex-column justify-end justify-sm-start flex-grow-1 h-100">
              <div class="vacancies__body position-relative z-index-2">
                <h2
                  v-if="title"
                  class="mb-2"
                  v-bind="titleAttrs"
                >
                  {{ title || 'Станьте частью команды' }}
                </h2>
                <p
                  v-if="subTitle"
                  class="mb-4"
                  v-bind="subTitleAttrs"
                >
                  {{ subTitle || 'Мы предлагаем конкурентные зарплаты, социальные гарантии' }}
                </p>
                <div
                  v-if="textBody"
                  class="mb-4"
                >
                  <div v-html="textBody" />
                </div>
              </div>
              <v-btn
                v-bind="button.attrs"
                class="text-none z-index-2 mr-auto"
                :color="button.attrs?.color ? button.attrs.color : 'white'"
              >
                {{ button.text || 'Связаться с нами' }}
                <v-img
                  v-if="button.image"
                  :src="button.image"
                  :width="16"
                  :height="16"
                  class="ml-2"
                  v-bind="button.imageAttrs"
                />
              </v-btn>
            </div>
          </v-col>
          <v-col
            v-if="Object.keys(rightImage).length"
            cols="12"
            md="6"
            :style="rightImage ? '' : 'display: contents'"
            class="py-0"
          >
            <v-img
              :src="rightImage.image"
              v-bind="rightImage.attrs"
            />
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useAttrs, defineProps, ref } from "vue";
import { getProperties } from "../../../utils/getAttrs";
import type { IVacanciesErg } from "./vacanciesTypes";
import type { Attrs } from "../../../types/global";

const attrs = useAttrs()
const sheetAttrs = ref<Attrs>({
  ...getProperties(attrs, 'sheet')
})
const titleAttrs = ref<Attrs>({
  ...getProperties(attrs, 'title')
})
const subTitleAttrs = ref<Attrs>({
  ...getProperties(attrs, 'sub-title')
})
const bodyAttrs = ref<Attrs>({
  ...getProperties(attrs, 'body')
})

const props = defineProps<IVacanciesErg>()
</script>

<style lang="scss">
.erg-vacancies {
  &-bg {
    @media(max-width: 600px) {
      img {
        transform: scale(1.5);
      }
    }
  }
  .sheet {
    top: 0;
  }
  .z-index-2 {
    z-index: 2;
  }
  .sheet-img-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
  }
}
</style>
