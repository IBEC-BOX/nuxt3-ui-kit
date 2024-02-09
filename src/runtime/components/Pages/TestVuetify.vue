<template>
  <v-app>
    <partsHeaderErg />
    <NuxtPage />
    <v-container>
      <partsCard
        :date-author-right="true"
        :horizontal-card="true"
        :max-width="700"
        :horizontal-width-image="300"
        :image="{
          src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          attrs: {
            class: 'rounded-circle',
            'max-width': 86,
            height: 86,
            cover: true,
          },
        }"
        variant-card="elevated"
        style-card="standard"
        title="Железнорудные окатыши"
        text="СТ АО ССГПО-11402-2022"
        title-class="text-h4"
        title-style="width: 280px"
        text-style="cursor: pointer"
        text-class="text-black"
        :gap="24"
        card-class="px-12 py-13"
        card-color="primary"
        card-rounded="xl"
        :hover-text="true"
        :text-image="{
          src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          attrs: {
            class: 'rounded-circle',
            'max-width': 20,
            height: 20,
            cover: true,
          },
        }"
        :modal="true"
        :modal-img="'https://www.figma.com/file/4olLWc8CXyZmkwje9SuEah/image/2d13c92b16b427ccd0b154544ab7922d50edb16c'"
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

<script setup></script>

<style>
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
</style>
