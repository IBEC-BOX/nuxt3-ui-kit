<template>
  <v-card
    class="card-standard"
    :width="+width + 'px'"
    :variant="variantCard"
    :class="[horizontalCard === true ? 'd-flex pl-4 py-4' : 'd-block'], !imgSrc.length ? 'px-0 py-4' : 'pa-0 pb-4'"
    v-if="styleCard === 'standard'"
  >
    <v-img
      :src="imgSrc"
      :alt="imgAlt"
      :width="horizontalCard === true ? +horizontalWidthImage + 'px' : 90 + '%'"
      class="rounded-lg"
      object-cover
      :class="horizontalCard === true ? 'ma-0' : 'ma-4'"
      v-if="imgSrc.length"
    />
    <div class="d-flex flex-column">
      <v-card-title class="text-h5 text-primary-black font-weight-regular pt-0" v-if="title.length">{{ title }}</v-card-title>
      <v-card-text class="text-primary px-4 flex-0-1" v-if="text"><span class="text-15">{{ text }}</span></v-card-text>

      <v-card-subtitle class="mb-4 d-flex align-center" v-if="date || author" :class="dateAuthorRight === true ? 'justify-end': 'justify-start'">
        <span class="text-15">{{ date }}</span>
        <svg class="mx-2" v-if="date && author" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="#A5A7AD"/>
        </svg>
        <span class="text-15">{{ author }}</span>
      </v-card-subtitle>

      <v-card-action class="mt-auto mx-4" v-if="$slots.button">
        <slot name="button"></slot>
      </v-card-action>
    </div>
  </v-card>
  <v-card
    :width="+width + 'px'"
    :variant="variantCard"
    v-else-if="styleCard === 'vacancy'"
    class="card-vacancy px-2 py-4"
  >
    <v-card-title
      class="d-flex font-weight-regular mb-2"
      :class="positionImageVacancy === 'start' ? 'flex-row-reverse justify-end' : 'justify-space-between'"
      v-if="title || subtitle || imgSrc"
    >
      <div>
        <p class="text-17" v-if="title">{{ title }}</p>
        <p class="text-15 text-primary" v-if="subtitle">{{ subtitle }}</p>
      </div>
      <div v-if="imgSrc" :class="positionImageVacancy === 'start' ? 'mr-4' : ''">
        <v-img :width="100" :src="imgSrc" :alt="imgAlt" class="rounded" />
      </div>
    </v-card-title>
    <v-card-subtitle class="font-weight-semi-bold text-black" style="opacity: 1;" v-if="price"><span class="text-15">{{ price }}</span></v-card-subtitle>
    <v-card-text class="text-primary" v-if="text">{{ text }}</v-card-text>
    <div class="px-4 pb-4" v-if="Object.keys(statusVacancy).length">
      <span
        class="py-1 px-4 rounded"
        :class="statusVacancy.status === 'error' ? 'errorVacancy' : 'successVacancy'"
      >
        {{ statusVacancy.text }}
      </span>
    </div>
    <div class="px-4 d-flex justify-space-between align-center" v-if="$slots.button || city">
      <slot name="button"></slot>
      <span class="text-primary">{{ city }}</span>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
  width: { type: Number || String, default: 349 },
  styleCard: { type: String, default: "standard" },
  variantCard: { type: String, default: "elevated"},
  horizontalCard: { type: String, default: false },
  horizontalWidthImage: { type: Number || String, default: 340 },
  dateAuthorRight: { type: Boolean, default: false },
  positionImageVacancy: { type: String, default: "start" },

  imgSrc: { type: String, default: ""},
  imgAlt: { type: String, default: ""},
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  price: { type: String, default: "" },
  text: { type: String, default: "" },
  date: { type: String, default: "" },
  author:{ type: String, default: "" },
  city: { type: String, default: "" },
  statusVacancy: { type: Object, default: () => ({}) },
})
</script>

<style lang="scss">
.card-vacancy {
  .errorVacancy {
    background: rgb(var(--v-theme-error-opacity)) !important;
    color: rgb(var(--v-theme-error)) !important;
  }
  .successVacancy {
    background: rgb(var(--v-theme-success-opacity)) !important;
    color: rgb(var(--v-theme-success)) !important;
  }
}
</style>