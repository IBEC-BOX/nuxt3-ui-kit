import partsNews from '../runtime/components/Parts/News.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/partsNews',
  component: partsNews,
  tags: ['autodocs'],
  argTypes: {
    settingsCol: { type: 'object' },
    settingsButton: { type: 'object'},
    cards: { control: 'array' },
    title: { control: 'text' }
  },
};

export const First = {
  render: (args) => ({
    components: { partsNews },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<partsNews v-bind="args">
      <template v-if="${'buttonNews' in args}" v-slot:buttonNews>
        ${args.buttonNews}
      </template>
      </partsNews>`
  }),
  args: {
    text: "Новости о нас",
    positionTitle: "start",
    cards: [
      {
        id: 1,
        dateAuthorRight: false,
        horizontalCard: false,
        width: 349,
        minHeight: 414,
        variantCard: "elevated",
        styleCard: "standard",
        imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        imgAlt: "Картинка",
        title: "Card Title",
        text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
        date: "02.04.2023",
        author: "by Tyler, The Creator",
        functionButton: null,
        textButton: "Читать",
        iconButton: "",
        prependIconButton: "$vuetify",
        appendIconButton: "",
      },
      {
        id: 2,
        dateAuthorRight: false,
        horizontalCard: false,
        width: 349,
        variantCard: "elevated",
        styleCard: "standard",
        imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        imgAlt: "Картинка",
        title: "Card Title",
        text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
        date: "02.04.2023",
        author: "by Tyler, The Creator",
        functionButton: null,
        textButton: "Читать",
      },
      {
        id: 3,
        dateAuthorRight: false,
        horizontalCard: false,
        width: 349,
        variantCard: "elevated",
        styleCard: "standard",
        imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        imgAlt: "Картинка",
        title: "Card Title",
        text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
        date: "02.04.2023",
        author: "by Tyler, The Creator",
        functionButton: null,
        textButton: "Читать",
      },
      {
        id: 4,
        dateAuthorRight: false,
        horizontalCard: false,
        width: 349,
        minHeight: 414,
        variantCard: "elevated",
        styleCard: "standard",
        imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        imgAlt: "Картинка",
        title: "Card Title",
        text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
        date: "02.04.2023",
        author: "by Tyler, The Creator",
        functionButton: null,
        textButton: "Читать",
      },
      {
        id: 5,
        dateAuthorRight: false,
        horizontalCard: false,
        width: 349,
        minHeight: 414,
        variantCard: "elevated",
        styleCard: "standard",
        imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        imgAlt: "Картинка",
        title: "Card Title",
        text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
        date: "02.04.2023",
        author: "by Tyler, The Creator",
        functionButton: null,
        textButton: "Читать",
      },
      {
        id: 6,
        dateAuthorRight: false,
        horizontalCard: false,
        width: 349,
        minHeight: 414,
        variantCard: "elevated",
        styleCard: "standard",
        imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        imgAlt: "Картинка",
        title: "Card Title",
        text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
        date: "02.04.2023",
        author: "by Tyler, The Creator",
        functionButton: null,
        textButton: "Читать",
        appendIconButton: "$vuetify",
      }
    ],
    settingsCol: {
      cols: "12",
      sm: "6",
      md: "4",
      lg: "4",
      xl: "3",
      xxl: "2",
    },
    settingsButton: {
      variant: "",
      stacked: false,
      density: "",
      size: "",
      block: false,
      rounded: "",
      elevation: 0,
      ripple: false,
      color: "primary"
    },
    buttonNews: `<v-btn size="large">MEDIUM BUTTON</v-btn>`
  }
}
