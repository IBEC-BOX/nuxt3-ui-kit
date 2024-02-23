<template>
  <v-app class="">
    <partsHeaderErg
      :burger="false"
    />
    <NuxtPage />
    <section class="h-100">
      <v-container class="bg-amber px-4">

        <partsSlider
          :slider-loop="true"
          :slider-container="true"
          :slider-centered-slides="false"
          :control-button-in-slides="true"
          :slides="slidesSocial"
          :height="400"
          control-buttons-size="small"
          control-buttons-color="white"
          control-buttons-rounded="lg"
          control-buttons-class="mr-2"
          control-buttons-elevation="0"
          control-buttons-align="left-bottom"
          :slider-pagination="true"
          :slider-pagination-type="'dot'"
          :sliderPaginationCenter="true"
        />


<!--        <partsErgVacancies-->
<!--          sheet-rounded="xl"-->
<!--          sheet-class="py-0 pt-10 py-md-12 px-4 px-md-8 h-100"-->
<!--          sheet-max-height="450px"-->
<!--          title="Станьте частью команды"-->
<!--          sub-title="Мы предлагаем конкурентные зарплаты, социальные гарантии"-->
<!--          title-class="text-40 text-white font-weight-semi-bold"-->
<!--          sub-title-class="text-h5 text-white"-->
<!--          sub-title-style="max-width: 521px"-->
<!--          :button="{-->
<!--            to: '/',-->
<!--            text: 'Посмотреть вакансии',-->
<!--            image: '/svgIcon/arrow-right.svg',-->
<!--            attrs: {-->
<!--              size: 'large',-->
<!--              rounded: 'xl',-->
<!--              class: 'text-body-1 font-weight-regular mt-4 py-1',-->
<!--            }-->
<!--          }"-->
<!--          :gallery="true"-->
<!--          :gallery-hover-effect="true"-->
<!--          :gallery-images="{0:{chip:{attrs:{variant:'flat',color:'green'},text:'asd'},src:'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',text:'absdffdsfdsfsdfdsds'},1:{chip:{attrs:{variant:'flat',color:'green'},text:'asd'},src:'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',text:'absdffdsfdsfsdfdsds'},2:{chip:{attrs:{variant:'flat',color:'green'},text:'asd'},src:'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',text:'absdffdsfdsfsdfdsds'},3:{chip:{attrs:{variant:'flat',color:'green'},text:'asd'},src:'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',text:'absdffdsfdsfsdfdsds'}}"-->
<!--          :backgroundImage="{-->
<!--            image: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7EhfQACZT85bZGANQJmhBUgX7KHl9MVIHs8uvYxovf1~mMGheRUpQe4etAQ6EnrUd77Pj9k~JyXNKHx9G9GtdGM8~H6EDQeBXcXz9xZ1PhDjDfXQAUijJ1JN4XNnMWuXIHCqBPPekxCexn3huHy~G3d-WjDd63cPcZek-GtH6QEgck6bYG-HyNnx6QBKVdvynqZS8WMDjTQwMpKUCvYTb59s4eLt-aD4-fc2cZ1qcOqYg4bzzoiJah2DkFTTFI12q-vWdWuwYTmTk2U9QiAAQ0NQOnE3agSmB0ABr2DjObMiMr4SBuDqWKqEXOZT3AC8yYhtHBTC-oH0P9dAxIFxw__',-->
<!--            attrs: {-->
<!--              class: 'mb-6',-->
<!--              style: 'border-radius: 32px',-->
<!--              'max-height': '712px',-->
<!--              cover: true,-->
<!--            }-->
<!--          }"-->
<!--          :chip="{-->
<!--            text: 'Вакансии',-->
<!--            attrs: {-->
<!--              color: 'white',-->
<!--              class: 'text-uppercase mb-8 mt-4',-->
<!--              variant: 'outlined'-->
<!--            }-->
<!--          }"-->
<!--        />-->

      </v-container>
    </section>

    <partsFooterDefault
      id="footer"
      :logo-in-body="true"
      :logo="{ title: 'АО', titleAttrs: {class: 'mb-4 text-h6'} }"
      nav-class="text-h6 text-black"
      :nav="[
        { id: 1, text: 'Overview', to: '/' },
        { id: 2, text: 'Features', to: '/' },
        { id: 3, text: 'Pricing', to: '/' },
        { id: 4, text: 'Careers', to: '/' },
        { id: 5, text: 'Help centre', to: '/' },
        { id: 6, text: 'Privacy', to: '/', image: '/arrow.png' },
      ]"
      :copyright="{
        text: '2023 Untitled UI. All rights reserverd'
      }"
    />
  </v-app>
</template>

<script setup>

const slidesSocial = [
  {
    id: 0,
    chip: {
      text: 'Социальные проекты',
      attrs: {
        color: 'black',
        class: 'text-uppercase mb-4 mb-lg-8',
        variant: 'outlined'
      }
    },
    title: 'Экологические акции',
    subtitle: 'Команда АО “ССГПО” активно принимает участие в мероприятиях, направленных на помощь экологии',
    textBlockAttrs: {
    },
    subTitleAttrs: {
      class: 'text-black text-h5',
      style: 'max-width: 575px;'
    },
    titleAttrs: {
      class: 'text-black font-weight-semi-bold mb-3 text-36 w-75'
    },
    img: {
      src: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      attrs: {
        'max-height': 400,
        'max-width': '100%',
        class: 'rounded-xl'
      }
    },
    active: false,
  },
  {
    id: 1,
    chip: {
      text: 'Социальные проекты',
      attrs: {
        color: 'black',
        class: 'text-uppercase mb-8',
        variant: 'outlined'
      }
    },
    title: 'Экологические акции',
    subtitle: 'Команда АО “ССГПО” активно принимает участие в мероприятиях, направленных на помощь экологии',
    textBlockAttrs: {
    },
    subTitleAttrs: {
      class: 'text-black text-h5',
      style: 'max-width: 575px;'
    },
    titleAttrs: {
      class: 'text-black font-weight-semi-bold mb-3 text-36 w-75'
    },
    img: {
      src: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      attrs: {
        'max-height': 400,
        'max-width': '98%',
        class: 'rounded-xl'
      }
    },
    active: false,
  },
]

</script>

<style lang="scss">
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}

</style>
