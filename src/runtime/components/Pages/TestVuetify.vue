<template>
  <v-app class="">
    <partsHeaderErg
      :burger="false"
      :bgClassHeader="'bg-primary'"
      :color-class-menu="'text-white'"
      :columnGapList="26"
      :text-btn="'Получить консультацию'"
      :set-lang="[
        {
          code: 'ru',
          name: 'Ru'
        },
        {
          code: 'kk',
          name: 'Kz'
        },
        {
          code: 'en',
          name: 'En'
        }
      ]"
      :active-lang="'Рус'"
      button-size="large"
    />
    <NuxtPage class="bg-primary" />
    <section class="h-100 bg-primary">
      <v-container class=" px-4">

        <partsForms
          :style-form="'contacts'"
          :inputs="[
                      {

                        colsAttrs: {
                          cols: 12
                        },
                        attrs: {
                          variant: 'solo',
                          placeholder: 'asd',
                          flat: true,
                          rounded: '16',
                          clearable: true,
                          maska: {mask: 'A A'},
                          rules: [
                            u => !!u || 'asd',
                            u => !u || u.length <= 50 || 'Имя не должно быть длиннее 50 символов'
                          ],
                        },
                        value: '',
                      },
                      {
                          placeholder: '+7',
                          colsAttrs: {
                            cols: 12
                          },
                          maska: {mask: '+7 (###) ###-##-##'},
                          value: '+7',
                          attrs: {
                            variant: 'solo',
                            placeholder: '+7',
                            flat: true,
                            rounded: '16',
                            clearable: true,
                            rules: [
                              u => !!u || 'asd',
                              u => !u || u.length === 18 || ''
                            ],
                          },
                      }
                    ]"
          :button-setting="{
                      text: 'asd',
                      attrs: {
                        block: true,
                        size: 'x-large',
                        rounded: 'xl',
                        color: 'dark-1',
                        class: 'text-none mb-10',
                        elevation: 0,
                      }
                    }"
          @form-data="formData"
          :checkbox-setting="{
                      attrs: {
                        class: 'custom-checkbox',
                        rules: [
                          u => u || u.length === false || 'asd'
                        ],
                      },
                      label:  `
                        <span class='text-dark-1 text-body-1'>
                           'asd'
                            <a href='/' class='text-dark-1'>
                                'asd'
                            </a>
                        </span>
                      `
                    }"
          title="asdasd"
          :contacts="[
            {
              title: 'asd',
              phone: `<p>+321321321</p><p>+321321321</p>`,
              mail: 'asdsadasd'
            }
          ]"
          :switchContentOnValid="true"
        >
          <template #confirm-form>
            <p>asdsdfdsf,</p>
            <p>asdsdfdsf</p>
          </template>
        </partsForms>
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
const slides2 = [
  {
    id: 0,
    chip: {
      text: 'abvgd',
      attrs: {
        color: 'primary'
      }
    },
    title: 'Кредитная карта с целым годом без %',
    subtitle: 'Подзаголовок маленький, в две строки',
    titleAttrs: {
      class: 'text-white w-75'
    },
    backgroundImg: 'https://images.unsplash.com/photo-1562043236-559c3b65a6e2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttons: [
      {
        id: 0,
        text: 'Large button',
        attrs: {
          size: 'large',
          color: 'primary',
          class: 'text-body-1',
        }
      }
    ],
    active: true,
  },
  {
    id: 1,
    chip: {
      text: 'abvgd',
      attrs: {
        color: 'primary'
      }
    },
    title: 'Экологические акции',
    subtitle: 'Команда АО “ССГПО” активно принимает участие в мероприятиях, направленных на помощь экологии',
    textBlockAttrs: {
      class: ''
    },
    subTitleAttrs: {
      class: 'text-primary'
    },
    titleAttrs: {
      class: 'text-primary text-h5 w-75'
    },
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/555c/6876/cb9c4c93facc41f9da4145fa73aca28f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuQUtcWbVrWRn1GfwukhEdmCQ9ZxpWBc8-kYGxqc~kInBXYg7QiQUdnC11N6CBJyNYPhZmkMoCyqJLchOvtrizsQiSWQytj96hkeDbtlODJe60UxBq9LQqLWuzCoq8~9-IL~oKeji3ECSklL1VCqbv5NQ-Lxi~ItwX-sunBEXVsx9g9oxZIZrkuIVOfBA9vqYz1PVaG9FrIP7zL5R73ahu0m2V-MLPBe8OUFEQSWbDw9xUPIUKyXOfbm9En80I9oV8k55cLvyNaid-2qCCPtXrm26v7ohCeXQILx1-9j8xBHjy0cLploNutzmGMC0uiPQnr115gYHEhBXaJk2Ez8zA__',
      attrs: {
        'max-height': 400,
        'max-width': '98%',
        class: 'rounded-xl'
      }
    },
    active: true,
  },
  {
    id: 2,
    chip: {
      text: 'abvgd',
      attrs: {
        color: 'primary'
      }
    },
    title: 'Экологические акции',
    subtitle: 'Команда АО “ССГПО” активно принимает участие в мероприятиях, направленных на помощь экологии',
    textBlockAttrs: {
      class: ''
    },
    subTitleAttrs: {
      class: 'text-primary'
    },
    titleAttrs: {
      class: 'text-primary text-h5 w-75'
    },
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/555c/6876/cb9c4c93facc41f9da4145fa73aca28f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuQUtcWbVrWRn1GfwukhEdmCQ9ZxpWBc8-kYGxqc~kInBXYg7QiQUdnC11N6CBJyNYPhZmkMoCyqJLchOvtrizsQiSWQytj96hkeDbtlODJe60UxBq9LQqLWuzCoq8~9-IL~oKeji3ECSklL1VCqbv5NQ-Lxi~ItwX-sunBEXVsx9g9oxZIZrkuIVOfBA9vqYz1PVaG9FrIP7zL5R73ahu0m2V-MLPBe8OUFEQSWbDw9xUPIUKyXOfbm9En80I9oV8k55cLvyNaid-2qCCPtXrm26v7ohCeXQILx1-9j8xBHjy0cLploNutzmGMC0uiPQnr115gYHEhBXaJk2Ez8zA__',
      attrs: {
        'max-height': 400,
        'max-width': '98%',
        class: 'rounded-xl'
      }
    },
    active: true,
  },
]

const formData = (data) => {
  console.log(data)
}

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
