import Modal from '../runtime/components/Parts/modal.vue'

const modal_buttons = [
  {
    id: 0,
    text: 'No, cancel',
    attributes: {
      size: 'x-large',
      variant: 'outlined',
      color: 'primary',
      class: 'text-body-1',
      rounded: 'lg',
    }
  },

  {
    id: 1,
    text: 'Yes, confirm ',
    attributes: {
      size: 'x-large',
      variant: 'flat',
      color: 'primary',
      class: 'text-body-1',
      rounded: 'lg',
    }
  }
]

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    //General
    modelValue: 'boolean',
    heading: { type: 'text' },
    text: { type: 'text' },
    rounded: { type: 'text' },

    //Buttons
    buttons: { type: 'array' },
    buttonsDirection: { type: 'text' },

    //Icon
    icon: { type: 'text' },
    iconCenter: {type: 'boolean'},
    iconBg: { type: 'text' },

    //Img
    img: { type: 'text' },
    imgRounded: { type: 'text' },
    imgFluid: {type: 'boolean'}
  },
};

export const Standard = {
  render: (args) => ({
    components: { Modal },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Modal v-bind="args">
    </Modal>`
  }),
  args: {
    modelValue: true,
    width:"580",
    heading:"Sure you want to accept?",
    text:"A sure you want to accept this?",
    rounded:"lg",
    buttons: modal_buttons,
    icon:"mdi-check-circle-outline",
    'icon-size':"34"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=1441%3A36039&mode=design&t=pIUOX6myj5IXqDE7-1",
    },
  },
}

export const body_slot = {
  render: (args) => ({
    components: { Modal },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Modal v-bind="args">
      <template #body v-if="${'bodySlot' in args}">
        ${args.bodySlot}
      </template>
    </Modal>`
  }),
  args: {
    bodySlot:
       `<v-text-field variant="solo-filled" flat hide-details placeholder="Email" />
        <v-checkbox label="Don't show this again" hide-details></v-checkbox>`,
    modelValue: true,
    width:"580",
    heading:"Sure you want to accept?",
    text:"A sure you want to accept this?",
    rounded:"lg",
    buttons: modal_buttons,
    icon:"mdi-check-circle-outline",
    'icon-size':"34"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=1441%3A36039&mode=design&t=pIUOX6myj5IXqDE7-1",
    },
  },
}

export const No_icon = {
  render: (args) => ({
    components: { Modal },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Modal v-bind="args">
    </Modal>`
  }),
  args: {
    modelValue: true,
    width:"580",
    heading:"Sure you want to accept?",
    text:"A sure you want to accept this?",
    rounded:"lg",
    buttons:[
      {
        id: 0,
        text: 'No, cancel',
        attributes: {
          size: 'x-large',
          variant: 'outlined',
          color: 'primary',
          class: 'text-body-1',
          rounded: 'lg',
        }
      },

      {
        id: 1,
        text: 'Yes, confirm ',
        attributes: {
          size: 'x-large',
          variant: 'flat',
          color: 'primary',
          class: 'text-body-1',
          rounded: 'lg',
        }
      },
    ],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=1441%3A36039&mode=design&t=pIUOX6myj5IXqDE7-1",
    },
  },
}

export const Icon_center = {
  render: (args) => ({
    components: { Modal },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Modal v-bind="args">
    </Modal>`
  }),
  args: {
    modelValue: true,
    width:"580",
    heading:"Sure you want to accept?",
    text:"A sure you want to accept this?",
    rounded:"lg",
    buttons: modal_buttons,
    buttonsDirection: 'column-reverse',
    icon: 'mdi-check-circle-outline',
    iconCenter: true,
    'icon-color':"dark",
    iconBg: "transparent",
    'icon-size': "52"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=1441%3A36039&mode=design&t=pIUOX6myj5IXqDE7-1",
    },
  },
}

export const Image = {
  render: (args) => ({
    components: { Modal },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Modal v-bind="args">
    </Modal>`
  }),
  args: {
    modelValue: true,
    width: "580",
    heading: "Subscribe to our newsletter",
    text: "A sure you want to accept this?",
    rounded: "lg",
    buttons: modal_buttons,
    'img-height': "300",
    'img-rounded': 'lg',
    img: "https://images.unsplash.com/photo-1684252408280-737200626f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=1441%3A36039&mode=design&t=pIUOX6myj5IXqDE7-1",
    },
  },
}

export const Image_fluid = {
  render: (args) => ({
    components: { Modal },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Modal v-bind="args">
    </Modal>`
  }),
  args: {
    modelValue: true,
    width: "580",
    heading: "Subscribe to our newsletter",
    text: "A sure you want to accept this?",
    rounded: "lg",
    'close-button-variant': "tonal",
    'close-button-color': "grey-lighten-3",
    buttons: modal_buttons,
    'img-height': "300",
    'img-fluid': true,
    img: "https://images.unsplash.com/photo-1684252408280-737200626f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=1441%3A36039&mode=design&t=pIUOX6myj5IXqDE7-1",
    },
  },
}
