import Card from '../runtime/components/Parts/Card.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    width: { control: "text"  },
    styleCard: {
      control: { type: "radio" },
      options: ['standard', 'vacancy']
    },
    variantCard: {
      control: { type: "select" },
      options: ['elevated', 'flat', 'tonal', 'outlined']
    },
    horizontalCard: { control: "boolean"  },
    horizontalWidthImage: { control: "text"  },
    dateAuthorRight: { control: "boolean"  },
    imgSrc: { control: "text"  },
    imgAlt: { control: "text"  },
    title: { control: "text"  },
    subtitle: { control: "text"  },
    price: { control: "text"  },
    text: { control: "text"  },
    date: { control: "text"  },
    author: { control: "text"  },
    city: { control: "text"  },
    statusVacancy: { control: "object"  }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: `
    <Card>
      <template v-if="${'buttonSlot' in args}" v-slot:button>
        ${args.buttonSlot}
      </template>
    </Card>
  `
});

export const Standard = {
  args: {
    buttonSlot: `<v-btn size="large">MEDIUM BUTTON</v-btn>`,
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
    subtitle: "",
    price: "",
    city: "",
    statusVacancy: {}
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
    width: 700,
    horizontalWidthImage: 300,
    variantCard: "elevated",
    styleCard: "standard",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    date: "02.04.2023",
    author: "by Tyler, The Creator",
    subtitle: "",
    price: "",
    city: "",
    statusVacancy: {}
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=1%3A3&mode=dev",
    },
  },
}

export const vacancyError = {
  args: {
    buttonSlot: `<v-btn size="large">MEDIUM BUTTON</v-btn>`,
    width: 349,
    variantCard: "elevated",
    styleCard: "vacancy",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    subtitle: "Card Title",
    price: "150 000 - 180 000 ₸",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    city: "Almaty, KZ",
    statusVacancy: {
      text: "Reply without resume",
      status: "error"
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=1%3A3&mode=dev",
    },
  },
}

export const vacancySuccess = {
  args: {
    buttonSlot: `<v-btn size="large">MEDIUM BUTTON</v-btn>`,
    width: 349,
    variantCard: "elevated",
    styleCard: "vacancy",
    imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    imgAlt: "Картинка",
    title: "Card Title",
    subtitle: "",
    price: "",
    positionImageVacancy: "start",
    text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    city: "Almaty, KZ",
    statusVacancy: {
      text: "Be the first",
      status: "success"
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?node-id=1%3A3&mode=dev",
    },
  },
}
