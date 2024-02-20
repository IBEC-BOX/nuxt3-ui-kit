<template>
  <v-card
    v-if="styleCard === 'standard'"
    class="card-standard"
    :variant="variantCard"
    :class="[`${horizontalCard === true ? 'd-flex align-center' : 'd-block'} ${!image ? 'px-0 pt-4 pb-2' : ''}`]"
    :style="{'column-gap': gap + 'px' }"
    v-bind="cardAttrs"
  >
    <v-img
      v-if="image"
      :src="image.src"
      v-bind="image.attrs"
    />
    <div class="d-flex flex-column">
      <v-card-title
        v-if="title"
        v-bind="titleAttrs"
      >
        {{ title }}
      </v-card-title>
      <v-card-text
        v-if="text && !modal"
        v-bind="textAttrs"
        :class="hoverText ? 'card__text-hover' : ''"
        class="d-flex align-center"
      >
        <v-img
          v-if="textImage"
          :src="textImage.src"
          v-bind="textImage.attrs"
          class="mr-2"
        />
        <span>{{ text }}</span>
      </v-card-text>

      <v-card-text
        v-if="text && modal"
        v-bind="textAttrs"
        :class="hoverText ? 'card__text-hover' : ''"
        class="d-flex align-center"
        @click="openModal = true"
      >
        <v-img
          v-if="textImage"
          :src="textImage.src"
          v-bind="textImage.attrs"
          class="mr-2"
        />
        <span>{{ text }}</span>
      </v-card-text>

      <v-card-text
        v-if="textBody && modal"
        v-bind="textAttrs"
        :class="hoverText ? 'card__text-hover' : ''"
        class="d-flex align-center"
        @click="openModal = true"
      >
        <v-img
          v-if="textImage"
          :src="textImage.src"
          v-bind="textImage.attrs"
          class="mr-2"
        />
        <div v-html="textBody" />
      </v-card-text>

      <v-card-subtitle
        v-if="date || author"
        class="mb-4 d-flex align-center"
        :class="dateAuthorRight === true ? 'justify-end': 'justify-start'"
      >
        <span class="text-15">{{ date }}</span>
        <svg
          v-if="date && author"
          class="mx-2"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle
            cx="4"
            cy="4"
            r="4"
            fill="#A5A7AD"
          />
        </svg>
        <span class="text-15">{{ author }}</span>
      </v-card-subtitle>

      <v-card-actions
        v-if="$slots.button"
        class="mt-auto"
      >
        <slot name="button" />
      </v-card-actions>
    </div>
  </v-card>
  <v-card
    v-else-if="styleCard === 'vacancy'"
    :variant="variantCard"
    v-bind="cardAttrs"
    class="card-vacancy px-2 py-4 w-100"
  >
    <v-card-title
      v-if="title || subtitle || image"
      class="d-flex font-weight-regular mb-2"
      :class="positionImageVacancy === 'start' ? 'flex-row-reverse justify-end' : 'justify-space-between'"
    >
      <div>
        <p
          v-if="title"
          class="text-17"
        >
          {{ title }}
        </p>
        <p
          v-if="subtitle"
          class="text-15 text-primary"
        >
          {{ subtitle }}
        </p>
      </div>
      <div
        v-if="image"
        :class="positionImageVacancy === 'start' ? 'mr-4' : ''"
      >
        <v-img
          :src="image.src"
          v-bind="image.attrs"
        />
      </div>
    </v-card-title>
    <v-card-subtitle
      v-if="price"
      class="font-weight-semi-bold text-black"
      style="opacity: 1;"
    >
      <span class="text-15">{{ price }}</span>
    </v-card-subtitle>
    <v-card-text
      v-if="text"
      class="text-primary"
    >
      {{ text }}
    </v-card-text>
    <div
      v-if="statusVacancy.length"
      class="px-4 pb-4 d-flex"
      style="column-gap: 8px"
    >
      <v-chip
        v-for="status in statusVacancy"
        :key="status.id"
        label
        :color="status.status === 'error' ? 'red' : 'green'"
        text-color="white"
      >
        {{ status.text }}
      </v-chip>
    </div>
    <v-card-actions>
      <slot name="button" />
    </v-card-actions>
  </v-card>
  <partsModal
    v-if="modal"
    v-model="openModal"
    :img="modalImg"
    :img-fluid="true"
    :img-only="true"
    :width="modalWidth"
    img-height="100%"
  />
</template>

<script setup>
import { useMainStore } from "../../store/mainStore";
import {useAttrs, ref} from "vue";
const mainStore = useMainStore()

const attrs = useAttrs()
const cardAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'card')
}
const titleAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'title')
}
const textAttrs = {
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'text')
}

const openModal = ref(false)

const props = defineProps({
  styleCard: { type: String, default: "standard" },
  variantCard: { type: String, default: "elevated"},
  horizontalCard: { type: Boolean, default: false },
  dateAuthorRight: { type: Boolean, default: false },
  positionImageVacancy: { type: String, default: "start" },

  image: { type: Object, default: () => ({}) },
  gap: { type: Number, default: 0 },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  price: { type: String, default: "" },
  text: { type: String, default: "" },
  textBody: { type: String, default: "" },
  textImage: { type: Object, default: () => ({}) },
  hoverText: { type: Boolean, default: false },
  date: { type: String, default: "" },
  author:{ type: String, default: "" },
  city: { type: String, default: "" },
  statusVacancy: { type: Array, default: () => [] },

  modal: { type: Boolean, default: false },
  modalImg: { type: String, default: '' },
  modalWidth: { type: Number, default: 583 }
})
</script>

<style lang="scss" scoped>
.v-card-title {
  overflow: unset;
  white-space: normal;
  word-break: normal;
  word-wrap: normal;
}
.card__text-hover {
  transition: opacity .3s ease;
  opacity: .5;
  &:hover {
    opacity: 1;
    filter: brightness(0) saturate(100%) invert(98%) sepia(100%) saturate(8%) hue-rotate(148deg) brightness(102%) contrast(102%);
  }
}


</style>
