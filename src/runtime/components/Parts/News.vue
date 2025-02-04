<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <div class="parts__news-title mb-5">
      <h2
        class="text-32 font-weight-regular"
        :class="`justify-${positionTitle}`"
      >
        {{ title }}
      </h2>
    </div>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.id"
        v-bind="settingsCol"
        class="mb-8 d-flex justify-center"
      >
        <Card
          :width="card.width"
          :min-height="card.minHeight"
          :style-card="card.styleCard"
          :variant-card="card.variantCard"
          :horizontal-card="card.horizontalCard"
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
          <template #button>
            <v-btn
              :icon="card.iconButton"
              :append-icon="card.appendIconButton"
              v-bind="settingsButton"
              class="d-flex"
              style="column-gap: 6px"
              @click="card.functionButton()"
            >
              {{ card.textButton }}
            </v-btn>
          </template>
        </Card>
      </v-col>
    </v-row>
    <slot name="buttonNews" />
  </v-container>
</template>

<script setup>
import Card from "./Card/Default.vue"

const props = defineProps({
  cards: {
    type: Array,
    default: () => ([
      {
        width: '',
        minHeight: '414px',
        styleCard: {},
        variantCard: '',
        horizontalCard: false,
        dateAuthorRight: false,
        positionImageVacancy: '',
        imgSrc: '',
        imgAlt: '',
        title: '',
        subtitle: '',
        price: '',
        text: '',
        date: '',
        author: '',
        city: '',
        statusVacancy: '',
        iconButton: false,
        appendIconButton: ''
      }
    ])
  },
  settingsButton: {
    type: Object,
    default: () => ({
      variant: 'text',
      size: 'large',
      density: 'compact',
      rounded: '0',
      elevation: '2',
      color: 'primary',
    })
  },
  settingsCol: {
    type: Object,
    default: () => ({
      cols: 12,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
      xxl: 4
    })
  },
  title: { type: String, default: 'Новости' },
  positionTitle: { type: String, default: 'center' },
})
</script>
