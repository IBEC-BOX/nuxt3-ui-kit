<template>
  <v-container
    class="erg-vacancies"
    :class="positionGallery === 'top' ? 'd-flex flex-column-reverse' : ''"
  >
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
                :color="button.attrs?.color ?? 'white'"
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
    <v-row
      v-if="gallery"
      style="flex-wrap: nowrap"
      class="overflow-x-auto"
    >
      <v-col
        v-for="(img, index) in galleryImages"
        :key="`img-col-${index}`"
        cols="3"
        class="gallery-col rounded-xl"
      >
        <div :class="galleryHoverEffect ? 'gallery-item' : 'position-relative'">
          <v-img
            :src="img.background"
            class="gallery-image"
            width="100%"
            cover
            :height="280"
          />
          <span
            v-if="galleryHoverEffect"
            class="gallery-title text-h5"
          >
            {{ img.title }}
          </span>
          <v-chip
            v-else
            v-bind="img.chip.attrs"
            class="gallery-chip"
          >
            {{ img.chip.text }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {useAttrs} from "vue";
import {useMainStore} from "../../store/mainStore";

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

const _props = defineProps({
  galleryImages: { type: Array, default: () => ([]) },

  backgroundImage: { type: Object, default: () => ({}) },
  button: { type: Object, default: () => ({}) },
  leftImage: { type: Object, default: () => ({}) },
  rightImage: { type: Object, default: () => ({}) },
  chip: { type: Object, default: () => ({}) },

  title: { type: String, default: '' },
  subTitle: { type: String, default: '' },
  textBody: { type: String, default: '' },

  gallery: { type: Boolean, default: false },
  galleryHoverEffect: { type: Boolean, default: false },
  positionGallery: { type: String, default: () => 'bottom' }
})


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
  .sheet-img-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
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
      @media(max-width: 768px) {
        opacity: 1;
      }
    }

    &:hover .gallery-image {
      transform: scale(2);
      @media(max-width: 768px) {
        transform: scale(1);
      }
    }

    &:hover .gallery-title {
      opacity: 1;
    }
  }
}
</style>
