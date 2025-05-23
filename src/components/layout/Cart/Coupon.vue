<template>
  <div class="flex mb-6">
    <InputText v-model="coupon" placeholder="Coupon code" class="flex-1 mx-2" />
    <BaseButton label="Apply" bgColor="bg-[sienna]" textColor="text-white" borderColor="border-[sienna]"
      rounded="rounded-lg" padding="" textSize="text-base" @click="$emit('applyCoupon', coupon)" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import BaseButton from '../../BaseButton.vue';

export default {
  components: { InputText, BaseButton },
  data() {
    return { coupon: '' }
  }
}
</script>

<style scoped>
.p-button {
  color: #ffffff;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: none;
  outline-color: transparent;
}
.p-button:focus {
  border: 1px solid transparent !important;
  outline-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}
</style>
