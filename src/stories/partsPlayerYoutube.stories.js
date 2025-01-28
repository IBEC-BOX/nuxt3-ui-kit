import PlayerYoutube from '../runtime/components/Parts/Player/Youtube.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Player/Youtube',
  component: PlayerYoutube,
  tags: ['autodocs'],
  argTypes: {},
};

export const Standard = {
  render: (args) => ({
    components: { PlayerYoutube },
    setup() {
      console.log(args)
      return { args };
    },
    template:`
        <PlayerYoutube v-bind="args" />
    `
  }),
  args: {
    video: "https://youtu.be/7uJNuyt_1AM?si=216YDRT97n2wMYaH",
    mute: false,
    autoplay: false,
    loop: false,
  }
}
