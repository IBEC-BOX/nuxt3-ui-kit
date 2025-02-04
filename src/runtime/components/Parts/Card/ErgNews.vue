<template>
  <nuxt-link
    :to="card.link"
    class="erg__card__news text-decoration-none d-flex h-100"
  >
    <div
      class="erg__card__news__wrapper d-flex flex-column justify-between h-100"
      v-bind="wrapperAttrs"
    >
      <v-img
        :src="card.image"
        cover
        min-height="194"
        max-height="194"
        alt="news-image"
        class="erg__card__news__wrapper-img"
        v-bind="imageAttrs"
      />
      <p
        class="mb-auto erg__card__news__wrapper-title"
        v-bind="titleAttrs"
      >
        {{ card.title }}
      </p>
      <span
        class="erg__card__news__wrapper-date"
        v-bind="dateAttrs"
      >
        {{ card.date }}
      </span>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { getObjectPropertiesWithPrefix } from "../../../utils/attrs";
import { useAttrs } from "vue";

const attrs = useAttrs()
const wrapperAttrs = {
  ...getObjectPropertiesWithPrefix(attrs, 'wrapper')
}
const titleAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, 'title')
})
const dateAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, 'date')
})
const imageAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, 'image')
})


const props = defineProps({
  card: { type: Object, default: () => ({}) },
})
</script>

<style lang="scss">
.erg__card__news {
  &__wrapper {
    padding: 24px;
    border-radius: 32px;
    box-shadow: -2px 4px 30px 0px rgba(24, 24, 24, 0.24);
    @media(max-width: 960px) {
      padding: 16px;
      border-radius: 16px;
    }
    &-title {
      line-height: normal;
      @media(max-width: 370px) {
        font-size: 16px !important;
        line-height: normal;
      }
    }
    &-title, &-date {
      padding: 0px;
      margin-top: 24px;
    }
  }
}
</style>
