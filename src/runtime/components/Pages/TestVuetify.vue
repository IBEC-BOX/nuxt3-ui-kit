<template>
  <v-app class="">
    <partsHeaderErg
      :burger="false"
    />
    <NuxtPage />
    <section class="h-100">
      <v-container class=" px-4">

        <partsSlider
          :height="'400px'"
          slider-loop='true'
          slider-centered-slides='false'
          control-buttons-size="small"
          control-buttons-color="white"
          control-buttons-rounded='lg'
          control-buttons-class='mr-2'
          control-buttons-elevation="0"
          slider-container='false'
          control-buttons-align='left-bottom'
          :slides="slides"
        />


      </v-container>
    </section>

    <partsFooterDefault
      id="footer"
      :logo-in-body="true"
      :logo="{ title: 'АО', titleAttrs: {class: 'mb-4 text-h6'} }"
      nav-class="text-h6 text-black"
      :nav="[
        { id: 1, text: 'Overview', to: '/' },
        { id: 2, text: 'Features', to: '/' },
        { id: 3, text: 'Pricing', to: '/' },
        { id: 4, text: 'Careers', to: '/' },
        { id: 5, text: 'Help centre', to: '/' },
        { id: 6, text: 'Privacy', to: '/', image: '/arrow.png' },
      ]"
      :copyright="{
        text: '2023 Untitled UI. All rights reserverd'
      }"
    />
  </v-app>
</template>

<script setup>
const slides = [
  {
    id: 0,
    title: 'Кредитная карта\n с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    titleAttrs: {
      class: 'text-white w-75'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1'
        }
      }
    ],
    active: true
  },

  {
    id: 1,
    title: 'Страхование работников от несчастных случаев',
    titleAttrs: {
      class: 'text-h2 mb-0'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1'
        }
      }
    ],
    active: true
  },

  {
    id: 2,
    title: 'Кредитная карта с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    backgroundImg: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false
  },

  {
    id: 3,
    title: 'Страхование работников от несчастных случаев',
    titleAttrs: {
      class: 'text-h2 mb-0'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1'
        }
      }
    ],
    active: true
  },

  {
    id: 4,
    title: 'Кредитная карта\n с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    titleAttrs: {
      class: 'text-white w-75'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1'
        }
      }
    ],
    active: true
  },
]


</script>

<style lang="scss">
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
.custom-checkbox .v-input--selection-controls__input {
  align-items: flex-start;
}

.custom-checkbox .v-input--checkbox .v-icon {
  margin-top: 0px; /* Настройте это значение в зависимости от вашего дизайна */
}
</style>
