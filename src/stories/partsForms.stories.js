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

const inputs = [
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
]
const checkbox = {
  attrs: {
    color: 'primary',
    rules: [
      v => !!v || 'Нажми на флажок!'
    ],
  },
  label: "<span>Нажимая кнопку, я соглашаюсь на обработку <a href='/'>персональных данных</a></span>"
}
const button = {
  attrs: {
    size: 'x-large',
    color: 'primary'
  },
  text: "Отправить"
}
const commentary = {
  attrs: {
    variant: 'outlined',
    label: "комментарий",
    rules: [
      v => !!v || 'Комментарий обязателен к заполнению',
    ],
    rows: 8,
  }
}
const combobox = {
  attrs: {
    variant: 'outlined',
    label: "выбери пункт",
    clearable: true,
    multiple: true,
    items: ['a', 'b', 'c', 'd', 'e', 'ab', 'bc', 'de']
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const StandardFirst = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    inputs: inputs,
    commentary: commentary,
    checkboxSetting: checkbox,
    buttonSetting: button
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
    inputs: inputs,
    checkboxSetting: checkbox,
    buttonSetting: button
  }
}

export const BigImage = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    bigImage: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    altImage: "Kartinka",
    inputs: inputs,
    checkboxSetting: checkbox,
    buttonSetting: button,
    commentary: commentary,
    combobox: combobox
  }
}

export const SmallImage = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    smallImage: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    altImage: "Kartinka",
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
    inputs: inputs,
    checkboxSetting: checkbox,
    buttonSetting: button,
    commentary: commentary,
  }
}

export const Call = {
  args: {
    title: "Заполните контактные данные и оставьте заявку на консультацию",
    subtitle: "Мы перезывниывкм в течение 30 минут каждый день с 10:00 до 19:00. Если оставите заявку сейчас, то перезвоним уже в рабочее время.",
    commentary: false,
    styleForm: 'call',
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
    inputs: inputs,
    checkboxSetting: checkbox,
    buttonSetting: button,
  }
}

export const OnlyForm = {
  args: {
    title: "Ответим на все ваши вопросы",
    styleForm: 'onlyForm',
    inputs: inputs,
    buttonSetting: button,
  }
}

export const ContactsForm = {
  components: { Forms },

  args: {
    title: 'title',
    styleForm: 'contacts',
    switchContentOnValid: true,
    contacts: [
      {
        title: 'asd',
        phone: `<p>+321321321</p><p>+321321321</p>`,
        mail: 'asdsadasd',
        mailImage: '/mail.svg'
      },
      {
        title: 'asd',
        phone: `<p>+654654654</p><p>+3121231235t4645654</p>`,
        mail: 'asdsadasd',
        mailImage: '/mail.svg'
      },
    ],
    inputs: inputs,
    buttonSetting: button,
    switchContentButton: {
      text: 'asdasd',
      attrs: {
        size: 'large',
        block: true
      }
    },
    'confirm-form': 'slot #confirm-form'
  }
}
