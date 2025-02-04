import Footer from '../runtime/components/Parts/Footer/Default.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Footer/Default',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
    // onClick: {},
    // size: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const First = {
  args: {
    showBorder: true,
    navInBottom: true,
    logo: {
      img: "https://avatars.githubusercontent.com/u/129746451?s=48&v=4",
      alt: "Логотип"
    },
    firstStyleTop: {
      "text_top": {
        title: "Let’s get started on something great",
        subtitle: "Join over 4,000+ startups already growing with Untitled."
      },
      "button_top": [
        {
          id: 1,
          backgroundColor: "#fff",
          leftIcon: "$vuetify",
          text: "Medium Button",
        },
        {
          id: 2,
          backgroundColor: "#4D4E52",
          text: "Medium Button"
        }
      ]
    },
    copyright: {
      text: "2023 Untitled UI. All rights reserverd"
    },
    nav: [
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
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=679%3A53571&mode=dev",
    },
  },
};

export const Second = {
  render: (args) => ({
    components: { Footer },
    setup() {
      return { args };
    },
    template:`<Footer v-bind="args">
      <template v-if="${'inputSlot' in args}" v-slot:input>
        ${args.inputSlot}
      </template>
      </Footer>`
  }),
  args: {
    logoInBody: true,
    logo: {
      title: "Logotype",
      subtitle: "Design amazing digital experiences that create more happy in the world.",
    },
    inputSlot: `<v-text-field placeholder="Enter your email"></v-text-field>
    <v-btn size="large">
      Medium Button
    </v-btn>`,
    secondStyleTop: {
      title: "Join our newsletter",
      subtitle: "We’ll send you a nice letter once per week. No spam."
    },
    menu: [
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
    ],
    copyright: {
      text: "2023 Untitled UI. All rights reserverd"
    },
    social: [
      {
        id: 1,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 4,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 5,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 6,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
    ]
  }
};

export const Third = {
  args: {
    showBorder: true,
    logoInBottom: true,
    storeOnlyMob: false,
    logo: {
      img: "https://avatars.githubusercontent.com/u/129746451?s=48&v=4",
      alt: "Логотип"
    },
    firstStyleTop: {
      "text_top": {
        title: "Let’s get started on something great",
        subtitle: "Join over 4,000+ startups already growing with Untitled."
      },
      "button_top": [
        {
          id: 1,
          rounded: 32,
          rightIcon: "$vuetify",
          text: "Medium Button",
        },
        {
          id: 2,
          rounded: 32,
          rightIcon: "$vuetify",
          text: "Medium Button"
        }
      ]
    },
    menu: [
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
    ],
    store:[
      {
        title: "Get the app"
      },
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
    copyright: {
      text: "2023 Untitled UI. All rights reserverd"
    },
    nav: [
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
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=679%3A53571&mode=dev",
    },
  },
};

export const Fourth = {
  args: {
    logoInBody: true,
    showBorder: true,
    logo: {
      img: "https://avatars.githubusercontent.com/u/129746451?s=48&v=4",
      alt: "Логотип",
      subtitle: "Design amazing digital experiences that create more happy in the world."
    },
    firstStyleTop: {
      "text_top": {
        title: "Let’s get started on something great",
        subtitle: "Join over 4,000+ startups already growing with Untitled."
      },
      "button_top": [
        {
          id: 1,
          backgroundColor: "primary",
          rounded: "xl",
          leftIcon: "$vuetify",
          text: "Medium Button",
        },
        {
          id: 2,
          backgroundColor: "secondary",
          rounded: "xl",
          text: "Medium Button"
        }
      ]
    },
    nav: [
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
    ],
    store: [
      {
        id: 1,
        img: "/appstore.svg",
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
    copyright: {
      text: "2023 Untitled UI. All rights reserverd"
    },
    social: [
      {
        id: 1,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 4,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 5,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 6,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
    ]
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=679%3A53571&mode=dev",
    },
  },
};

export const Fifth = {
  args: {
    logoInBody: true,
    showBorder: false,
    logo: {
      title: "title"
    },
    nav: [
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
    ],
    copyright: {
      text: "2023 Untitled UI. All rights reserverd"
    },
    social: [
      {
        id: 1,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 4,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 5,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
      {
        id: 6,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: ""
      },
    ]
  },

}
