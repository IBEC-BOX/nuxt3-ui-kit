import Row from '../runtime/components/Parts/Gallery/Row.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import type { IGalleryRow } from '../runtime/components/Parts/Gallery/galleryTypes';

export default {
  title: 'Parts/Gallery/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Row>;

const Template: StoryFn<IGalleryRow> = (args: IGalleryRow) => ({
  components: { Row },
  setup(): { args: IGalleryRow } {
    return { args };
  },
  template: `
    <v-container>
      <Row v-bind="args" />
    </v-container>
  `,
});

export const StandardWithLinks: StoryFn<IGalleryRow> = Template.bind({});
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

export const StandardWithoutLinks: StoryFn<IGalleryRow> = Template.bind({});
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
