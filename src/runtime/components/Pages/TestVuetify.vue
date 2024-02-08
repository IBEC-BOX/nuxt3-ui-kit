<template>
  <v-app>
    <partsHeaderErg>
    </partsHeaderErg>
    <NuxtPage />
    <v-container >
      <partsErgVacancies
        :sheet-color="'primary'"
        :sheet-width="100 + '%'"
        :sheet-height="710"
        :background-image="'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__'"
        :chip="{
          text: 'Вакансии',
          attrs: {
            color: 'primary'
          }
        }"
        :title="'Станьте частью команды'"
        :sub-title="'Мы предлагаем конкурентные зарплаты, социальные гарантии'"
        :title-color="'#7613da'"
        class="mb-10"
      />


      <partsErgVacancies
        :sheet-color="'primary'"
        :sheet-rounded="'xl'"
        :left-image="{
          src: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',
          attrs: {
            width: 100 + '%',
            cover: true,
            class: 'rounded-s-xl'
          }
        }"
        :chip="{
          text: 'Вакансии',
          attrs: {
            color: 'primary'
          }
        }"
        :title="'Станьте частью команды'"
        :sub-title="'Мы предлагаем конкурентные зарплаты, социальные гарантии'"
        :title-color="'#7613da'"
        :gallery="true"
        :gallery-hover-effect="false"
        :galleryImages="[
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
        ]"
      />

    </v-container>

    <partsFooterDefault
      :logo-in-body="true"
      :logo="{title: 'АО', colorClass: 'text-white'}"
      :nav="[{id:1,text:'Overview',link:'/'},{id:2,text:'Features',link:'/'},{id:3,text:'Pricing',link:'/'},{id:4,text:'Careers',link:'/'},{id:5,text:'Help centre',link:'/'}, {id:6,text:'Privacy',link:'/'}]"
      copyright="2023 Untitled UI. All rights reserverd"
    >

    </partsFooterDefault>
  </v-app>
</template>

<script setup>
</script>

<style>
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
</style>
