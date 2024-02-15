<template>
  <v-container class="erg-vacancies position-relative">
    <v-img :src="backgroundImage.image" cover class="h-100 w-100" v-bind="backgroundImage.attrs" />
    <v-sheet
      v-bind="sheetAttrs"
      class="mb-6 sheet position-absolute bg-none"
      :class="backgroundImage ? 'position-absolute' : ''"
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
          <v-chip v-bind="chip.attrs" class="z-index-2" v-if="chip">
            {{ chip.text }}
          </v-chip>
          <div class="vacancies__body position-relative z-index-2">
            <h2
              class="mb-2"
              v-bind="titleAttrs"
              v-if="title"
            >
              {{ title || 'Станьте частью команды' }}
            </h2>
            <p
              class="mb-4"
              v-bind="subTitleAttrs"
              v-if="subTitle"
            >
              {{ subTitle || 'Мы предлагаем конкурентные зарплаты, социальные гарантии' }}
            </p>
            <div
              class="mb-4"
              v-if="textBody"
            >
              <div v-html="textBody"></div>
            </div>
          </div>
          <v-btn
            v-bind="button.attrs"
            class="text-none z-index-2"
            color="white"
          >
            <nuxt-link v-if="button.link" :to="button.link" class="text-decoration-none text-black">
              {{ button.text || 'Связаться с нами'}}
            </nuxt-link>
            <span v-else>{{ button.text || 'Связаться с нами' }}</span>
            <v-img v-if="button.image" :src="button.image" :width="16" :height="16" class="ml-2" />
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

const props = defineProps({
  backgroundImage: {
    type: Object,
    default: () => ({
      image: ''
    })
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
  button: { type: Object, default: () => ({
    text: ''
  })},
  textBody: String,
  leftImage: Object,
  rightImage: Object,
  gallery: Boolean,
  galleryImages: Array,
  galleryHoverEffect: Boolean,
})


</script>

<style lang="scss" scoped>
.erg-vacancies {
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
    }

    &:hover .gallery-image {
      transform: scale(2);
    }

    &:hover .gallery-title {
      opacity: 1;
    }
  }
}
</style>
