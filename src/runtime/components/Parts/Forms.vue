<template>
  <v-sheet v-if="styleForm === 'standard' && (bigImage === '' && smallImage === '')" :max-width="commentary === true ? 825 : 1100" class="mx-auto custom-ui-form">
    <v-form @submit.prevent="dataForm">
      <v-row class="px-sm-10 pb-sm-8 pa-6">
        <v-col cols="12" :sm="commentary === true ? 12 : 6" class="">
          <p class="text-sm-32 text-h5" :class="subtitle === '' ? 'mb-sm-5' : 'mb-sm-3'" v-if="title.length">{{ title }}</p>
          <p class="text-sm-18 text-15 mb-4" v-if="subtitle.length">{{ subtitle }}</p>
        </v-col>
        <v-col cols="12" sm="6" class="pb-0">
          <v-row :class="commentary === true ? 'pa-0' : 'pt-4'">
            <v-col
              v-for="(input, index) in inputs"
              :key="`input-${index}`"
              :cols="input.cols == undefined  ? 12 : input.cols "
              :sm="input.sm == undefined  ? 12 : input.sm "
              :md="input.md == undefined  ? 12 : input.md "
              :lg="input.lg == undefined  ? 12 : input.lg "
              :xl="input.xl == undefined  ? 12 : input.xl "
              :xxl="input.xxl == undefined  ? 12 : input.xxl "
              class="pa-0 px-3"
            >
              <v-text-field
                variant="outlined"
                class="mb-2"
                v-model="inputValues[index]"
                :label="input.label"
                :rules="input.rules"
                :placeholder="input.placeholder"
                :clearable="input.clearable"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="pt-3 pb-0 py-sm-0" v-if="commentary === true">
          <v-textarea
            variant="outlined"
            label="Four rows"
            rows="8"
            counter
            v-model="comValue"
          />
        </v-col>
        <v-col cols="12" sm="6" class="pl-1 py-0">
          <v-checkbox color="primary" v-model="checked" :rules="[v => !!v || 'Нажми на флажок!']" v-if="commentary === true">
            <template v-slot:label>
              <span class="text-13">Нажимая кнопку, я соглашаюсь на обработку персональных данных</span>
            </template>
          </v-checkbox>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex flex-column justify-end">
          <v-btn type="submit" size="x-large" block :class="commentary === false ? 'my-3' : ''">
            Отправить
          </v-btn>
          <v-checkbox color="primary" v-model="checked" :rules="[v => !!v || 'Нажми на флажок!']" v-if="commentary === false">
            <template v-slot:label>
              <span class="text-13">Нажимая кнопку, я соглашаюсь на обработку персональных данных</span>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
  <v-sheet v-if="styleForm === 'call' && (bigImage === '' && smallImage === '')" :max-width="456" class="mx-auto pa-4 custom-ui-form">
    <v-form @submit.prevent="dataForm">
      <v-row>
        <v-col cols="12" class="text-center mb-3">
          <p class="text-h5 text-sm-32 mb-3">{{ title }}</p>
          <p class="text-sm-18 text-15 ">{{ subtitle }}</p>
        </v-col>
        <v-col
          v-for="(input, index) in inputs"
          :key="`input-${index}`"
          :cols="input.cols == undefined  ? 12 : input.cols "
          :sm="input.sm == undefined  ? 12 : input.sm "
          :md="input.md == undefined  ? 12 : input.md "
          :lg="input.lg == undefined  ? 12 : input.lg "
          :xl="input.xl == undefined  ? 12 : input.xl "
          :xxl="input.xxl == undefined  ? 12 : input.xxl "
          class="pa-0 px-3"
        >
          <v-text-field
            variant="outlined"
            class="mb-2"
            v-model="inputValues[index]"
            :label="input.label"
            :rules="input.rules"
            :placeholder="input.placeholder"
            :clearable="input.clearable"
          />
        </v-col>
        <v-col cols="12" class="py-0 pl-1">
          <v-checkbox color="primary" v-model="checked" :rules="[v => !!v || 'Нажми на флажок!']">
            <template v-slot:label>
              <span class="text-13">Нажимая кнопку, я соглашаюсь на обработку персональных данных</span>
            </template>
          </v-checkbox>
        </v-col>
        <v-col cols="12" class="pt-0 pb-4">
          <v-btn type="submit" block size="x-large">
            Отправить
          </v-btn>
        </v-col>
        <v-col cols="12">
          <ul class="d-flex justify-center align-center" style="list-style: none; column-gap: 8px">
            <li v-for="(social, index) in socials" :key="`social-${index}`">
              <a :href="social.link">
                <v-img :src="social.img" :alt="social.alt" width="32"/>
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
  <v-sheet v-if="bigImage.length || smallImage.length" :width="1110" class="mx-auto custom-ui-form">
    <v-form @submit.prevent="dataForm" class="pa-6 px-sm-10 pt-sm-10 pb-sm-5">
      <v-row>
        <v-col cols="12" class="text-center mb-7 text-sm-32 text-h5" v-if="smallImage.length">{{ title }}</v-col>
        <v-col cols="6" v-if="bigImage.length" class="d-none d-sm-block"><v-img :src="bigImage" /></v-col>
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12" v-if="bigImage.length">
              <p class="text-sm-32 text-h5 mb-5">{{ title }}</p>
            </v-col>
            <v-col
              v-for="(input, index) in inputs"
              :key="`input-${index}`"
              :cols="input.cols == undefined ? 12 : input.cols "
              :sm="input.sm == undefined ? 12 : input.sm "
              :md="input.md == undefined ? 12 : input.md "
              :lg="input.lg == undefined ? 12 : input.lg "
              :xl="input.xl == undefined ? 12 : input.xl "
              :xxl="input.xxl == undefined ? 12 : input.xxl "
              class="pa-0 px-3"
            >
              <v-text-field
                variant="outlined"
                class="mb-2"
                v-model="inputValues[index]"
                :label="input.label"
                :rules="input.rules"
                :placeholder="input.placeholder"
                :clearable="input.clearable"
              />
            </v-col>
            <v-col cols="12" class="pb-2 pt-0" v-if="Object.keys(combobox).length">
              <v-combobox
                :variant="combobox.variant === '' ? combobox.variant : 'outlined'"
                :label="combobox.label === '' ? 'Выбери пункт' : combobox.label"
                :rules="combobox.rules"
                :clearable="combobox.clearable"
                :chips="combobox.chips"
                :multiple="combobox.multiple"
                :items="combobox.items"
                :value="combobox.value"
                v-model="comboboxValue"
              />
            </v-col>
            <v-col cols="12" class="py-0" v-if="commentary">
              <v-textarea
                variant="outlined"
                label="Four rows"
                rows="3"
                counter
                v-model="comValue"
              />
            </v-col>
            <v-col cols="12" class="pa-0 px-3 pt-1">
              <v-btn type="submit" block size="x-large" class="mb-3">
                отправить
              </v-btn>
            </v-col>
            <v-col cols="12" class="pb-5 pa-sm-0 pl-1">
              <v-checkbox :color="checkboxSetting.color" v-model="checked" :rules="checkboxSetting.rules">
                <template v-slot:label>
                  <span class="text-13">{{ checkboxSetting.label }}</span>
                </template>
              </v-checkbox>
