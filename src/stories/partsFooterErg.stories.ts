import Footer from '../runtime/components/Parts/Footer/Erg.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import type { IFooterErg } from '../runtime/components/Parts/Footer/footerTypes';

export default {
  title: 'Parts/Footer/Erg',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Footer>;

interface FooterArgs extends Partial<IFooterErg> {}

const Template: StoryFn<FooterArgs> = (args: FooterArgs) => ({
  components: { Footer },
  setup(): { args: FooterArgs } {
    return { args };
  },
  template: `
    <Footer v-bind="args" />
  `,
});

export const Standard: StoryFn<FooterArgs> = Template.bind({});
Standard.args = {
  contacts: [
    {
      title: 'asd',
      phone: `<p>8 (71837) 9 99 03 (Канцелярия)</p><p>8 (71837) 9 99 00 (Приемная)</p>`,
      imagePhone: '/phone.svg',
      mail: 'info.bts@erg.kz',
      imageMail: '/mail.svg',
      location: 'АО «ССГПО» улица Ленина, 26, г. Рудный, Костанайская область, 111500. Есть филиал в Астане, ул.Кунаева, 2, 010000',
      imageLocation: '/location.png',
    },
  ],
  socials: [
    {
      id: 0,
      img: '/mail.svg',
      link: 'ibecsystems.com',
    },
    {
      id: 1,
      img: '/mail.svg',
      link: 'ibecsystems.com',
    },
    {
      id: 2,
      img: '/mail.svg',
      link: 'ibecsystems.com',
    },
  ],
  bgClass: 'bg-none',
  copyright: '2024 TOO “BTS”. Все права защищены.',
  copyrightMade: '<span>Сделано в </span><a class="text-decoration-underline">IBEC SYSTEMS</a>',
  copyrightCert: {
    title: 'Сертификат соответствия системы менеджмента требованиям стандартов ISO',
    cert: '',
  },
};

export const TwoContacts: StoryFn<FooterArgs> = Template.bind({});
TwoContacts.args = {
  contacts: [
    {
      title: 'asd',
      phone: `<p>8 (71837) 9 99 03 (Канцелярия)</p><p>8 (71837) 9 99 00 (Приемная)</p>`,
      imagePhone: '/phone.svg',
      mail: 'info.bts@erg.kz',
      imageMail: '/mail.svg',
      location: 'АО «ССГПО» улица Ленина, 26, г. Рудный, Костанайская область, 111500. Есть филиал в Астане, ул.Кунаева, 2, 010000',
      imageLocation: '/location.png',
    },
    {
      title: 'asd',
      phone: `<p>8 (71837) 9 99 03 (Канцелярия)</p><p>8 (71837) 9 99 00 (Приемная)</p>`,
      imagePhone: '/phone.svg',
      mail: 'info.bts@erg.kz',
      imageMail: '/mail.svg',
      location: 'АО «ССГПО» улица Ленина, 26, г. Рудный, Костанайская область, 111500. Есть филиал в Астане, ул.Кунаева, 2, 010000',
      imageLocation: '/location.png',
    },
  ],
  socials: [
    {
      id: 0,
      img: '/mail.svg',
      link: 'ibecsystems.com',
    },
    {
      id: 1,
      img: '/mail.svg',
      link: 'ibecsystems.com',
    },
    {
      id: 2,
      img: '/mail.svg',
      link: 'ibecsystems.com',
    },
  ],
  bgClass: 'bg-none',
  copyright: '2024 TOO “BTS”. Все права защищены.',
  copyrightMade: '<span>Сделано в </span><a class="text-decoration-underline">IBEC SYSTEMS</a>',
  copyrightCert: {
    title: 'Сертификат соответствия системы менеджмента требованиям стандартов ISO',
    cert: '',
  },
};
