import Header from '../runtime/components/Parts/Header/Erg.vue';

export default {
  title: 'Parts/Header/ERG',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    logo: { type: "Object" },
    elevation: { type: 'Number' },
    menu: { type: "Array" },
    setLang: { type: "Array" },
    textBtn: { type: "text" },
    bgClassHeader: { type: "text" },
    colorClassMenu: { type: "text" },
  },
  events: {
    'select-lang': {
      name: 'select-lang',
      description: 'Событие, возникающее при выборе языка.',
    },
    'button-click': {
      name: 'button-click',
      description: 'Событие, возникающее при отправке данных формы.'
    }
  },
};

export const Default = {
  args: {
    logo: {
      url: 'https://s3-alpha-sig.figma.com/img/222c/02bf/df2277b790ec617d5a2f748736bfdc5a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BjEYx20siAJOsNnjkamNkI-f35Bqi8qtCAvaJ4Oxthy2my4acTfctcKVovI2Yp6v2KugOl61Oat9sQjS0violwagFG2Gie8a48IvmcxllwmkVOESFSBVwWx1D3eP0t5bQit2x3qDF~nfdHh-kMBUSdgwzS1UojssqLJ0NCo6WuUQDz2cbyVZl2RLsSZSgbrLz3agCXXACVU7XH6eTJmE0ZVskZhSgx53dxt~s6Jqrr8l7mcp2C03PxkUbXy1A3bvGxQFdVyVmpx0YSk2PXWwnJZFoX85JHFKzxvLJKWXH7rA1GY~Cx3L8ZI48mB1ybzaIZFXs1KakjD-hDzzyDPITw__',
      max_width: 80,
    },
    elevation: 0,
    menu: [
      {
        id: 0,
        title: "О компании",
        to: "#footer",
        type: 'anchor'
      },
      {
        id: 1,
        title: "Продукты и услуги",
        to: "/"

      },
      {
        id: 2,
        title: "Преимущества",
        to: "/"

      },
      {
        id: 3,
        title: "Вакансии",
        to: "/"

      },
      {
        id: 4,
        title: "Контакты",
        to: "/"

      }
    ],
    setLang: [
      'Ru',
      'Kz',
      'En'
    ],
    textBtn: 'Свяжитесь с нами',
    bgClassHeader: '',
    colorClassMenu: 'text-primary'
  },

}
