import HeaderThree from '../runtime/components/Parts/header/HeaderThree.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/HeaderThree',
  component: HeaderThree,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const First = {
  args: {
    header_tabs: [
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
    ],
    header_buttons: [
      {
        id: 0,
        text: 'Contact us',
        color: 'primary',
        variant: 'outlined',
      },

      {
        id: 1,
        text: 'Login',
        color: 'primary',
        elevation: '1',
        variant: 'flat',
      }
    ],
    header_top_links: [
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
    ],
    langs: [
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
    ],
    selected_lang: {
      title: 'Қазақша',
      image: 'https://flagcdn.com/w20/kz.png'
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=1%3A165&mode=dev",
    },
  },
};
