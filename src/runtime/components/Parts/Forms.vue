<template>
  <v-sheet
    v-if="styleForm === 'standard' && (bigImage === '' && smallImage === '')"
    :max-width="Object.keys(commentary).length ? 825 : 1100"
    class="mx-auto custom-ui-form"
    :class="bgClass"
  >
    <v-form
      ref="form"
      @submit.prevent="dataForm($refs.form.isValid)"
    >
      <v-row class="px-sm-10 pb-sm-8 pa-6">
        <v-col
          v-if="title.length"
          cols="12"
          :sm="Object.keys(commentary).length ? 12 : 6"
        >
          <h5
            v-if="title.length"
            class="text-sm-32 text-h5"
            :class="subtitle === '' ? 'mb-sm-5' : 'mb-sm-3'"
          >
            {{ title }}
          </h5>
          <p
            v-if="subtitle.length"
            class="text-sm-18 text-15 mb-4"
          >
            {{ subtitle }}
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-row :class="Object.keys(commentary).length ? 'pa-0' : 'pt-4'">
            <v-col
              v-for="(input, index) in inputs"
              :key="`input-${index}`"
              v-bind="input.colsAttrs"
              class="pa-0 px-3 mb-2"
            >
              <v-text-field
                v-model="inputValues[index]"
                v-bind="input.attrs"
                v-maska:[input.maska]
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          v-if="Object.keys(commentary).length"
          cols="12"
          sm="6"
          class="pt-3 pb-0 py-sm-0"
        >
          <v-textarea
            v-model="comValue"
            v-bind="commentary.attrs"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="pl-1 py-0"
        >
          <v-checkbox
            v-if="Object.keys(commentary).length"
            v-model="checked"
            v-bind="checkboxSetting.attrs"
          >
            <template #label>
              <span class="text-13">{{ checkboxSetting.label }}</span>
            </template>
          </v-checkbox>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="d-flex flex-column justify-start"
          :class="!Object.keys(commentary).length ? 'py-0' : ''"
        >
          <v-btn
            type="submit"
            v-bind="buttonSetting.attrs"
            class=""
          >
            {{ buttonSetting.text }}
          </v-btn>
          <v-checkbox
            v-if="!Object.keys(commentary).length"
            v-model="checked"
            v-bind="checkboxSetting.attrs"
          >
            <template #label>
              <span class="text-13">{{ checkboxSetting.label }}</span>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
  <v-sheet
    v-if="styleForm === 'call' && (bigImage === '' && smallImage === '')"
    :max-width="456"
    class="mx-auto pa-4 custom-ui-form"
    :class="bgClass"
  >
    <v-form
      ref="form"
      @submit.prevent="dataForm($refs.form.isValid)"
    >
      <v-row>
        <v-col
          v-if="title.length || subtitle.length"
          cols="12"
          class="text-center mb-3"
        >
          <h5
            v-if="title"
            class="text-h5 text-sm-32 mb-3"
          >
            {{ title }}
          </h5>
          <p
            v-if="subtitle"
            class="text-sm-18 text-15 "
          >
            {{ subtitle }}
          </p>
        </v-col>
        <v-col
          v-for="(input, index) in inputs"
          :key="`input-${index}`"
          v-bind="input.colsAttrs"
          class="pa-0 px-3"
        >
          <v-text-field
            v-model="inputValues[index]"
            v-bind="input.attrs"
            v-maska:[input.maska]
            class="mb-2"
          />
        </v-col>
        <v-col
          cols="12"
          class="py-0 pl-1"
        >
          <v-checkbox
            v-if="Object.keys(commentary).length"
            v-model="checked"
            v-bind="checkboxSetting.attrs"
          >
            <template #label>
              <span class="text-13">{{ checkboxSetting.label }}</span>
            </template>
          </v-checkbox>
        </v-col>
        <v-col
          cols="12"
          class="pt-0 pb-4"
        >
          <v-btn
            type="submit"
            v-bind="buttonSetting.attrs"
            class="mt-6"
          >
            {{ buttonSetting.text }}
          </v-btn>
        </v-col>
        <v-col cols="12">
          <ul
            class="d-flex justify-center align-center"
            style="list-style: none; column-gap: 8px"
          >
            <li
              v-for="(social, index) in socials"
              :key="`social-${index}`"
            >
              <a
                :href="social.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-img
                  :src="social.img"
                  :alt="social.alt"
                  width="32"
                />
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
  <v-sheet
    v-if="bigImage.length || smallImage.length"
    class="mx-auto custom-ui-form"
    :class="bgClass"
  >
    <v-form
      ref="form"
      class="pa-6 px-sm-10 pt-sm-10 pb-sm-5"
      @submit.prevent="dataForm($refs.form.isValid)"
    >
      <v-row>
        <v-col
          v-if="smallImage.length"
          cols="12"
          class="text-center mb-7"
        >
          <h5 class="text-sm-32 text-h5">
            {{ title }}
          </h5>
        </v-col>
        <v-col
          v-if="bigImage.length"
          cols="6"
          class="d-none d-sm-block"
        >
          <v-img
            :src="bigImage"
            :alt="altImage"
            cover
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-row>
            <v-col
              v-if="bigImage.length"
              cols="12"
            >
              <h5 class="text-sm-32 text-h5 mb-5">
                {{ title }}
              </h5>
            </v-col>
            <v-col
              v-for="(input, index) in inputs"
              :key="`input-${index}`"
              v-bind="input.colsAttrs"
              class="pa-0 px-3"
            >
              <v-text-field
                v-model="inputValues[index]"
                v-bind="input.attrs"
                v-maska:[input.maska]
                class="mb-2"
              />
            </v-col>
            <v-col
              v-if="Object.keys(combobox).length"
              cols="12"
              class="pb-2 pt-0"
            >
              <v-combobox
                v-model="comboboxValue"
                v-bind="combobox.attrs"
              />
            </v-col>
            <v-col
              v-if="Object.keys(commentary).length"
              cols="12"
              class="py-0"
            >
              <v-textarea
                v-model="comValue"
                v-bind="commentary.attrs"
              />
            </v-col>
            <v-col
              cols="12"
              class="pa-0 px-3 pt-1"
            >
              <v-btn
                type="submit"
                v-bind="buttonSetting.attrs"
                class="mt-6"
              >
                {{ buttonSetting.text }}
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              class="pb-5 pa-sm-0 pl-1"
            >
              <v-checkbox
                v-model="checked"
                v-bind="checkboxSetting.attrs"
              >
                <template #label>
                  <span class="text-13">{{ checkboxSetting.label }}</span>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          v-if="smallImage.length"
          cols="12"
          sm="6"
        >
          <v-row>
            <v-col
              v-for="(info, index) in infoCompany"
              :key="`info-${index}`"
              cols="12"
              class="d-flex align-center pt-0 pb-5"
              style="column-gap: 12px"
            >
              <v-icon
                :icon="info.icon"
                :color="info.colorIcon"
                :size="info.sizeIcon"
              />
              <span>{{ info.text }}</span>
            </v-col>
            <v-col
              v-if="socials.length"
              cols="12"
            >
              <ul
                class="d-flex"
                style="column-gap: 8px; list-style: none"
              >
                <li
                  v-for="(social, index) in socials"
                  :key="`social-${index}`"
                >
                  <a
                    :href="social.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-img
                      :src="social.img"
                      :alt="social.alt"
                      :width="35"
                    />
                  </a>
                </li>
              </ul>
            </v-col>
            <v-col
              v-if="smallImage.length"
              cols="12"
            >
              <v-img
                :src="smallImage"
                :alt="altImage"
                style="width: 100%"
                cover
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
  <v-sheet
    v-if="styleForm === 'onlyForm' && (bigImage === '' && smallImage === '')"
    class="mx-auto custom-ui-form w-100"
    :class="bgClass"
  >
    <v-form
      ref="form"
      @submit.prevent="dataForm($refs.form.isValid)"
    >
      <h2 class="mb-10 text-36">
        {{ title }}
      </h2>
      <v-row>
        <v-col
          v-for="(input, index) in inputs"
          :key="`input-${index}`"
          v-bind="input.colsAttrs"
          class="mb-1 pa-0 px-3"
        >
          <v-text-field
            v-model="inputValues[index]"
            v-bind="input.attrs"
            v-maska:[input.maska]
            class="mb-2"
          />
        </v-col>
      </v-row>
      <v-btn
        type="submit"
        v-bind="buttonSetting.attrs"
        class="mt-6"
      >
        {{ buttonSetting.text }}
      </v-btn>
      <v-checkbox
        v-if="Object.keys(checkboxSetting).length"
        v-model="checked"
        v-bind="checkboxSetting.attrs"
      >
        <template #label>
          <span class="text-13">{{ checkboxSetting.label }}</span>
        </template>
      </v-checkbox>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref, useAttrs } from 'vue'
import { useMainStore } from "../../store/mainStore.js";
const mainStore = useMainStore()

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
  bgClass: { type: String, default: 'bg-none'},

  buttonSetting: { type: Object, default: () => ({ attrs: {color: 'primary-gray', size: 'x-large', text: 'Отправить'}}) },
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
        emit('form-data', [inputValues.value, comboboxValue.value, comValue.value] )
      }
    } else if(Object.keys(props.commentary).length) {
      if(inputValues.value.every(value => value) && checked.value && comValue.value) {
        emit('form-data', [inputValues.value, comValue.value] )
      }
    } else if(!Object.keys(props.checkboxSetting).length) {
      if(inputValues.value.every(value => value)) {
        console.log(inputValues.value)
        emit('form-data', [inputValues.value] )
      }
    } else {
      if(inputValues.value.every(value => value) && checked.value) {
        emit('form-data', [inputValues.value] )
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
