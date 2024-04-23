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
      :active-lang="'kk'"
      button-size="large"
      :color-active-lang-mobile="'text-primary'"
      :menu-mobile="[
        {
          title: 'asd'
        },
        {
          title: 'asd'
        },
        {
          title: 'asd'
        },
      ]"
      :color-burger="'black'"
      :color-burger-open="'secondary'"
    />
    <NuxtPage class="bg-primary" />
    <section class="h-100 bg-primary">
      <v-container class="px-4">
        <parts-files-erg
          display-mode="select"
          :content-select="Tabs"
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

const Tabs = [
  {
    year: 2024,
    data: [
      {
        extension:"docx",
        file: {
          mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          size:6109,
          url:"http://backend-ergla.ibec.systems/storage/83/01HVG93VT2DKTKSRPSRTPXAS01.docx",
        },
        file_icon:"",
        file_size_kb:"6 KB",
        published_at:"2024-04-15 12:04:04",
        published_file:"15.04.2024",
        title:"Отчет об исполнении ИП ДГОК тепло за 2021 год",
      },
      {
        extension:"unknown",
        file_icon:"",
        link:null,
        published_at:"2024-04-16 09:55:05",
        published_file:"16.04.2024",
        title:"Отчет об исполнении ИП ДГОК тепло за 2021 год",
      },
      {
        extension:"unknown",
        file_icon:"",
        link:'http://backend-ergla.ibec.systems/storage/83/01HVG93VT2DKTKSRPSRTPXAS01.docx',
        published_at:"2024-04-16 09:55:05",
        published_file:"16.04.2024",
        title:"Отчет об исполнении ИП ДГОК тепло за 2021 год",
      }
    ],
  },
  {
    year: 2023,
    data: [
      {
        extension:"docx",
        file: {
          mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          size:6109,
          url:"http://backend-ergla.ibec.systems/storage/83/01HVG93VT2DKTKSRPSRTPXAS01.docx",
        },
        file_icon:"",

        file_size_kb:"6 KB",
        published_at:"2024-04-15 12:04:04",
        published_file:"15.04.2024",
        title:"Отчет об исполнении ИП ДГОК тепло за 2021 год",
      },
      {
        extension:"unknown",
        file_icon:"",

        link:'http://backend-ergla.ibec.systems/storage/83/01HVG93VT2DKTKSRPSRTPXAS01.docx',
        published_at:"2024-04-16 09:55:05",
        published_file:"16.04.2024",
        title:"Отчет об исполнении ИП ДГОК тепло за 2021 год",
      }
    ],
  },
]

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
