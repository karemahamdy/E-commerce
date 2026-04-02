// ...existing code...
<template>
  <div class="bg-gray-50 p-6 rounded-lg shadow">
    <h4 class="text-lg font-semibold mb-4">Cart Total</h4>

    <div class="flex justify-between mb-2">
      <span class="text-gray-600">Subtotal</span>
      <span class="text-red-500 font-medium">${{ formatCurrency(subtotal) }}</span>
    </div>

    <div class="flex justify-between mb-2">
      <span class="text-gray-600">Discount</span>
      <span class="text-green-500 font-medium">-{{ formatCurrency(discount) }}</span>
    </div>

    <div class="flex justify-between mb-4 font-semibold">
      <span class="text-gray-600">Total</span>
      <span class="text-black">${{ formatCurrency(computedTotal) }}</span>
    </div>

    <router-link to="/checkout">
      <Button label="Proceed to Checkout" class="w-full" style="background-color: black !important;" />
    </router-link>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import { computed } from 'vue'

const props = defineProps({ 
  subtotal: { type: Number, default: 0 },
  discount: { type: Number, default: 0 }, 
  total: { type: Number, default: null }
})

const computedTotal = computed(() => {
  if (props.total !== null && !isNaN(props.total)) return Number(props.total);
  const s = Number(props.subtotal || 0);
  const d = Number(props.discount || 0);
  return Math.max(0, s - d);
})

function formatCurrency(value) {
  return Number(value || 0).toFixed(2)
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
