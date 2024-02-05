<template>
  <v-app>
    <partsHeaderErg>
    </partsHeaderErg>

    <NuxtPage />

    <partsFooterDefault
      :logo-in-body="true"
      :logo="{title: 'АО', colorClass: 'text-white'}"
      :nav="[{id:1,text:'Overview',link:'/'},{id:2,text:'Features',link:'/'},{id:3,text:'Pricing',link:'/'},{id:4,text:'Careers',link:'/'},{id:5,text:'Help centre',link:'/'}, {id:6,text:'Privacy',link:'/'}]"
      copyright="2023 Untitled UI. All rights reserverd"
    >

    </partsFooterDefault>
  </v-app>
</template>

<script setup>
</script>

<style>
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
</style>
