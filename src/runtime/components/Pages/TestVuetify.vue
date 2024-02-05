<template>
  <v-app>
    <partsHeaderErg>
    </partsHeaderErg>

<!--    <NuxtPage /> -->

    <partsForms
      title="Ответим на все ваши вопросы"
      :inputs="[
        {
          label: 'asd',
          rules: [
            u => !!u || 'Имя обязательно к заполнению',
            u => !u || u.length <= 50 || 'Имя не должно быть длиннее 50 символов'
          ],
          placeholder: 'Укажите ваше имя',
          value: ''
        },
        {
          label: 'asd',
          rules: [
            u => !!u || 'ФИО обязательно к заполнению',
            u => !u || u.length <= 50 || 'Имя не должно быть длиннее 50 символов'
          ],
          placeholder: '+7',
          value: ''
        }
      ]"
    :commentary="{label:'комментарий',rules:[u=>!!u || 'Комментарий обязателен к заполнению'], rows:8}"
    :checkbox-setting="{color:'primary',rules:[u=>!!u||'Нажми на флажок!'],label:'Нажимая кнопку, я соглашаюсь на обработку персональных данных'}"
    />
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
