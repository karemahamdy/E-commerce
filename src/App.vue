<template>
  <div class="min-h-screen bg-gray-50">
    <TopHeader />
    <MainNavbar />
    <CategoryNavbar />
    <main class="container mx-auto px-4 py-6">
      <!-- Main content area -->
      <h1 class="text-2xl font-bold mb-4">Welcome to MegaMart</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Sidebar -->
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="font-bold mb-2">Categories</h2>
          <ul class="space-y-2">
            <li v-for="(category, index) in categories" :key="index"
              class="text-gray-700 hover:text-blue-500 cursor-pointer">
              {{ category.label }}
            </li>
          </ul>
        </div>

        <!-- Main content -->
        <div class="md:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// Import all components
import TopHeader from './components/TopHeader.vue';
import MainNavbar from './components/MainNavbar.vue';
import CategoryNavbar from './components/CategoryNavbar.vue';
import ProductGrid from './components/ProductGrid.vue';
import './style.css'
import './tailwind.css'

export default {
  name: 'App',
  components: {
    TopHeader,
    MainNavbar,
    CategoryNavbar,
    ProductGrid
  },
  data() {
    return {
      categories: [
        { label: 'Groceries', hasDropdown: true },
        { label: 'Premium Fruits', hasDropdown: true },
        { label: 'Home & Kitchen', hasDropdown: true },
        { label: 'Fashion', hasDropdown: true },
        { label: 'Electronics', hasDropdown: true },
        { label: 'Beauty', hasDropdown: true },
        { label: 'Home Improvement', hasDropdown: true },
        { label: 'Sports, Toys & Luggage', hasDropdown: true }
      ]
    }
  }
}
</script>