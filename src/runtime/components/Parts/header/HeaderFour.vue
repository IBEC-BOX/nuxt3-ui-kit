<template>
  <HeaderOne
    header-active-link-variant="bottom_line"
    header-height="88"
    top-background="grey-lighten-2"
    :menu="menu"
    :menu-top-links="topMenuLinks"
  >
    <template #buttons>
      <slot name="buttons" />
    </template>
  </HeaderOne>
</template>

<script setup>
import HeaderOne from './HeaderOne.vue'
const props = defineProps({
  menu: {
    type: Array,
    default: () => []
  },

  topMenuLinks: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>

</style>
