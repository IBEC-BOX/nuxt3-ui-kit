<template>
  <v-sheet class="custom-pagination position-relative bg-transparent">
    <span class="d-flex d-sm-none mobile-pagination">{{ wordMobilePagination + ' ' + currentPage + ' ' + ellipsisMobilePagination + '  ' + paginationLastPage }}</span>

    <v-pagination
      v-model="currentPage"
      :length="paginationLastPage"
      :total-visible="paginationTotalVisible"
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
            {{ iconButtonLeftPagination }}
          </v-icon>
          <span class="ml-2 text-18 d-none d-sm-inline">{{ textButtonLeftPagination }}</span>
        </v-btn>
      </template>
      <template #next>
        <v-btn
          variant="text"
          class="text-none ml-auto px-0"
          v-bind="paginationButtonAttrs"
          @click="changePage(1)"
        >
          <span class="mr-2 text-18 d-none d-sm-inline">{{ textButtonRightPagination }}</span>
          <v-icon size="20">
            {{ iconButtonRightPagination }}
          </v-icon>
        </v-btn>
      </template>
    </v-pagination>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from 'nuxt/app';
import { useAttrs } from "vue";
import { getObjectPropertiesWithPrefix } from "../../../utils/attrs";

const route = useRoute();

const attrs = useAttrs()
const paginationAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, 'pagination')
})
const paginationButtonAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, 'button-pagination')
})

const props = defineProps({
  paginationLastPage: { type: Number, default: () => 1 },
  paginationTotalVisible: { type: Number, default: () => 5 },
  textButtonLeftPagination: { type: String, default: '' },
  textButtonRightPagination: { type: String, default: '' },
  iconButtonLeftPagination: { type: String, default: 'mdi-arrow-left' },
  iconButtonRightPagination: { type: String, default: 'mdi-arrow-right' },
  sidesButton: { type: Boolean, default: true, },
  wordMobilePagination: { type: String, default: '' },
  ellipsisMobilePagination: { type: String, default: '' },
})

const emit = defineEmits(['update-pagination'])

const currentPage = ref(route.query.page ? parseInt(route.query.page) : 1);

function changePage(direction: number) {
  const nextPage = currentPage.value + direction;
  if (nextPage > 0 && nextPage <= props.paginationLastPage) {
    currentPage.value = nextPage;
    emit('update-pagination', currentPage.value)
  }
}
</script>

<style lang="scss">
.custom-pagination  {
  display: flex;
  justify-content: center;
  width: 100%;
  .sides-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .v-pagination__item {
      @media(max-width: 600px) {
        display: none;
      }
    }
    .v-pagination__list {
      align-items: center;
    }
    .v-pagination__prev {
      margin-right: auto;
    }
    .v-pagination__next {
      margin-left: auto;
    }
  }

  .mobile-pagination {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
  }

}

</style>
