<template>
  <swiper-container
    ref="swiperRefGalleryBlocks"
    :slides-per-view="blocks.length === 4 ? (lgAndUp ? 4 : (mdAndUp ? 3.2 : 1.2)) : (lgAndUp ? 4.2 : (mdAndUp ? 3.2 : 1.2))"
    :space-between="lgAndUp ? 20 : 8"
    direction="horizontal"
    class="row-gallery-blocks d-block"
    height="290px"
    v-bind="swiperAttrs"
  >
    <swiper-slide
      v-for="(block, index) in blocks"
      :key="`gallery-block-${index}`"
    >
      <template v-if="!disableLinks">
        <nuxt-link :to="`/gallery/${block.id}`">
          <v-card elevation="0" height="290px" class="row-gallery-blocks-card bg-transparent">
            <v-img :src="block.preview" height="290px" width="100%" cover class="row-gallery-blocks-card-image" />
            <div class="row-gallery-blocks-card-title py-3 px-4">
              <span>{{ block.category.title }}</span>
            </div>
          </v-card>
        </nuxt-link>
      </template>
      <template v-else>
        <v-card elevation="0" height="290px" class="row-gallery-blocks-card bg-transparent">
          <v-img :src="block.preview" height="290px" width="100%" cover class="row-gallery-blocks-card-image" />
          <div class="row-gallery-blocks-card-title py-3 px-4">
            <span>{{ block.category.title }}</span>
          </div>
        </v-card>
      </template>

    </swiper-slide>
  </swiper-container>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
import { register } from "swiper/element/bundle";
import { useDisplay } from "vuetify";
import { useMainStore } from "../../../store/mainStore";

const mainStore = useMainStore();

const attrs = useAttrs();
const swiperAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, "swiper"),
};

register()

const props = defineProps({
  blocks: {
    type: Array,
  },
  disableLinks: {
    type: Boolean,
    default: false,
  },
})

const { mdAndUp, lgAndUp } = useDisplay()
</script>

<style scoped lang="scss">
.row-gallery-blocks {
  &-card {
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
      span {
        color: #fff;
      }
    }
  }
}
</style>
