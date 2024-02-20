<template>
  <v-app>
    <partsHeaderErg
    />
    <NuxtPage />
      <section class="h-100">
        <v-container id="slider">
          <client-only>
            <partsSlider
              :slides="sliderAbout"
              :show-buttons="false"
              slider-direction="vertical"
              :height="'600px'"
              :control-scroll="controlScroll"
            />
          </client-only>


        </v-container>

      </section>

    <partsFooterDefault
      id="footer"
      :logo-in-body="true"
      :logo="{ title: 'АО', titleAttrs: {class: 'mb-4 text-h6'} }"
      nav-class="text-h6 text-black"
      :nav="[
        { id: 1, text: 'Overview', link: '/' },
        { id: 2, text: 'Features', link: '/' },
        { id: 3, text: 'Pricing', link: '/' },
        { id: 4, text: 'Careers', link: '/' },
        { id: 5, text: 'Help centre', link: '/' },
        { id: 6, text: 'Privacy', link: '/', image: '/arrow.png' },
      ]"
      :copyright="{
        text: '2023 Untitled UI. All rights reserverd'
      }"
    />
  </v-app>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const sliderAbout = [
  {
    id: 0,
    chip: {
      text: 'О КОМПАНИИ',
      attrs: {
        class: 'mt-12 mb-8',
        color: 'white',
        variant: 'outlined',
        style: 'margin-top: 106px !important'
      }
    },
    title: 'АО «ССГПО» — крупнейшее градообразующее предприятие\n' +
      'страны по переработке железных руд, доломита, известняка, строительного щебня',
    subtitle: 'Рынки сбыта: Казахстан, Россия, Китай ',
    titleAttrs: {
      class: 'text-white mb-4 text-36',
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
          style: 'margin-top: 106px'
        }
      }
    ],
    active: true,
  },
  {
    id: 1,
    chip: {
      text: 'О КОМПАНИИ',
      attrs: {
        class: 'mt-12 mb-8',
        color: 'white',
        variant: 'outlined'
      }
    },
    title: 'АО «ССГПО» — крупнейшее градообразующее предприятие\n' +
      'страны по переработке железных руд, доломита, известняка, строительного щебня',
    titleAttrs: {
      class: 'text-white mb-4 text-36'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    textBlockAttrs: {
      class: 'justify-start'
    },
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
    active: false,
    numbers: [
      {
        number: 5.5,
        postfix: [
          'mln'
        ],
        subtitle: [
          'fdsfsdfds'
        ]
      },
      {
        number: 5.5,
        postfix: [
          'mln'
        ],
        subtitle: [
          'fdsfsdfds'
        ]
      },
      {
        number: 5.5,
        postfix: [
          'mln'
        ],
        subtitle: [
          'fdsfsdfds'
        ]
      }
    ]
  },

]
const controlScroll = ref(false);
const observer = ref(null);
onMounted(() => {
  const sliderElement = document.getElementById('slider');

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      controlScroll.value = entry.isIntersecting;
    });
  }, { threshold: 1 });

  if (sliderElement) {
    observer.value.observe(sliderElement);
  }
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});

</script>

<style lang="scss">
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}

</style>
