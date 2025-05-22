<template>
  <div class="flex flex-col justify-between gap-4">
    <h2 class="text-2xl font-semibold mb-6">Shopping Cart</h2>
    <div v-for="(item, index) in cartItems" :key="index" class="flex items-center justify-between py-4 border-b">
      <div class="flex items-center gap-4 w-[40%]">
        <img :src="item.image" alt="Product" class="w-16 h-16 rounded-md object-cover" />
        <div>
          <h4 class="font-medium">{{ item.name }}</h4>
          <p class="text-sm text-gray-500">${{ item.originalPrice.toFixed(2) }}</p>
        </div>
      </div>

      <div class="flex items-center justify-center gap-2">
        <BaseButton label="-" bgColor="bg-[sienna]" textColor="text-white" borderColor="border-[sienna]"
          rounded="rounded-full" padding="" textSize="text-base" @click="$emit('decreaseQty', index)" />
        <h6>{{ item.quantity }}</h6>
        <BaseButton label="+" bgColor="bg-[sienna]" textColor="text-white" borderColor="border-[sienna]"
          rounded="rounded-full" padding="" textSize="text-[18px]" @click="$emit('increaseQty', index)" />
      </div>

      <div class="w-24 text-right font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</div>

      <Button icon="pi pi-times" text @click="$emit('removeItem', index)" style="color: black !important;" />
    </div>

    <div class="flex justify-between mt-6">
      <BaseButton label="Continue Shopping" bgColor="" textColor="text-[sienna]" borderColor="border-[sienna]"
        rounded="rounded-lg" padding="px-4 py-4" textSize="text-base" to="/product" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import BaseButton from '../../BaseButton.vue';

export default {
  components: { Button, BaseButton },
  props: ['cartItems']
}
</script>
