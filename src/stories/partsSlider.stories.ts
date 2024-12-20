import Slider from '../runtime/components/Parts/Slider/Default.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import type { ISliderDefault } from '../runtime/components/Parts/Slider/sliderTypes';

export default {
  title: 'Parts/Slider/Default',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    slides: { control: 'object' },
    height: { control: 'text' },
    rounded: { control: 'text' },
    sliderContainer: { control: 'boolean' },
    controlButtonsAlign: {
      control: 'select',
      options: ['bottom', 'right', 'center', 'left-bottom'],
    },
    sliderDirection: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    controlButtonsSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta<ISliderDefault>;

const Template: StoryFn<ISliderDefault> = (args: ISliderDefault) => ({
  components: { Slider },
  setup(): { args: ISliderDefault } {
    return { args };
  },
  template: `
    <v-container>
      <Slider v-bind="args" />
    </v-container>
  `,
});

export const Standard: StoryFn<ISliderDefault> = Template.bind({});
Standard.args = {
  slides: [
    {
      id: 0,
      title: 'Кредитная карта с целым годом без %',
      subtitle: 'Подзаголовок маленький, в две строки',
      backgroundImg:
        'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttons: [
        {
          id: 0,
          text: 'Large button',
          attrs: {
            size: 'large',
            color: 'primary',
            class: 'text-body-1',
          },
        },
      ],
    },
    {
      id: 1,
      title: 'Страхование работников от несчастных случаев',
      backgroundImg:
        'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttons: [
        {
          id: 0,
          text: 'Large button',
          attrs: {
            size: 'large',
            color: 'primary',
            class: 'text-body-1',
          },
        },
      ],
    },
  ],
  rounded: 'lg',
  height: '400px',
  sliderContainer: false,
  controlButtonsAlign: 'right',
  sliderPagination: true,
  sliderPaginationType: 'dot',
};

export const FillButtonsCenter: StoryFn<ISliderDefault> = Template.bind({});
FillButtonsCenter.args = {
  slides: [
    {
      id: 0,
      title: 'Экологические акции',
      subtitle: 'Команда активно помогает экологии.',
      textBlockAttrs: {
        class: 'text-primary',
      },
      backgroundImg:
        'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttons: [
        {
          id: 0,
          text: 'Подробнее',
          attrs: {
            size: 'large',
            color: 'primary',
            class: 'text-body-1',
          },
        },
      ],
    },
  ],
  controlButtonsAlign: 'center',
  sliderCenteredSlides: true,
  controlButtonsSize: 'medium',
};

export const FillButtonsRight: StoryFn<ISliderDefault> = Template.bind({});
FillButtonsRight.args = {
  slides: [
    {
      id: 0,
      title: 'Кредитная карта',
      subtitle: 'Без процентов до года.',
      backgroundImg:
        'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 1,
      title: 'Страхование работников',
      subtitle: 'Обеспечьте защиту сотрудников.',
      backgroundImg:
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  sliderContainer: true,
  controlButtonsAlign: 'right',
  sliderCenteredSlides: true,
  controlButtonsSize: 'small',
};

export const Peeking: StoryFn<ISliderDefault> = Template.bind({});
Peeking.args = {
  slides: [
    {
      id: 0,
      title: 'Кредитная карта',
      subtitle: 'Сэкономьте деньги и время.',
      backgroundImg:
        'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  sliderPeeking: true,
  sliderPagination: true,
  sliderPaginationType: 'dot',
  controlButtonsAlign: 'center',
  controlButtonsSize: 'medium',
};

export const ButtonsLeftBottom: StoryFn<ISliderDefault> = Template.bind({});
ButtonsLeftBottom.args = {
  slides: [
    {
      id: 0,
      title: 'Страхование работников',
      subtitle: 'Обеспечьте защиту сотрудников.',
      backgroundImg:
        'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  controlButtonsAlign: 'left-bottom',
  controlButtonsSize: 'large',
  controlButtonsColor: 'white',
  controlButtonsRounded: 'lg',
};
