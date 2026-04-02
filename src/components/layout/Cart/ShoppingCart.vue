<template>
  <div class="flex flex-col justify-between gap-4">
    <h2 class="text-2xl font-semibold mb-6">Shopping Cart</h2>
    <div v-for="(item, index) in cartItems" :key="item.product_id || index" class="flex items-center justify-between py-4 border-b">
      <div class="flex items-center gap-4 w-[40%]">
        <img :src="item.image" alt="Product" class="w-16 h-16 rounded-md object-cover" />
        <div>
          <h4 class="font-medium">{{ item.name }}</h4>
          <div class="flex items-center gap-2 mt-1">
            <button class="px-2 py-1 bg-gray-200 rounded" @click="$emit('decreaseQty', item)" :disabled="item.updating" :class="{'opacity-50': item.updating}" aria-label="Decrease">-</button>
            <span class="px-3 py-1 bg-gray-100 rounded">{{ item.quantity }}</span>
            <button class="px-2 py-1 bg-gray-200 rounded" @click="$emit('increaseQty', item)" :disabled="item.updating" :class="{'opacity-50': item.updating}" aria-label="Increase">+</button>
            <svg v-if="item.updating" class="animate-spin h-4 w-4 ml-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-24 text-right font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</div>
      <Button icon="pi pi-times" text @click="$emit('removeItem', item.product_id)" style="color: black !important;" />
    </div>
    <div class="flex justify-between mt-6">
      <BaseButton label="Continue Shopping" bgColor="" textColor="text-[sienna]" borderColor="border-[sienna]"
        rounded="rounded-lg" padding="px-4 py-4" textSize="text-base" to="/product" />
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import BaseButton from '../../BaseButton.vue'
const props = defineProps({ cartItems: Array })
const emit = defineEmits(['removeItem', 'increaseQty', 'decreaseQty'])
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
