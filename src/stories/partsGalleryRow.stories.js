import Row from '../runtime/components/Parts/Gallery/Row.vue';

export default {
  title: 'Parts/Galleries/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {},
};

export const ImageWithLinks = {
  render: (args) => ({
    components: { Row },
    setup() {
      return { args };
    },
    template: `
      <v-container>
        <Row v-bind="args" />
      </v-container>
    `,
  }),
  args: {
    blocks: [
      {
        id: 1,
        title: 'Продукция',
        preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        category: {
          id: 1,
          title: 'Производство'
        }
      },
      {
        id: 2,
        title: 'Корпоративные бизнес-системы',
        preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        category: {
          id: 1,
          title: 'Производство'
        }
      },
      {
        id: 2,
        title: 'Корпоративные бизнес-системы',
        preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        category: {
          id: 1,
          title: 'Производство'
        }
      },
      {
        id: 2,
        title: 'Корпоративные бизнес-системы',
        preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        category: {
          id: 1,
          title: 'Производство'
        }
      },
      {
        id: 2,
        title: 'Корпоративные бизнес-системы',
        preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        category: {
          id: 1,
          title: 'Производство'
        }
      },
    ],
    disableLinks: false,
    showButton: false,
    variant: "image",
    typeCard: "image"
  }
}

export const CardWithoutLinks = {
  render: (args) => ({
    components: { Row },
    setup() {
      return { args };
    },
    template: `
      <v-container>
        <Row v-bind="args" />
      </v-container>
    `,
  }),
  args: {
    blocks: [
      {
        id: 1,
        title: 'Продукция',
        preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        category: {
          id: 1,
          title: 'Производство'
        }
      },
      {
        id: 2,
        title: 'Корпоративные бизнес-системы',
        preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        category: {
          id: 1,
          title: 'Производство'
        }
      },
    ],
    disableLinks: true,
    showButton: true,
    leftButtonIcon: "mdi-arrow-left",
    rightButtonText: "Вперед",
    variant: "card",
    typeCard: "video",
    imagePlayVideo: "/playVideo.svg"
  }
}
