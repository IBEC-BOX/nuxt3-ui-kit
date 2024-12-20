import CardScale from '../runtime/components/Parts/Card/Scale.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import type { ICardScale } from '../runtime/components/Parts/Card/cardTypes';

export default {
  title: 'Parts/Card/Scale',
  component: CardScale,
  tags: ['autodocs'],
} as Meta<typeof CardScale>;

const cards: ICardScale['cards'] = [
  {
    id: 1,
    background: '/bg-card.png',
    icon: '/word.svg',
    title: 'Производство',
    chip: 'Энергетическое оборудовние',
  },
  {
    id: 2,
    background: '/bg-card.png',
    icon: '/word.svg',
    title: 'РЕМОНТ',
    chip: 'Литейное производство',
  },
  {
    id: 3,
    background: '/bg-card.png',
    icon: '/word.svg',
    title: 'Производство',
    chip: 'Энергетическое оборудовние',
  },
  {
    id: 4,
    background: '/bg-card.png',
    icon: '/word.svg',
    title: 'РЕМОНТ',
    chip: 'Литейное производство',
  },
];

interface CardScaleArgs extends Partial<ICardScale> {
  'slider-style'?: string;
}

const Template: StoryFn<CardScaleArgs> = (args: CardScaleArgs) => ({
  components: { CardScale },
  setup(): { args: CardScaleArgs } {
    return { args };
  },
  template: `
    <v-container>
      <CardScale v-bind="args" />
    </v-container>
  `,
});

export const Standard: StoryFn<CardScaleArgs> = Template.bind({});
Standard.args = {
  cards: cards,
  'slider-style': 'height: 400px; width: 400px',
};
