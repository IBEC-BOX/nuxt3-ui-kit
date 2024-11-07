<template>
  <div class="position-relative text-white">
    <v-img
      v-if="sliderBackgroundImage"
      class="zoom-background"
      :src="sliderBackgroundImage"
      :style="sliderBackgroundImageZoom ? zoomStyle : ''"
      style="position: absolute; width: 100%; height: 100%; z-index: 1"
      cover
    />
    <v-chip
      v-if="Object.keys(staticChips).length"
      v-bind="staticChips.attrs"
      class="position-absolute"
      style="z-index: 10"
    >
      {{ staticChips.text }}
    </v-chip>
    <swiper-container
      v-bind="sliderAttrs"
      ref="slider"
      :slides-per-view="sliderPeeking ? '1.3' : '1'"
      class="overflow-hidden w-100 position-relative overflow-hidden"
      :class="[`rounded-${rounded}`]"
      :style="{height: height}"
      @swiperslidechange="updatePagination"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.id"
        class="overflow-hidden"
        v-bind="slidesAttrs"
        :class="`rounded-${slidesRounded}`"
      >
        <div
          v-if="slide.backgroundImg"
          class="image-backdrop"
        >
          <!-- Image -->
          <v-img
            class="slider-img position-absolute h-100 w-100"
            style="z-index: -1"
            cover
            :src="slide.backgroundImg"
          />
          <!-- Image END -->
        </div>
        <v-row :style="slide.img ? '' : 'display: contents'">
          <v-col
            cols="12"
            md="6"
            class="px-0"
            :style="slide.img ? '' : 'display: contents'"
          >
            <div
              class="h-100 py-0"
              :class="[
                { 'px-9 px-md-12': !sliderContainer },
                { 'v-container': sliderContainer },
                {
                  'd-flex flex-column justify-center align-start':
                    !slide.textBlockAttrs,
                },
              ]"
            >
              <div>
                <v-chip
                  v-if="slide.chip && !Object.keys(staticChips).length"
                  v-bind="slide.chip.attrs"
                >
                  {{ slide.chip.text }}
                </v-chip>
                <!-- Slide title -->
                <!-- Добавил возможность указывать тег чтобы была возможность для настройки SEO -->
                <component
                  :is="slide.titleTag ? slide.titleTag : 'p'"
                  v-bind="slide.titleAttrs"
                >
                  {{ slide.title }}
                </component>
                <!-- Slide title -->

                <p
                  v-if="slide.subtitle"
                  v-bind="slide.subTitleAttrs"
                >
                  {{ slide.subtitle }}
                </p>

                <div
                  v-if="slide.subTitleHTML"
                  v-html="slide.subTitleHTML"
                  v-bind="slide.subTitleAttrs"
                />
              </div>


              <div
                v-if="slide.numbers"
                class="d-flex flex-column flex-md-row slider__numbers"
              >
                <div
                  v-for="(number, index) in slide.numbers"
                  :key="`numbers-${index}`"
                  v-bind="number.itemAttrs"
                  class="d-flex flex-column slider__numbers-item"
                >
                  <span
                    v-bind="number.numAttrs"
                    class="slider__numbers-title"
                  > {{ number.number }} {{ number.postfix }} </span>
                  <span
                    v-bind="number.subtitleAttrs"
                    class="slider__numbers-subtitle"
                  > {{ number.subtitle }}</span>
                </div>
              </div>
              <!-- body slot -->
              <div v-html="slide.bodySlot" />
              <!-- body slot end -->

              <!-- Slider buttons -->
              <div
                v-if="slide.buttons"
                class="mb-15"
              >
                <v-btn
                  v-for="button in slide.buttons"
                  :key="button.id"
                  v-bind="button.attrs"
                >
                  {{ button.text }}
                </v-btn>
              </div>
              <!-- Slider buttons END -->
            </div>
          </v-col>

          <v-col
            cols="12"
            md="6"
            class="px-0"
            :style="slide.img ? '' : 'display: contents'"
            :class="[{ 'px-4 px-md-8 px-lg-0': !sliderContainer }]"
          >
            <div
              v-if="slide.img"
              class="px-4"
            >
              <!-- Image -->
              <v-img
                class="slider-img h-100 w-100 py-4"
                style="z-index: -1"
                cover
                :src="slide.img.src"
                v-bind="slide.img.attrs"
              />
              <!-- Image END -->
            </div>
          </v-col>
        </v-row>
        <div
          v-if="controlButtonInSlides"
          class="control-buttons-left-bottom-container d-none d-md-block"
          :class="[{ 'px-4 px-md-5 px-lg-9': !sliderContainer }]"
        >
          <div class="d-flex px-0">
            <v-btn
              v-bind="controlButtonPrevAttrs"
              icon="mdi-chevron-left"
              @click="slidePrev"
            />

            <v-btn
              v-bind="controlButtonNextAttrs"
              icon="mdi-chevron-right"
              @click="slideNext"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper-container>

    <div
      v-if="controlButtonsAlign === 'center' && controlButtonInSlides === false"
      class="control-buttons-center-container"
    >
      <div class="d-flex justify-space-between px-0">
        <v-btn
          v-bind="controlButtonPrevAttrs"
          icon="mdi-chevron-left"
          @click="slidePrev"
        />

        <v-btn
          v-bind="controlButtonNextAttrs"
          icon="mdi-chevron-right"
          @click="slideNext"
        />
      </div>
    </div>

    <div
      v-if="controlButtonsAlign === 'right' && controlButtonInSlides === false"
      class="control-buttons-right-container"
    >
      <div
        :class="[
          { 'px-4 px-md-8 px-lg-12': !sliderContainer },
          { 'v-container': sliderContainer },
        ]"
        class="d-flex flex-column align-end"
      >
        <v-btn
          v-bind="controlButtonPrevAttrs"
          class="mb-5"
          icon="mdi-chevron-up"
          @click="slidePrev"
        />

        <v-btn
          v-bind="controlButtonNextAttrs"
          icon="mdi-chevron-down"
          @click="slideNext"
        />
      </div>
    </div>

    <div
      v-if="controlButtonsAlign === 'left-bottom' && controlButtonInSlides === false"
      class="control-buttons-left-bottom-container"
      :class="[{ 'px-4 px-md-5 px-lg-9': !sliderContainer }]"
    >
      <div class="d-flex px-0">
        <v-btn
          v-bind="controlButtonPrevAttrs"
          icon="mdi-chevron-left"
          @click="slidePrev"
        />

        <v-btn
          v-bind="controlButtonNextAttrs"
          icon="mdi-chevron-right"
          @click="slideNext"
        />
      </div>
    </div>

    <!-- Slider control -->
    <div class="slider_pagination_container">
      <div
        class="w-100 d-flex align-end"
        :class="[
          { 'px-12': !sliderContainer },
          { 'v-container': sliderContainer },
        ]"
      >
        <!-- Pagination -->
        <div
          v-if="sliderPagination"
          class="slider_pagination"
          :class="{ 'mx-auto': sliderPaginationCenter }"
        >
          <span
            v-for="(slide, index) in pagination"
            :key="slide.id"
            :class="[
              slide.active ? `bg-${props.sliderPaginationActiveVariant}` : '',
              sliderPaginationType === 'bullet'
                ? 'slider-pagination-bullet'
                : sliderPaginationType === 'dot'
                  ? 'slider-pagination-dot'
                  : '',
            ]"
            @click="slideTo(index)"
          />
        </div>
        <!-- Pagination END -->

        <div
          v-if="
            controlButtonsAlign === 'right' &&
              swiper !== null &&
              !sliderPagination
          "
          class="ml-auto"
        >
          {{ activeSlide + 1 }} / {{ slides.length }}
        </div>

        <!-- Control buttons -->
        <div
          v-if="controlButtonsAlign === 'bottom' && showButtons"
          class="d-flex ml-auto"
        >
          <v-btn
            v-bind="controlButtonPrevAttrs"
            class="ml-4"
            icon="mdi-chevron-left"
            @click="slidePrev"
          />
          <v-btn
            v-bind="controlButtonNextAttrs"
            class="ml-4"
            icon="mdi-chevron-right"
            @click="slideNext"
          />
        </div>
        <!-- Control buttons END-->
      </div>
    </div>
    <!-- Slider control END -->
  </div>
