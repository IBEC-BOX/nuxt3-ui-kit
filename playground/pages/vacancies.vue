<template>
  <div>
    <pagesVacancies
      :cards="cards"
      :form-title="'Заполните контактные данные и оставьте заявку на консультацию'"
      :form-inputs="inputs"
      :form-style-form="'standard'"
      :form-small-image="'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
      :form-socials="socials"
      :form-alt-image="'sad'"
      :form-info-company="infoCompany"
      :form-checkbox-setting="checkboxSetting"
      :form-commentary="commentary"
      @form-data="formData"
    />
  </div>
</template>

<script setup>

  const cards = [
    {
      id: 1,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/vacancy'
      }
    },
    {
      id: 2,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/'
      }
    },
    {
      id: 3,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/'
      }
    },
    {
      id: 4,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/'
      }
    },
    {
      id: 5,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/'
      }
    },
    {
      id: 6,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/'
      }
    },
    {
      id: 7,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/'
      }
    },
    {
      id: 8,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/'
      }
    },
    {
      id: 9,
      positionImageVacancy: 'end',
      title: 'Card Title',
      subtitle: 'Card Title',
      price: "150 000 - 180 000 ₸",
      imgSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      imgAlt: "Картинка",
      styleCard: "vacancy",
      text: "A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
      city: "Almaty, KZ",
      button: {
        to: '/'
      }
    },
  ]

  const formData = (data) => {
  }
  const socials = [
    {
      link: '321',
      img: 'data:image/svg+xml,%3Csvg width=\'32\' height=\'32\' viewBox=\'0 0 32 32\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'32\' height=\'32\' rx=\'16\' fill=\'%234D4E52\'/%3E%3Cpath d=\'M22.4002 10.0819L19.9959 22.6339C19.9959 22.6339 19.6594 23.5042 18.7353 23.0868L13.1879 18.6822L13.1621 18.6692C13.9115 17.9724 19.7221 12.5622 19.9761 12.317C20.3692 11.9372 20.1251 11.7111 19.6687 11.998L11.0856 17.6425L7.77431 16.4887C7.77431 16.4887 7.2532 16.2968 7.20307 15.8794C7.15228 15.4613 7.79146 15.2352 7.79146 15.2352L21.2907 9.75126C21.2907 9.75126 22.4002 9.24644 22.4002 10.0819Z\' fill=\'white\'/%3E%3C/svg%3E%0A',
      alt: '321',
    },
    {
      link: '321',
      img: 'data:image/svg+xml,%3Csvg width=\'32\' height=\'32\' viewBox=\'0 0 32 32\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'32\' height=\'32\' rx=\'16\' fill=\'%234D4E52\'/%3E%3Cpath d=\'M17.3259 16.2918H20.3036L20.7711 13.2483H17.3253V11.585C17.3253 10.3207 17.7359 9.1996 18.9113 9.1996H20.8002V6.5437C20.4683 6.49861 19.7664 6.3999 18.4402 6.3999C15.6707 6.3999 14.0471 7.87134 14.0471 11.2237V13.2483H11.2002V16.2918H14.0471V24.6567C14.6109 24.742 15.182 24.7999 15.7682 24.7999C16.2982 24.7999 16.8153 24.7512 17.3259 24.6817V16.2918Z\' fill=\'white\'/%3E%3C/svg%3E%0A',
      alt: '321',
    },
    {
      link: '321',
      img: 'data:image/svg+xml,%3Csvg width=\'32\' height=\'32\' viewBox=\'0 0 32 32\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'32\' height=\'32\' rx=\'16\' fill=\'%234D4E52\'/%3E%3Cpath d=\'M22.3415 9.65019C20.761 8.07519 18.6537 7.2002 16.4293 7.2002C11.8049 7.2002 8.05854 10.9335 8.05854 15.5419C8.05854 17.0002 8.46829 18.4585 9.17073 19.6835L8 24.0002L12.4488 22.8335C13.6781 23.4752 15.0244 23.8252 16.4293 23.8252C21.0537 23.8252 24.8 20.0919 24.8 15.4835C24.7415 13.3252 23.9219 11.2252 22.3415 9.65019ZM20.4683 18.5169C20.2927 18.9835 19.4732 19.4502 19.0634 19.5085C18.7122 19.5669 18.2439 19.5669 17.7756 19.4502C17.4829 19.3335 17.0732 19.2169 16.6049 18.9835C14.4976 18.1085 13.1512 16.0085 13.0341 15.8335C12.9171 15.7169 12.1561 14.7252 12.1561 13.6752C12.1561 12.6252 12.6829 12.1585 12.8585 11.9252C13.0341 11.6919 13.2683 11.6919 13.4439 11.6919C13.561 11.6919 13.7366 11.6919 13.8537 11.6919C13.9707 11.6919 14.1463 11.6335 14.322 12.0419C14.4976 12.4502 14.9073 13.5002 14.9659 13.5585C15.0244 13.6752 15.0244 13.7919 14.9659 13.9085C14.9073 14.0252 14.8488 14.1419 14.7317 14.2585C14.6146 14.3752 14.4976 14.5502 14.439 14.6085C14.3219 14.7252 14.2049 14.8419 14.322 15.0169C14.439 15.2502 14.8488 15.8919 15.4927 16.4752C16.3122 17.1752 16.9561 17.4085 17.1902 17.5252C17.4244 17.6419 17.5415 17.5835 17.6585 17.4669C17.7756 17.3502 18.1854 16.8835 18.3024 16.6502C18.4195 16.4169 18.5951 16.4752 18.7707 16.5335C18.9463 16.5919 20 17.1169 20.1756 17.2335C20.4098 17.3502 20.5268 17.4085 20.5854 17.4669C20.6439 17.6419 20.6439 18.0502 20.4683 18.5169Z\' fill=\'white\'/%3E%3C/svg%3E%0A',
      alt: '321',
    },
  ]

  const inputs = [
    {
      label: "ФИО",
      rules: [
        v => !!v || 'ФИО обязательно к заполнению',
        v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
      ],
      placeholder: "Аче Ачевович",
      value: ''
    },
    {
      // sm: 6,
      // md: 6,
      // lg: 6,
      // xl: 6,
      // xxl: 6,
      label: "ФИО",
      rules: [
        v => !!v || 'ФИО обязательно к заполнению',
        v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
      ],
      placeholder: "Аче Ачевович",
      value: ''
    },
    // {
    // sm: 6,
    // md: 6,
    // lg: 6,
    // xl: 6,
    // xxl: 6,
    // label: "ФИО",
    // rules: [
    //   v => !!v || 'ФИО обязательно к заполнению',
    //   v => (v && v.length <= 10) || 'Имя не должно быть длиннее 10 символов',
    // ],
    // placeholder: "Аче Ачевович",
    // value: ''
    // },
  ]
  const infoCompany = [
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
  ]
  const checkboxSetting = {
    color: 'primary',
    rules: [
      v => !!v || 'Нажми на флажок!'
    ],
    label: "Нажимая кнопку, я соглашаюсь на обработку персональных данных"
  }
  const commentary = {
    label: "комментарий",
    rules: [
      v => !!v || 'ФИО обязательно к заполнению',
    ],
    rows: 3,
  }
</script>
