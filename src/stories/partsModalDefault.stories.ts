import Modal from '../runtime/components/Parts/Modal/Default.vue';
import type { IModalDefault } from '../runtime/components/Parts/Modal/modalTypes';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Parts/Modal/Default',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    heading: { control: 'text' },
    text: { control: 'text' },
    rounded: { control: 'text' },
    buttons: { control: 'array' },
    buttonsDirection: { control: 'text' },
    icon: { control: 'text' },
    iconCenter: { control: 'boolean' },
    iconBg: { control: 'text' },
    img: { control: 'text' },
    imgRounded: { control: 'text' },
    imgFluid: { control: 'boolean' },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<IModalDefault> = (args: IModalDefault) => ({
  components: { Modal },
  setup(): { args: IModalDefault } {
    return { args };
  },
  template: `<Modal v-bind="args" />`,
});

export const Standard: StoryFn<IModalDefault> = Template.bind({});
Standard.args = {
  modelValue: true,
  heading: 'Sure you want to accept?',
  text: 'Are you sure you want to accept this?',
  rounded: 'lg',
  buttons: [
    {
      id: 0,
      text: 'No, cancel',
      attrs: {
        size: 'x-large',
        variant: 'outlined',
        color: 'primary',
        class: 'text-body-1',
        rounded: 'lg',
      },
    },
    {
      id: 1,
      text: 'Yes, confirm',
      attrs: {
        size: 'x-large',
        variant: 'flat',
        color: 'primary',
        class: 'text-body-1',
        rounded: 'lg',
      },
    },
  ],
  icon: 'mdi-check-circle-outline',
  'icon-size': '34',
};

export const WithBodySlot: StoryFn<IModalDefault> = Template.bind({});
WithBodySlot.args = {
  ...Standard.args,
  bodySlot: `
    <v-text-field variant="solo-filled" flat hide-details placeholder="Email" />
    <v-checkbox label="Don't show this again" hide-details></v-checkbox>
  `,
};

export const WithoutIcon: StoryFn<IModalDefault> = Template.bind({});
WithoutIcon.args = {
  ...Standard.args,
  icon: '',
};

export const CenteredIcon: StoryFn<IModalDefault> = Template.bind({});
CenteredIcon.args = {
  ...Standard.args,
  buttonsDirection: 'column-reverse',
  iconCenter: true,
  iconBg: 'transparent',
  'icon-size': '52',
};

export const WithImage: StoryFn<IModalDefault> = Template.bind({});
WithImage.args = {
  ...Standard.args,
  img: 'https://images.unsplash.com/photo-1684252408280-737200626f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80',
  'img-height': '300',
  imgRounded: 'lg',
};

export const FluidImage: StoryFn<IModalDefault> = Template.bind({});
FluidImage.args = {
  ...Standard.args,
  img: 'https://images.unsplash.com/photo-1684252408280-737200626f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80',
  imgFluid: true,
  'close-button-variant': 'tonal',
  'close-button-color': 'grey-lighten-3',
};
