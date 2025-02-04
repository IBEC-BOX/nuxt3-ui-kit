<template>
  <v-main>
    <v-container class="h-100">
      <h1>
        Modals
      </h1>
      <div
        class="w-100 d-flex flex-wrap align-start"
        style="gap: 16px"
      >
        <v-btn @click="modal1 = true">
          Modal 1
        </v-btn>

        <v-btn @click="modal2 = true">
          Modal 2
        </v-btn>

        <v-btn @click="modal3 = true">
          Modal 3
        </v-btn>

        <v-btn @click="modal4 = true">
          Modal 4
        </v-btn>

        <v-btn @click="modal5 = true">
          Modal 5
        </v-btn>
      </div>
    </v-container>

    <!-- Standart -->
    <parts-modal-default
      v-model="modal1"
      width="580"
      heading="Sure you want to accept?"
      text="A sure you want to accept this?"
      rounded="lg"
      :buttons="modal_buttons"
      icon="mdi-check-circle-outline"
      icon-size="34"
    >
      <template #body>
        <v-text-field
          variant="solo-filled"
          flat
          hide-details
          placeholder="Text"
        />
      </template>
    </parts-modal-default>
    <!-- Standart END -->

    <!-- No icon -->
    <parts-modal-default
      v-model="modal2"
      width="580"
      heading="Sure you want to accept?"
      text="A sure you want to accept this?"
      rounded="lg"
      :buttons="modal_buttons"
      buttons-direction="column-reverse"
    />
    <!-- No icon END -->

    <!-- Icon center -->
    <parts-modal-default
      v-model="modal3"
      width="580"
      heading="Successfully accepted !"
      text="You have successfully completed the survey. We can download the application to our device. If you have any questions, you can contact us."
      rounded="lg"
      :buttons="modal_buttons"
      buttons-direction="column-reverse"
      icon-center
      icon="mdi-check-circle-outline"
      icon-color="dark"
      icon-bg="transparent"
      icon-size="52"
    />
    <!-- Icon center -->

    <!-- Image -->
    <parts-modal-default
      v-model="modal4"
      width="580"
      heading="Subscribe to our newsletter"
      text="A sure you want to accept this?"
      rounded="lg"
      :buttons="modal_buttons"
      img-rounded="lg"
      img="https://images.unsplash.com/photo-1684252408280-737200626f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80"
    >
      <template #body>
        <v-text-field
          variant="solo-filled"
          flat
          hide-details
          placeholder="Email"
        />
        <v-checkbox
          label="Don't show this again"
          hide-details
        />
      </template>
    </parts-modal-default>
    <!-- Image END -->

    <!-- Image fluid -->
    <parts-modal-default
      v-model="modal5"
      width="580"
      heading="Subscribe to our newsletter"
      text="A sure you want to accept this?"
      rounded="lg"
      close-button-variant="tonal"
      close-button-color="grey-lighten-3"
      :buttons="modal_buttons"
      img-height="300"
      img-fluid
      img="https://images.unsplash.com/photo-1684252408280-737200626f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80"
    />
    <!-- Image fluid END -->
  </v-main>
</template>

<script setup>
  import { ref } from 'vue'

  const modal1 = ref(false)

  const modal2 = ref(false)

  const modal3 = ref(false)

  const modal4 = ref(false)

  const modal5 = ref(false)

  const modal_buttons = [
    {
      id: 0,
      text: 'No, cancel',
      attributes: {
        size: 'x-large',
        variant: 'outlined',
        color: 'primary',
        class: 'text-body-1',
        rounded: 'lg',
      }
    },

    {
      id: 1,
      text: 'Yes, confirm ',
      attributes: {
        size: 'x-large',
        variant: 'flat',
        color: 'primary',
        class: 'text-body-1',
        rounded: 'lg',
      }
    },
  ]
</script>

<style scoped>

</style>
