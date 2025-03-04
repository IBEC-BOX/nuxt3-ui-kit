<template>
  <div
    v-if="isCookieBannerOpen"
    class="cookie-banner bg-secondary rounded-t-16"
  >
    <v-container class="pt-0">
      <header class="d-flex justify-end">
        <v-btn
          variant="text"
          class="px-0"
          min-width="20px"
          min-height="20px"
          height="20px"
          @click="acceptCookies"
        >
          <v-icon icon="mdi-close" />
        </v-btn>
      </header>
      <div
        class="mb-0"
        v-html="text"
      />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';

const _props = defineProps({
  text: {
    type: String,
    default: ""
  }
})

const isCookieBannerOpen = ref(true);

const acceptCookies = () => {
  isCookieBannerOpen.value = false;
  if (process.client) {
    localStorage.setItem('cookiesAccepted', 'true');
  }
};

const checkCookiesAccepted = () => {
  const accepted = process.client ? localStorage.getItem('cookiesAccepted') : false;
  isCookieBannerOpen.value = accepted !== 'true';
};

onMounted(() => {
  checkCookiesAccepted()
})
</script>

<style scoped lang="scss">
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f9f9f9;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 1000;
}
</style>
