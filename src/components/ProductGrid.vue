<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Featured Products</h2>
      <router-link to="/products">
        <button class="bg-[#c0a27e] text-white rounded-md px-4 py-2 text-sm hover:bg-[#a98a6b] transition-colors">
          View All
        </button>
      </router-link>
    </div>

    <Carousel :value="products" :numVisible="3" :numScroll="1" circular>
      <template #item="slotProps">
        <ProductCard :product="slotProps.data" />
      </template>
    </Carousel>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import Carousel from 'primevue/carousel'

export default {
  name: 'ProductGrid',
  components: {
    ProductCard,
    Carousel
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Fresh Tomatoes', price: 2.99, image: 'https://via.placeholder.com/200', category: 'Groceries', rating: 4.5 },
        { id: 2, name: 'Wireless Headphones', price: 59.99, image: 'https://via.placeholder.com/200', category: 'Electronics', rating: 4.8 },
        { id: 3, name: 'Cotton T-Shirt', price: 19.99, image: 'https://via.placeholder.com/200', category: 'Fashion', rating: 4.3 },
        { id: 4, name: 'Kitchen Blender', price: 39.99, image: 'https://via.placeholder.com/200', category: 'Home & Kitchen', rating: 4.6 },
        { id: 5, name: 'Organic Apples', price: 4.99, image: 'https://via.placeholder.com/200', category: 'Premium Fruits', rating: 4.7 },
        { id: 6, name: 'Yoga Mat', price: 24.99, image: 'https://via.placeholder.com/200', category: 'Sports', rating: 4.2 }
      ]
    }
  }
}
</script>
