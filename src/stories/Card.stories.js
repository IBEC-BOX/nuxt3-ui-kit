import Card from '../runtime/components/Parts/Card.vue'
import Footer from "../runtime/components/Parts/footer/footer.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: { type: "text" },
    minHeight: { type: "text" },
    styleCard: {
      control: { control: "radio" },
      options: ['standard', 'vacancy']
    },
    variantCard: {
      control: { control: "select" },
      options: ['elevated', 'flat', 'tonal', 'outlined']
    },
    horizontalCard: { type: "boolean"  },
    horizontalWidthImage: { type: "text"  },
    dateAuthorRight: { type: "boolean"  },
    imgSrc: { type: "text"  },
    imgAlt: { type: "text"  },
    title: { type: "text"  },
    subtitle: { type: "text"  },
    price: { type: "text"  },
    text: { type: "text"  },
    date: { type: "text"  },
    author: { type: "text"  },
    city: { type: "text"  },
    statusVacancy: { type: "Array"  }
  },
};

export const Standard = {
  render: (args) => ({
    components: { Card },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Card v-bind="args">
      <template v-if="${'buttonSlot' in args}" v-slot:button>
        ${args.buttonSlot}
      </template>
      </Card>`
  }),
  args: {
    buttonSlot: `<v-btn size="large">MEDIUM BUTTON</v-btn>`,
    dateAuthorRight: false,
    horizontalCard: false,
    maxWidth: 349,
    variantCard: "elevated",
    styleCard: "standard",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=1%3A3&mode=dev",
    },
  },
}

export const StandardHorizontal = {
  args: {
    dateAuthorRight: true,
    horizontalCard: true,
    maxWidth: 700,
    horizontalWidthImage: 300,
    variantCard: "elevated",
    styleCard: "standard",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=1%3A3&mode=dev",
    },
  },
}

export const vacancyError = {
  render: (args) => ({
    components: { Card },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Card v-bind="args">
      <template v-if="${'buttonSlot' in args}" v-slot:button>
        ${args.buttonSlot}
      </template>
      </Card>`
  }),
  args: {
    buttonSlot: `
    <div class="d-flex justify-space-between align-center">
      <span class="text-15 text-primary">Almaty, KZ</span>
      <v-btn size="large" color="primary">MEDIUM BUTTON</v-btn>
    </div>`,
    maxWidth: 349,
    variantCard: "elevated",
    styleCard: "vacancy",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    subtitle: "Card Title",
    price: "150 000 - 180 000 ₸",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    city: "Almaty, KZ",
    statusVacancy: [
      {
        id: 1,
        text: "Reply without resume",
        status: "error"
      }
    ]
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=1%3A3&mode=dev",
    },
  },
}



export const vacancySuccess = {
  render: vacancyError.render,
  args: {
    buttonSlot: `
    <div>
      <p class="text-15 mb-5 text-primary">Almaty, KZ</p>
      <v-btn block size="large" color="primary">MEDIUM BUTTON</v-btn>
    </div>`,
    maxWidth: 349,
    variantCard: "elevated",
    styleCard: "vacancy",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    positionImageVacancy: "start",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    city: "Almaty, KZ",
    statusVacancy: [
      {
        id: 1,
        text: "Be the first",
        status: "success"
      },
      {
        id: 2,
        text: "Be the first",
        status: "success"
      },
    ]
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=1%3A3&mode=dev",
    },
  },
}
