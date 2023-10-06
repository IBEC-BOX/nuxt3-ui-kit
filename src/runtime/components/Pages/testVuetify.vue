<template>
  <v-app>
    <v-navigation-drawer temporary v-model="showDrawer" location="right">
      <div class="w-100 text-right">
        <v-btn flat icon="$close" size="x-large" @click="toggle" />
      </div>
      <p class="text-center"><b>I'm the drawer</b></p>
    </v-navigation-drawer>

    <!-- Header first variant -->
    <HeaderOne
      header-active-link-variant="bottom_line"
      top-background="grey-lighten-2"
      :menu="header_menu"
      :buttons="header_buttons"
    />
    <!-- Header first variant END -->

    <!-- Header second variant -->
    <HeaderTwo
      header-active-link-variant="bottom_line"
      top-background="grey-lighten-3"
      top-class="border-bottom"
      :top-menu="header_top_menu"
      :menu="header_menu"
      :top-links="header_top_links"
      :buttons="header_buttons_second"
    >
      <template #append-top>
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              <v-img width="20" height="20" class="rounded-circle mr-1" cover :src="selected_lang.image" />
              <span class="text-body-2 text-grey-darken-2">
                {{ selected_lang.title }}
              </span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in langs"
              :key="i"
            >
              <v-list-item-title class="cursor-pointer p-0">
                <v-btn variant="text" @click="selected_lang = item">
                  <v-img width="20" height="20" class="rounded-circle mr-1" cover :src="item.image" />
                  <span class="text-body-2 text-grey-darken-3">
                    {{ item.title }}
                  </span>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn icon="mdi-magnify" size="small" class="text-grey-darken-1" />
      </template>
    </HeaderTwo>
    <!-- Header second variant END -->

    <!-- Header third variant -->
    <HeaderThree
      :tabs="header_tabs"
      :buttons="header_buttons"
      :top-links="header_top_links"
    >
      <template #append-top>
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              <v-img width="20" height="20" class="rounded-circle mr-1" cover :src="selected_lang.image" />
              <span class="text-body-2 text-grey-darken-2">
                {{ selected_lang.title }}
              </span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in langs"
              :key="i"
            >
              <v-list-item-title class="cursor-pointer p-0">
                <v-btn variant="text" @click="selected_lang = item">
                  <v-img width="20" height="20" class="rounded-circle mr-1" cover :src="item.image" />
                  <span class="text-body-2 text-grey-darken-3">
                    {{ item.title }}
                  </span>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </HeaderThree>
    <!-- Header third variant END -->

    <!-- Header fourth variant -->
    <HeaderFour
      header-active-link-variant="bottom_line"
      header-height="88"
      top-background="grey-lighten-2"
      :menu="header_menu"
      :menu-top-links="header_top_menu_links"
    >
      <template #buttons>
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              <v-img width="20" height="20" class="rounded-circle mr-1" cover :src="selected_lang.image" />
              <span class="text-body-2 text-grey-darken-2">
                {{ selected_lang.title }}
              </span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in langs"
              :key="i"
            >
              <v-list-item-title class="cursor-pointer p-0">
                <v-btn variant="text" @click="selected_lang = item">
                  <v-img width="20" height="20" class="rounded-circle mr-1" cover :src="item.image" />
                  <span class="text-body-2 text-grey-darken-3">
                    {{ item.title }}
                  </span>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn variant="icon" icon="mdi-magnify" class="text-grey-darken-1" />
      </template>
    </HeaderFour>
    <!-- Header fourth variant END -->

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
import HeaderTwo from '../Parts/header/HeaderTwo.vue'
import HeaderThree from '../Parts/header/HeaderThree.vue'
import HeaderFour from '../Parts/header/HeaderFour.vue'

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
    list: [
      {
        id: '0',
        title: 'Credit cards',
        link: '#'
      },

      {
        id: '2',
        title: 'Debit cards',
        link: '#'
      },

      {
        id: '3',
        title: 'Services',
        link: '#'
      },

      {
        id: '4',
        title: 'Projects',
        link: '#'
      },

      {
        id: '5',
        title: 'Team',
        link: '#'
      },

      {
        id: '1',
        title: 'Career',
        link: '#'
      },
    ]
  },

  {
    id: 1,
    title: 'Business',
    list: [
      {
        id: '0',
        title: 'Credit cards',
        link: '#'
      },

      {
        id: '2',
        title: 'Debit cards',
        link: '#'
      },

      {
        id: '3',
        title: 'Services',
        link: '#'
      },

      {
        id: '4',
        title: 'Projects',
        link: '#'
      },

      {
        id: '5',
        title: 'Team',
        link: '#'
      },

      {
        id: '1',
        title: 'Career',
        link: '#'
      },
    ]
  },

  {
    id: 2,
    title: 'Checkout',
    list: [
      {
        id: '0',
        title: 'Credit cards',
        link: '#'
      },

      {
        id: '2',
        title: 'Debit cards',
        link: '#'
      },

      {
        id: '3',
        title: 'Services',
        link: '#'
      },

      {
        id: '4',
        title: 'Projects',
        link: '#'
      },

      {
        id: '5',
        title: 'Team',
        link: '#'
      },

      {
        id: '1',
        title: 'Career',
        link: '#'
      },
    ]
  },

  {
    id: 3,
    title: 'Investment',
    list: [
      {
        id: '0',
        title: 'Credit cards',
        link: '#'
      },

      {
        id: '2',
        title: 'Debit cards',
        link: '#'
      },

      {
        id: '3',
        title: 'Services',
        link: '#'
      },

      {
        id: '4',
        title: 'Projects',
        link: '#'
      },

      {
        id: '5',
        title: 'Team',
        link: '#'
      },

      {
        id: '1',
        title: 'Career',
        link: '#'
      },
    ]
  },

  {
    id: 4,
    title: 'Insurance',
    list: [
      {
        id: '0',
        title: 'Credit cards',
        link: '#'
      },

      {
        id: '2',
        title: 'Debit cards',
        link: '#'
      },

      {
        id: '3',
        title: 'Services',
        link: '#'
      },

      {
        id: '4',
        title: 'Projects',
        link: '#'
      },

      {
        id: '5',
        title: 'Team',
        link: '#'
      },

      {
        id: '1',
        title: 'Career',
        link: '#'
      },
    ]
  },

  {
    id: 5,
    title: 'Travel',
    list: [
      {
        id: '0',
        title: 'Credit cards',
        link: '#'
      },

      {
        id: '2',
        title: 'Debit cards',
        link: '#'
      },

      {
        id: '3',
        title: 'Services',
        link: '#'
      },

      {
        id: '4',
        title: 'Projects',
        link: '#'
      },

      {
        id: '5',
        title: 'Team',
        link: '#'
      },

      {
        id: '1',
        title: 'Career',
        link: '#'
      },
    ]
  },

  {
    id: 6,
    title: 'City',
    list: [
      {
        id: '0',
        title: 'Credit cards',
        link: '#'
      },

      {
        id: '2',
        title: 'Debit cards',
        link: '#'
      },

      {
        id: '3',
        title: 'Services',
        link: '#'
      },

      {
        id: '4',
        title: 'Projects',
        link: '#'
      },

      {
        id: '5',
        title: 'Team',
        link: '#'
      },

      {
        id: '1',
        title: 'Career',
        link: '#'
      },
    ]
  },
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
