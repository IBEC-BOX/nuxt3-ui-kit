import Vacancies from '../runtime/components/Parts/ErgVacancies.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Parts/ErgVacancies',
  component: Vacancies,
  tags: ['autodocs'],
};

export const BackgroundImage = {
  args: {
    'sheet-color': "primary",
    'sheet-width': "100 + '%'",
    'sheet-height': "710",
    'background-image': "'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__'",
    chip: {
      text: 'Вакансии',
        attrs: {
        color: 'primary'
      }
    },
    title: "Станьте частью команды",
    'sub-title': "Мы предлагаем конкурентные зарплаты, социальные гарантии",
    'title-color': "#7613da",
  }
}
export const LeftImage = {
  args: {
    'sheet-color': "primary",
    'sheet-rounded': "xl",
    'sheet-class': "ma-10",
    leftImage: {
      src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
      attrs: {
        width: '100%',
        height: '100%',
        cover: true,
        class: 'rounded-s-xl'
      }
    },
    chip: {
      text: 'Вакансии',
        attrs: {
        color: 'primary'
      }
    },
    title: "Станьте частью команды",
    'sub-title': "Мы предлагаем конкурентные зарплаты, социальные гарантии",
    'title-color': "#7613da",
  }
}
export const RightImage = {
  args: {
    'sheet-color': "primary",
    'sheet-rounded': "xl",
    'sheet-class': "ma-10",
    rightImage: {
      src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
      attrs: {
        width: '100%',
        height: '100%',
        cover: true,
        class: 'rounded-e-xl'
      }
    },
    chip: {
      text: 'Вакансии',
        attrs: {
        color: 'primary'
      }
    },
    title: "Станьте частью команды",
    'sub-title': "Мы предлагаем конкурентные зарплаты, социальные гарантии",
    'title-color': "#7613da",
  }
}

export const Gallery = {
  args: {
    'sheet-color': 'primary',
    'sheet-rounded': 'xl',
    title: 'Станьте частью команды',
    'sub-title': 'Мы предлагаем конкурентные зарплаты, социальные гарантии',
    'title-color': '#7613da',
    gallery: true,
    galleryHoverEffect: false,
    galleryImages: [
    {
      chip: {
        attrs: {
          variant: 'flat',
            color: 'green'
        },
        text: 'asd',
      },
      src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        text: 'absdffdsfdsfsdfdsds'
    },
    {
      chip: {
        attrs: {
          variant: 'flat',
            color: 'green'
        },
        text: 'asd',
      },
      src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        text: 'absdffdsfdsfsdfdsds'
    },
    {
      chip: {
        attrs: {
          variant: 'flat',
            color: 'green'
        },
        text: 'asd',
      },
      src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        text: 'absdffdsfdsfsdfdsds'
    },
    {
      chip: {
        attrs: {
          variant: 'flat',
            color: 'green'
        },
        text: 'asd',
      },
      src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        text: 'absdffdsfdsfsdfdsds'
    },
    ],
    leftimage: {
      src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        attrs: {
        width: 100 + '%',
          cover: true,
          class: 'rounded-s-xl'
      }
    },
    chip: {
      text: 'Вакансии',
        attrs: {
        color: 'primary'
      }
    }
  }
}

export const GalleryHoverEffect = {
  args: {
    'sheet-color': 'primary',
    'sheet-rounded': 'xl',
    title: 'Станьте частью команды',
    'sub-title': 'Мы предлагаем конкурентные зарплаты, социальные гарантии',
    'title-color': '#7613da',
    gallery: true,
    galleryHoverEffect: true,
    galleryImages: [
      {
        chip: {
          attrs: {
            variant: 'flat',
            color: 'green'
          },
          text: 'asd',
        },
        src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        text: 'absdffdsfdsfsdfdsds'
      },
      {
        chip: {
          attrs: {
            variant: 'flat',
            color: 'green'
          },
          text: 'asd',
        },
        src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        text: 'absdffdsfdsfsdfdsds'
      },
      {
        chip: {
          attrs: {
            variant: 'flat',
            color: 'green'
          },
          text: 'asd',
        },
        src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        text: 'absdffdsfdsfsdfdsds'
      },
      {
        chip: {
          attrs: {
            variant: 'flat',
            color: 'green'
          },
          text: 'asd',
        },
        src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
        text: 'absdffdsfdsfsdfdsds'
      },
    ],
    leftimage: {
      src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
      attrs: {
        width: 100 + '%',
        cover: true,
        class: 'rounded-s-xl'
      }
    },
    chip: {
      text: 'Вакансии',
      attrs: {
        color: 'primary'
      }
    }
  }

}
