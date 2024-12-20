import Forms from "../runtime/components/Parts/Forms/Default.vue";
import type { Meta, StoryFn } from '@storybook/vue3';
import type { IFormsDefault } from '../runtime/components/Parts/Forms/formsTypes';

export default {
  title: 'Parts/Forms/Default',
  component: Forms,
  tags: ['autodocs'],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: 'text' },
    commentary: { type: "Object" },
    styleForm: {
      control: { control: "radio" },
      options: ['standard', 'call', 'contacts', 'onlyForm'],
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
} as Meta<typeof Forms>;

interface FormsArgs extends Partial<IFormsDefault> {}

const Template: StoryFn<FormsArgs> = (args: FormsArgs) => ({
  components: { Forms },
  setup(): { args: FormsArgs } {
    return { args };
  },
  template: `
    <v-container>
      <Forms v-bind="args" />
    </v-container>
  `,
});

const inputs: IFormsDefault['inputs'] = [
  {
    colsAttrs: { cols: 12 },
    attrs: {
      variant: 'outlined',
      label: "Номер телефона",
      rules: [
        (v: string) => !!v || 'ФИО обязательно к заполнению',
        (v: string) => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
      ],
      placeholder: "ФИО",
    },
    maska: { mask: "###-####-###" },
  },
];

const checkbox: IFormsDefault['checkbox'] = {
  attrs: {
    color: 'primary',
    rules: [(v: boolean) => !!v || 'Нажми на флажок!'],
  },
  label: `<span>Нажимая кнопку, я соглашаюсь на обработку <a href='/'>персональных данных</a></span>`,
};

const button: IFormsDefault['button'] = {
  attrs: { size: 'x-large', color: 'primary' },
  text: "Отправить",
};

const commentary: IFormsDefault['commentary'] = {
  id: 1,
  attrs: {
    variant: 'outlined',
    label: "Комментарий",
    rules: [(v: string) => !!v || 'Комментарий обязателен к заполнению'],
    rows: 8,
  },
};

const combobox: IFormsDefault['combobox'] = {
  attrs: {
    variant: 'outlined',
    label: "Выберите пункт",
    clearable: true,
    multiple: true,
    items: ['a', 'b', 'c', 'd', 'e', 'ab', 'bc', 'de'],
  },
};

export const StandardFirst: StoryFn<FormsArgs> = Template.bind({});
StandardFirst.args = {
  title: "Заполните контактные данные и оставьте заявку на консультацию",
  styleForm: 'standard',
  inputs,
  commentary,
  checkbox,
  button,
};

export const StandardSecond: StoryFn<FormsArgs> = Template.bind({});
StandardSecond.args = {
  title: "Заполните контактные данные и оставьте заявку на консультацию",
  commentary: {
    id: 1,
  },
  inputs,
  checkbox,
  button,
};

export const BigImage: StoryFn<FormsArgs> = Template.bind({});
BigImage.args = {
  title: "Заполните контактные данные и оставьте заявку на консультацию",
  bigImage: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  altImage: "Картинка",
  inputs,
  checkbox,
  button,
  commentary,
  combobox,
};

export const SmallImage: StoryFn<FormsArgs> = Template.bind({});
SmallImage.args = {
  title: "Заполните контактные данные и оставьте заявку на консультацию",
  smallImage: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  altImage: "Картинка",
  socials: [
    { link: '321', img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', alt: '321' },
    { link: '321', img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', alt: '321' },
  ],
  inputs,
  checkbox,
  button,
  commentary,
};

export const Call: StoryFn<FormsArgs> = Template.bind({});
Call.args = {
  title: "Заполните контактные данные и оставьте заявку на консультацию",
  subtitle: "Мы перезвоним в течение 30 минут каждый день с 10:00 до 19:00. Если оставите заявку сейчас, то перезвоним уже в рабочее время.",
  bigImage: '',
  smallImage: '',
  commentary: {
    id: 1,
  },
  styleForm: 'call',
  socials: [
    { link: '321', img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', alt: '321' },
    { link: '321', img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', alt: '321' },
  ],
  inputs,
  checkbox,
  button,
};

export const OnlyForm: StoryFn<FormsArgs> = Template.bind({});
OnlyForm.args = {
  title: "Ответим на все ваши вопросы",
  styleForm: 'onlyForm',
  bigImage: '',
  smallImage: '',
  inputs,
  button,
};

export const ContactsForm: StoryFn<FormsArgs> = Template.bind({});
ContactsForm.args = {
  title: 'Контактная форма',
  bigImage: '',
  smallImage: '',
  styleForm: 'contacts',
  switchContentOnValid: true,
  contacts: [
    {
      title: 'Контакт 1',
      phone: `<p>+123456789</p>`,
      imagePhone: '/phone.svg',
      mail: 'example@mail.com',
      imageMail: '/mail.svg',
      location: 'адрес 1',
      imageLocation: '/location.svg'
    },
    {
      title: 'Контакт 2',
      phone: `<p>+987654321</p>`,
      imagePhone: '/phone.svg',
      mail: 'example2@mail.com',
      imageMail: '/mail.svg',
      location: 'адрес 2',
      imageLocation: '/location.svg',
    },
  ],
  inputs,
  button,
  switchContentButton: {
    text: 'Подтвердить',
    attrs: { size: 'large', block: true },
  },
};
