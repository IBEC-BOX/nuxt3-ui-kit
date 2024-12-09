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
        <client-only>
          <partsSlider
            id="slider-about"
            :slides="slides"
            slider-allow-touch-move="false"
            slider-speed="500"
            :static-chips="{
              text: 'about',
              attrs: {
                class: 'mt-12 mb-8 ml-9 ml-md-13',
                color: 'white',
                variant: 'outlined',
                style: 'margin-top: 123px !important;'
              }
            }"
            :slider-pagination="true"
            :show-buttons="false"
            slider-direction="vertical"
            :slider-pagination-active-variant="'white'"
            :height="'800px'"
            :control-scroll="true"
            :slider-background-image="'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :slider-background-image-zoom="true"
            :slider-background-image-zoom-scale="1.5"
            class="main__about__slider"
          />

        </client-only>
      </v-container>
    </section>


    <parts-footer-erg
      :contacts="contacts"
      :socials="socialsMedia"
    />
<!--    <partsFooterDefault-->
<!--      id="footer"-->
<!--      :logo-in-body="true"-->
<!--      :logo="{ title: 'АО', titleAttrs: {class: 'mb-4 text-h6'} }"-->
<!--      nav-class="text-h6 text-black"-->
<!--      :nav="[-->
<!--        { id: 1, text: 'Overview', to: '/' },-->
<!--        { id: 2, text: 'Features', to: '/' },-->
<!--        { id: 3, text: 'Pricing', to: '/' },-->
<!--        { id: 4, text: 'Careers', to: '/' },-->
<!--        { id: 5, text: 'Help centre', to: '/' },-->
<!--        { id: 6, text: 'Privacy', to: '/', image: '/arrow.png' },-->
<!--      ]"-->
<!--      :copyright="{-->
<!--        text: '2023 Untitled UI. All rights reserverd'-->
<!--      }"-->
<!--      :social="socialsMedia"-->
<!--      :swap-copyright-and-socials="true"-->
<!--    />-->
  </v-app>
</template>

<script setup>
const contacts = [
  {
    title: 'asd',
    phone: `<p>8 (71837) 9 99 03 (Канцелярия)</p><p>8 (71837) 9 99 00 (Приемная)</p>`,
    imagePhone: '/phone.svg',
    mail: 'info.bts@erg.kz',
    mailImage: '/mail.svg',
    location: 'АО «ССГПО» улица Ленина, 26, г. Рудный, Костанайская область, 111500. Есть филиал в Астане, ул.Кунаева, 2, 010000',
    imageLocation: '/location.png',
  },
  {
    title: 'asd',
    phone: `<p>8 (71837) 9 99 03 (Канцелярия)</p><p>8 (71837) 9 99 00 (Приемная)</p>`,
    imagePhone: '/phone.svg',
    mail: 'info.bts@erg.kz',
    mailImage: '/mail.svg',
    location: 'АО «ССГПО» улица Ленина, 26, г. Рудный, Костанайская область, 111500. Есть филиал в Астане, ул.Кунаева, 2, 010000',
    imageLocation: '/location.png',
  },
]

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
