<template>
  <v-sheet class="mb-10">
    <v-row>
      <v-col
        v-for="(card, index) in cards"
        :key="`card-news-${index}`"
        cols="12"
        sm="12"
        md="6"
        lg="4"
      >
        <parts-card-erg-news :card="card" />
      </v-col>
    </v-row>
  </v-sheet>
  <v-pagination
    v-model="currentPage"
    :length="pagination?.last_page"
    :total-visible="5"
    class="news__page-pagination"
  >
    <template #prev>
      <v-btn
        variant="text"
        class="text-none mr-auto px-0"
        @click="changePage(-1)"
      >
        <v-icon size="20">
          mdi-arrow-left
        </v-icon>
        <span class="ml-2 text-18">{{ textButtonLeftPagination }}</span>
      </v-btn>
    </template>
    <template #next>
      <v-btn
        variant="text"
        class="text-none ml-auto px-0"
        @click="changePage(1)"
      >
        <span class="mr-2 text-18">{{ textButtonRightPagination }}</span>
        <v-icon size="20">
          mdi-arrow-right
        </v-icon>
      </v-btn>
    </template>
  </v-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from 'nuxt/app';

const props = defineProps({
  cards: { type: Array, default: () => ([]) },
  pagination: { type: Object, default: () => ({}) },
  textButtonLeftPagination: { type: String, default: '' },
  textButtonRightPagination: { type: String, default: '' },
})

const route = useRoute();
const currentPage = ref(route.query.page ? parseInt(route.query.page) : 1);

function changePage(direction: number) {
  const nextPage = currentPage.value + direction;
  if (nextPage > 0 && nextPage <= props.pagination.last_page) {
    currentPage.value = nextPage;
  }
}
</script>

<style scoped lang="scss">

</style>
