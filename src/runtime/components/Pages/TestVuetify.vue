<template>
  <v-app>
    <partsHeaderErg />
    <NuxtPage />
    <v-container>
      <partsSlider
        :slides="sliders"
        :slider-pagination="true"
        :show-buttons="false"
        slider-direction="vertical"
        :slider-pagination-active-variant="'white'"
      />
    </v-container>

    <partsFooterDefault
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
      copyright="2023 Untitled UI. All rights reserverd"
    />
  </v-app>
</template>

<script setup>
const sliders = [
  {
    id: 0,
    chip: {
      text: 'abvgd',
      attrs: {
        class: 'mt-12 mb-8',
        color: 'primary'
      }
    },
    title: 'АО «ССГПО» — крупнейшее градообразующее предприятие\n' +
      'страны по переработке железных руд, доломита, известняка, строительного щебня',
    subtitle: 'Рынки сбыта: Казахстан, Россия, Китай ',
    titleAttrs: {
      class: 'text-white mb-4 text-h4'
    },
    textBlockAttrs: {
      class: 'justify-start'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1',
        }
      }
    ],
    active: true,
  },
  {
    id: 1,
    chip: {
      text: 'abvgd',
      attrs: {
        color: 'primary'
      }
    },
    title: 'Экологические акции',
    subtitle: 'Команда АО “ССГПО” активно принимает участие в мероприятиях, направленных на помощь экологии',
    textBlockAttrs: {
      class: ''
    },
    subTitleAttrs: {
      class: 'text-primary'
    },
    titleAttrs: {
      class: 'text-primary text-h5 w-75'
    },
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/555c/6876/cb9c4c93facc41f9da4145fa73aca28f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuQUtcWbVrWRn1GfwukhEdmCQ9ZxpWBc8-kYGxqc~kInBXYg7QiQUdnC11N6CBJyNYPhZmkMoCyqJLchOvtrizsQiSWQytj96hkeDbtlODJe60UxBq9LQqLWuzCoq8~9-IL~oKeji3ECSklL1VCqbv5NQ-Lxi~ItwX-sunBEXVsx9g9oxZIZrkuIVOfBA9vqYz1PVaG9FrIP7zL5R73ahu0m2V-MLPBe8OUFEQSWbDw9xUPIUKyXOfbm9En80I9oV8k55cLvyNaid-2qCCPtXrm26v7ohCeXQILx1-9j8xBHjy0cLploNutzmGMC0uiPQnr115gYHEhBXaJk2Ez8zA__',
      attrs: {
        'max-height': 400,
        'max-width': '98%',
        class: 'rounded-xl'
      }
    },
    active: false,
  },
  {
    id: 2,
    chip: {
      text: 'abvgd',
      attrs: {
        color: 'primary'
      }
    },
    title: 'Экологические акции',
    subtitle: 'Команда АО “ССГПО” активно принимает участие в мероприятиях, направленных на помощь экологии',
    textBlockAttrs: {
      class: ''
    },
    subTitleAttrs: {
      class: 'text-primary'
    },
    titleAttrs: {
      class: 'text-primary text-h5 w-75'
    },
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/555c/6876/cb9c4c93facc41f9da4145fa73aca28f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuQUtcWbVrWRn1GfwukhEdmCQ9ZxpWBc8-kYGxqc~kInBXYg7QiQUdnC11N6CBJyNYPhZmkMoCyqJLchOvtrizsQiSWQytj96hkeDbtlODJe60UxBq9LQqLWuzCoq8~9-IL~oKeji3ECSklL1VCqbv5NQ-Lxi~ItwX-sunBEXVsx9g9oxZIZrkuIVOfBA9vqYz1PVaG9FrIP7zL5R73ahu0m2V-MLPBe8OUFEQSWbDw9xUPIUKyXOfbm9En80I9oV8k55cLvyNaid-2qCCPtXrm26v7ohCeXQILx1-9j8xBHjy0cLploNutzmGMC0uiPQnr115gYHEhBXaJk2Ez8zA__',
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
.slider_pagination_container {
  top: 116px;
  left: -30px;
  .slider_pagination {
    flex-direction: column;
    gap: 0;
    background: #ffffff61;
    border-radius: 50px;
    .slider-pagination-bullet {
      width: 6px;
      height: 66px;
    }
    .slider-pagination-bullet, .slider-pagination-dot {
      border-radius: 50px;
      background: none;
    }
  }
}
</style>
