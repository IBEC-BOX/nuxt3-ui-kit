<template>
  <div class="products__cards position-relative">
    <div
      v-if="isWideScreen"
      class="products__cards-scale d-flex position-relative"
    >
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        class="products__card pa-8 d-flex flex-column justify-space-between"
        :class="{ 'is-active': activeCardIndex === index }"
        :style="{'background-image': `url(${card.background})`}"
        @click="activeCardIndex = index"
      >
        <header
          class="products__card-header d-flex"
          :class="{'is-visible flex-nowrap': activeCardIndex === index}"
        >
          <v-img
            :src="card.icon"
            v-bind="titleIconAttrs"
            :class="Object.keys(titleIconAttrs).length ? '' : 'mr-4'"
          />
          <h4 v-bind="titleTextAttrs">
            {{ card.title }}
          </h4>
        </header>
        <footer
          class="products__card-footer"
          :class="{'is-visible': activeCardIndex === index}"
        >
          <v-chip v-bind="chipAttrs">
            {{ card.chip }}
          </v-chip>
        </footer>
      </div>
    </div>
    <div
      v-else
      class="products__cards-slider"
    >
      <header class="d-flex align-center mb-5">
        <v-img
          :src="cards[0].icon"
          v-bind="titleIconAttrs"
          :class="Object.keys(titleIconAttrs).length ? '' : 'mr-1'"
        />
        <h4 v-bind="titleTextAttrs">
          {{ cards[0].title }}
        </h4>
      </header>
      <swiper-container
        :slides-per-view="1.2"
        :space-between="10"
        direction="horizontal"
        class="position-relative overflow-hidden"
        v-bind="sliderAttrs"
      >
        <swiper-slide
          v-for="card in cards"
          :key="card.id"
          class="products__cards-slide"
        >
          <div class="products__cards-slider-item">
            <v-img
              :src="card.background"
              cover
              class="products__cards-slider-item-img"
            />
            <v-chip
              v-bind="chipAttrs"
              class="products__cards-slider-item-chip"
            >
              {{ card.chip }}
            </v-chip>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useAttrs } from "vue";
import { register } from "swiper/element/bundle";
import { getObjectPropertiesWithPrefix } from "../../../utils/attrs";

const attrs = useAttrs()
const titleTextAttrs = {
  ...getObjectPropertiesWithPrefix(attrs, 'title-text')
}
const titleIconAttrs = {
  ...getObjectPropertiesWithPrefix(attrs, 'title-icon')
}
const chipAttrs = {
  ...getObjectPropertiesWithPrefix(attrs, 'chip')
}
const sliderAttrs = {
  ...getObjectPropertiesWithPrefix(attrs, 'slider')
}

register();

const props = defineProps({
  cards: { type: Array, default: () => [] },
})

const activeCardIndex = ref<number>(0);
const isWideScreen = ref<boolean>(false);

const updateScreenSize = (): void => {
  if(typeof window !== 'undefined') {
    isWideScreen.value = window.innerWidth > 1280;
  }
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<style lang="scss">
.products {
  &__cards-scale {
    column-gap: 20px;
  }
  &__card {
    cursor: pointer;
    width: 100%;
    max-width: 213px;
    height: 556px;
    border-radius: 32px;
    transition: max-width 0.4s ease-in-out;
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: center right;
    &.is-active {
      width: 100%;
      max-width: 680px;
    }
    &-header, &-footer {
      transition: opacity .4s;
      opacity: 0;

      &.is-visible {
        opacity: 1;
      }
    }
    &-footer {
      .v-chip{
        padding-top: 18px;
        padding-bottom: 18px;
        background: rgba(39, 39, 39, 0.76);
        &__content {
          color: #fff;
        }
      }
    }
  }
  &__cards-slider-item {
    position: relative;
    height: 264px;
    &-img {
      border-radius: 24px;
      height: 264px;
    }
    &-chip {
      position: absolute;
      z-index: 2;
      bottom: 16px;
      left: 16px;
      &.v-chip{
        padding: 8px 16px;
        background: rgba(39, 39, 39, 0.76);
        .v-chip__content {
          color: #fff;
          font-size: 15px;
        }
      }
    }
  }
}

</style>
