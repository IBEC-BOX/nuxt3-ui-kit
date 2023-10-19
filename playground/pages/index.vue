<template>
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
</template>

<script setup>
import partsNews from "../../src/runtime/components/Parts/News.vue";
import Card from "../../src/runtime/components/Parts/Card.vue"


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
    imgSrc: "/appstore.svg",
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

const settingsCol = {
  cols: "",
  sm: "",
  md: "6",
  lg: "",
  xl: "",
  xxl: "",
}
</script>

<style scoped>

</style>
