<template>
  <button
    class="burger-icon"
    :class="{'open': value}"
    @click="toggleMenu"
  >
    <div class="burger-line line1"></div>
    <div class="burger-line line2"></div>
    <div class="burger-line line3"></div>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

function toggleMenu() {
  value.value = !value.value
}
</script>

<style scoped>
.burger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 24px;
  padding: 4px;
  cursor: pointer;
}

.burger-line {
  width: 100%;
  height: 3px;
  background-color: #000;
  transition: transform 0.3s ease;
}

.burger-icon.open .line1 {
  transform: rotate(45deg) translate(5px, 4px);
}

.burger-icon.open .line2 {
  opacity: 0;
}

.burger-icon.open .line3 {
  transform: rotate(-45deg) translate(5px, -4px);
}
</style>
