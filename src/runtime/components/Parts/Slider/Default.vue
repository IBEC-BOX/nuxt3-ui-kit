<template>
  <div class="position-relative text-white">
    <v-img
      v-if="sliderBackgroundImage"
      class="zoom-background"
      :src="sliderBackgroundImage"
      style="position: absolute; width: 100%; height: 100%; z-index: 1"
      cover
    />
    <v-chip
      v-if="staticChips && Object.keys(staticChips).length"
      v-bind="staticChips?.attrs"
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
            :alt="slide.backgroundImgAlt ? slide.backgroundImgAlt : 'alt image'"
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
                  v-bind="slide.subTitleAttrs"
                  v-html="slide.subTitleHTML"
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
                :alt="slide.img.alt ? slide.img.alt : 'alt image'"
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
      v-if="controlButtonsAlign === 'center' && !controlButtonInSlides"
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
      v-if="controlButtonsAlign === 'right' && !controlButtonInSlides"
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
      v-if="controlButtonsAlign === 'left-bottom' && !controlButtonInSlides"
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

<script setup lang="ts">
import { register } from "swiper/element/bundle";
import { useAttrs, ref, onMounted, onUnmounted, watch, defineProps, withDefaults } from "vue";
import { getProperties } from "../../../utils/getAttrs";
import type { ISliderDefault } from "./sliderTypes";
import type { Attrs } from "../../../types/global";

register();

interface Swiper {
  slideTo: (index: number) => void;
  slideNext: (speed?: number) => void;
  slidePrev: (speed?: number) => void;
  realIndex: number;
  isBeginning: boolean;
  isEnd: boolean;
  update: () => void;
  destroyed: boolean;
  destroy: () => void;
}

//Attributes
const attrs = useAttrs();
const sliderAttrs = ref<Attrs>({
  ...getProperties(attrs, "slider"),
})
const slidesAttrs = ref<Attrs>({
  ...getProperties(attrs, "slides"),
})
const controlButtonsAttrs = ref<Attrs>({
  ...getProperties(attrs, "control-buttons"),
})
const controlButtonPrevAttrs = ref<Attrs>({
  ...controlButtonsAttrs,
  ...getProperties(attrs, "control-button-prev"),
})
const controlButtonNextAttrs = ref<Attrs>({
  ...controlButtonsAttrs,
  ...getProperties(attrs, "control-button-next"),
})

const props = withDefaults(defineProps<ISliderDefault>(), {
  height: "534px",
  slidesRounded: "0",
  sliderBackgroundImageZoom: false,
  sliderBackgroundImageZoomScale: 1.5,
  sliderContainer: false,
  sliderPagination: false,
  sliderPaginationCenter: false,
  sliderPaginationType: "bullet",
  sliderPaginationActiveVariant: "primary",
  sliderPeeking: false,
  controlButtonsAlign: "bottom",
  showButtons: true,
  controlScroll: false,
  controlButtonInSlides: false
});

const slider = ref<null | { swiper: Swiper }>(null);
const activeSlide = ref<number>(0);
const pagination = ref<Slide[]>(props.slides || []);

let lastScrollPosition = window.pageYOffset;

const slideTo = (index: number): void => {
  if (slider.value?.swiper) {
    slider.value.swiper.slideTo(index);
  }
};

const slideNext = (): void => {
  if (slider.value?.swiper) {
    slider.value.swiper.slideNext(500);
  }
};

const slidePrev = (): void => {
  if (slider.value?.swiper) {
    slider.value.swiper.slidePrev(500);
  }
};

const updatePagination = (): void => {
  if (slider.value?.swiper) {
    props.slides.forEach((_, index) => {
      pagination.value[index].active = false;
    });
    pagination.value[slider.value.swiper.realIndex].active = true;
    activeSlide.value = slider.value.swiper.realIndex;
  }
};

const handleWheel = (event: WheelEvent): void => {
  if (!slider.value?.swiper || !props.controlScroll) return;

  const swiperInstance = slider.value.swiper;
  if ((!swiperInstance.isBeginning && event.deltaY < 0) || (!swiperInstance.isEnd && event.deltaY > 0)) {
    event.preventDefault();
    event.deltaY > 0 ? swiperInstance.slideNext(500) : swiperInstance.slidePrev(500);
  }
};

const handleScroll = (): void => {
  if (!slider.value?.swiper || !props.controlScroll) return;

  const direction = window.pageYOffset > lastScrollPosition ? "down" : "up";
  direction === "down" ? slider.value.swiper.slideNext() : slider.value.swiper.slidePrev();
  lastScrollPosition = window.pageYOffset;
};

const manageEventListeners = (addListeners: boolean): void => {
  if (addListeners) {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
  } else {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("scroll", handleScroll);
  }
};


watch(
  () => props.controlScroll,
  (newValue: boolean) => manageEventListeners(newValue),
  { immediate: true }
);

watch(() => props.slides, () => {
  if (slider.value?.swiper) {
    slider.value.swiper.update();
  }
});

onMounted(() => {
  activeSlide.value = slider.value?.swiper?.realIndex || 0;
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
