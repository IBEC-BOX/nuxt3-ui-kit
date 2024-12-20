import type { Meta, Story } from '@storybook/vue3';
import type { IGalleryRow } from '../runtime/components/Parts/Gallery/galleryTypes';
import Row from '../runtime/components/Parts/Gallery/Row.vue';

export default {
  title: 'Parts/Gallery/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Row>;

const Template: Story<IGalleryRow> = (args) => ({
  components: { Row },
  setup() {
    return { args };
  },
  template: `
    <v-container>
      <Row v-bind="args" />
    </v-container>
  `,
});

export const StandardWithLinks = Template.bind({});
StandardWithLinks.args = {
  blocks: [
    {
      id: 1,
      title: 'Продукция',
      preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      category: {
        id: 1,
        title: 'Производство',
      },
    },
    {
      id: 2,
      title: 'Корпоративные бизнес-системы',
      preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      category: {
        id: 1,
        title: 'Производство',
      },
    },
    {
      id: 3,
      title: 'Иновативные технологии',
      preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      category: {
        id: 2,
        title: 'IT решения',
      },
    },    {
      id: 4,
      title: 'Иновативные технологии',
      preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      category: {
        id: 2,
        title: 'IT решения',
      },
    },
    {
      id: 5,
      title: 'Иновативные технологии',
      preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      category: {
        id: 2,
        title: 'IT решения',
      },
    },
  ],
  disableLinks: false,
};

export const StandardWithoutLinks = Template.bind({});
StandardWithoutLinks.args = {
  blocks: [
    {
      id: 1,
      title: 'Продукция',
      preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      category: {
        id: 1,
        title: 'Производство',
      },
    },
    {
      id: 2,
      title: 'Корпоративные бизнес-системы',
      preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      category: {
        id: 1,
        title: 'Производство',
      },
    },
  ],
  disableLinks: true,
};
