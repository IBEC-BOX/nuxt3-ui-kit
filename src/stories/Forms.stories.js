import Forms from "../runtime/components/Parts/Forms.vue"

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/Forms',
  component: Forms,
  tags: ['autodocs'],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: 'text' },
    commentary: { type: "Object" },
    styleForm: {
      control: { control: "radio" },
      options: ['standard', 'call'],
    },
    bigImage: { control: "text" },
    smallImage: { control: "text" },
    altImage: { control: "text" },
    checkboxSetting: { type: "Object" },
    inputs: { type: "Array" },
    combobox: { type: "Object" },
    socials: { type: "Array" },
    infoCompany: { type: "Array" },
    bgClass: { type: "String" },
    settingButton: { type: "Object" },
  },
  events: {
    'form-data': {
      name: 'form-data',
      description: 'Событие, возникающее при отправке данных формы.',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const StandardFirst = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    inputs: [
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
    ],
    commentary: {
      attrs: {
        variant: 'outlined',
        label: "комментарий",
        rules: [
          v => !!v || 'Комментарий обязателен к заполнению',
        ],
        rows: 8,
      }
    },
    checkboxSetting: {
      attrs: {
        color: 'primary',
        rules: [
          v => !!v || 'Нажми на флажок!'
        ],
      },
      label: "Нажимая кнопку, я соглашаюсь на обработку персональных данных"
    },
    buttonSetting: {
      attrs: {
        size: 'x-large',
        color: 'primary'
      },
      text: "Отправить"
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/Дизайн-система?type=design&node-id=842-23212&mode=design&t=5aDl7qE4AYVqQVHM-0",
    },
  }
};

export const StandardSecond = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    commentary: false,
    inputs: [
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 6,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 6,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
    ],
    checkboxSetting: {
      attrs: {
        color: 'primary',
        rules: [
          v => !!v || 'Нажми на флажок!'
        ],
      },
      label: "Нажимая кнопку, я соглашаюсь на обработку персональных данных"
    },
    buttonSetting: {
      attrs: {
        size: 'x-large',
        color: 'primary'
      },
      text: "Отправить"
    }
  }
}

export const BigImage = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    bigImage: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    altImage: "Kartinka",
    inputs: [
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 6,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 6,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
    ],
    checkboxSetting: {
      attrs: {
        color: 'primary',
        rules: [
          v => !!v || 'Нажми на флажок!'
        ],
      },
      label: "Нажимая кнопку, я соглашаюсь на обработку персональных данных"
    },
    buttonSetting: {
      attrs: {
        block: true,
        rounded: 'xl',
        size: 'x-large',
        color: 'primary'
      },
      text: "Отправить"
    },
    commentary: {
      attrs: {
        variant: 'outlined',
        label: "комментарий",
        rules: [
          v => !!v || 'Комментарий обязателен к заполнению',
        ],
        rows: 4,
      }
    },
    combobox: {
      attrs: {
        variant: 'outlined',
        label: "выбери пункт",
        clearable: true,
        multiple: true,
        items: ['a', 'b', 'c', 'd', 'e', 'ab', 'bc', 'de']
      }
    },
  }
}

export const SmallImage = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    smallImage: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    altImage: "Kartinka",
    inputs: [
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 6,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 6,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
    ],
    socials: [
      {
        link: '321',
        img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        alt: '321',
      },
      {
        link: '321',
        img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        alt: '321',
      },
      {
        link: '321',
        img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        alt: '321',
      },
    ],
    infoCompany: [
      {
        icon: "mdi-phone",
        colorIcon: "primary",
        sizeIcon: "large",
        text: "Номер телефона компании"
      },
      {
        icon: "mdi-information",
        colorIcon: "primary",
        sizeIcon: "large",
        text: "Номер телефона компании"
      },
    ],
    checkboxSetting: {
      attrs: {
        color: 'primary',
        rules: [
          v => !!v || 'Нажми на флажок!'
        ],
      },
      label: "Нажимая кнопку, я соглашаюсь на обработку персональных данных"
    },
    commentary: {
      attrs: {
        variant: 'outlined',
        label: "комментарий",
        rules: [
          v => !!v || 'Комментарий обязателен к заполнению',
        ],
        rows: 4,
      }
    },
    buttonSetting: {
      attrs: {
        block: true,
        rounded: 'xl',
        size: 'x-large',
        color: 'primary'
      },
      text: "Отправить"
    },
  }
}

export const Call = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    subtitle: "Мы перезывниывкм в течение 30 минут каждый день с 10:00 до 19:00. Если оставите заявку сейчас, то перезвоним уже в рабочее время.",
    commentary: false,
    styleForm: 'call',
    inputs: [
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
    ],
    socials: [
      {
        link: '321',
        img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        alt: '321',
      },
      {
        link: '321',
        img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        alt: '321',
      },
      {
        link: '321',
        img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        alt: '321',
      },
    ],
    checkboxSetting: {
      attrs: {
        color: 'primary',
        rules: [
          v => !!v || 'Нажми на флажок!'
        ],
      },
      label: "Нажимая кнопку, я соглашаюсь на обработку персональных данных"
    },
    buttonSetting: {
      attrs: {
        block: true,
        size: 'x-large',
      },
      text: "Отправить"
    },
  }
}

export const OnlyForm = {
  args: {
    title: "Ответим на все ваши вопросы",
    styleForm: 'onlyForm',
    inputs: [
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
      {
        value: '',
        colsAttrs: {
          cols: 12,
        },
        attrs: {
          variant: 'outlined',
          label: "Номер телефона",
          rules: [
            v => !!v || 'ФИО обязательно к заполнению',
            v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
          ],
          placeholder: "ФИО",
        },
        maska: {mask: "###-####-###"},
      },
    ],
    buttonSetting: {
      attrs: {
        block: true,
        size: 'x-large',
      },
      text: "Отправить"
    },
  }
}
