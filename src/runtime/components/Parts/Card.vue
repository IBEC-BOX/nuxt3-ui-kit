<template>
  <v-card
    v-if="styleCard === 'standard'"
    class="card-standard w-100"
    :max-width="+maxWidth + 'px'"
    :min-height="+minHeight == '' ? 100 + '%' : minHeight"
    :variant="variantCard"
    :class="[`${horizontalCard === true ? 'd-flex pl-4 pt-4 pb-2' : 'd-block'} ${!imgSrc.length ? 'px-0 pt-4 pb-2' : 'pa-0 pb-2'}`]"
  >
    <v-img
      v-if="imgSrc.length"
      :src="imgSrc"
      :alt="imgAlt"
      :width="horizontalCard === true ? +horizontalWidthImage + 'px' : 90 + '%'"
      class="rounded-lg"
      object-cover
      :class="horizontalCard === true ? 'ma-0' : 'ma-4'"
    />
    <div class="d-flex flex-column">
      <v-card-title
        v-if="title.length"
        class="text-h5 text-primary-black font-weight-regular pt-0"
      >
        {{ title }}
      </v-card-title>
      <v-card-text
        v-if="text"
        class="text-primary px-4 flex-0-1"
      >
        <span class="text-15">{{ text }}</span>
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
    :max-width="+maxWidth + 'px'"
    :min-height="+minHeight == '' ? 100 + '%' : minHeight"
    :variant="variantCard"
    class="card-vacancy px-2 py-4 w-100"
  >
    <v-card-title
      v-if="title || subtitle || imgSrc"
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
        v-if="imgSrc"
        :class="positionImageVacancy === 'start' ? 'mr-4' : ''"
      >
        <v-img
          :width="100"
          :src="imgSrc"
          :alt="imgAlt"
          class="rounded"
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
</template>

<script setup>
const props = defineProps({
  maxWidth: { type: Number || String, default: 349 },
  minHeight: { type: Number || String, default: 0},
  styleCard: { type: String, default: "standard" },
  variantCard: { type: String, default: "elevated"},
  horizontalCard: { type: Boolean, default: false },
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
  statusVacancy: { type: Array, default: () => [] },
})
</script>
