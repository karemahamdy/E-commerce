<template>
    <div class="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4">
      <form class="space-y-4">
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
      <Button label="Place Order" class="w-full mt-4" style="background-color: black; border-color: black;" @click="handlePlaceOrder" />
</form>
      </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useCartStore } from '../../../store/cartStore' 
const cart = useCartStore()
const userId = "test-user-123"
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
})
const paymentInfo = reactive({
  method: null,
  firstName: form.firstName,
  lastName: form.lastName,
  email: form.email,
  address1: form.address1,
  address2: form.address2,
  city: form.city,
  state: form.state,
  zip: form.zip,
  country: form.country,
  phone: form.phone
})

const handlePlaceOrder = async () => {
  const result = await cart.placeOrder(userId, paymentInfo)
  if (result) {
    alert('Order placed successfully!')
  } else {
    alert(`Error: ${cart.error}`)
  }
}

</script>

