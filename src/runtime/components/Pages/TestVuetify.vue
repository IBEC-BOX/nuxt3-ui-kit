<template>
  <v-app class="">
    <partsHeaderErg
      :burger="true"
      :bg-class-header="'bg-primary'"
      :color-class-menu="'text-white'"
      :column-gap-list="26"
      :text-btn="'Получить консультацию'"
      :class-menu-select="'asd'"
      :word-button-mobile="'asdsadsadsa'"
      :set-lang="[
        {
          code: 'ru',
          name: 'Ru'
        },
        {
          code: 'kk',
          name: 'Kz'
        },
        {
          code: 'en',
          name: 'En'
        }
      ]"
      :active-lang="'Ru'"
      button-size="large"
      :color-active-lang-mobile="'text-primary'"
    />
    <NuxtPage class="bg-primary" />
    <section class="h-100 bg-primary">
      <v-container class="px-4">
        <parts-pagination
          :pagination-total-visible="2"
          :pagination-last-page="10"
          :text-button-left-pagination="'asd'"
          :text-button-right-pagination="'asd'"
          :word-mobile-pagination="'Страница'"
          :ellipsis-mobile-pagination="'вп'"
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
      :social="socialsMedia"
      :swap-copyright-and-socials="true"
    />
  </v-app>
</template>

<script setup>

const socialsMedia =  [
  {
    id: 0,
    img: '/mail.svg',
  },
  {
    id: 1,
    img: '/mail.svg',
  },
  {
    id: 2,
    img: '/mail.svg',
  },
]

const cards = [
  {
    id: 1,
    background: '/bg-card.png',
    icon: '/word.svg',
    title: 'Производство',
    chip: 'Энергетическое оборудовние'
  },
  {
    id: 2,
    background: '/bg-card.png',
    icon: '/word.svg',
    title: 'РЕМОНТ',
    chip: 'Литейное производство'
  },
  {
    id: 3,
    background: '/bg-card.png',
    icon: '/word.svg',
    title: 'Производство',
    chip: 'Энергетическое оборудовние'
  },
  {
    id: 4,
    background: '/bg-card.png',
    icon: '/word.svg',
    title: 'РЕМОНТ',
    chip: 'Литейное производство'
  },
];


const formData = (data) => {
  console.log(data)
}

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

.bg-none {
  background: none;
}
</style>
