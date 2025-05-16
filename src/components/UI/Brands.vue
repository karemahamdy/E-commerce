<template>
  <div class="flex justify-around items-center mb-6">
    <img v-for="(brand, index) in brands" :key="index" :src="brand.logo" :alt="brand.name" class="h-10" />
  </div>
</template>

<script setup>
const brands = [
  { name: 'Brand A', logo: '../../../public/assets/images/product-sale.png' },
  { name: 'Brand B', logo: '../../../public/assets/images/product-sale.png' },
  { name: 'Brand C', logo: '../../../public/assets/images/product-sale.png' },
];
</script>
