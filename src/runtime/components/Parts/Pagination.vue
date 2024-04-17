<template>
  <v-pagination
    v-model="currentPage"
    :length="paginationLastPage"
    :total-visible="5"
    class="custom-pagination"
    :class="sidesButton ? 'sides-button' : ''"
    v-bind="paginationAttrs"
  >
    <template #prev>
      <v-btn
        variant="text"
        class="text-none mr-auto px-0"
        v-bind="paginationButtonAttrs"
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
        v-bind="paginationButtonAttrs"
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
import { ref } from "vue"
import { useRoute } from 'nuxt/app';
import { useMainStore } from "../../store/mainStore";
import { useAttrs } from "vue";

const mainStore = useMainStore()
const route = useRoute();

const attrs = useAttrs()
const paginationAttrs = ref({
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'pagination')
})
const paginationButtonAttrs = ref({
  ...mainStore.getObjectPropertiesWithPrefix(attrs, 'button-pagination')
})
const currentPage = ref(route.query.page ? parseInt(route.query.page) : 1);

const props = defineProps({
  paginationLastPage: { type: Number, default: () => 1 },
  textButtonLeftPagination: { type: String, default: '' },
  textButtonRightPagination: { type: String, default: '' },
  sidesButton: { type: Boolean, default: true, }
})

const emit = defineEmits(['update-pagination'])

function changePage(direction: number) {
  const nextPage = currentPage.value + direction;
  if (nextPage > 0 && nextPage <= props.paginationLastPage) {
    currentPage.value = nextPage;
    emit('update-pagination', currentPage.value)
  }
}
</script>

<style lang="scss">
.custom-pagination.sides-button {
  .v-pagination__prev {
    margin-right: auto;
  }
  .v-pagination__next {
    margin-left: auto;
  }
}

</style>