<!--              [v => !!v || 'Нажми на флажок!']-->
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" v-if="smallImage.length">
          <v-row>
            <v-col cols="12" v-for="(info, index) in infoCompany" :key="`info-${index}`" class="d-flex align-center pt-0 pb-5" style="column-gap: 12px">
              <v-icon :icon="info.icon" :color="info.colorIcon" :size="info.sizeIcon" />
              <span>{{ info.text}} </span>
            </v-col>
            <v-col cols="12" v-if="socials.length">
              <ul class="d-flex" style="column-gap: 8px; list-style: none">
                <li v-for="(social, index) in socials" :key="`social-${index}`">
                  <a :href="social.link">
                    <v-img :src="social.img" :alt="social.alt" :width="35"/>
                  </a>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" v-if="smallImage.length">
              <v-img :src="smallImage" :alt="altImage" style="height: 230px" cover></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref, watch } from 'vue'

const checked = ref(false)
const comboboxValue = ref([])
const comValue = ref("")
const emit = defineEmits(['form-data'])

const props = defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },

  commentary: { type: Boolean, default: true },

  styleForm: { type: String, default: 'standard' },
  bigImage: { type: String, default: "" },
  smallImage: { type: String, default: "" },
  altImage: { type: String, default: "" },

  checkboxSetting: { type: Object, default: () => ({}) },
  inputs: { type: Array, default: () => [] },
  combobox: { type: Object, default: () => ({}) },
  socials: { type: Array, default: () => [] },
  infoCompany: { type: Array, default: () => [] },
})

const inputValues = ref(props.inputs.map(input => input.value));

const dataForm = () => {
  if(Object.keys(props.combobox).length) {
    if(comboboxValue.value.length && inputValues.value.every(value => value) && checked.value) {
      emit('form-data', [inputValues._rawValue, comboboxValue._rawValue, comValue._rawValue] )
    } else {
      console.log('checkbox najmi chtole ny ili polya zapolni mb pole vibrat nado')
    }
  } else {
      if(inputValues.value.every(value => value) && checked.value) {
        emit('form-data', [inputValues._rawValue, comValue._rawValue] )
      } else {
        console.log('checkbox najmi chtole ny ili polya zapolni')
      }
  }
}
</script>

<style lang="scss">
.custom-ui-form {

  .v-checkbox {
    &-btn {
      width: 100%;
    }
    .v-messages__message {
      padding-left: 30px;
    }
  }
}
</style>
