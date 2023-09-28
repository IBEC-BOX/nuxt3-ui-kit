<template>
  <v-app>
    <v-navigation-drawer temporary v-model="showDrawer" location="right">
      <div class="w-100 text-right">
        <v-btn flat icon="$close" size="x-large" @click="toggle" />
      </div>
      <p class="text-center"><b>I'm the drawer</b></p>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="toggle" />
      <v-toolbar-title>I'm the header</v-toolbar-title>
    </v-app-bar>

    <v-main class="d-flex align-center">
      <v-container>
        <v-sheet elevation="5" class="py-4 text-center">
          <h1 class="text-18">Built and styled with Vuetify 3</h1>
          <p>Minimized production bundle (70kB in tot)</p>
          <v-btn class="mt-4">press me to ripple</v-btn>
        </v-sheet>
      </v-container>
<!--      <Card-->
<!--        :styleCard="'vacancy'"-->
<!--        :max-width="350"-->
<!--        :img-src="'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"-->
<!--        :img-alt="'Картинка'"-->
<!--        :title="'Card Title'"-->
<!--        :subtitle="'Card Title'"-->
<!--        :text="'A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.'"-->
<!--        :date="'02.04.2023'"-->
<!--        :author="'by Tayler'"-->
<!--        :price="'150 000 - 180 000 T'"-->
<!--        :statusVacancy="statusVacancy"-->
<!--        :city="'Almaty Kz'"-->
<!--      >-->
<!--        <template v-slot:button>-->
<!--          <v-btn>-->
<!--            sad-->
<!--          </v-btn>-->
<!--        </template>-->
<!--      </Card>-->
    </v-main>

    <v-footer app elevation="5">
      <v-row no-gutters justify="center"
             class="text-overline font-weight-black">
        <p class="my-auto">I'm the footer</p>
        <v-spacer />
        <p class="my-auto">See how I was built</p>
        <v-btn icon variant="plain">
          <v-icon icon="$info" color="green-accent-4" />
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Card from "../Parts/Card.vue"
const showDrawer = ref(false);

const statusVacancy = {
  text: "Reply without resume",
  status: "success"
}

const toggle= () => {
  console.log('usedToggle()');
  showDrawer.value = !showDrawer.value;
};

/* Redundant unused code to test treeshaking */
const unusedFunction = () => console.log('unusedFunction');
</script>

<style>
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
</style>
