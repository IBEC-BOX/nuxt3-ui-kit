<template>
  <v-main>
    <section class="page__error">
      <v-container class="d-flex justify-center flex-column h-100 align-center">
        <span
          class="page__error-background-number"
          v-bind="errorAttrs"
        >
          {{ error?.statusCode }}
        </span>
        <div class="page__error__content text-center">
          <h1
            v-if="error?.statusCode === 404"
            v-bind="titleAttrs"
            class="mb-4 text-36 font-weight-bold"
          >
            {{ title }}
          </h1>
          <h1
            v-else
            class="mb-4"
          >
            {{ otherTitle }}
          </h1>
          <p
            class="mb-8 text-body-1 text-sm-h6 text-md-h5"
            v-bind="subtitleAttrs"
          >
            {{ subtitle }}
          </p>

          <v-btn
            color="primary"
            rounded="xl"
            class="text-body-1 font-weight-regular"
            size="x-large"
            elevation="0"
            v-bind="buttonAttrs"
            @click="handleError"
          >
            {{ textButton }}
          </v-btn>
        </div>
      </v-container>
    </section>
  </v-main>
</template>

<script setup>
import { useAttrs, ref } from "vue";
import { getObjectPropertiesWithPrefix } from "../../../utils/attrs.ts";
import { clearError } from "#app";

const attrs = useAttrs();
const titleAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, "title"),
})
const errorAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, "error")
})
const subtitleAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, "subtitle")
})
const buttonAttrs = ref({
  ...getObjectPropertiesWithPrefix(attrs, "button")
})

const props = defineProps({
  error: { type: Object, default: () => {} },
  title: { type: String, default: () => '' },
  subtitle: { type: String, default: () => '' },
  otherTitle: { type: String, default: () => '' },
  textButton: { type: String, default: () => '' },
})

const handleError = () => clearError({ redirect: '/' })

</script>

<style lang="scss">
.page__error {
  position: relative;
  height: 50vh;
  margin: 64px 0 160px 0;
  &-background-number {
    position: absolute;
    font-size: 500px;
    z-index: 1;
    @media(max-width: 960px) {
      font-size: 332px;
    }
    @media(max-width: 600px) {
      font-size: 168px;
      margin-bottom: 135px;
    }
  }
  &__content {
    position: relative;
    z-index: 2;
    max-width: 573px;
  }

}
</style>
