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
      <v-container>
        <v-sheet elevation="5" class="py-4 text-center">
          <h1 class="text-18">Built and styled with Vuetify 3</h1>
          <p>Minimized production bundle (70kB in tot)</p>
          <v-btn class="mt-4">press me to ripple</v-btn>
        </v-sheet>
      </v-container>
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

const showDrawer = ref(false);

const statusVacancy = {
  text: "Reply without resume",
  status: "success"
}

const firstStyleTop = {
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

const menu = [
  {
    id: 1,
    title: "Product",
    links: [
      {
        id: 1,
        text: "Overview",
        link: "/",
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
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
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
    text: "Help centre",
    link: "/",
  },
  {
    id: 6,
    text: "Privacy",
    link: "/",
  },
]

const copyright = "2023 Untitled UI. All rights reserverd"
const social = [
  {
    id: 1,
    img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    link: ""
  },
  {
    id: 2,
    img: "",
    link: ""
  },
  {
    id: 3,
    img: "",
    link: ""
  },
  {
    id: 4,
    img: "",
    link: ""
  },
  {
    id: 5,
    img: "",
    link: ""
  },
  {
    id: 6,
    img: "",
    link: ""
  },
]

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
