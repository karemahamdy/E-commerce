<template>
    <div class="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4">
        <InputText v-model="form.firstName" placeholder="First Name*" />
        <InputText v-model="form.lastName" placeholder="Last Name*" />
        <InputText v-model="form.country" placeholder="Country*" />
        <InputText v-model="form.address1" placeholder="Street Address*" />
        <InputText v-model="form.address2" placeholder="Apartment, suite, unit etc (optional)" />
        <InputText v-model="form.city" placeholder="Town/City*" />
        <InputText v-model="form.state" placeholder="Country/State*" />
        <InputText v-model="form.zip" placeholder="Postcode / ZIP*" />
        <InputText v-model="form.phone" placeholder="Phone*" />
        <InputText v-model="form.email" placeholder="Email*" />
      </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'

const form = reactive({
  firstName: '',
  lastName: '',
  country: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  email: '',
  createAccount: false,
  payment: null
})
</script>

