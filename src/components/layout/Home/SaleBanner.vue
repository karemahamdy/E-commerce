<template>
  <div class="bg relative bg-cover bg-center h-[500px] flex items-center justify-start px-8">
    <div class=" bg-opacity-50 p-6 rounded-xl text-black max-w-xl">
      <p class="uppercase tracking-wide text-sm mb-2">Limited time only</p>
      <h1 class="text-4xl font-semibold mb-4">Super Sale Up to 40% Off</h1>
      <p class="text-base mb-6">Shop our selection of exclusive handbags and backpacks at reduced prices during the
        Super Sale. Hurry up!</p>
      <div class="flex gap-4 text-center mb-6">
        <div v-for="(value, label) in countdown" :key="label">
          <div class="text-3xl font-bold">00</div>
          <div class="uppercase text-xs tracking-widest">{{ label }}</div>
        </div>
      </div>
      <route-link to="/products">
        <Button label="Shop Now" class="p-button-white" style="background-color: #c0a27e; border-color: transparent;" />
      </route-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';

const countdown = ref({
  day: 'Day',
  hours: 'Hours',
  min: 'Min',
  sec: 'Sec'
});
</script>

<style>
.bg {
  background-image: url('../../../public/assets/images/bannerSale.webp');
  background-size: cover;
  background-position: center;
}
</style>
