import View from '../runtime/components/Parts/Gallery/View.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import type { IGalleryView } from '../runtime/components/Parts/Gallery/galleryTypes';

export default {
  title: 'Parts/Gallery/View',
  component: View,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof View>;

const Template: StoryFn<IGalleryView> = (args: IGalleryView) => ({
  components: { View },
  setup(): { args: IGalleryView } {
    return { args };
  },
  template: '<View v-bind="args" />',
});

export const Standard: StoryFn<IGalleryView> = Template.bind({});
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