</template>

<script setup>

import { register } from "swiper/element/bundle";
register();

import { useAttrs, ref, onMounted, onUnmounted, watch, computed } from "vue";
import { useMainStore } from "../../store/mainStore";
const mainStore = useMainStore();

//Attributes
const attrs = useAttrs();
const sliderAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "slider"),
};
const slidesAttrs = mainStore.getObjectPropertiesWithPrefix(attrs, "slides");
const controlButtonsAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "control-buttons"),
};
const controlButtonPrevAttrs = {
  ...controlButtonsAttrs,
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "control-button-prev"),
};
const controlButtonNextAttrs = {
  ...controlButtonsAttrs,
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "control-button-next"),
};
const props = defineProps({
  rounded: {
    type: String,
    default: "",
  },

  staticChips: {
    type: Object,
    default: () => ({})
  },

  height: {
    type: String,
    default: "534px",
  },

  slides: {
    type: Array,
    default: () => [],
  },

  slidesRounded: {
    type: String,
    default: "0",
  },

  sliderBackgroundImage: {
    type: String,
    default: ''
  },

  sliderBackgroundImageZoom: {
    type: Boolean,
    default: false
  },

  sliderBackgroundImageZoomScale: {
    type: Number,
    default: 1.5
  },

  sliderContainer: {
    type: Boolean,
    default: false,
  },

  sliderPagination: {
    type: Boolean,
    default: false,
  },

  sliderPaginationCenter: {
    type: Boolean,
    default: false,
  },

  sliderPaginationType: {
    type: String,
    default: "bullet",
  },

  sliderPaginationActiveVariant: {
    type: String,
    default: "primary",
  },

  sliderPeeking: {
    type: Boolean,
    default: false,
  },

  controlButtonsAlign: {
    type: String,
    default: "bottom",
  },

  showButtons: {
    type: Boolean,
    default: true
  },

  controlScroll: {
    type: Boolean,
    default: false,
  },

  controlButtonInSlides: {
    type: Boolean,
    default: false,
  }
});

