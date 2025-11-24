<template>
  <div>
    <div class="flex justify-end items-center mb-4">
      <router-link to="/product">
        <button class="text-[#c0a27e] rounded-md px-4 py-2 text-sm transition-colors cursor-pointer items-left ">
          View All
        </button>
      </router-link>
    </div>

    <Carousel :value="products" :numVisible="3" :numScroll="1" circular :showIndicators="false" style="display:flex; gap:20px !important;">
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
        { id: 1, name: 'Fresh', price: 2.99, image: '../../public/assets/images/post-item1.jpg', category: 'Groceries', rating: 4.5 },
        { id: 2, name: 'Headphones', price: 59.99, image: '../../public/assets/images/post-item2.jpg', category: 'Electronics', rating: 4.8 },
        { id: 3, name: 'Cotton T-Shirt', price: 19.99, image: '../../public/assets/images/post-item3.jpg', category: 'Fashion', rating: 4.3 },
        { id: 4, name: 'Kitchen Blender', price: 39.99, image: '../../public/assets/images/post-item1.jpg', category: 'Home & Kitchen', rating: 4.6 },
        { id: 5, name: 'Organic Apples', price: 4.99, image: '../../public/assets/images/post-item2.jpg', category: 'Premium Fruits', rating: 4.7 },
        { id: 7, name: 'Yoga Mat', price: 24.99, image: '../../public/assets/images/post-item3.jpg', category: 'Sports', rating: 4.2 },
        { id: 6, name: 'Yoga Mat', price: 24.99, image: '../../public/assets/images/post-item3.jpg', category: 'Sports', rating: 4.2 }
      ]
    }
  }
}
</script>
<style>
.p-carousel-items-container
{
  gap: 20px !important;
  margin-bottom: 10px;
}
</style>