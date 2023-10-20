<template>
  <v-container>
    <h2 class="d-flex text-primary mb-6" :class="`justify-${positionTitle}`">{{ title }}</h2>
    <div v-for="(file, index) in files" :key="`file-${index}`" class="d-flex align-center py-3" @click="downloadFile(file)" style="cursor: pointer; column-gap: 12px">
      <v-img
        max-width="44"
        class="w-100"
        cover
        :src="file.img || fileExtensionImage[getFileExtension(file.download)]"
        :alt="file.alt || getFileExtension(file.download)"
      />
      <div>
        <p class="text-body-1 text-sm-18 text-black mb-1">{{ file.title }}</p>
        <p class="text-body-2 text-primary-gray">
          {{ getFileExtension(file.download).toUpperCase() }}<span v-if="file.size || file.date">,</span>
          {{ file.size }}<span v-if="file.size && file.date">,</span>
          {{ file.date }}
        </p>
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

const fileExtensionImage = {
  xlsx: "/exel.svg",

  zip: "/zip.svg",
  rar: "/zip.svg",
  '7z': "/zip.svg",

  pdf: "/pdf.svg",
  docx: "/word.svg",

  mp3: "/mp3-4.svg",
  mp4: "/mp3-4.svg",

  jpg: "/img.svg",
  jpeg: "/img.svg",
  png: "/img.svg",
  svg: "/img.svg",
  webp: "/img.svg"
}

const downloadFile = (file) => {
  const link = document.createElement('a');
  link.href = file.url;
  link.download = file.download;
  link.click();
};

const getFileExtension = (fileName) => {
  return fileName.split('.').pop()
};

</script>
