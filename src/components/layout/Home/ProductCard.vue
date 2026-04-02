<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer gap-2.5">
    <!-- Product Image -->
    <div class="h-48 bg-gray-200 relative">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover">
      <div class="absolute top-2 right-2">
        <button class="bg-white rounded-full p-1.5 shadow hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Product Info -->
    <div class="p-4 sm:pb-6 flex flex-col justify-between h-full">
      <div class="text-sm text-gray-500 mb-1">{{ product.category }}</div>
      <h3 class="font-medium text-gray-800 mb-2">{{ product.name }}</h3>

      <!-- Rating -->
      <div class="flex items-center mb-2">
        <div class="flex text-yellow-400">
          <svg v-for="i in Math.floor(product.rating)" :key="'star-' + i" xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg v-if="product.rating % 1 >= 0.5" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span class="text-xs text-gray-500 ml-1">{{ product.rating }} ({{ Math.floor(Math.random() * 100) + 10
          }})</span>
      </div>

      <!-- Price and View All -->
      <div class="flex lg:flex-row justify-between  sm:flex-col sm:items-start lg:items-center h-full">
        <div class="font-bold text-lg">${{ product.price.toFixed(2) }}</div>
        <div>

          <button class="bg-[#c0a27e] text-white rounded-md px-3 py-1 text-sm hover:bg-[#a98a6b] transition-colors outline-">
            show more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
 const props = defineProps({     
    product: {
      type: Object,
      required: true
    }
  })
</script>
