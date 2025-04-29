<template>
  <div class="min-h-screen bg-gray-50">
    <TopHeader />
    <MainNavbar />
    <CategoryNavbar />
    <HeroSection src="../public/assets/images/a9ea64c362124ba0b6ffc37ea30bc5c8.HD-1080p-4.8Mbps-13664080 (1).mp4"
      />
    <main class="container mx-auto px-4 py-6">

    </main>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue';
import MainNavbar from './components/MainNavbar.vue';
import CategoryNavbar from './components/CategoryNavbar.vue';
// import ProductGrid from './components/ProductGrid.vue';
import './style.css'
import './tailwind.css'
import HeroSection from './components/UI/HeroSection.vue';

export default {
  name: 'App',
  components: {
    TopHeader,
    MainNavbar,
    CategoryNavbar,
    // ProductGrid,
    HeroSection
  },
  data() {
    return {
      
    }
  }
}
</script>