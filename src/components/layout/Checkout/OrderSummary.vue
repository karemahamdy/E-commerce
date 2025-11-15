<template>
  <h3 class="text-xl font-semibold border-b pb-2">Your Order</h3>

  <div class="space-y-2 text-sm text-gray-700">
    <div v-for="(item, index) in cartItems" :key="index" class="flex justify-between border-b pb-1">
      <span>{{ item.name }}</span>
      <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
    </div>

    <div class="flex justify-between font-semibold text-red-600 pt-2">
      <span>Subtotal</span>
      <span>${{ cart.total.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../../../store/cartStore'
const cart = useCartStore()
const props = defineProps({
  cartItems: Array
})
</script>