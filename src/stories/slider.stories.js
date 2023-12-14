import Slider from '../runtime/components/Parts/slider.vue'
const slides = [
  {
    id: 0,
    title: 'Кредитная карта\n с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    titleAttrs: {
      class: 'text-white w-75'
    },
    img: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1'
        }
      }
    ],
    active: true
  },

  {
    id: 1,
    title: 'Страхование работников от несчастных случаев',
    titleAttrs: {
      class: 'text-h2 mb-0'
    },
    img: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1'
        }
      }
    ],
    active: true
  },

  {
    id: 2,
    title: 'Кредитная карта с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    img: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false
  },

  {
    id: 3,
    title: 'Страхование работников от несчастных случаев',
    titleAttrs: {
      class: 'text-h2 mb-0'
    },
    img: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1'
        }
      }
    ],
    active: true
  },

  {
    id: 4,
    title: 'Кредитная карта\n с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    titleAttrs: {
      class: 'text-white w-75'
    },
    img: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1'
        }
      }
    ],
    active: true
  },

  {
    id: 5,
    title: 'Кредитная карта с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    img: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false
  },
]

export default {
  title: 'Parts/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export const Standard = {
  render: (args) => ({
    components: { Slider },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Slider v-bind="args">
    </Slider>`
  }),
  args: {
    'slider-loop': true,
    'slides': slides,
    'slider-direction': "vertical",
    'control-buttons-align': "right",
    'control-buttons-size': "small",
    'slider-space-between': "16",
    'rounded': "xl"
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=799%3A23548&mode=design&t=BOxkwX4fDO2LoaIg-1",
    },
  }
}

export const FillButtonsCenter = {
  render: (args) => ({
    components: { Slider },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Slider v-bind="args">
    </Slider>`
  }),

  args: {
    'slider-loop': true,
    'slides': slides,
    'slider-direction': "vertical",
    'control-buttons-align': "center",
    'slider-centered-slides': true,
    'control-buttons-size': "small",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=799%3A23548&mode=design&t=BOxkwX4fDO2LoaIg-1",
    },
  }
}

export const FillButtonsRight = {
  render: (args) => ({
    components: { Slider },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Slider v-bind="args">
    </Slider>`
  }),

  args: {
    'slider-loop': true,
    'slider-container': true,
    'slides': slides,
    'control-buttons-align': "right",
    'slider-centered-slides': true,
    'slider-direction': "vertical",
    'control-buttons-size': "small",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=799%3A23548&mode=design&t=BOxkwX4fDO2LoaIg-1",
    },
  }
}

export const Peeking = {
  render: (args) => ({
    components: { Slider },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<Slider v-bind="args">
    </Slider>`
  }),

  args: {
    'slider-loop': true,
    'slider-peeking': true,
    'slider-centered-slides': true,
    'slider-space-between':"16",
    'slider-pagination-center': true,
    'slider-pagination': true,
    'slider-pagination-type':"dot",
    ':slides': slides,
    'slides-rounded':"xl",
    'control-buttons-align':"center",
    'control-buttons-size':"small",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=799%3A23548&mode=design&t=BOxkwX4fDO2LoaIg-1",
    },
  }
}
