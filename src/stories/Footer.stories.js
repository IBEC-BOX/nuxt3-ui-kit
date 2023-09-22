import Footer from '../runtime/components/Parts/footer/footer.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Footer',
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
    firstStyleTop: {
      "logo": {
        img: "https://avatars.githubusercontent.com/u/129746451?s=48&v=4",
        alt: "Логотип"
      },
      "text_top": [
        {
          id: 1,
          text: "Let’s get started on something great",
        },
        {
          id: 2,
          text: "Join over 4,000+ startups already growing with Untitled.",
        }
      ],
      "button_top": [
        {
          id: 1,
          backgroundColor: "#fff",
          borderRadius: 8,
          leftIcon: "$vuetify",
          text: "Medium Button",
        },
        {
          id: 2,
          backgroundColor: "#4D4E52",
          borderRadius: 8,
          text: "Medium Button"
        }
      ]
    },
    middleMenu: {
      "logo": {
        img: "",
        alt: "",
        title: "Logotype",
        subtitle: "Design amazing digital experiences that create more happy in the world."
      },
      "menu": [
        {
          id: 1,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
        {
          id: 2,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
        {
          id: 3,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
        {
          id: 4,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
        {
          id: 5,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
      ],
      // "store": [
      //   {
      //     title: "Get the app"
      //   },
      //   {
      //     id: 1,
      //     img: "/appstore.svg",
      //     alt: "appstore",
      //     link: "/"
      //   },
      //   {
      //     id: 2,
      //     img: "googleplay.svg",
      //     alt: "googleplay",
      //     link: "/"
      //   },
      // ],
      // "nav": [
      //   {
      //     id: 1,
      //     text: "Overview",
      //     link: "/",
      //   },
      //   {
      //     id: 2,
      //     text: "Features",
      //     link: "/",
      //   },
      //   {
      //     id: 3,
      //     text: "Pricing",
      //     link: "/",
      //   },
      //   {
      //     id: 4,
      //     text: "Careers",
      //     link: "/",
      //   },
      //   {
      //     id: 5,
      //     text: "Help centre",
      //     link: "/",
      //   },
      //   {
      //     id: 6,
      //     text: "Privacy",
      //     link: "/",
      //   },
      // ]
    },
    footerBottom: {
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
    }
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
    inputSlot: `<v-text-field placeholder="Enter your email"></v-text-field>
    <v-btn size="large">
      Medium Button
    </v-btn>`,
    secondStyleTop: {
      title: "Join our newsletter",
      subtitle: "We’ll send you a nice letter once per week. No spam."
    },
    middleMenu: {
      "logo": {
        img: "",
        alt: "",
        title: "Logotype",
        subtitle: "Design amazing digital experiences that create more happy in the world."
      },
      "menu": [
        {
          id: 1,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
        {
          id: 2,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
        {
          id: 3,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
        {
          id: 4,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
        {
          id: 5,
          menu: [
            {
              id: 1,
              title: "Product"
            },
            {
              id: 2,
              text: "Overview",
              link: "",
            },
            {
              id: 3,
              text: "Features",
              link: "",
            },
            {
              id: 4,
              text: "Solutions",
              link: "",
            },
            {
              id: 5,
              text: "Tutorials",
              link: "",
            },
            {
              id: 6,
              text: "Pricing",
              link: "",
            },
            {
              id: 7,
              text: "Releases",
              link: "",
            },
          ]
        },
      ],
      // "store": [
      //   {
      //     title: "Get the app"
      //   },
      //   {
      //     id: 1,
      //     img: "/appstore.svg",
      //     alt: "appstore",
      //     link: "/"
      //   },
      //   {
      //     id: 2,
      //     img: "googleplay.svg",
      //     alt: "googleplay",
      //     link: "/"
      //   },
      // ],
      // "nav": [
      //   {
      //     id: 1,
      //     text: "Overview",
      //     link: "/",
      //   },
      //   {
      //     id: 2,
      //     text: "Features",
      //     link: "/",
      //   },
      //   {
      //     id: 3,
      //     text: "Pricing",
      //     link: "/",
      //   },
      //   {
      //     id: 4,
      //     text: "Careers",
      //     link: "/",
      //   },
      //   {
      //     id: 5,
      //     text: "Help centre",
      //     link: "/",
      //   },
      //   {
      //     id: 6,
      //     text: "Privacy",
      //     link: "/",
      //   },
      // ]
    },
    footerBottom: {
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
    }
  }
};
