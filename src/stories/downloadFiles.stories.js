import downloadFile from '../runtime/components/Parts/files/downloadFiles.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/files/downloadFiles',
  component: downloadFile,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'String' },
    positionTitle: {
      control: 'radio',
      options: ['start', 'center', 'end']
    },
    files: { type: Array }
  },
};

export const Download = {
  render: (args) => ({
    components: { downloadFile },
    setup() {
      console.log(args)
      return { args };
    },
    template:`<downloadFile v-bind="args">
      <template v-if="${'buttonSlot' in args}" v-slot:button>
        ${args.buttonSlot}
      </template>
      </downloadFile>`
  }),
  args: {
    title: "Наши отчеты",
    positionTitle: 'center',
    buttonSlot: `<v-btn size="large" class="mt-12">MEDIUM BUTTON</v-btn>`,
    files: [
      {title: 'Картинка указана', img: 'logo.svg', download: '15сабақ.png', size: '123 KB', alt: '', date: '20.02.22'},
      {title: 'Картинка не указана ', download: '2.png', size: '123 KB', alt: '', date: '20.02.22'},
      {title: 'Картинка не указана ', download: '3.mp3', size: '123 Kb', alt: ''},
      {title: 'Картинка не указана ', download: '4.zip', date: '20.02.22', alt: ''},
      {title: 'Картинка не указана ', download: '4.docx', alt: ''},
      {title: 'Картинка не указана ', download: '5.xlsx', alt: ''},
      {title: 'Картинка не указана ', download: '6.pdf', alt: ''},
    ]
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UmrBZaCGhezw0qx9xuq7Xf/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=1%3A166&mode=dev",
    },
  },
}

