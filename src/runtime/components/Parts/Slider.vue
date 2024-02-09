<template>
  <div class="position-relative text-white">
    <swiper-container
      v-bind="sliderAttrs"
      ref="slider"
      :slides-per-view="sliderPeeking ? '1.3' : '1'"
      class="overflow-hidden w-100"
      :class="[`rounded-${rounded}`]"
      :style="{ height: height }"
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
            lg="6"
            class="px-0"
            :style="slide.img ? '' : 'display: contents'"
          >
            <div
              class="h-100"
              :class="[
                { 'px-12': !sliderContainer },
                { 'v-container': sliderContainer },
                {
                  'd-flex flex-column justify-center align-start':
                    !slide.textBlockAttrs,
                },
              ]"
            >
              <div>
                <!-- Slide title -->
                <!-- Добавил возможность указывать тег чтобы была возможность для настройки SEO -->
                <v-chip
                  v-if="slide.chip"
                  v-bind="slide.chip.attrs"
                >
                  {{ slide.chip.text }}
                </v-chip>
                <component
                  :is="slide.titleTag ? slide.titleTag : 'p'"
                  v-bind="slide.titleAttrs"
                >
                  {{ slide.title }}
                </component>

                <p v-bind="slide.subTitleAttrs">
                  {{ slide.subtitle }}
                </p>
                <!-- Slide title -->
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
            lg="6"
            class="px-0"
            :style="slide.img ? '' : 'display: contents'"
          >
            <div
              v-if="slide.img"
              class=""
            >
              <!-- Image -->
              <v-img
                class="slider-img h-100 w-100"
                style="z-index: -1"
                cover
                :src="slide.img.src"
                v-bind="slide.img.attrs"
              />
              <!-- Image END -->
            </div>
          </v-col>
        </v-row>
      </swiper-slide>
    </swiper-container>

    <div
      v-if="controlButtonsAlign === 'center'"
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
      v-if="controlButtonsAlign === 'right'"
      class="control-buttons-right-container"
    >
      <div
        :class="[
          { 'px-12': !sliderContainer },
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
      v-if="controlButtonsAlign === 'left-bottom'"
      class="control-buttons-left-bottom-container"
      :class="[{ 'px-9': !sliderContainer }]"
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
          v-if="controlButtonsAlign === 'bottom'"
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

import { defineProps, useAttrs, ref, onMounted } from "vue";
import { useMainStore } from "../../../store/mainStore.js";
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
});

// Slider ref
const slider = ref(null);

const activeSlide = ref(0);
const pagination = ref(props.slides);

const slideTo = (index) => {
  if (slider.value !== null) {
    slider.value.swiper.slideTo(index);
  }
};

const slidePrev = () => {
  if (slider.value !== null) {
    slider.value.swiper.slidePrev(500);
  }
};

const slideNext = () => {
  if (slider.value !== null) {
    slider.value.swiper.slideNext(500);
  }
};

const updatePagination = () => {
  if (slider.value !== null) {
    props.slides.forEach((slide, index) => {
      pagination.value[index].active = false;
    });
    pagination.value[slider.value.swiper.realIndex].active = true;
  }
};

onMounted(() => {
  console.log(slider.value.swiper);
  activeSlide.value = slider.value.swiper.realIndex;
  if (pagination.value.length > 0) {
    pagination.value[0].active = true;
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
  z-index: 1;
}
</style>
