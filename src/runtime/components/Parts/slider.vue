<template>
  <div class="position-relative">
    <swiper-container
      v-bind="sliderAttrs"
      :ref="(el) => { defineSlider(el) }"
      @swiperslidechange="updatePagination"
      :slides-per-view="sliderPeeking ? '1.3' : '1'"
      class="overflow-hidden w-100"
      :class="[`rounded-${rounded}`]"
      :style="{'height': height}"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.id"
        class="overflow-hidden"
        v-bind="slidesAttrs"
        :class="`rounded-${slidesRounded}`"
      >
        <div v-if="slide.img" class="image-backdrop">
          <!-- Image -->
          <v-img
            class="slider-img position-absolute h-100 w-100"
            style="z-index: -1;"
            cover
            :src="slide.img"
          />
          <!-- Image END -->
        </div>

        <component
          :is="sliderContainer ? 'v-container': 'div'"
          class="d-flex flex-column justify-center align-start h-100"
          :class="{'px-12': !sliderContainer}"
        >
          <div>
            <!-- Slide title -->
            <!-- Добавил возможность указывать тег чтобы была возможность для настройки SEO -->
            <component
              :is="slide.titleTag ? slide.titleTag: 'p'"
              v-bind="slide.titleAttrs"
              class="mb-0 text-h3 mb-4 font-weight-medium"
            >
              {{ slide.title }}
            </component>

            <p class="mb-4" v-bind="slide.subTitleAttrs">
              {{ slide.subtitle }}
            </p>
            <!-- Slide title -->
          </div>

          <!-- body slot -->
          <div v-html="slide.bodySlot" />
          <!-- body slot end -->

          <!-- Slider buttons -->
          <div class="mb-15">
            <v-btn
              v-for="button in slide.buttons"
              :key="button.id"
              v-bind="button.attrs"
            >
              {{ button.text }}
            </v-btn>
          </div>
          <!-- Slider buttons END -->
        </component>
      </swiper-slide>
    </swiper-container>

    <div class="control-buttons-center-container" v-if="controlButtonsAlign === 'center'">
      <v-container class="d-flex justify-space-between px-0">
        <v-btn
          style="margin-left: -86px"
          v-bind="controlButtonPrevAttrs"
          icon="mdi-chevron-left"
          @click="slidePrev"
        />

        <v-btn
          style="margin-right: -86px"
          v-bind="controlButtonNextAttrs"
          icon="mdi-chevron-right"
          @click="slideNext"
        />
      </v-container>
    </div>

    <div class="control-buttons-right-container" v-if="controlButtonsAlign === 'right'">
      <component
        :is="sliderContainer ? 'v-container' : 'div'"
        :class="{'px-12' : !sliderContainer}"
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
      </component>
    </div>

    <!-- Slider control -->
    <div class="slider_pagination_container">
      <component
        :is="sliderContainer ? 'v-container': 'div'"
        class="w-100 d-flex align-end"
        :class="{'px-12': !sliderContainer}"
      >
        <!-- Pagination -->
        <div class="slider_pagination" :class="{'mx-auto': sliderPaginationCenter}" v-if="sliderPagination">
          <span
            v-for="(slide, index) in pagination"
            :key="slide.id"
            :class="[
              slide.active ? `bg-${props.sliderPaginationActiveVariant}` : '',
              sliderPaginationType === 'bullet' ? 'slider-pagination-bullet' :
              sliderPaginationType === 'dot' ? 'slider-pagination-dot' : '', ]"
            @click="slideTo(index)"
          >
          </span>
        </div>
        <!-- Pagination END -->

        <div class="ml-auto" v-if="controlButtonsAlign === 'right' && swiper !== null">
          {{ activeSlide + 1 }} / {{ slides.length }}
        </div>

        <!-- Control buttons -->
        <div class="d-flex ml-auto" v-if="controlButtonsAlign === 'bottom'">
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
      </component>
    </div>
    <!-- Slider control END -->
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
register()

import { defineProps, useAttrs, ref } from 'vue'
import { useMainStore } from "../../../store/mainStore.js";
const mainStore = useMainStore()

//Attributes
const attrs = useAttrs()
const sliderAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'slider')
}
const slidesAttrs = mainStore.getObjectPropertiesWithPrefix(attrs, 'slides')
const controlButtonsAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'control-buttons')
}
const controlButtonPrevAttrs = {
  ...controlButtonsAttrs,
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'control-button-prev')
}
const controlButtonNextAttrs = {
  ...controlButtonsAttrs,
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'control-button-next')
}
const props = defineProps({
  rounded: {
    type: String,
    default: '',
  },

  height: {
    type: String,
    default: '534px'
  },

  slides: {
    type: Array,
    default: () => []
  },

  slidesRounded: {
    type: String,
    default: '0'
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
    default: false
  },

  sliderPaginationType: {
    type: String,
    default: 'bullet',
  },

  sliderPaginationActiveVariant: {
    type: String,
    default: 'primary',
  },

  sliderPeeking: {
    type: Boolean,
    default: false,
  },

  controlButtonsAlign: {
    type: String,
    default: 'bottom',
  },
})

// Slider ref
const slider = ref({})
const swiper = ref({})
const activeSlide = ref(0)
const pagination = ref(props.slides)
pagination.value[0].active = true

async function defineSlider(el) {
  if(el !== null) {
    swiper.value = el.swiper
    activeSlide.value = swiper.value.realIndex
    console.log(swiper)
  }
}

const updatePagination = () => {
  if('swiper' in slider.value) {
    props.slides.forEach((slide, index) => {
      pagination.value[index].active = false
    })
    pagination.value[activeSlide.value].active = true

    console.log(activeSlide.value)
  }
}

const slideTo = (index) => swiper.value.slideTo(index)
const slidePrev = () => swiper.value.slidePrev(500)
const slideNext = () => swiper.value.slideNext(500)
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

  .slider_pagination_container{
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

  .slider-pagination-bullet, .slider-pagination-dot {
    display: block;
    border-radius: 80px;
    background: #fff;
    transition: .3s;
    cursor: pointer;
  }

  .slider-pagination-bullet {
    width: 40px;
    height: 6px;
  }

  .slider-pagination-dot{
    height: 8px;
    width: 8px;
  }

  .control-buttons-center-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .control-buttons-center {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    &.control-button-prev {
      left: 32px;
    }

    &.control-button-next {
      right: 32px;
    }
  }

  .control-buttons-right-container {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
</style>
