import Card from '../runtime/components/Parts/Card/ErgNews.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Card/ErgNews',
  component: Card
  ,
  tags: ['autodocs'],
};

export const Standard = {
  render: (args) => ({
    components: { Card },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Card v-bind="args"></Card>`
  }),
  args: {
    card: {
      link: "/",
      image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      title: 'test',
      date: '21.02.2024'
    }
  }
}
