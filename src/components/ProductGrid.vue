<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Featured Products</h2>
      <div class="flex items-center">
        <label for="sort" class="mr-2 text-gray-600">Sort by:</label>
        <select id="sort" class="border rounded-md px-2 py-1 text-sm">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductGrid',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Fresh Tomatoes',
          price: 2.99,
          image: '/api/placeholder/200/200',
          category: 'Groceries',
          rating: 4.5
        },
        {
          id: 2,
          name: 'Wireless Headphones',
          price: 59.99,
          image: '/api/placeholder/200/200',
          category: 'Electronics',
          rating: 4.8
        },
        {
          id: 3,
          name: 'Cotton T-Shirt',
          price: 19.99,
          image: '/api/placeholder/200/200',
          category: 'Fashion',
          rating: 4.3
        },
        {
          id: 4,
          name: 'Kitchen Blender',
          price: 39.99,
          image: '/api/placeholder/200/200',
          category: 'Home & Kitchen',
          rating: 4.6
        },
        {
          id: 5,
          name: 'Organic Apples',
          price: 4.99,
          image: '/api/placeholder/200/200',
          category: 'Premium Fruits',
          rating: 4.7
        },
        {
          id: 6,
          name: 'Yoga Mat',
          price: 24.99,
          image: '/api/placeholder/200/200',
          category: 'Sports',
          rating: 4.2
        }
      ]
    }
  }
}
</script>