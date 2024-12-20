import Vacancies from '../runtime/components/Parts/Vacancies/Erg.vue';
import type { IVacanciesErg } from '../runtime/components/Parts/Vacancies/vacanciesTypes';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Parts/Vacancies/Erg',
  component: Vacancies,
  tags: ['autodocs'],
} as Meta<typeof Vacancies>;

const Template: StoryFn<IVacanciesErg> = (args: IVacanciesErg) => ({
  components: { Vacancies },
  setup(): { args: IVacanciesErg} {
    return { args };
  },
  template: `
    <v-container>
      <Vacancies v-bind="args" />
    </v-container>
  `,
});

export const BackgroundImage: StoryFn<IVacanciesErg> = Template.bind({});
BackgroundImage.args = {
  backgroundImage: {
    image: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb',
    attrs: {
      class: 'mb-10 rounded-xl',
    },
  },
  chip: {
    text: 'Вакансии',
    attrs: {
      color: 'primary',
    },
  },
  button: {
    text: 'Присоединиться',
    image: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb',
    imageAttrs: {
      class: 'rounded-xl',
    },
    to: '/',
  },
  title: 'Станьте частью команды',
  subTitle: 'Мы предлагаем конкурентные зарплаты, социальные гарантии',
  textBody: 'Мы ищем талантливых сотрудников для работы в нашей компании.',
};

export const LeftImage: StoryFn<IVacanciesErg> = Template.bind({});
LeftImage.args = {
  leftImage: {
    image: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb',
    attrs: {
      width: '100%',
      height: '100%',
      cover: true,
      class: 'rounded-s-xl',
    },
  },
  chip: {
    text: 'Вакансии',
    attrs: {
      color: 'primary',
    },
  },
  title: 'Станьте частью команды',
  subTitle: 'Мы предлагаем конкурентные зарплаты, социальные гарантии',
  textBody: 'Присоединяйтесь к нам и развивайтесь вместе с нами.',
};

export const RightImage: StoryFn<IVacanciesErg> = Template.bind({});
RightImage.args = {
  rightImage: {
    image: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb',
    attrs: {
      width: '100%',
      height: '100%',
      cover: true,
      class: 'rounded-e-xl',
    },
  },
  chip: {
    text: 'Вакансии',
    attrs: {
      color: 'primary',
    },
  },
  title: 'Станьте частью команды',
  subTitle: 'Мы предлагаем конкурентные зарплаты, социальные гарантии',
  textBody: 'Работайте с нами в современной и динамичной команде.',
};
