<template>
  <v-app>
    <v-navigation-drawer temporary v-model="showDrawer" location="right">
      <div class="w-100 text-right">
        <v-btn flat icon="$close" size="x-large" @click="toggle" />
      </div>
      <p class="text-center"><b>I'm the drawer</b></p>
    </v-navigation-drawer>

    <HeaderOne
      sticky
      :menu="header_menu"
      header-active-link-variant="bottom_line"
      :buttons="header_buttons"
    />

    <v-main class="d-flex align-center">
<!--      <v-container>-->
<!--        <v-sheet elevation="5" class="py-4 text-center">-->
<!--          <h1 class="text-18">Built and styled with Vuetify 3</h1>-->
<!--          <p>Minimized production bundle (70kB in tot)</p>-->
<!--          <v-btn class="mt-4">press me to ripple</v-btn>-->
<!--        </v-sheet>-->
<!--      </v-container>-->
      <News
        :cards="cards"
        :settingsButton="settingsButton"
        :settingsCol="settingsCol"
      >
        <template v-slot:buttonNews>
          <v-btn>Все новости</v-btn>
        </template>
      </News>
    </v-main>

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
import Card from "../Parts/Card.vue"
import footerOne from "../Parts/footer/footer.vue";
import HeaderOne from '../Parts/header/HeaderOne.vue'
import partsNews from "../Parts/News.vue";
const showDrawer = ref(false);


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
  variant: "",
  stacked: false,
  density: "",
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
    link: '/',
  },

  {
    id: 0,
    title: 'About us',
    link: '#',
  },

  {
    id: 0,
    title: 'Services',
    link: '#',
  },

  {
    id: 0,
    title: 'Projects',
    link: '#',
  },

  {
    id: 0,
    title: 'Team',
    link: '#',
  },

  {
    id: 0,
    title: 'Career',
    link: '#',
  },
]

const func = function() {
  console.log('Button function')
}

const header_buttons = [
  {
    id: 0,
    text: 'Contact us',
    color: 'grey-darken-3',
    variant: 'outlined',
    function: func,
  },

  {
    id: 1,
    text: 'Login',
    color: 'grey-darken-3',
    elevation: '1',
    variant: 'flat',
  }
]

/* Redundant unused code to test treeshaking */
const unusedFunction = () => console.log('unusedFunction');
</script>

<style>
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
</style>
