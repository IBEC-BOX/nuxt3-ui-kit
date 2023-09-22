<template>
  <v-app>
    <v-navigation-drawer temporary v-model="showDrawer" location="right">
      <div class="w-100 text-right">
        <v-btn flat icon="$close" size="x-large" @click="toggle" />
      </div>
      <p class="text-center"><b>I'm the drawer</b></p>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="toggle" />
      <v-toolbar-title>I'm the header</v-toolbar-title>
    </v-app-bar>

    <v-main class="d-flex align-center">
      <v-container>
        <v-sheet elevation="5" class="py-4 text-center">
          <h1 class="text-h5">Built and styled with Vuetify 3</h1>
          <p>Minimized production bundle (70kB in tot)</p>
          <v-btn class="mt-4">press me to ripple</v-btn>
        </v-sheet>
      </v-container>
    </v-main>

<!--    <v-footer app elevation="5">-->
<!--      <v-row no-gutters justify="center"-->
<!--             class="text-overline font-weight-black">-->
<!--        <p class="my-auto">I'm the footer</p>-->
<!--        <v-spacer />-->
<!--        <p class="my-auto">See how I was built</p>-->
<!--        <v-btn icon variant="plain">-->
<!--          <v-icon icon="$info" color="green-accent-4" />-->
<!--        </v-btn>-->
<!--      </v-row>-->
<!--    </v-footer>-->
    <footerOne
      :firstStyleTop="firstStyleTop"
      :middleMenu="secondMenu"
      :footerBottom="footerBottom"
    >
      <template v-slot:input>
        <v-text-field placeholder="Enter your email"></v-text-field>
        <v-btn size="large">
          Medium Button
        </v-btn>
      </template>
    </footerOne>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import footerOne from "../Parts/footer/footer.vue";
const showDrawer = ref(false);

const firstStyleTop = {
  "logo": {
    img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    alt: "Логотип"
  },
  "text_top": {
    title: "Let’s get started on something great",
    subtitle: "Join over 4,000+ startups already growing with Untitled."
  },
  "button_top": [
    {
      id: 1,
      backgroundColor: "",
      rounded: "lg",
      leftIcon: "$vuetify",
      text: "Medium Button",
      size: ""
    },
    {
      id: 2,
      backgroundColor: "primary",
      rounded: "lg",
      text: "Medium Button",
      size: ""
    }
  ]
}
const secondStyleTop = {
  title: "Join our newsletter",
  subtitle: "We’ll send you a nice letter once per week. No spam."
}

const secondMenu = {
  "logo": {
    img: "",
    alt: "",
    title: "Logotype",
    subtitle: "Design amazing digital experiences that create more happy in the world."
  },
  // "menu": [
  //   {
  //     id: 1,
  //     title: "Product",
  //     links: [
  //       {
  //         id: 1,
  //         text: "Overview",
  //         link: "/",
  //       },
  //       {
  //         id: 2,
  //         text: "Features",
  //         link: "",
  //       },
  //       {
  //         id: 3,
  //         text: "Solutions",
  //         link: "",
  //       },
  //       {
  //         id: 4,
  //         text: "Tutorials",
  //         link: "",
  //       },
  //       {
  //         id: 5,
  //         text: "Pricing",
  //         link: "",
  //       },
  //       {
  //         id: 6,
  //         text: "Releases",
  //         link: "",
  //       },
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Product",
  //     links: [
  //       {
  //         id: 1,
  //         text: "Overview",
  //         link: "",
  //       },
  //       {
  //         id: 2,
  //         text: "Features",
  //         link: "",
  //       },
  //       {
  //         id: 3,
  //         text: "Solutions",
  //         link: "",
  //       },
  //       {
  //         id: 4,
  //         text: "Tutorials",
  //         link: "",
  //       },
  //       {
  //         id: 5,
  //         text: "Pricing",
  //         link: "",
  //       },
  //       {
  //         id: 6,
  //         text: "Releases",
  //         link: "",
  //       },
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: "Product",
  //     links: [
  //       {
  //         id: 1,
  //         text: "Overview",
  //         link: "",
  //       },
  //       {
  //         id: 2,
  //         text: "Features",
  //         link: "",
  //       },
  //       {
  //         id: 3,
  //         text: "Solutions",
  //         link: "",
  //       },
  //       {
  //         id: 4,
  //         text: "Tutorials",
  //         link: "",
  //       },
  //       {
  //         id: 5,
  //         text: "Pricing",
  //         link: "",
  //       },
  //       {
  //         id: 6,
  //         text: "Releases",
  //         link: "",
  //       },
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: "Product",
  //     links: [
  //       {
  //         id: 1,
  //         text: "Overview",
  //         link: "",
  //       },
  //       {
  //         id: 2,
  //         text: "Features",
  //         link: "",
  //       },
  //       {
  //         id: 3,
  //         text: "Solutions",
  //         link: "",
  //       },
  //       {
  //         id: 4,
  //         text: "Tutorials",
  //         link: "",
  //       },
  //       {
  //         id: 5,
  //         text: "Pricing",
  //         link: "",
  //       },
  //       {
  //         id: 6,
  //         text: "Releases",
  //         link: "",
  //       },
  //     ]
  //   },
  //   {
  //     id: 5,
  //     title: "Product",
  //     links: [
  //       {
  //         id: 1,
  //         text: "Overview",
  //         link: "",
  //       },
  //       {
  //         id: 2,
  //         text: "Features",
  //         link: "",
  //       },
  //       {
  //         id: 3,
  //         text: "Solutions",
  //         link: "",
  //       },
  //       {
  //         id: 4,
  //         text: "Tutorials",
  //         link: "",
  //       },
  //       {
  //         id: 5,
  //         text: "Pricing",
  //         link: "",
  //       },
  //       {
  //         id: 6,
  //         text: "Releases",
  //         link: "",
  //       },
  //     ]
  //   },
  // ],
  "store": [
    // {
    //   title: "Get the app"
    // },
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
  ],
  "nav": [
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
      text: "Help centre",
      link: "/",
    },
    {
      id: 6,
      text: "Privacy",
      link: "/",
    },
  ]
}

const footerBottom = ref({
  "logo": {
    img: "",
    alt: "",
    title: "Logotype",
  },
  "copyright": {
    title: "2023 Untitled UI. All rights reserverd"
  },
  // "nav": [
  //   {
  //     id: 1,
  //     text: "Tems",
  //     link: ""
  //   },
  //   {
  //     id: 2,
  //     text: "Privacy",
  //     link: ""
  //   },
  //   {
  //     id: 3,
  //     text: "Cookies",
  //     link: ""
  //   },
  // ]
  // "social": [
  //   {
  //     id: 1,
  //     img: "",
  //     alt: "1",
  //     href: ""
  //   },
  //   {
  //     id: 2,
  //     img: "",
  //     alt: "2",
  //     href: ""
  //   },
  //   {
  //     id: 3,
  //     img: "",
  //     alt: "3",
  //     href: ""
  //   },
  //   {
  //     id: 4,
  //     img: "",
  //     alt: "4",
  //     href: ""
  //   },
  //   {
  //     id: 5,
  //     img: "",
  //     alt: "5",
  //     href: ""
  //   },
  //   {
  //     id: 6,
  //     img: "",
  //     alt: "6",
  //     href: ""
  //   },
  // ]
})

const toggle= () => {
  console.log('usedToggle()');
  showDrawer.value = !showDrawer.value;
};

/* Redundant unused code to test treeshaking */
const unusedFunction = () => console.log('unusedFunction');
</script>

<style>
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
</style>
