<template>
  <div class="flex justify-around items-center mb-6">
    <img v-for="(brand, index) in brands" :key="index" :src="brand.logo" :alt="brand.name" class="h-10" />
  </div>
</template>

<script setup>
const brands = [
  { name: 'Brand A', logo: 'https://via.placeholder.com/80x40' },
  { name: 'Brand B', logo: 'https://via.placeholder.com/80x40' },
  { name: 'Brand C', logo: 'https://via.placeholder.com/80x40' },
];
</script>
