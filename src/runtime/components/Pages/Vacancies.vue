<template>
  <v-main>
    <v-container>
      <v-breadcrumbs
        class="px-0"
        :items="breadcrumbs"
        divider=">"
      />
      <h1 class="mb-10 text-h4">
        Вакансии
      </h1>

      <v-row class="mb-16">
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <partsCard
            :max-width="500"
            v-bind="card"
          >
            <template
              v-if="'button' in card || 'city' in card"
              #button
            >
              <div class="d-flex align-center w-100">
                <v-btn
                  v-if="'button' in card"
                  class="mr-auto"
                  v-bind="{...defaultButton, ...card.button}"
                  @click="'function' in card.button ? card.button.function() : null"
                />

                <span
                  v-if="'city' in card"
                  class="text-15 text-primary"
                >
                  {{ card.city }}
                </span>
              </div>
            </template>
          </partsCard>
        </v-col>
      </v-row>

      <partsForms
        v-bind="formAttrs"
        @form-data="formData"
      />
    </v-container>
  </v-main>
</template>

<script setup>
  import {defineProps, defineEmits, useAttrs} from 'vue'
  import { useMainStore } from "../../store/mainStore";

  const attrs = useAttrs()
  const emit = defineEmits(['form-data'])
  const mainStore = useMainStore()
  const props = defineProps({
    cards: {
      type: Array,
      default: () => []
    },

    breadcrumbs: {
      type: Array,
      default: () => [{ href: '/', title: 'Главная' }, 'Вакансии'],
    }
  })

  const formAttrs = {
    ...mainStore.getObjectPropertiesWithPrefix(attrs, 'form')
  }

  const formData = (data) => {
    emit('form-data', data )
  }

  const defaultButton = {
    size: 'large',
    color: 'white',
    class: 'bg-primary text-body-1',
    rounded: 'pill',
    text: 'Open'
  }
</script>

<style scoped>

</style>
