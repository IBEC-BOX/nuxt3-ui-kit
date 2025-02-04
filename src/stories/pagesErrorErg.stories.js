import Error from '../runtime/components/Pages/Error/Erg.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Pages/Error/Erg',
  component: Error,
  tags: ['autodocs'],
};

export const Standard = {
  render: (args) => ({
    components: { Error },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Error v-bind="args"></Error>`
  }),
  args: {
    error: {
      statusCode: 404,
      message: "Page not found",
      stack: "Error: Page not found at..."
    },
    title: 'title',
    subtitle: 'subtitle',
    otherTitle: 'other title',
    textButton: 'text button',
  }
}
