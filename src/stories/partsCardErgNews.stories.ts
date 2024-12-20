import ErgNews from '../runtime/components/Parts/Card/ErgNews.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import type { ICardErgNews } from '../runtime/components/Parts/Card/cardTypes';

export default {
  title: 'Parts/Card/Erg News',
  component: ErgNews,
  tags: ['autodocs'],
} as Meta<typeof ErgNews>;

interface ErgNewsArgs extends Partial<ICardErgNews> {}

const Template: StoryFn<ErgNewsArgs> = (args: ErgNewsArgs) => ({
  components: { ErgNews },
  setup(): { args: ErgNewsArgs } {
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

export const Standard: StoryFn<ErgNewsArgs> = Template.bind({});
Standard.args = {
  card: {
    link: 'https://example.com/news',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    title: 'Exciting News!',
    date: '02.04.2023',
  },
};
