<template>
  <v-overlay
    v-model="localModelValue"
    class="bg-background-overlay gallery-view-overlay"
  >
    <v-container class="pa-md-16 px-0 px-md-16 gallery-view-container">
      <div
        class="mb-6 cursor-pointer gallery-view-close px-1 px-md-0"
        @click="localModelValue = false"
      >
        <v-icon icon="mdi-close" />
      </div>
      <v-row class="d-flex flex-column-reverse flex-md-row">
        <v-col
          cols="12"
          md="2"
        >
          <client-only>
            <swiper-container
              ref="thumbsSwiperRef"
              :direction="mdAndUp ? 'vertical' : 'horizontal'"
              class="gallery-view-swiper-blocks d-block"
              :style="{ height: mdAndUp ? '100vh' : '100%', overflow: 'auto' }"
              centered-slides
              :slides-per-view="mdAndUp ? 6.8 : 4.2"
              space-between="0"
              mousewheel
              free-mode
              @slideChange="onThumbSlideChange"
            >
              <swiper-slide
                v-for="(img, index) in localGallery"
                :key="`gallery-thumb-${index}`"
                class="gallery-view-swiper-blocks-slide"
                @click="setActiveImage(index)"
              >
                <v-card
                  elevation="0"
                  class="gallery-view-swiper-blocks-slide-card bg-transparent cursor-pointer"
                  :class="{ active: img.active }"
                >
                  <v-img
                    :src="img.image"
                    height="120px"
                    width="100%"
                    cover
                    class="rounded-lg gallery-view-swiper-blocks-slide-card-img"
                  />
                </v-card>
              </swiper-slide>
            </swiper-container>
          </client-only>
        </v-col>
        <v-col
          cols="12"
          md="10"
          class="position-relative"
        >
          <client-only>
            <swiper-container
              ref="mainSwiperRef"
              class="gallery-view-main px-1"
              slides-per-view="1"
              navigation
              pagination
              :style="{ 'height': mdAndUp ? '574px' : '100%' }"
              @slideChange="onMainSlideChange"
            >
              <swiper-slide
                v-for="(img, index) in gallery"
                :key="`gallery-main-${index}`"
              >
                <v-img
                  :src="img.image"
                  max-width="826px"
                  cover
                  min-height="250px"
                  width="100%"
                  max-height="574px"
                  class="rounded-lg"
                />
              </swiper-slide>
            </swiper-container>
          </client-only>
          <div
            v-if="mdAndUp"
            class="main-controls mb-2"
          >
            <v-btn
              icon
              color="primary"
              rounded="lg"
              @click="mainPrev"
            >
              <v-icon icon="mdi-chevron-left" />
            </v-btn>
            <v-btn
              icon
              color="primary"
              rounded="lg"
              @click="mainNext"
            >
              <v-icon icon="mdi-chevron-right" />
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-overlay>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { register } from "swiper/element/bundle";
import { useDisplay } from "vuetify";

register();
const { mdAndUp } = useDisplay()

const props = defineProps({
  gallery: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  previewImage: {
    type: Object,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "update:gallery"]);

const mainSwiperRef = ref();
const thumbsSwiperRef = ref();
const localGallery = ref(Object.assign({}, props.gallery)); // Копируем объект

function setActiveImage(index) {
  updateActiveImage(index);

  if (mainSwiperRef.value?.swiper) {
    mainSwiperRef.value.swiper.slideTo(index);
  }

  if (thumbsSwiperRef.value?.swiper) {
    thumbsSwiperRef.value.swiper.slideTo(index);
  }
}

function updateActiveImage(index) {
  const keys = Object.keys(localGallery.value);
  keys.forEach((key, idx) => {
    localGallery.value[key].active = idx === index;
  });

  emit('update:gallery', localGallery.value);

  if (thumbsSwiperRef.value?.swiper) {
    thumbsSwiperRef.value.swiper.slideTo(index);
    thumbsSwiperRef.value.swiper.update();
  }
}

function mainPrev() {
  const swiper = mainSwiperRef.value.swiper;
  swiper.slidePrev();
  updateActiveImage(swiper.activeIndex);
}

function mainNext() {
  const swiper = mainSwiperRef.value.swiper;
  swiper.slideNext();
  updateActiveImage(swiper.activeIndex);
}

function onMainSlideChange() {
  const activeIndex = mainSwiperRef.value.swiper.activeIndex;
  updateActiveImage(activeIndex);
  if (thumbsSwiperRef.value?.swiper) {
    thumbsSwiperRef.value.swiper.slideTo(activeIndex);
  }
}

function onThumbSlideChange() {
  const activeIndex = thumbsSwiperRef.value.swiper.activeIndex;
  setActiveImage(activeIndex);
}

const localModelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

onMounted(() => {
  localGallery.value = Object.values(props.gallery);

  if (mdAndUp.value) {
    localGallery.value.push({ id: localGallery.value.length, image: '', active: false });
  }

  if (props.previewImage) {
    const previewIndex = localGallery.value.findIndex(
      (img) => img.image === props.previewImage.image
    );

    if (previewIndex !== -1) {
      updateActiveImage(previewIndex);
      mainSwiperRef.value?.swiper.slideTo(previewIndex);
    } else {
      updateActiveImage(0);
    }
  } else {
    updateActiveImage(0);
  }
})
</script>

<style lang="scss">
.gallery-view-overlay {
  .v-overlay__content {
    width: 100%;
    @media (max-width: 960px) {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  .gallery-view-close {
    @media (max-width: 960px) {
      position: absolute;
      top: 40px;
    }

  }
  .gallery-view-swiper-blocks-slide-card {
    border: 3px solid transparent;
    border-radius: 12px;
    &.active {
      border-color: rgb(var(--v-theme-primary));
    }
  }
  .gallery-view-main {
    .swiper-pagination {
      bottom: 10px;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: rgb(var(--v-theme-primary));
    }
  }
  .thumbs-controls,
  .main-controls {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    margin-bottom: 16px;
  }
}
</style>
