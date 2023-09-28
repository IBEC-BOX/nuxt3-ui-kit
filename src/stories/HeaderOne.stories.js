import HeaderOne from '../runtime/components/Parts/header/HeaderOne.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/HeaderOne',
  component: HeaderOne,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const First = {
  args: {
    header_menu: [
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
    ],
    header_buttons: [
      {
        id: 0,
        text: 'Contact us',
        color: 'grey-darken-3',
        variant: 'outlined',
      },

      {
        id: 1,
        text: 'Login',
        color: 'grey-darken-3',
        elevation: '1',
        variant: 'flat',
      }
    ]
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=1%3A165&mode=dev",
    },
  },
};
