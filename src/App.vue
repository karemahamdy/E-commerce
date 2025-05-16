<template>
  <div class="min-h-screen bg-gray-50">
    <TopHeader />
    <MainNavbar />
    <CategoryNavbar />
    <HeroSection src="../public/assets/images/a9ea64c362124ba0b6ffc37ea30bc5c8.HD-1080p-4.8Mbps-13664080 (1).mp4" />
    <FeaturesSection />
    <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-8">
      <TextBanner title="Welcome to Our Store" description="Discover the best products at unbeatable prices!" />
      <ProductGrid class="container mx-auto px-4 py-6" />
    </main>
    <Brands class="py-6 mb-4" />
    <SaleBanner />
    <ShopNow/>
    <Footer />

  </div>
</template>

<script>
import './style.css'
import './tailwind.css'
import TopHeader from './components/TopHeader.vue';
import MainNavbar from './components/MainNavbar.vue';
import CategoryNavbar from './components/CategoryNavbar.vue';
import ProductGrid from './components/ProductGrid.vue';
import HeroSection from './components/UI/HeroSection.vue';
import TextBanner from './components/TextBanner.vue';
import Footer from './components/UI/Footer.vue';
import Category from './components/UI/Category.vue';
import SaleBanner from './components/UI/SaleBanner.vue';
import Brands from './components/UI/Brands.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import ShopNow from './components/ShopNow.vue';

export default {
  name: 'App',
  components: {
    TopHeader,
    MainNavbar,
    CategoryNavbar,
    ProductGrid,
    HeroSection,
    TextBanner,
    Category,
    SaleBanner,
    Brands,
    FeaturesSection,
    ShopNow,
    Footer
  },
  data() {
    return {
      
    }
  }
}
</script>