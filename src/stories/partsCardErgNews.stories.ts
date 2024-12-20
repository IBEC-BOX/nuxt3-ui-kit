import { Meta, Story } from '@storybook/vue3';
import type { ICardErgNews } from '../runtime/components/Parts/Card/cardTypes';
import ErgNews from '../runtime/components/Parts/Card/ErgNews.vue';

export default {
  title: 'Parts/Card/Erg News',
  component: ErgNews,
  tags: ['autodocs'],
} as Meta<typeof ErgNews>;

interface ErgNewsArgs extends Partial<ICardErgNews> {}

const Template: Story<ErgNewsArgs> = (args) => ({
  components: { ErgNews },
  setup() {
    return { args };
  },
  template: `
    <v-container>
      <v-row>
        <v-col cols="12">
          <ErgNews v-bind="args" />
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Standard = Template.bind({});
Standard.args = {
  card: {
    link: 'https://example.com/news',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    title: 'Exciting News!',
    date: '02.04.2023',
  },
};
