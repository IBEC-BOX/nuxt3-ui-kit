<template>
  <v-app class="">
    <partsHeaderErg
      :burger="false"
    />
    <NuxtPage />
    <section class="h-100">
      <v-container class=" px-4">

        <partsForms
          title="Ответим на все ваши вопросы"
          :style-form="'onlyForm'"
          :inputs="[
                  {
                    rules: [
                      u => !!u || 'Имя обязательно к заполнению',
                      u => !u || u.length <= 50 || 'Имя не должно быть длиннее 50 символов'
                    ],
                    colsAttrs: {
                      cols: 12
                    },
                    attrs: {
                      variant: 'solo',
                      placeholder: 'Укажите ваше имя',
                      flat: true,
                      rounded: '16',
                      clearable: true
                    },
                    value: '',
                  },
                  {
                    placeholder: '+7',
                    colsAttrs: {
                      cols: 12
                    },
                    rules: [
                      u => !!u || 'Номер обязателен к заполнению',
                      u => !u || u.length === 18 || 'Такого номера не существует'
                    ],
                    maska: {mask: '+7 (###) ### ## ##'},
                    value: '+7',
                    attrs: {
                      variant: 'solo',
                      placeholder: '+7',
                      flat: true,
                      rounded: '16',
                      clearable: true
                    },
                  }
                ]"
          :button-setting="{
                  text: 'Отправить',
                  attrs: {
                    block: true,
                    size: 'x-large',
                    rounded: 'xl',
                    color: 'dark-1',
                    class: 'text-none mb-10',
                  }
                }"
          :checkbox-setting="{
            attrs: {
                          class: 'custom-checkbox',

            },
                  label: '<span>Даю свое согласие на сбор и обработку данных в соответствии с <a href=`/`>Политикой конфедициальности</a></span>'
                }"
        />


      </v-container>
    </section>

    <partsFooterDefault
      id="footer"
      :logo-in-body="true"
      :logo="{ title: 'АО', titleAttrs: {class: 'mb-4 text-h6'} }"
      nav-class="text-h6 text-black"
      :nav="[
        { id: 1, text: 'Overview', to: '/' },
        { id: 2, text: 'Features', to: '/' },
        { id: 3, text: 'Pricing', to: '/' },
        { id: 4, text: 'Careers', to: '/' },
        { id: 5, text: 'Help centre', to: '/' },
        { id: 6, text: 'Privacy', to: '/', image: '/arrow.png' },
      ]"
      :copyright="{
        text: '2023 Untitled UI. All rights reserverd'
      }"
    />
  </v-app>
</template>

<script setup>
</script>

<style lang="scss">
/* Redundant unused code to test treeshaking */
.unused-selector-app {
  color: orange;
}
.custom-checkbox .v-input--selection-controls__input {
  align-items: flex-start;
}

.custom-checkbox .v-input--checkbox .v-icon {
  margin-top: 0px; /* Настройте это значение в зависимости от вашего дизайна */
}
</style>
