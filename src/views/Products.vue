<template>
  <div class="flex gap-8 p-6 bg-gray-50 min-h-screen">

    <!-- Sidebar -->
    <aside class="w-64 space-y-8">
      <!-- Search -->
      <div>
        <InputText v-model="searchTerm" placeholder="Search..." class="w-full mb-4" />
      </div>

      <!-- Categories -->
      <div>
        <h2 class="font-semibold mb-3">CATEGORIES</h2>
        <ul class="space-y-2">
          <li v-for="cat in categories" :key="cat.name" class="flex justify-between cursor-pointer hover:text-blue-600"
            @click="selectedCategory = cat.name">
            <span>{{ cat.name }}</span>
            <span class="text-gray-500">({{ cat.count }})</span>
          </li>
        </ul>
      </div>

      <!-- Branding -->
      <div>
        <h2 class="font-semibold mb-3">BRANDING</h2>
        <ul class="space-y-2">
          <li v-for="brand in brands" :key="brand" class="cursor-pointer hover:text-blue-600"
            @click="selectedBrand = brand">
            {{ brand }}
          </li>
        </ul>
      </div>

      <!-- Filter Price -->
      <div>
        <h2 class="font-semibold mb-3">FILTER PRICE</h2>
        <ul class="space-y-2">
          <li v-for="range in prices" :key="range.label" class="cursor-pointer hover:text-blue-600"
            @click="selectedPrice = range">
            {{ range.label }}
          </li>
        </ul>
      </div>

      <!-- Sizes -->
      <div>
        <h2 class="font-semibold mb-3">SIZE</h2>
        <div class="flex flex-wrap gap-2">
          <Button v-for="size in sizes" :key="size" class="p-2 border border-gray-300 rounded hover:bg-gray-200"
            @click="selectedSize = size">
            {{ size }}
          </Button>
        </div>
      </div>

      <!-- Colors -->
      <div>
        <h2 class="font-semibold mb-3">COLORS</h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="color in colors" :key="color" :style="{ backgroundColor: color }"
            class="w-6 h-6 rounded-full border cursor-pointer" @click="selectedColor = color">
          </span>
        </div>
      </div>

      <!-- Tags -->
      <div>
        <h2 class="font-semibold mb-3">TAGS</h2>
        <div class="flex flex-wrap gap-2">
          <Button v-for="tag in tags" :key="tag" class="p-2 text-xs bg-gray-100 border hover:bg-gray-200"
            @click="selectedTag = tag">
            {{ tag }}
          </Button>
        </div>
      </div>

    </aside>

    <!-- Products -->
    <main class="flex-1">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div v-for="product in paginatedProducts" :key="product.id"
          class="bg-white p-4 rounded-lg shadow group hover:shadow-lg transition">

          <div class="relative">
            <img :src="product.image" alt="" class="w-full h-52 object-cover mb-3 rounded" />
            <span v-if="product.sale"
              class="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">SALE</span>
          </div>

          <h3 class="font-semibold mb-1">{{ product.name }}</h3>
          <div class="flex items-center text-yellow-400 mb-2">
            <i v-for="n in 5" :key="n" class="pi" :class="product.rating >= n ? 'pi-star-fill' : 'pi-star'">
            </i>
          </div>
          <p class="text-gray-800 font-bold">${{ product.price }}</p>
        </div>
      </div>

      <!-- Pagination -->
      <Paginator :rows="9" :totalRecords="filteredProducts.length" v-model:first="first" @page="onPageChange" />
    </main>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';

export default {
  components: { InputText, Button, Paginator },
  data() {
    return {
      searchTerm: '',
      first: 0,
      selectedCategory: null,
      selectedBrand: null,
      selectedPrice: null,
      selectedSize: null,
      selectedColor: null,
      selectedTag: null,

      categories: [
        { name: 'Men', count: 20 },
        { name: 'Women', count: 20 },
        { name: 'Bags', count: 20 },
      ],
      brands: ['Louis Vuitton', 'Chanel', 'Hermes', 'Gucci'],
      prices: [
        { label: '$0 - $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['#000000', '#F4D03F', '#E74C3C', '#8E44AD'],
      tags: ['Product', 'Bags', 'Fashion', 'Clothing'],

      products: Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        name: `Product ${i + 1}`,
        sale: i % 3 === 0,
        rating: Math.floor(Math.random() * 5) + 1,
        price: Math.floor(Math.random() * 200),
        image: 'https://via.placeholder.com/400x300'
      }))
    }
  },
  computed: {
    filteredProducts() {
      let result = this.products;

      if (this.searchTerm) {
        result = result.filter(p => p.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
      if (this.selectedCategory) {
        result = result.filter(p => p.category === this.selectedCategory);
      }
      if (this.selectedPrice) {
        result = result.filter(p =>
          p.price >= this.selectedPrice.min && p.price <= this.selectedPrice.max
        );
      }

      return result;
    },
    paginatedProducts() {
      const start = this.first;
      const end = this.first + 9;
      return this.filteredProducts.slice(start, end);
    }
  },
  methods: {
    onPageChange(e) {
      this.first = e.first;
    }
  }
}
</script>

<style>
.pi-star,
.pi-star-fill {
  font-size: 1rem;
}
</style>
