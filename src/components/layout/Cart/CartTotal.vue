<template>
  <div class="bg-gray-50 p-6 rounded-lg shadow">
    <h4 class="text-lg font-semibold mb-4">Cart Total</h4>
    <div class="flex justify-between mb-2">
      <span class="text-gray-600">Subtotal</span>
      <span class="text-red-500 font-medium">${{ subtotal.toFixed(2) }}</span>
    </div>
    <div class="flex justify-between mb-4">
      <span class="text-gray-600 font-medium">Total</span>
      <span class="text-red-600 font-bold text-lg">${{ subtotal.toFixed(2) }}</span>
    </div>
    <Button label="Proceed to Checkout" class="w-full" style="background-color: black !important;" />
  </div>
</template>

<script>
import Button from 'primevue/button'

export default {
  components: { Button },
  props: ['subtotal']
}
</script>
