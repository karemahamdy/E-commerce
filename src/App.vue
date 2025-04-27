<template>
  <div class="min-h-screen bg-gray-50">
    <TopHeader />
    <MainNavbar />
    <CategoryNavbar />
    <main class="container mx-auto px-4 py-6">
      
    </main>
  </div>
</template>

<script>
// Import all components
import TopHeader from './components/TopHeader.vue';
import MainNavbar from './components/MainNavbar.vue';
import CategoryNavbar from './components/CategoryNavbar.vue';
// import ProductGrid from './components/ProductGrid.vue';
import './style.css'
import './tailwind.css'

export default {
  name: 'App',
  components: {
    TopHeader,
    MainNavbar,
    CategoryNavbar,
    // ProductGrid
  },
  data() {
    return {
      
    }
  }
}
</script>