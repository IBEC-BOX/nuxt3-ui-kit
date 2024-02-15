<template>
  <v-app>
    <partsHeaderErg
      :menu='[
        {
          title: "О компании",
          url: "/about"
        },
        {
          title: "Продукты и услуги",
          url: "#footer",
          type: "anchor"
        },
      ]'
    />
    <NuxtPage />
      <section class="h-100">
          <partsErgVacancies
            sheet-class="pa-10"
            background-image-max-height="712px"
            title="Станьте частью команды"
            sub-title="Мы предлагаем конкурентные зарплаты, социальные гарантии"
            title-class="text-h4 text-white"
            sub-title-class="text-subtitle-2 text-white"
            sub-title-style="max-width: 521px"
            button-rounded="xl"
            button-class="text-body-1 font-weight-regular mt-13"
            :button="{
              text: 'asd',
              image: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7EhfQACZT85bZGANQJmhBUgX7KHl9MVIHs8uvYxovf1~mMGheRUpQe4etAQ6EnrUd77Pj9k~JyXNKHx9G9GtdGM8~H6EDQeBXcXz9xZ1PhDjDfXQAUijJ1JN4XNnMWuXIHCqBPPekxCexn3huHy~G3d-WjDd63cPcZek-GtH6QEgck6bYG-HyNnx6QBKVdvynqZS8WMDjTQwMpKUCvYTb59s4eLt-aD4-fc2cZ1qcOqYg4bzzoiJah2DkFTTFI12q-vWdWuwYTmTk2U9QiAAQ0NQOnE3agSmB0ABr2DjObMiMr4SBuDqWKqEXOZT3AC8yYhtHBTC-oH0P9dAxIFxw__',
              link: '/'
            }"
            :gallery="true"
            :gallery-hover-effect="true"
            :gallery-images="{0:{chip:{attrs:{variant:'flat',color:'green'},text:'asd'},src:'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',text:'absdffdsfdsfsdfdsds'},1:{chip:{attrs:{variant:'flat',color:'green'},text:'asd'},src:'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',text:'absdffdsfdsfsdfdsds'},2:{chip:{attrs:{variant:'flat',color:'green'},text:'asd'},src:'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',text:'absdffdsfdsfsdfdsds'},3:{chip:{attrs:{variant:'flat',color:'green'},text:'asd'},src:'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPOgN9cWiL5lNQKNQpEWyYKNUfdcufsLMvRSBXfg5tryvP2T9GyIh-BycwK2gfla1o1G3ufvC6KxW64biT8r~GV63AFYFIzdkohh7Ya5wYLKv3eHBBzqAZdrV0PtKWJil3HFkSa0TuwRmriW~rf1nuPJx-W~qkkVu1A~sZTvid6G9sIblyijcKz2YRHoDiWxLc4iKJyyK1~FTzj75P3z8szwQzH08A6LG97a5lawt2uAH1f1R-3htFf7xEi5W86IWC4s4byN94KFewoJ9Qki-174MHHVq24BgUkZ7cLPHNvQthXJ5brtbR~4xM83ns~hEjcIJpHdCDGj2~YuTvcrmQ__',text:'absdffdsfdsfsdfdsds'}}"
            :backgroundImage="{
              image: 'https://s3-alpha-sig.figma.com/img/e589/51dd/87467ea8ed3307f2aa67a4fff16d45cb?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7EhfQACZT85bZGANQJmhBUgX7KHl9MVIHs8uvYxovf1~mMGheRUpQe4etAQ6EnrUd77Pj9k~JyXNKHx9G9GtdGM8~H6EDQeBXcXz9xZ1PhDjDfXQAUijJ1JN4XNnMWuXIHCqBPPekxCexn3huHy~G3d-WjDd63cPcZek-GtH6QEgck6bYG-HyNnx6QBKVdvynqZS8WMDjTQwMpKUCvYTb59s4eLt-aD4-fc2cZ1qcOqYg4bzzoiJah2DkFTTFI12q-vWdWuwYTmTk2U9QiAAQ0NQOnE3agSmB0ABr2DjObMiMr4SBuDqWKqEXOZT3AC8yYhtHBTC-oH0P9dAxIFxw__',
              attrs: {
                class: 'mb-10 rounded-xl',

              }
            }"
            :chip="{
              text: 'Вакансии',
              attrs: {
                color: 'white',
                class: 'text-uppercase mb-8',
                variant: 'outlined'
              }
            }"
          />
      </section>

    <partsFooterDefault
      id="footer"
      :logo-in-body="true"
      :logo="{ title: 'АО', colorClass: 'text-white' }"
      :nav="[
        { id: 1, text: 'Overview', link: '/' },
        { id: 2, text: 'Features', link: '/' },
        { id: 3, text: 'Pricing', link: '/' },
        { id: 4, text: 'Careers', link: '/' },
        { id: 5, text: 'Help centre', link: '/' },
        { id: 6, text: 'Privacy', link: '/' },
      ]"
      :copyright="{
        text: '2023 Untitled UI. All rights reserverd'
      }"
    />
  </v-app>
</template>

<script setup>
</script>

<style lang="scss">
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
</style>
