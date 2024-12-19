import Card from '../runtime/components/Parts/Card/Default.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Card',
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
    image: {
      src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      attrs: {
        cover: true
      }
    },
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
    maxWidth: '100%',
    horizontalWidthImage: 300,
    variantCard: "elevated",
    styleCard: "standard",
    image: {
      src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      attrs: {
        cover: true
      }
    },
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
    image: {
      src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      attrs: {
        cover: true
      }
    },
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

export const modalAndCard = {
  args: {
    'card-width': 700,
    'horizontal-card': true,
    image:{
      src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        attrs: {
        class: 'rounded-circle',
          'max-width': 86,
          height: 86,
          cover: true
      }
    },
    'variant-card': "elevated",
    'style-card': "standard",
    'title': "Железнорудные окатыши",
    'text': "СТ АО ССГПО-11402-2022",
    'title-class': "text-h4",
    'title-style': "width: 280px",
    'text-style': "cursor: pointer",
    'text-class': "text-black",
    gap: 24,
    'card-class': "px-12 py-13",
    'card-color': "primary",
    'card-rounded': "xl",
    'hover-text': true,
    'text-image': {
      src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        attrs: {
        class: 'rounded-circle',
          'max-width': 20,
          height: 20,
          cover: true
      }
    },
    modal: true,
    'modal-width': 600,
    'modal-img': "https://www.figma.com/file/4olLWc8CXyZmkwje9SuEah/image/2d13c92b16b427ccd0b154544ab7922d50edb16c",
  },

}
