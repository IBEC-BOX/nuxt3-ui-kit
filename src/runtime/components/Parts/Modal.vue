<template>
  <v-dialog v-model="value">
    <v-card :rounded="rounded">
      <div
        v-if="!imgOnly"
        class="w-100 d-flex"
        :class="{'position-absolute pt-5 px-5': imgFluid}"
        style="z-index: 1000"
      >
        <v-btn
          v-bind="closeButtonAttrs"
          class="ml-auto"
          @click="value = false"
        />
      </div>

      <div
        v-if="img.length"
        class="flex-grow-1 px-0 d-flex"
        :class="[{'px-5': !imgFluid}, {'mb-4': !imgOnly}]"
      >
        <div
          class="overflow-hidden h-100 w-100"
          :class="[`rounded-${imgRounded}`]"
        >
          <v-img
            :src="img"
            v-bind="imageAttrs"
            cover
          />
        </div>
      </div>

      <v-card-text
        v-if="!imgOnly"
        class="pt-0 pb-4 d-flex align-center"
        :class="{'flex-column': iconCenter}"
      >
        <div
          v-if="icon.length"
          :class="[`bg-${iconBg}`]"
          class="icon-container pa-3 rounded-lg d-flex align-center justify-center mr-4"
        >
          <v-icon
            v-bind="iconAttrs"
            :icon="icon"
          />
        </div>

        <div
          class="flex-grow-1"
          :class="{'text-center' : (!icon.length || iconCenter)}"
        >
          <p class="text-h6 text-lg-h5 mb-0">
            {{ heading }}
          </p>

          <p class="mb-0 text-15 text-lg-body-1">
            {{ text }}
          </p>
        </div>
      </v-card-text>

      <v-card-item v-if="$slots.body">
        <slot name="body" />
      </v-card-item>

      <v-card-item
        v-if="buttons.length"
        class="pb-4 pt-5"
      >
        <div
          class="buttons-container d-flex"
          :class="[`flex-${buttonsDirection}`]"
        >
          <v-btn
            v-for="button in buttons"
            v-bind="button.attributes"
            :key="button.id"
            class="flex-grow-1"
          >
            {{ button.text }}
          </v-btn>
        </div>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { defineProps, useAttrs, computed, ref } from 'vue'
  import { useMainStore } from "../../../store/mainStore.js";

  const mainStore  = useMainStore()
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    heading: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    rounded: {
      type: String,
      default: '',
    },
    buttons: {
      type: Array,
      default: () => []
    },
    buttonsDirection: {
      type: String,
      default: 'row'
    },
    iconCenter: {
      type: Boolean,
      default: false
    },
    iconBg: {
      type: String,
      default: 'grey-lighten-2'
    },
    img: {
      type: String,
      default: ''
    },
    imgOnly: {
      type: Boolean,
      default: false,
    },
    imgRounded: {
      type: String,
      default: 'md',
    },
    imgFluid: {
      type: Boolean,
      default: false,
    },
  })
  const attrs = useAttrs()

  const iconAttrs = ref({
    size: 'large',
    color: 'white',
    ...mainStore.getObjectPropertiesWithPrefix(attrs, 'icon')
  })

  const imageAttrs = ref({
    height: 199,
    ...mainStore.getObjectPropertiesWithPrefix(attrs, 'img')
  })

  const closeButtonAttrs = ref({
    elevation: 0,
    size: 'small',
    icon: 'mdi-window-close',
    ...mainStore.getObjectPropertiesWithPrefix(attrs, 'close-button')
  })

  // Init v-model
  const emit = defineEmits(['update:modelValue'])
  const value = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })
</script>

<style scoped>
.buttons-container {
  gap: 16px;
}
</style>
