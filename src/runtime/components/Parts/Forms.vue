<template>
  <v-sheet v-if="styleForm === 'standard' && (bigImage === '' && smallImage === '')" :max-width="Object.keys(commentary).length ? 825 : 1100" class="mx-auto custom-ui-form">
    <v-form ref="form" @submit.prevent="dataForm($refs.form.isValid)">
      <v-row class="px-sm-10 pb-sm-8 pa-6">
        <v-col cols="12" :sm="Object.keys(commentary).length ? 12 : 6" v-if="title.length">
          <p class="text-sm-32 text-h5" :class="subtitle === '' ? 'mb-sm-5' : 'mb-sm-3'" v-if="title.length">{{ title }}</p>
          <p class="text-sm-18 text-15 mb-4" v-if="subtitle.length">{{ subtitle }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row :class="Object.keys(commentary).length ? 'pa-0' : 'pt-4'">
            <v-col
              v-for="(input, index) in inputs"
              :key="`input-${index}`"
              :cols="input.cols || 12 "
              :sm="input.sm || 12 "
              :md="input.md || 12 "
              :lg="input.lg || 12 "
              :xl="input.xl || 12 "
              :xxl="input.xxl || 12 "
              class="pa-0 px-3 mb-2"
            >
              <v-text-field
                v-model="inputValues[index]"
                :variant="input.variant || 'outlined'"
                :label="input.label"
                :rules="input.rules"
                :placeholder="input.placeholder"
                :clearable="input.clearable || false"
                :type="input.type || 'text'"
                :hint="input.hint"
                :prepend-icon="input.prependIcon"
                :prepend-inner-icon="input.prependInnerIcon"
                :append-icon="input.appendIcon"
                :append-inner-icon="input.appendInnerIcon"
                :prefix="input.prefix"
                :suffix="input.suffix"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="pt-3 pb-0 py-sm-0" v-if="Object.keys(commentary).length">
          <v-textarea
            :variant="commentary.variant || 'outlined'"
            :label="commentary.label || 'Комментарий'"
            :rules="commentary.rules"
            :counter="commentary.counter || false"
            :auto-grow="commentary.autoGrow || false"
            :bg-color="commentary.bgColor"
            :color="commentary.color"
            :clearable="commentary.clearable || true"
            :prepend-icon="commentary.prependIcon"
            :append-icon="commentary.appendIcon"
            :prepend-inner-icon="commentary.prependInnerIcon"
            :append-inner-icon="commentary.appendInnerIcon"
            :no-resize="commentary.noResize || false"
            :rows="commentary.rows || 8"
            v-model="comValue"
          />
        </v-col>
        <v-col cols="12" sm="6" class="pl-1 py-0">
          <v-checkbox :color="checkboxSetting.color" v-model="checked" :rules="checkboxSetting.rules"  v-if="Object.keys(commentary).length">
            <template v-slot:label>
              <span class="text-13">{{ checkboxSetting.label }}</span>
            </template>
          </v-checkbox>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex flex-column justify-end" :class="!Object.keys(commentary).length ? 'py-0' : ''">
          <v-btn type="submit" size="x-large" block :class="!Object.keys(commentary).length ? 'mb-3' : ''" color="primary">
            {{ textButton }}
          </v-btn>
          <v-checkbox :color="checkboxSetting.color" v-model="checked" :rules="checkboxSetting.rules" v-if="!Object.keys(commentary).length">
            <template v-slot:label>
              <span class="text-13">{{ checkboxSetting.label }}</span>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
  <v-sheet v-if="styleForm === 'call' && (bigImage === '' && smallImage === '')" :max-width="456" class="mx-auto pa-4 custom-ui-form">
    <v-form ref="form" @submit.prevent="dataForm($refs.form.isValid)">
      <v-row>
        <v-col cols="12" class="text-center mb-3" v-if="title.length || subtitle.length">
          <p class="text-h5 text-sm-32 mb-3" v-if="title">{{ title }}</p>
          <p class="text-sm-18 text-15 " v-if="subtitle">{{ subtitle }}</p>
        </v-col>
        <v-col
          v-for="(input, index) in inputs"
          :key="`input-${index}`"
          :cols="input.cols || 12 "
          :sm="input.sm || 12 "
          :md="input.md || 12 "
          :lg="input.lg || 12 "
          :xl="input.xl || 12 "
          :xxl="input.xxl || 12 "
          class="pa-0 px-3"
        >
          <v-text-field
            v-model="inputValues[index]"
            :variant="input.variant || 'outlined'"
            :label="input.label"
            :rules="input.rules"
            :placeholder="input.placeholder"
            :clearable="input.clearable || false"
            :type="input.type || 'text'"
            :hint="input.hint"
            :prepend-icon="input.prependIcon"
            :prepend-inner-icon="input.prependInnerIcon"
            :append-icon="input.appendIcon"
            :append-inner-icon="input.appendInnerIcon"
            :prefix="input.prefix"
            :suffix="input.suffix"
            class="mb-2"
          />
        </v-col>
        <v-col cols="12" class="py-0 pl-1">
          <v-checkbox :color="checkboxSetting.color" v-model="checked" :rules="checkboxSetting.rules"  v-if="Object.keys(commentary).length">
            <template v-slot:label>
              <span class="text-13">{{ checkboxSetting.label }}</span>
            </template>
          </v-checkbox>
        </v-col>
        <v-col cols="12" class="pt-0 pb-4">
          <v-btn type="submit" block size="x-large" color="primary">
            {{ textButton }}
          </v-btn>
        </v-col>
        <v-col cols="12">
          <ul class="d-flex justify-center align-center" style="list-style: none; column-gap: 8px">
            <li v-for="(social, index) in socials" :key="`social-${index}`">
              <a :href="social.link" target="_blank" rel="noopener noreferrer">
              <v-img :src="social.img" :alt="social.alt" width="32"/>
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
  <v-sheet v-if="bigImage.length || smallImage.length" :width="1110" class="mx-auto custom-ui-form">
    <v-form ref="form" @submit.prevent="dataForm($refs.form.isValid)" class="pa-6 px-sm-10 pt-sm-10 pb-sm-5">
      <v-row>
        <v-col cols="12" class="text-center mb-7 text-sm-32 text-h5" v-if="smallImage.length">{{ title }}</v-col>
        <v-col cols="6" v-if="bigImage.length" class="d-none d-sm-block"><v-img :src="bigImage" :alt="altImage" cover /></v-col>
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12" v-if="bigImage.length">
              <p class="text-sm-32 text-h5 mb-5">{{ title }}</p>
            </v-col>
            <v-col
              v-for="(input, index) in inputs"
              :key="`input-${index}`"
              :cols="input.cols || 12 "
              :sm="input.sm || 12 "
              :md="input.md || 12 "
              :lg="input.lg || 12 "
              :xl="input.xl || 12 "
              :xxl="input.xxl || 12 "
              class="pa-0 px-3"
            >
              <v-text-field
                v-model="inputValues[index]"
                :variant="input.variant || 'outlined'"
                :label="input.label"
                :rules="input.rules"
                :placeholder="input.placeholder"
                :clearable="input.clearable || false"
                :type="input.type || 'text'"
                :hint="input.hint"
                :prepend-icon="input.prependIcon"
                :prepend-inner-icon="input.prependInnerIcon"
                :append-icon="input.appendIcon"
                :append-inner-icon="input.appendInnerIcon"
                :prefix="input.prefix"
                :suffix="input.suffix"
                class="mb-2"
              />
            </v-col>
            <v-col cols="12" class="pb-2 pt-0" v-if="Object.keys(combobox).length">
              <v-combobox
                :variant="combobox.variant || 'outlined'"
                :label="combobox.label || 'Выбери пункт'"
                :rules="combobox.rules"
                :clearable="combobox.clearable"
                :chips="combobox.chips"
                :multiple="combobox.multiple"
                :items="combobox.items"
                :value="combobox.value"
                v-model="comboboxValue"
              />
            </v-col>
            <v-col cols="12" class="py-0" v-if="Object.keys(commentary).length">
              <v-textarea
                :variant="commentary.variant || 'outlined'"
                :label="commentary.label || 'Комментарий'"
                :rules="commentary.rules"
                :counter="commentary.counter || false"
                :auto-grow="commentary.autoGrow || false"
                :bg-color="commentary.bgColor"
                :color="commentary.color"
                :clearable="commentary.clearable || true"
                :prepend-icon="commentary.prependIcon"
                :append-icon="commentary.appendIcon"
                :prepend-inner-icon="commentary.prependInnerIcon"
                :append-inner-icon="commentary.appendInnerIcon"
                :no-resize="commentary.noResize || false"
                :rows="commentary.rows || 8"
                v-model="comValue"
              />
            </v-col>
            <v-col cols="12" class="pa-0 px-3 pt-1">
              <v-btn type="submit" block size="x-large" color="primary" class="mb-3">
                {{ textButton }}
              </v-btn>
            </v-col>
            <v-col cols="12" class="pb-5 pa-sm-0 pl-1">
              <v-checkbox :color="checkboxSetting.color" v-model="checked" :rules="checkboxSetting.rules">
                <template v-slot:label>
                  <span class="text-13">{{ checkboxSetting.label }}</span>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" v-if="smallImage.length">
          <v-row>
            <v-col cols="12" v-for="(info, index) in infoCompany" :key="`info-${index}`" class="d-flex align-center pt-0 pb-5" style="column-gap: 12px">
              <v-icon :icon="info.icon" :color="info.colorIcon" :size="info.sizeIcon" />
              <span>{{ info.text }}</span>
            </v-col>
            <v-col cols="12" v-if="socials.length">
              <ul class="d-flex" style="column-gap: 8px; list-style: none">
                <li v-for="(social, index) in socials" :key="`social-${index}`">
                  <a :href="social.link" target="_blank" rel="noopener noreferrer">
                    <v-img :src="social.img" :alt="social.alt" :width="35"/>
                  </a>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" v-if="smallImage.length">
              <v-img :src="smallImage" :alt="altImage" style="width: 100%" cover></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const comboboxValue = ref([])
const comValue = ref("")
const emit = defineEmits(['form-data'])

const props = defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },

  commentary: { type: Object, default: () => ({}) },

  styleForm: { type: String, default: 'standard' },
  bigImage: { type: String, default: "" },
  smallImage: { type: String, default: "" },
  altImage: { type: String, default: "" },
  textButton: { type: String, default: "отправить" },

  checkboxSetting: { type: Object, default: () => ({}) },
  inputs: { type: Array, default: () => [] },
  combobox: { type: Object, default: () => ({}) },
  socials: { type: Array, default: () => [] },
  infoCompany: { type: Array, default: () => [] },
})

const inputValues = ref(props.inputs.map(input => input.value));

const dataForm = (validForm) => {
  if(validForm) {
    if(Object.keys(props.combobox).length) {
      if(comboboxValue.value.length && inputValues.value.every(value => value) && checked.value && comValue.value) {
        emit('form-data', [inputValues._rawValue, comboboxValue._rawValue, comValue._rawValue] )
      }
    } else if(Object.keys(props.commentary).length) {
      if(inputValues.value.every(value => value) && checked.value && comValue.value) {
        emit('form-data', [inputValues._rawValue, comValue._rawValue] )
      }
    } else {
      if(inputValues.value.every(value => value) && checked.value) {
        emit('form-data', [inputValues._rawValue] )
      }
    }
  } else {
    console.log('validate not confirm')
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
