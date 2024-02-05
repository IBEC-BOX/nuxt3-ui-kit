<template>
  <v-app>
    <partsHeaderErg>
    </partsHeaderErg>
    <v-container>
      <v-row>
        <v-col cols="6">
          <partsForms
            title="Ответим на все ваши вопросы"
            :inputs="[
              {
                variant: 'solo',
                rounded: 'xl',
                rules: [
                  u => !!u || 'Имя обязательно к заполнению',
                  u => !u || u.length <= 50 || 'Имя не должно быть длиннее 50 символов'
                ],
                placeholder: 'Укажите ваше имя',
                maska: {mask: '###-###-x'},
                value: '',
              },
              {
                variant: 'solo',
                rounded: 'xl',
                placeholder: '+7',
                rules: [
                  u => !!u || 'ФИО обязательно к заполнению',
                  u => !u || u.length <= 2 || 'Имя не должно быть длиннее 50 символов'
                ],
                maska: {mask: '###-###-x'},
                value: '',
              }
            ]"
            :style-form="'onlyForm'"
          />
        </v-col>
      </v-row>

    </v-container>
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
