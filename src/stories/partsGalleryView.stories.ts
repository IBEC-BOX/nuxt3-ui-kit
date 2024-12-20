import type { Meta, Story } from '@storybook/vue3';
import type { IGalleryView } from '../runtime/components/Parts/Gallery/galleryTypes';
import View from '../runtime/components/Parts/Gallery/View.vue';

export default {
  title: 'Parts/Gallery/View',
  component: View,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof View>;

const Template: Story<IGalleryView> = (args) => ({
  components: { View },
  setup() {
    return { args };
  },
  template: '<View v-bind="args" />',
});

export const Standard = Template.bind({});
Standard.args = {
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
    id: 1,
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    active: true,
  },
  modelValue: true,
};
