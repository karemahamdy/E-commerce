<template>
  <HeroSection src="../public/assets/images/a9ea64c362124ba0b6ffc37ea30bc5c8.HD-1080p-4.8Mbps-13664080 (1).mp4" />
  <FeaturesSection />
  <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-8">
    <TextBanner title="Welcome to Our Store" description="Discover the best products at unbeatable prices!" />
    <ProductGrid class="container mx-auto px-4 py-6" />
  </main>
  <Brands class="py-6 mb-4" />
  <SaleBanner />
  <OurBlog />
</template>

<script setup>
import HeroSection from '../components/layout/Home/HeroSection.vue';
import FeaturesSection from '../components/layout/Home/FeaturesSection.vue';
import TextBanner from '../components/TextBanner.vue';
import ProductGrid from '../components/layout/Home/ProductGrid.vue';
import Brands from '../components/layout/Home/Brands.vue';
import SaleBanner from '../components/layout/Home/SaleBanner.vue';
import OurBlog from '../components/layout/Home/OurBlog.vue'

</script>
