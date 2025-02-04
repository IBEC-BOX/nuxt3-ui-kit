import Slider from '../runtime/components/Parts/Slider/Default.vue'
const slides = [
  {
    id: 0,
    title: 'Кредитная карта\n с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    titleAttrs: {
      class: 'text-white w-75'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    backgroundImg: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    backgroundImg: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false
  },

  {
    id: 3,
    title: 'Страхование работников от несчастных случаев',
    titleAttrs: {
      class: 'text-h2 mb-0'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    backgroundImg: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
]
const slides2 = [
    {
      id: 0,
      chip: {
        text: 'abvgd',
        attrs: {
          color: 'primary'
        }
      },
      title: 'Кредитная карта с целым годом без %',
      subtitle: 'Подзаголовок маленький, в две строки',
      titleAttrs: {
        class: 'text-white w-75'
      },
      backgroundImg: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttons: [
        {
          id: 0,
          text: 'Large button',
          attrs: {
            size: 'large',
            color: 'primary',
            class: 'text-body-1',
          }
        }
      ],
      active: true,
    },
    {
      id: 1,
      chip: {
        text: 'abvgd',
        attrs: {
          color: 'primary'
        }
      },
      title: 'Экологические акции',
      subtitle: 'Команда АО “ССГПО” активно принимает участие в мероприятиях, направленных на помощь экологии',
      textBlockAttrs: {
        class: ''
      },
      subTitleAttrs: {
        class: 'text-primary'
      },
      titleAttrs: {
        class: 'text-primary text-h5 w-75'
      },
      img: {
        src: 'https://s3-alpha-sig.figma.com/img/555c/6876/cb9c4c93facc41f9da4145fa73aca28f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuQUtcWbVrWRn1GfwukhEdmCQ9ZxpWBc8-kYGxqc~kInBXYg7QiQUdnC11N6CBJyNYPhZmkMoCyqJLchOvtrizsQiSWQytj96hkeDbtlODJe60UxBq9LQqLWuzCoq8~9-IL~oKeji3ECSklL1VCqbv5NQ-Lxi~ItwX-sunBEXVsx9g9oxZIZrkuIVOfBA9vqYz1PVaG9FrIP7zL5R73ahu0m2V-MLPBe8OUFEQSWbDw9xUPIUKyXOfbm9En80I9oV8k55cLvyNaid-2qCCPtXrm26v7ohCeXQILx1-9j8xBHjy0cLploNutzmGMC0uiPQnr115gYHEhBXaJk2Ez8zA__',
        attrs: {
          'max-height': 400,
          'max-width': '98%',
          class: 'rounded-xl'
        }
      },
      active: true,
    },
    {
      id: 2,
      chip: {
        text: 'abvgd',
        attrs: {
          color: 'primary'
        }
      },
      title: 'Экологические акции',
      subtitle: 'Команда АО “ССГПО” активно принимает участие в мероприятиях, направленных на помощь экологии',
      textBlockAttrs: {
        class: ''
      },
      subTitleAttrs: {
        class: 'text-primary'
      },
      titleAttrs: {
        class: 'text-primary text-h5 w-75'
      },
      img: {
        src: 'https://s3-alpha-sig.figma.com/img/555c/6876/cb9c4c93facc41f9da4145fa73aca28f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuQUtcWbVrWRn1GfwukhEdmCQ9ZxpWBc8-kYGxqc~kInBXYg7QiQUdnC11N6CBJyNYPhZmkMoCyqJLchOvtrizsQiSWQytj96hkeDbtlODJe60UxBq9LQqLWuzCoq8~9-IL~oKeji3ECSklL1VCqbv5NQ-Lxi~ItwX-sunBEXVsx9g9oxZIZrkuIVOfBA9vqYz1PVaG9FrIP7zL5R73ahu0m2V-MLPBe8OUFEQSWbDw9xUPIUKyXOfbm9En80I9oV8k55cLvyNaid-2qCCPtXrm26v7ohCeXQILx1-9j8xBHjy0cLploNutzmGMC0uiPQnr115gYHEhBXaJk2Ez8zA__',
        attrs: {
          'max-height': 400,
          'max-width': '98%',
          class: 'rounded-xl'
        }
      },
      active: true,
    },
  ]

  export default {
  title: 'Parts/Slider/Default',
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
    'slider-loop': false,
    'slider-peeking': true,
    'slider-space-between':"16",
    'slider-pagination': true,
    'slider-pagination-type':"dot",
    'slides': slides,
    'slides-rounded':"xl",
    'control-buttons-align':"center",
    'control-buttons-size':"small",
    'slider-direction': "row",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?type=design&node-id=799%3A23548&mode=design&t=BOxkwX4fDO2LoaIg-1",
    },
  }
}

export const buttonsLeftBottom = {
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
    'slides': slides2,
    height: '400px',
    'slider-loop': true,
    'slider-centered-slides': false,
    'control-buttons-size': "small",
    'control-buttons-color': "white",
    'control-buttons-rounded': 'lg',
    'control-buttons-class': 'mr-2',
    'control-buttons-elevation': 0,
    "slider-container": false,
    "control-buttons-align":'left-bottom',
    'slider-direction': "row",
  },
}
