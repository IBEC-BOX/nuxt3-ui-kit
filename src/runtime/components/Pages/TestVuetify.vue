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
      :show-button="false"
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
        <!--        <client-only>-->
        <!--          <partsSlider-->
        <!--            id="slider-about"-->
        <!--            :slides="slides"-->
        <!--            slider-allow-touch-move="false"-->
        <!--            slider-speed="500"-->
        <!--            :static-chips="{-->
        <!--              text: 'about',-->
        <!--              attrs: {-->
        <!--                class: 'mt-12 mb-8 ml-9 ml-md-13',-->
        <!--                color: 'white',-->
        <!--                variant: 'outlined',-->
        <!--                style: 'margin-top: 123px !important;'-->
        <!--              }-->
        <!--            }"-->
        <!--            :slider-pagination="true"-->
        <!--            :show-buttons="false"-->
        <!--            slider-direction="vertical"-->
        <!--            :slider-pagination-active-variant="'white'"-->
        <!--            :height="'800px'"-->
        <!--            :control-scroll="true"-->
        <!--            :slider-background-image="'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"-->
        <!--            :slider-background-image-zoom="true"-->
        <!--            :slider-background-image-zoom-scale="1.5"-->
        <!--            class="main__about__slider"-->
        <!--          />-->
        <!--        </client-only>-->
        <parts-gallery-row
          :blocks="gallery2"
          :disable-links="false"
          :show-button="true"
          :left-button-icon="'mdi-arrow-left'"
          :right-button-icon="'mdi-arrow-right'"
          variant="card"
          type-card="video"
          :image-play-video="'/playVideo.svg'"
        />
        <parts-gallery-view
          v-model="model"
          :gallery="gallery[0].images"
          :preview-image="preview"
        />

        <partsPlayerYoutube
          video="https://youtu.be/7uJNuyt_1AM?si=216YDRT97n2wMYaH"
          :mute="false"
        />
      </v-container>
    </section>


    <parts-footer-erg
      :contacts="contacts"
      :socials="socialsMedia"
      :copyright-cert="[
        {title: 'copyright-certificate', type: 'image', cert: '/certificate.png'},
        {title: 'ibecsystems.com', type: 'link', cert: 'https://ibecsystems.com'}
      ]"
    >
      <template #otherContent>
        <v-row>
          <v-col cols="12" md="6">
            <div class="d-flex align-center">
              <h3 class="text-body-1 font-weight-regular mr-2">По вопросам приобретения продукции:</h3>
              <a href="tel:8 701 071-94-48" class="text-black font-weight-regular text-body-1">8 701 071-94-48</a>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex align-center">
              <h3 class="text-body-1 font-weight-regular mr-2">По вопросам поставок переходить на портал закупок:</h3>
              <a href="https://torgi.erg.kz" class="text-black font-weight-regular text-body-1">torgi.erg.kz</a>
            </div>
          </v-col>
        </v-row>
      </template>
    </parts-footer-erg>
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
import { ref} from "vue"
const model = ref(false)
const gallery2 = ref([
  {
    category: {
      id: 1,
      title: 'asd'
    },
    id: 1,
    title: 'Как пройти регистрацию в SalesMarket.kz?',
    preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
  },
  {
    category: {
      id: 1,
      title: 'asd'
    },
    id: 1,
    title: 'dasdsad',
    preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
  },
  {
    category: {
      id: 1,
      title: 'asd'
    },
    id: 1,
    title: 'Первый международный форум промышленного IT в Казахстане',
    preview: 'https://fastly.picsum.photos/id/523/500/300.jpg?hmac=4pQD_Jbc8uFrr01uI1PtSZM3wIjP-pTu7ZogoeRwVFw',
  },
  {
    category: {
      id: 1,
      title: 'asd'
    },
    id: 1,
    title: 'Как прошёл кейс-чемпионат промышленного IT',
    preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
  },
  {
    category: {
      id: 1,
      title: 'asd'
    },
    id: 1,
    title: 'Офис BTS — место силы IT-команды',
    preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
  },
])
const gallery = ref([
  {
    category: {
      id: 1,
      title: 'asd'
    },
    id: 1,
    title: 'dasdsad',
    images: [
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 1,
      },
      {
        image: 'https://fastly.picsum.photos/id/523/500/300.jpg?hmac=4pQD_Jbc8uFrr01uI1PtSZM3wIjP-pTu7ZogoeRwVFw',
        active: false,
        id: 2,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 3,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 4,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 5,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 6,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 7,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 8,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 9,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 10,
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
        id: 11,
      },

    ]
  }
])
const preview = ref(gallery.value[0].images[0])
const gallery3 = [
  { id: 2, title: "Команда", category: { id: 3, title: "Фото" }, preview: "https://backend-bts.erg.kz/storage/34/01JFSKFCC0AN0FV6QSA3HGZ48X.webp" },
  { id: 7, title: "Офис BTS - место силы IT-команды", category: { id: 2, title: "Видео" }, preview: "https://backend-bts.erg.kz/storage/37/01JFSMFFDBKTKQXXJSNGZ54YF3.webp"},
  { id: 1, title: "Мероприятия", category: { id: 3, title: "Фото" }, preview: "https://example.com/3" },
  { id: 3, title: "Наш офис", category: { id: 2, title: "Видео" }, preview: "https://example.com/4" },
  { id: 6, title: "Как прошел кейс-чемпионат промышленного IT", category: { id: 5, title: "События" }, preview: "https://example.com/5" },
  { id: 4, title: "Как пройти регистрацию в Sales market", category: { id: 4, title: "Обучение" }, preview: "https://example.com/6" },
];
const contacts = [
  {
    title: 'АО «Алюминий Казахстана»',
    phone: `<p data-v-bca74727=""><p>(Приемная)</p><p><a href="tel:8%20(7182)%2037%2001%2011">8 (7182) 37 01 11</a><br> <a href="tel:8%20(7182)%2037%2007%2045">8 (7182) 37 07 45</a><br> <a href="tel:8%20(7182)%2037%2004%2026">8 (7182) 37 04 26</a><br> <a href="tel:8%20701%20029%2081%2099">8 701 029 81 99</a>&nbsp;</p><p><br></p></p>`,
    imagePhone: '/phone.svg',
    mail: '<p>info.bts@erg.kz</p><p>info.bts@erg.kz</p>',
    mailImage: '/mail.svg',
    location: 'Юридический адрес: АО «ССГПО» улица Ленина, 26, г. Рудный, Костанайская область, 111500',
    imageLocation: '/location.png',
  },
  {
    title: 'Электростанция',
    phone: `<p>8 (7182) 37-00-47 (Приемная)</p>`,
    imagePhone: '/phone.svg',
    mail: '<p>aok.energy@erg.kz&nbsp;</p><p>aok.energy@erg.kz&nbsp;</p>',
    mailImage: '/mail.svg',
    location: '<p>Республика Казахстан, 140013, Павлодарская область, г. Павлодар, Восточная промышленная зона, строение 59&nbsp;</p>',
    imageLocation: '/location.png',
  },
  {
    title: 'Известняковый рудник «Керегетас»',
    phone: `<p>Приёмная<br><a href="tel:8%20(71840)%2069%20301">8 (71840) 69 301</a><br> <a href="tel:8%20(71840)%2069%20300">8 (71840) 69 300</a></p>`,
    imagePhone: '/phone.svg',
    mail: '<p>aok.energy@erg.kz&nbsp;</p>',
    mailImage: '/mail.svg',
    location: '<p>Республика Казахстан, 140308, Павлодарская область, Баянаульский район, пос. Майкаин, село Ушкулун, ул. Ушкулун, здание 15А&nbsp;</p>',
    imageLocation: '/location.png',
  },
  {
    title: 'Краснооктябрьское бокситовое рудоуправление',
    phone: `<p>Приёмная<br><a href="tel:8%20(71433)%206-44-31">8 (71433) 6-44-31</a>&nbsp;</p>`,
    imagePhone: '/phone.svg',
    mail: '<p>aok.energy@erg.kz&nbsp;</p>',
    mailImage: '/mail.svg',
    location: '<p>Республика Казахстан, 111203, Костанайская область, г. Лисаковск, поселок Октябрьский, ул.Уральская 42 Республика Казахстан&nbsp;</p>',
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
