<template>
  <section>
    <v-sheet
      v-bind="sheetAttrs"
      :style="{
        backgroundImage: 'url(' + backgroundImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }"
      class="mb-6"
    >
      <v-row :style="leftImage || rightImage ? '' : 'display: contents'">
        <v-col
          v-if="leftImage"
          cols="12"
          md="6"
          :style="leftImage ? '' : 'display: contents'"
          class="py-0"
        >
          <v-img
            :src="leftImage.src"
            v-bind="leftImage.attrs"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
          :style="[leftImage || rightImage ? '' : 'display: contents', bodyAttrs]"
          class="py-0 px-5"
        >
          <v-chip v-bind="chip.attrs">
            {{ chip.text }}
          </v-chip>
          <div class="vacancies__body">
            <h2
              class="mb-2"
              :style="titleAttrs"
            >
              {{ title || 'Станьте частью команды' }}
            </h2>
            <p
              class="mb-4"
              :style="subTitleAttrs"
            >
              {{ subTitle || 'Мы предлагаем конкурентные зарплаты, социальные гарантии' }}
            </p>
          </div>
          <v-btn
            v-bind="buttonAttrs"
            class="text-none"
            color="white"
          >
            {{ buttonText || 'Связаться с нами' }}
          </v-btn>
        </v-col>
        <v-col
          v-if="rightImage"
          cols="12"
          md="6"
          :style="rightImage ? '' : 'display: contents'"
          class="py-0"
        >
          <v-img
            :src="rightImage.src"
            v-bind="rightImage.attrs"
          />
        </v-col>
      </v-row>
    </v-sheet>
    <v-row
      v-if="gallery"
      style="flex-wrap: nowrap"
      class="overflow-x-auto"
    >
      <v-col
        v-for="img in galleryImages"
        :key="img.src"
        cols="3"
        class="gallery-col rounded-xl"
      >
        <div :class="galleryHoverEffect ? 'gallery-item' : 'position-relative'">
          <v-img
            :src="img.src"
            class="gallery-image rounded-xl"
            width="100%"
            cover
            :height="280"
          />
          <span
            v-if="galleryHoverEffect"
            class="gallery-title text-h5"
          >{{ img.text }}</span>
          <v-chip
            v-if="!galleryHoverEffect"
            v-bind="img.chip.attrs"
            class="gallery-chip"
          >
            {{ img.chip.text }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import {useAttrs} from "vue";
import {useMainStore} from "../../../store/mainStore.js";

const attrs = useAttrs()
const mainStore = useMainStore()
const sheetAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'sheet')
}
const titleAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'title')
}
const subTitleAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'sub-title')
}
const bodyAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'body')
}
const buttonAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'button')
}

const props = defineProps({
  backgroundImage: {
    type: String,
    default: ''
  },
  chip: {
    type: Object,
    default: () => ({
      text: 'Вакансии',
      attrs: {
        color: 'primary'
      }
    })
  },
  title: String,
  subTitle: String,
  buttonText: String,
  leftImage: Object,
  rightImage: Object,
  gallery: Boolean,
  galleryImages: Array,
  galleryHoverEffect: Boolean,
})


</script>

<style lang="scss" scoped>
@media (max-width: 1280px) {
  .gallery-col {
    width: 330px !important;
    flex: 0 0 auto;
    max-width: 100%;
  }
}
@media (max-width: 330px) {
  .gallery-col {
    width: 295px !important;
    flex: 0 0 auto;
    max-width: 100%;
  }
}
.gallery-chip {
  position: absolute;
  bottom: 5%;
  left: 5%;
}
.gallery-item {
  overflow: hidden;
  max-width: 100%;
  border-radius: 24px;
  position: relative;

  .gallery-image {
    transition: transform 0.2s ease;
  }

  .gallery-title {
    position: absolute;
    bottom: 20px;
    left: 5%;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: #fff;
  }

  &:hover .gallery-image {
    transform: scale(2);
  }

  &:hover .gallery-title {
    opacity: 1;
  }
}
</style>
