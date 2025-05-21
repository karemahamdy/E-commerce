<template>
  <div class="flex justify-between items-center mb-6">
    <div v-for="(cat, index) in categories" :key="index" class="text-center">
      <img :src="cat.image" :alt="cat.name" class="mb-2 w-24 h-24 rounded-full object-cover" />
      <h4 class="font-semibold">{{ cat.name }}</h4>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: 'Electronics', image: 'https://via.placeholder.com/100' },
  { name: 'Fashion', image: 'https://via.placeholder.com/100' },
  { name: 'Fashion', image: 'https://via.placeholder.com/100' },
  { name: 'Beauty', image: 'https://via.placeholder.com/100' },
];
</script>

