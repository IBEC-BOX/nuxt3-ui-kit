<template>
  <v-app>
    <partsHeaderErg>
    </partsHeaderErg>
    <NuxtPage />
    <v-container style="background: #F8F8F8">
      <partsForms
        title="asd"
        :inputs='[
          {
            label: "ФИО",
            rules: [
            v => !!v || "ФИО обязательно к заполнению",
            v => (v && v.length <= 10) || "Имя не должно быть длиннее 10 символов",
            ],
            placeholder: "ФИО",
            value: ""
          },
          {
            label: "ФИО",
            rules: [
            v => !!v || "ФИО обязательно к заполнению",
            v => (v && v.length <= 10) || "Имя не должно быть длиннее 10 символов",
            ],
            placeholder: "ФИО",
            maska: {mask: "###-###-x"},
            value: "",
            colsAttrs: {
              cols: 12,
            },
            attrs: {
              type: "text",
              variant: "outlined"
            }
          },
        ]'
      />
    </v-container>

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
