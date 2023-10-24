<template>
  <v-main>
    <v-container class="pb-0 mb-10">
      <v-breadcrumbs
        class="px-0"
        :items="[{ href: '/', title: 'Главная', }, {href: '/vacancies', title: 'Вакансии'}, name]"
        divider=">"
      />
      <h1 class="mb-0 text-h4">
        {{ name }}
      </h1>
    </v-container>

    <div class="bg-grey-lighten-4 mb-15 py-8">
      <v-container class="py-0 d-flex align-center flex-wrap">
        <v-row>
          <v-col>
            <p class="text-h6 text-grey-darken-1">
              <span class="text-black"> Опыт работы :</span> {{ experience }}
            </p>
            <p class="text-h6 text-grey-darken-1">
              <span class="text-black"> Занятость :</span> {{ schedule }}
            </p>
          </v-col>

          <v-col
            cols="12"
            md="6"
            lg="4"
          >
            <v-alert
              class="ml-auto text-center flex-0-0 px-10 py-5"
              rounded="lg"
              border-color="grey-lighten-2"
              variant="outlined"
            >
              <p class="mb-0 text-h6">
                ЗП от : {{ salary }}
              </p>
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <!-- Requirements -->
      <h2 class="text-h5 mb-6">
        Требования
      </h2>

      <ol
        class="mb-10"
        style="list-style-position: inside;"
      >
        <li
          v-for="requirement in requirements"
          :key="requirement.id"
          class="text-17 text-grey-darken-3"
        >
          {{ requirement.title }}
        </li>
      </ol>
      <!-- Requirements END -->

      <!-- Responsibilities -->
      <h2 class="text-h5 mb-6">
        Обязанности
      </h2>

      <ol
        class="mb-0 mb-10"
        style="list-style-position: inside;"
      >
        <li
          v-for="duty in responsibilities"
          :key="duty.id"
          class="text-17 text-grey-darken-3"
        >
          {{ duty.title }}
        </li>
      </ol>
      <!-- Responsibilities END -->

      <!-- Conditions -->
      <h2 class="text-h5 mb-6">
        Что даем
      </h2>

      <ol class="mb-16" style="list-style-position: inside;">
        <li
          v-for="condition in conditions"
          :key="condition.id"
          class="text-17 text-grey-darken-3"
        >
          {{ condition.title }}
        </li>
      </ol>
      <!-- Conditions END -->

      <Forms
        v-bind="formAttrs"
        @form-data="formData"
      />
    </v-container>
  </v-main>
</template>

<script setup>
  import Forms from './Forms.vue'
  import {defineProps, defineEmits, useAttrs} from 'vue'
  import { useMainStore } from '../../../store/mainStore.js'

  const attrs = useAttrs()
  const emit = defineEmits(['form-data'])
  const props = defineProps({
    name: {
      type: String,
      default: ''
    },

    experience: {
      type: String,
      default: ''
    },

    schedule: {
      type: String,
      default: ''
    },

    salary: {
      type: String,
      default: ''
    },

    requirements: {
      type: Array,
      default: () => []
    },

    responsibilities: {
      type: Array,
      default: () => []
    },

    conditions: {
      type: Array,
      default: () => []
    },
  })
  const mainStore = useMainStore()

  const formAttrs = {
    ...mainStore.getObjectPropertiesWithPrefix(attrs, 'form')
  }

  const formData = (data) => {
    emit('form-data', data )
  }
</script>

<style scoped>

</style>
