<template>
  <v-app class="">
    <partsHeaderErg
    />
    <NuxtPage />
    <section class="h-100">
      <v-container class=" px-4">

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

</script>

<style lang="scss">
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
.custom-checkbox .v-input--selection-controls__input {
  align-items: flex-start;
}

.custom-checkbox .v-input--checkbox .v-icon {
  margin-top: 0px; /* Настройте это значение в зависимости от вашего дизайна */
}
</style>
