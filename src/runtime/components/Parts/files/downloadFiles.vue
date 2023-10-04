<template>
  <v-container>
    <h2 class="d-flex text-primary mb-6" :class="`justify-${positionTitle}`">{{ title }}</h2>
    <div v-for="(file, index) in files" :key="`file-${index}`" class="d-flex align-center" @click="downloadFile(file)" style="cursor: pointer">
      <v-img max-width="60" cover :src="file.img" class="mr-4" />
      <div>
        <p class="text-18 text-black mb-1">{{ file.title }}</p>
        <p class="text-body-2 text-primary-gray">{{ getFileExtension(file.download) }}, {{ file.date }}</p>
      </div>
    </div>
    <slot name="button"></slot>
  </v-container>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: 'О нас' },
  positionTitle: { type: String, default: 'center'},
  files: { type: Array, default: () => [] }
})

const downloadFile = (file) => {
  const link = document.createElement('a');
  link.href = file.url;
  link.download = file.download;
  link.click();
};

const getFileExtension = (fileName) => {
  return fileName.split('.').pop().toUpperCase();
};

</script>
