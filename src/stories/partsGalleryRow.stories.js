import Row from '../runtime/components/Parts/Gallery/Row.vue';

export default {
  title: 'Parts/Gallery/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {},
};

export const StandardWithLinks = {
  render: (args) => ({
    components: { Row },
    setup() {
      return { args };
    },
    template: '<Row v-bind="args" />',
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
    showButtons: false,

  }
}

export const StandardWithoutLinks = {
  render: (args) => ({
    components: { Row },
    setup() {
      return { args };
    },
    template: '<Row v-bind="args" />',
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
    rightButtonText: "Вперед"
  }
}
