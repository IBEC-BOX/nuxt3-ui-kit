import View from '../runtime/components/Parts/Gallery/View.vue';

export default {
  title: 'Parts/Galleries/View',
  component: View,
  tags: ['autodocs'],
  argTypes: {},
};

export const Standard = {
  render: (args) => ({
    components: { View },
    setup() {
      return { args };
    },
    template: '<View v-bind="args" />',
  }),
  args: {
    gallery: [
      {
        id: 1,
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: true,
      },
      {
        id: 2,
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        active: false,
      },
    ],
    previewImage: {
      image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      active: true,
      id: 1,
    },
    modelValue: true,
  }
};

