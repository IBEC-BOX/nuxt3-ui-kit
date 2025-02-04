<template>
  <v-sheet
    v-if="styleForm === 'standard' && (bigImage === '' && smallImage === '')"
    :max-width="Object.keys(commentary).length ? 825 : 1100"
    class="mx-auto custom-ui-form"
    v-bind="sheetAttrs"
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
    v-bind="sheetAttrs"
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
    v-bind="sheetAttrs"
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
    v-if="styleForm === 'contacts' && (bigImage === '' && smallImage === '')"
    class="custom-ui-form w-100 bg-none"
    v-bind="sheetAttrs"
  >
    <v-row>
      <v-col
        cols="12"
        :lg="contacts.length ? 6 : 12"
      >
        <h2
          class="mb-10"
          v-bind="titleAttrs"
        >
          {{ title }}
        </h2>
        <transition
          name="fade-switch"
          mode="out-in"
        >
          <div
            v-if="switchContentOnValid ? !confirmForm : true"
            key="form"
          >
            <v-form
              ref="form"
              @submit.prevent="dataForm($refs.form.isValid)"
            >
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
                  <div v-html="checkboxSetting.label" />
                </template>
              </v-checkbox>
            </v-form>
            <slot name="form-content" />
          </div>
          <div
            v-else
            key="confirmation"
            v-bind="confirmAttrs"
            class="d-flex flex-column align-sm-start"
          >
            <slot name="confirm-form" />
            <v-btn
              v-bind="switchContentButton.attrs"
              @click="confirmForm = !confirmForm"
            >
              <v-img
                v-if="switchContentButton.image"
                :src="switchContentButton.image"
                width="16"
                height="16"
                v-bind="switchContentButton.imageAttrs"
              />
              {{ switchContentButton.text || 'Вернуться обратно' }}
            </v-btn>
          </div>
        </transition>
      </v-col>
      <v-col
        v-if="contacts.length"
        cols="12"
        lg="6"
      >
        <v-row>
          <v-col
            v-for="(contact, index) in contacts"
            :key="contact.title"
            cols="12"
            :sm="contacts.length % 2 === 0 ? 6 : 12"
            lg="12"
            class="d-flex justify-lg-end"
          >
            <v-sheet
              color="none"
              class="mt-3 form__list-wrapper"
              :max-width="590"
              :class="index === contacts.length - 1 ? '' : 'mb-6 mb-sm-7'"
            >
              <h2 class="text-dark-1 text-h6 text-sm-h5 font-weight-medium mb-4">
                {{ contact?.title }}
              </h2>
              <ul class="form__list">
                <li
                  v-if="contact.phone"
                  class="d-flex align-start form__list-item"
                >
                  <div class="bg-img mr-4">
                    <v-img
                      :src="contact.imagePhone ? contact.imagePhone : '/phone.svg'"
                      width="20"
                    />
                  </div>
                  <div class="d-flex flex-column text-body-1 text-dark-1 font-weight-regular text-sm-h6">
                    <p v-html="contact?.phone" />
                  </div>
                </li>
                <li
                  v-if="contact.mail"
                  class="d-flex align-start form__list-item"
                >
                  <div class="bg-img mr-4">
                    <v-img
                      :src="contact.imageMail ? contact.imageMail : '/mail.svg'"
                      width="20"
                    />
                  </div>
                  <div class="d-flex flex-column text-body-1 text-dark-1 font-weight-regular text-sm-h6">
                    <p v-html="contact?.mail" />
                  </div>
                </li>
                <li
                  v-if="contact.location"
                  class="d-flex align-start form__list-item"
                >
                  <div class="bg-img mr-4">
                    <v-img
                      :src="contact.imageLocation ? contact.imageLocation : '/location.png'"
                      width="20"
                    />
                  </div>
                  <div class="d-flex flex-column text-body-1 text-dark-1 font-weight-regular text-sm-h6">
                    <p v-html="contact?.location" />
                  </div>
                </li>
              </ul>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
  <v-sheet
    v-if="styleForm === 'onlyForm' && (bigImage === '' && smallImage === '')"
    class="custom-ui-form w-100 bg-none"
    v-bind="sheetAttrs"
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
          <div v-html="checkboxSetting.label" />
        </template>
      </v-checkbox>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { useAttrs, ref } from "vue";
import { getObjectPropertiesWithPrefix } from "../../../utils/attrs.ts";

const attrs = useAttrs();
const sheetAttrs = {
  ...getObjectPropertiesWithPrefix(attrs, "sheet"),
};
const titleAttrs = {
  ...getObjectPropertiesWithPrefix(attrs, "title")
}
const confirmAttrs = {
  ...getObjectPropertiesWithPrefix(attrs, "confirm")
}

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

  buttonSetting: { type: Object, default: () => ({ attrs: {color: 'primary-gray', size: 'x-large', text: 'Отправить'}}) },
  checkboxSetting: { type: Object, default: () => ({}) },
  inputs: { type: Array, default: () => [] },
  combobox: { type: Object, default: () => ({}) },
  socials: { type: Array, default: () => [] },
  infoCompany: { type: Array, default: () => [] },
  contacts: { type: Array, default: () => [] },

  switchContentOnValid: { type: Boolean, default: () => false},
  switchContentButton: { type: Object, default: () => ({}) },
})

const inputValues = ref(props.inputs.map(input => input.value));
const confirmForm = ref(false)
const dataForm = (validForm) => {
  if(validForm) {
    if(Object.keys(props.combobox).length) {
      if(comboboxValue.value.length && inputValues.value.every(value => value) && checked.value && comValue.value) {
        confirmForm.value = true
        emit('form-data', [inputValues.value, comboboxValue.value, comValue.value] )
      }
    } else if(Object.keys(props.commentary).length) {
      if(inputValues.value.every(value => value) && checked.value && comValue.value) {
        confirmForm.value = true
        emit('form-data', [inputValues.value, comValue.value] )
      }
    } else if(!Object.keys(props.checkboxSetting).length) {
      if(inputValues.value.every(value => value)) {
        confirmForm.value = true
        emit('form-data', [inputValues.value] )
      }
    } else {
      if(inputValues.value.every(value => value) && checked.value) {
        confirmForm.value = true
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
  .fade-switch-enter-active, .fade-switch-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-switch-enter, .fade-switch-leave-to {
    position: absolute;
    width: 100%;
    opacity: 0;
  }

  .fade-switch-enter-to, .fade-switch-leave-from {
    opacity: 1;
  }
  .form__list {
    &-item {
      margin-bottom: 14px;
      .bg-img {
        background: #fff;
        padding: 10px;
        border-radius: 11px;
      }
    }
  }
  .v-checkbox {
    .v-selection-control {
      align-items: start;
      --v-selection-control-size: 26px;
      .v-selection-control__wrapper {
        margin-right: 12px;
      }
      .v-input--density-default {
        --v-input-control-height: 26px;
        --v-input-padding-top: 15px;
      }
    }
    &-btn {
      width: 100%;
    }
    .v-messages__message {
      padding-left: 30px;
    }
  }
}
</style>
