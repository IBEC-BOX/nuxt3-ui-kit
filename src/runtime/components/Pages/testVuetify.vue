<template>
  <v-app>
    <!-- Header first variant -->
    <partsHeader
      header-active-link-variant="bottom_line black"
      variant="tabs"
      :buttons="header_buttons"
      :menu="header_menu"
      :top-menu="header_top_menu_links"
      :top-links="header_top_links"
      :tabs="header_tabs"
    >
      <template #append-top>
        append top slot
      </template>

      <template #buttons>
        buttons slot
      </template>
    </partsHeader>

    <v-main class="d-flex align-center">
      <Forms
        :title="'Заполните контактные данные и оставьте заявку на консультацию'"
        :inputs="inputs"
        @form-data="formData"
        :style-form="'standard'"
        :small-image="'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
        :socials="socials"
        :alt-image="'sad'"
        :info-company="infoCompany"
        :checkbox-setting="checkboxSetting"
        :commentary="commentary"
      />
    </v-main>
    <!-- Header first variant END -->

    <NuxtPage />

    <v-footer app elevation="5">
      <v-row no-gutters justify="center"
             class="text-overline font-weight-black">
        <p class="my-auto">I'm the footer</p>
        <v-spacer />
        <p class="my-auto">See how I was built</p>
        <v-btn icon variant="plain">
          <v-icon icon="$info" color="green-accent-4" />
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import partsHeader from '../Parts/header/header.vue'
import Card from "../Parts/Card.vue"
import footerOne from "../Parts/footer/footer.vue";
import partsNews from "../Parts/News.vue";
import Forms from "../Parts/Forms.vue"
const showDrawer = ref(false);

const formData = (data) => {
  console.log(data)
}
const socials = [
  {
    link: '321',
    img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    alt: '321',
  },
  {
    link: '321',
    img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    alt: '321',
  },
  {
    link: '321',
    img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    alt: '321',
  },
]
const combobox = {
  label: "выбери пункт",
  rules: [
    v => !!v || 'ФИО обязательно к заполнению',
  ],
  clearable: true,
  multiple: true,
  items: ['a', 'b', 'c', 'd', 'e', 'ab', 'bc', 'de']
}
const inputs = [
  {
    label: "ФИО",
    rules: [
      v => !!v || 'ФИО обязательно к заполнению',
      v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
    ],
    placeholder: "Аче Ачевович",
    value: ''
  },
  {
    // sm: 6,
    // md: 6,
    // lg: 6,
    // xl: 6,
    // xxl: 6,
    label: "ФИО",
    rules: [
      v => !!v || 'ФИО обязательно к заполнению',
      v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
    ],
    placeholder: "Аче Ачевович",
    value: ''
  },
  // {
  // sm: 6,
  // md: 6,
  // lg: 6,
  // xl: 6,
  // xxl: 6,
  // label: "ФИО",
  // rules: [
  //   v => !!v || 'ФИО обязательно к заполнению',
  //   v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
  // ],
  // placeholder: "Аче Ачевович",
  // value: ''
  // },
]
const infoCompany = [
  {
    icon: "mdi-phone",
    colorIcon: "primary",
    sizeIcon: "large",
    text: "Номер телефона компании"
  },
  {
    icon: "mdi-information",
    colorIcon: "primary",
    sizeIcon: "large",
    text: "Номер телефона компании"
  },
]
const checkboxSetting = {
  color: 'primary',
  rules: [
    v => !!v || 'Нажми на флажок!'
  ],
  label: "Нажимая кнопку, я соглашаюсь на обработку персональных данных"
}
const commentary = {
  label: "комментарий",
  rules: [
    v => !!v || 'ФИО обязательно к заполнению',
  ],
  rows: 3,
}

const testButtonNews = () => console.log(cards[1].id)
const cards = [
  {
    id: 1,
    dateAuthorRight: false,
    horizontalCard: false,
    width: 349,
    minHeight: 414,
    variantCard: "elevated",
    styleCard: "vacancy",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
    functionButton: "",
    textButton: "Читать",
    iconButton: "",
    prependIconButton: "$vuetify",
    appendIconButton: "",
  },
  {
    id: 2,
    dateAuthorRight: false,
    horizontalCard: false,
    width: 349,
    variantCard: "elevated",
    styleCard: "standard",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
    functionButton: testButtonNews,
    textButton: "Читать",
  },
  {
    id: 3,
    dateAuthorRight: false,
    horizontalCard: false,
    width: 349,
    variantCard: "elevated",
    styleCard: "standard",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
    functionButton: "",
    textButton: "Читать",
  },
  {
    id: 4,
    dateAuthorRight: false,
    horizontalCard: false,
    width: 349,
    minHeight: 414,
    variantCard: "elevated",
    styleCard: "standard",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
    functionButton: "",
    textButton: "Читать",
  },
  {
    id: 5,
    title: "Product",
    links: [
      {
        id: 1,
        text: "Overview",
        link: "",
      },
      {
        id: 2,
        text: "Features",
        link: "",
      },
      {
        id: 3,
        text: "Solutions",
        link: "",
      },
      {
        id: 4,
        text: "Tutorials",
        link: "",
      },
      {
        id: 5,
        text: "Pricing",
        link: "",
      },
      {
        id: 6,
        text: "Releases",
        link: "",
      },
    ]
  },
]

