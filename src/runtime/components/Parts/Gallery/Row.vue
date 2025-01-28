<template>
  <div class="position-relative">
    <div
      v-if="blocks.length > 4 && showButton"
      class="row-gallery-buttons px-4"
    >
      <v-btn
        class="swiper-button prev-button rounded-circle"
        min-width="50"
        height="50"
        v-bind="btnAttrs"
        elevation="0"
        :disabled="swiperState.isBeginning"
        @click="goPrev"
      >
        <span v-if="leftButtonText">{{ leftButtonText }}</span>
        <v-icon
          v-else-if="leftButtonIcon && leftButtonIcon.includes('mdi')"
          :icon="leftButtonIcon"
        />
        <v-img
          v-else
          :src="leftButtonIcon"
        />
      </v-btn>
      <v-btn
        class="swiper-button next-button rounded-circle"
        min-width="50"
        height="50"
        v-bind="btnAttrs"
        elevation="0"
        :disabled="swiperState.isEnd"
        @click="goNext"
      >
        <span v-if="rightButtonText">{{ rightButtonText }}</span>
        <v-icon
          v-else-if="rightButtonIcon && rightButtonIcon.includes('mdi')"
          :icon="rightButtonIcon"
        />
        <v-img
          v-else
          :src="rightButtonIcon"
        />
      </v-btn>
    </div>
    <swiper-container
      ref="swiperRefGalleryBlocks"
      :slides-per-view="blocks.length === 4 ? (lgAndUp ? 4 : (mdAndUp ? 3.2 : 1.2)) : (lgAndUp ? 4.2 : (mdAndUp ? 3.2 : 1.2))"
      :space-between="lgAndUp ? 20 : 8"
      direction="horizontal"
      class="row-gallery-blocks w-100"
      :height="variant === 'card' ? '100%' : '290px'"
      v-bind="swiperAttrs"
    >
      <swiper-slide
        v-for="(block, index) in blocks"
        :key="`gallery-block-${index}`"
        v-bind="slideAttrs"
        class="h-auto"
      >
        <template v-if="!disableLinks">
          <nuxt-link
            :to="variant === 'card'? `/gallery/video/${block.id}` : `/gallery/${block.id}`"
            class="text-decoration-none h-100 d-flex flex-column"
          >
            <v-card
              elevation="0"
              :height="variant === 'card' ? '100%' : '290px'"
              class=""
              v-bind="cardAttrs"
              :class="variant === 'card' ? 'pa-6 row-gallery-blocks-card card' : 'row-gallery-blocks-card image bg-transparent'"
            >
              <div class="position-relative">
                <v-img
                  :src="block.preview"
                  :height="variant === 'card' ? '194px' : '290px'"
                  width="100%"
                  cover
                  class="row-gallery-blocks-card-image"
                  :class="variant === 'card' ? 'mb-4' : ''"
                  :gradient="typeCard === 'video' ? 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)' : ''"
                />
                <v-img
                  v-if="typeCard === 'video'"
                  class="row-gallery-blocks-card-image-play"
                  :src="imagePlayVideo || ''"
                  height="32"
                  width="32"
                />
              </div>
              <div
                v-if="variant === 'image'"
                class="row-gallery-blocks-card-title py-3 px-4"
              >
                <span>{{ block.title }}</span>
              </div>
              <div
                v-else-if="variant === 'card'"
                class="row-gallery-blocks-card-title"
              >
                <span>{{ block.title }}</span>
              </div>
            </v-card>
          </nuxt-link>
        </template>
        <template v-else>
          <div class="h-100 d-flex flex-column">
            <v-card
              elevation="0"
              :height="variant === 'card' ? '100%' : '290px'"
              class=""
              v-bind="cardAttrs"
              :class="variant === 'card' ? 'pa-6 row-gallery-blocks-card card' : 'row-gallery-blocks-card image bg-transparent'"
            >
              <div class="position-relative">
                <v-img
                  :src="block.preview"
                  :height="variant === 'card' ? '194px' : '290px'"
                  width="100%"
                  cover
                  class="row-gallery-blocks-card-image"
                  :class="variant === 'card' ? 'mb-4' : ''"
                />
              </div>
              <div
                v-if="variant === 'image'"
                class="row-gallery-blocks-card-title py-3 px-4"
              >
                <span>{{ block.title }}</span>
              </div>
              <div
                v-else-if="variant === 'card'"
                class="row-gallery-blocks-card-title"
              >
                <span>{{ block.title }}</span>
              </div>
            </v-card>
          </div>
        </template>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { reactive, useAttrs, ref, onMounted } from "vue";
import { register } from "swiper/element/bundle";
import { useDisplay } from "vuetify";
import { useMainStore } from "../../../store/mainStore";

const mainStore = useMainStore();

const attrs = useAttrs();
const swiperAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "swiper"),
};
const slideAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "slide"),
}
const btnAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "btn"),
}
const cardAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "card"),
}

register()

const props = defineProps({
  blocks: {
    type: Array,
  },
  disableLinks: {
    type: Boolean,
    default: false,
  },
  showButton: {
    type: Boolean,
    default: true
  },
  leftButtonText: {
    type: String
  },
  rightButtonText: {
    type: String
  },
  leftButtonIcon: {
    type: String
  },
  rightButtonIcon: {
    type: String
  },
  variant: {
    type: String,
    default: "image"
  },
  typeCard: {
    type: String,
    default: "image"
  },
  imagePlayVideo: {
    type: String,
  }
})

const { mdAndUp, lgAndUp } = useDisplay()

const swiperRefGalleryBlocks = ref(null);
const swiperState = reactive({
  isBeginning: true,
  isEnd: false,
});

const updateSwiperState = () => {
  const swiper = swiperRefGalleryBlocks.value?.swiper;
  if (swiper) {
    swiperState.isBeginning = swiper.isBeginning;
    swiperState.isEnd = swiper.isEnd;
  }
};

const goNext = () => {
  const swiper = swiperRefGalleryBlocks.value?.swiper;
  swiper?.slideNext();
};

const goPrev = () => {
  const swiper = swiperRefGalleryBlocks.value?.swiper;
  swiper?.slidePrev();
};

onMounted(() => {
  const swiper = swiperRefGalleryBlocks.value?.swiper;

  if (swiper) {
    swiper.on('slideChange', updateSwiperState);
    swiper.on('reachBeginning', updateSwiperState);
    swiper.on('reachEnd', updateSwiperState);
  }
});
</script>

<style scoped lang="scss">
.row-gallery-buttons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  pointer-events: none;
  .swiper-button {
    pointer-events: auto;
  }
}
.row-gallery-blocks {
  .image {
    .row-gallery-blocks-card {
      position: relative;
      &-image {
        border-radius: 32px;
        @media(max-width: 960px) {
          border-radius: 16px;
        }
      }
      &-title {
        position: absolute;
        bottom: 24px;
        left: 24px;
        background: rgba(163, 163, 163, 0.60);
        border-radius: 32px;
        max-width: 185px;
        span {
          color: #fff;
        }
      }
    }
  }
  .row-gallery-blocks-card.card {
    border-radius: 32px !important;
    .row-gallery-blocks-card-image {
      border-radius: 16px;
      &-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .row-gallery-blocks-card-title {
      font-size: 20px;
      font-family: "Roboto", sans-serif;
    }
  }
}
</style>
