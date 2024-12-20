import Card from '../runtime/components/Parts/Card/Default.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import type { ICardDefault } from '../runtime/components/Parts/Card/cardTypes';

export default {
  title: 'Parts/Card/Default',
  component: Card,
  tags: ['autodocs'],
} as Meta<typeof Card>;

interface CardArgs extends Partial<ICardDefault> {
  buttonSlot?: string;
}

const Template: StoryFn<CardArgs> = (args: CardArgs) => ({
  components: { Card },
  setup(): { args: CardArgs } {
    return { args };
  },
  template: `
    <v-container>
      <v-row>
        <v-col cols="4">
          <Card v-bind="args">
            <template v-if="${'buttonSlot' in args}" v-slot:button>
              ${args.buttonSlot}
            </template>
          </Card>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Standard: StoryFn<CardArgs> = Template.bind({});
Standard.args = {
  buttonSlot: `<v-btn size="large">MEDIUM BUTTON</v-btn>`,
  dateAuthorRight: false,
  horizontalCard: false,
  variantCard: 'elevated',
  styleCard: 'standard',
  image: {
    src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    attrs: {
      cover: true,
    },
  },
  title: 'Card Title',
  text: 'A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.',
  date: '02.04.2023',
  author: 'by Tyler, The Creator',
};

export const StandardHorizontal: StoryFn<CardArgs> = Template.bind({});
StandardHorizontal.args = {
  dateAuthorRight: true,
  horizontalCard: true,
  horizontalWidthImage: 300,
  variantCard: 'elevated',
  styleCard: 'standard',
  image: {
    src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    attrs: {
      cover: true,
    },
  },
  title: 'Card Title',
  text: 'A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.',
  date: '02.04.2023',
  author: 'by Tyler, The Creator',
};

export const VacancyError: StoryFn<CardArgs> = Template.bind({});
VacancyError.args = {
  buttonSlot: `
    <div class="d-flex justify-space-between align-center">
      <span class="text-15 text-primary">Almaty, KZ</span>
      <v-btn size="large" color="primary">MEDIUM BUTTON</v-btn>
    </div>`,
  variantCard: 'elevated',
  styleCard: 'vacancy',
  image: {
    src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    attrs: {
      cover: true,
    },
  },
  title: 'Card Title',
  subtitle: 'Card Title',
  price: '150 000 - 180 000 ₸',
  text: 'A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.',
  city: 'Almaty, KZ',
  statusVacancy: [
    {
      id: 1,
      text: 'Reply without resume',
      status: 'error',
    },
  ],
};

export const VacancySuccess: StoryFn<CardArgs> = Template.bind({});
VacancySuccess.args = {
  buttonSlot: `
    <div>
      <p class="text-15 mb-5 text-primary">Almaty, KZ</p>
      <v-btn block size="large" color="primary">MEDIUM BUTTON</v-btn>
    </div>`,
  variantCard: 'elevated',
  styleCard: 'vacancy',
  image: {
    src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    attrs: {
      cover: true,
    },
  },
  title: 'Card Title',
  positionImageVacancy: 'start',
  text: 'A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.',
  city: 'Almaty, KZ',
  statusVacancy: [
    {
      id: 1,
      text: 'Be the first',
      status: 'success',
    },
    {
      id: 2,
      text: 'Be the first',
      status: 'success',
    },
  ],
};

export const ModalAndCard: StoryFn<CardArgs> = Template.bind({});
ModalAndCard.args = {
  'card-width': 700,
  horizontalCard: true,
  image: {
    src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    attrs: {
      class: 'rounded-circle',
      'max-width': 86,
      height: 86,
      cover: true,
    },
  },
  variantCard: 'elevated',
  styleCard: 'standard',
  title: 'Железнорудные окатыши',
  text: 'СТ АО ССГПО-11402-2022',
  'title-class': 'text-h4',
  'title-style': 'width: 280px',
  'text-style': 'cursor: pointer',
  'text-class': 'text-black',
  gap: 24,
  'card-class': 'px-12 py-13',
  'card-color': 'primary',
  'card-rounded': 'xl',
  hoverText: true,
  textImage: {
    src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    attrs: {
      class: 'rounded-circle',
      'max-width': 20,
      height: 20,
      cover: true,
    },
  },
  modal: true,
  'modal-width': 600,
  'modal-img': 'https://www.figma.com/file/4olLWc8CXyZmkwje9SuEah/image/2d13c92b16b427ccd0b154544ab7922d50edb16c',
};
