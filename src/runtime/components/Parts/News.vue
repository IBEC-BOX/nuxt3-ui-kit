<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <div class="parts__news-title mb-5">
      <h2 class="text-32 font-weight-regular">Новости</h2>
    </div>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.id"
        :cols="settingsCol.cols == '' ? 12 : settingsCol.cols"
        :sm="settingsCol.sm == '' ? 6 : settingsCol.sm"
        :md="settingsCol.md == '' ? 4 : settingsCol.md"
        :lg="settingsCol.lg == '' ? 4 : settingsCol.lg"
        :xl="settingsCol.xl == '' ? 4 : settingsCol.xl"
        :xxl="settingsCol.xxl == '' ? 4 : settingsCol.xxl"
        class="mb-8 d-flex justify-center"
      >
        <Card
          :width="card.width"
          :min-height="card.minHeight == '' ? 414 + 'px' : card.minHeight"
          :style-card="card.styleCard"
          :variant-card="card.variantCard"
          :horizontal-card="card.horizontalCard"
          :horizontal-width-image="card.horizontalWidthImage"
          :date-author-right="card.dateAuthorRight"
          :position-image-vacancy="card.positionImageVacancy"
          :img-src="card.imgSrc"
          :img-alt="card.imgAlt"
          :title="card.title"
          :subtitle="card.subtitle"
          :price="card.price"
          :text="card.text"
          :date="card.date"
          :author="card.author"
          :city="card.city"
          :status-vacancy="card.statusVacancy"
        >
          <template v-slot:button>
            <v-btn
              :icon="card.iconButton === '' ? false : card.iconButton"
              :append-icon="card.appendIconButton"
              :variant="settingsButton.variant === '' ? 'text' : settingsButton.variant"
              :stacked="settingsButton.stacked"
              :size="settingsButton.size === '' ? 'large' : settingsButton.size"
              :block="settingsButton.block"
              :density="settingsButton.density === '' ? 'compact' : settingsButton.density"
              :rounded="settingsButton.rounded === '' ? '0' : settingsButton.rounded"
              :elevation="settingsButton.elevation === '' ? '2' : settingsButton.elevation"
              :ripple="settingsButton.ripple"
              :color="settingsButton.color === '' ? 'primary' : settingsButton.color"
              @click="card.functionButton()"
            >
              {{ card.textButton }}
            </v-btn>
          </template>
        </Card>
      </v-col>
    </v-row>
    <slot name="buttonNews"></slot>
  </v-container>
</template>

<script setup>
import Card from "../Parts/Card.vue"

const props = defineProps({
  cards: { type: Array, default: () => [] },
  settingsButton: { type: Object, default: () => ({}) },
  settingsCol: { type: Object, default: () => ({}) }
})
</script>