const store = [
  {
    id: 1,
    img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    alt: "appstore",
    link: "/"
  },
  {
    id: 2,
    img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    alt: "googleplay",
    link: "/"
  },
]

const nav = [
  {
    id: 1,
    text: "Overview",
    link: "/",
  },
  {
    id: 2,
    text: "Features",
    link: "/",
  },
  {
    id: 3,
    text: "Pricing",
    link: "/",
  },
  {
    id: 4,
    text: "Careers",
    link: "/",
  },
  {
    id: 5,
    link: "/",
    dateAuthorRight: false,
    horizontalCard: false,
    width: 349,
    minHeight: 414,
    variantCard: "elevated",
    styleCard: "standard",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
    functionButton: "",
    textButton: "Читать",
  },

  {
    id: 6,
    dateAuthorRight: false,
    horizontalCard: false,
    width: 349,
    minHeight: 414,
    variantCard: "elevated",
    styleCard: "standard",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
    functionButton: "",
    textButton: "Читать",
    appendIconButton: "$vuetify",
  }
]

const settingsCol = {
  cols: "",
  sm: "",
  md: "6",
  lg: "",
  xl: "",
  xxl: "",
}
const settingsButton = {
  variant: "text",
  stacked: false,
  density: "compact",
  size: "",
  block: false,
  rounded: "",
  elevation: 0,
  ripple: false,
  color: ""
}

const toggle= () => {
  console.log('usedToggle()');
  showDrawer.value = !showDrawer.value;
};

const header_menu = [
  {
    id: 0,
    title: 'Home',
    url: '/',
  },

  {
    id: 1,
    title: 'About us',
    url: '/about',
  },

  {
    id: 2,
    title: 'Services',
    url: '',
  },

  {
    id: 3,
    title: 'Projects',
    url: '',
  },

  {
    id: 4,
    title: 'Team',
    url: '',
  },

  {
    id: 5,
    title: 'Career',
    url: '',
  },
]

const func = function() {
  console.log('Button function')
}

const header_buttons = [
  {
    id: 0,
    text: 'Contact us',
    color: 'primary',
    variant: 'outlined',
    function: func,
  },

  {
    id: 1,
    text: 'Login',
    color: 'primary',
    elevation: '1',
    variant: 'flat',
  }
]

const header_top_menu = [
  {
    id: 0,
    title: 'Company 1',
    url: '#'
  },

  {
    id: 1,
    title: 'Company 2',
    url: '#'
  },

  {
    id: 2,
    title: 'Company 3',
    url: '#'
  }
]

const header_top_links = [
  {
    id: 0,
    title: 'Город',
    url: '#',
  },

  {
    id: 1,
    title: '7888',
    prepend_icon: 'mdi-phone-outline',
    url: '#',
  },

  {
    id: 2,
    title: 'Адреса',
    prepend_icon: 'mdi-map-marker-outline',
    url: '#',
  }
]

const header_top_menu_links = [
  {
    id: 0,
    title: 'Company 1',
    url: '#'
  },
  {
    id: 1,
    title: 'Company 2',
    url: '#'
  },
  {
    id: 2,
    title: 'Company 3',
    url: '#'
  }
]

const header_buttons_second = [
  {
    id: 0,
    text: 'Call to action',
    color: 'primary',
    variant: 'flat',
  },
]

const header_tabs = [
  {
    id: 0,
    title: 'Bank',
    url: '/',
  },

  {
    id: 1,
    title: 'Business',
    url: 'about',
  },

  {
    id: 2,
    title: 'Checkout',
    url: '',
  },

  {
    id: 3,
    title: 'Investment',
    url: '',
  },
  {
    id: 4,
    title: 'Insurance',
    url: '',
  },

  {
    id: 5,
    title: 'Travel',
    url: '',
  },

  {
    id: 6,
    title: 'City',
    url: '',
  }
]

const selected_lang = ref({
  title: 'Қазақша',
  image: 'https://flagcdn.com/w20/kz.png'
})

const langs = ref([
  {
    id: 0,
    title: 'Қазақша',
    image: 'https://flagcdn.com/w20/kz.png'
  },

  {
    id: 1,
    title: 'Русский',
    image: 'https://flagcdn.com/w20/ru.png'
  },

  {
    id: 3,
    title: 'English',
    image: 'https://flagcdn.com/w20/us.png'
  }
])

/* Redundant unused code to test treeshaking */
const unusedFunction = () => console.log('unusedFunction');
</script>

<style>
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
</style>