const slider = ref(null);
const activeSlide = ref(0);
const pagination = ref(props.slides || []);

const slideTo = (index) => {
  if (slider.value !== null) {
    slider.value.swiper.slideTo(index);
  }
};

const slideNext = () => {
  if (slider.value?.swiper) {
    slider.value.swiper.slideNext(500);
  }
};

const slidePrev = () => {
  if (slider.value?.swiper) {
    slider.value.swiper.slidePrev(500);
  }
};

const updatePagination = () => {
  if (slider.value !== null) {
    props.slides.forEach((slide, index) => {
      pagination.value[index].active = false;
    });
    pagination.value[slider.value.swiper.realIndex].active = true;
    activeSlide.value = slider.value.swiper.realIndex;
  }
};

const handleWheel = (event) => {
  if (!slider.value?.swiper || !props.controlScroll) return;

  const swiperInstance = slider.value.swiper;
  if ((!swiperInstance.isBeginning && event.deltaY < 0) || (!swiperInstance.isEnd && event.deltaY > 0)) {
    event.preventDefault();
    event.deltaY > 0 ? swiperInstance.slideNext(500) : swiperInstance.slidePrev(500);
  }
};

const handleScroll = () => {
  if (!slider.value?.swiper || !props.controlScroll) return;

  const direction = window.pageYOffset > lastScrollPosition ? 'down' : 'up';
  direction === 'down' ? slider.value.swiper.slideNext() : slider.value.swiper.slidePrev();
  lastScrollPosition = window.pageYOffset;
};

const manageEventListeners = (addListeners) => {
  if (addListeners) {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
  } else {
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('scroll', handleScroll);
  }
};

let lastScrollPosition = window.pageYOffset;

watch(
  () => props.controlScroll,
  (newValue) => manageEventListeners(newValue),
  { immediate: true }
);

watch(() => props.slides, (newSlides) => {
  if (slider.value?.swiper) {
    slider.value.swiper.update();
  }
});

onMounted(async () => {
  activeSlide.value = slider.value?.swiper?.realIndex;
  if (pagination.value.length > 0) pagination.value[0].active = true;
});

onUnmounted(() => {
  manageEventListeners(false);
  if (slider.value?.swiper && !slider.value.swiper.destroyed) {
    slider.value.swiper.destroy();
  }
});
</script>

<style lang="scss">
.image-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

//.image-backdrop::after {
//  content: '';
//  position: absolute;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  background: rgba(#000, .5);
//}

.slider_pagination_container {
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 60px;
}

.slider_pagination {
  display: flex;
  gap: 16px;
}

.slider-pagination-bullet,
.slider-pagination-dot {
  display: block;
  border-radius: 80px;
  background: #fff;
  transition: 0.3s;
  cursor: pointer;
}

.slider-pagination-bullet {
  width: 40px;
  height: 6px;
}

.slider-pagination-dot {
  height: 8px;
  width: 8px;
}

.control-buttons-center-container {
  position: absolute;
  width: 100%;
  top: 50%;
  padding: 0 32px 0 32px;
  transform: translateY(-50%);
  z-index: 1;
}

.control-buttons-right-container {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.control-buttons-left-bottom-container {
  width: 100%;
  position: absolute;
  bottom: 0%;
  left: 3px;
  z-index: 1;
}

.zoom-background {
  transition: transform .3s ease-in-out;

  img {
    transform: scale(1); /* Начальное состояние масштаба */
  }

  &.zoom-background-animation img {
    transform: scale(1.5); /* Конечное состояние масштаба */
  }
}


</style>
