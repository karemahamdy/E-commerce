<template>
  <Button @click="redirectToSalla">Connect with Salla</Button>
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
  <OurBlog />
  <Footer />
</template>

<script>

import TopHeader from '../components/TopHeader.vue';
import MainNavbar from '../components/MainNavbar.vue';
import CategoryNavbar from '../components/layout/Home/CategoryNavbar.vue';
import HeroSection from '../components/layout/Home/HeroSection.vue';
import FeaturesSection from '../components/layout/Home/FeaturesSection.vue';
import TextBanner from '../components/TextBanner.vue';
import ProductGrid from '../components/layout/Home/ProductGrid.vue';
import Brands from '../components/layout/Home/Brands.vue';
import SaleBanner from '../components/layout/Home/SaleBanner.vue';
import OurBlog from '../components/layout/Home/OurBlog.vue'
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    TopHeader,
    MainNavbar,
    CategoryNavbar,
    ProductGrid,
    HeroSection,
    TextBanner,
    SaleBanner,
    Brands,
    FeaturesSection,
    OurBlog,
    Footer
  },
  methods: {
    redirectToSalla() {
      const clientId = 'a7288bfe-f1f5-4ed0-a839-9903ec9b2699';
      const redirectUri = encodeURIComponent('http://localhost:5173/callback');
      const scope = encodeURIComponent('');
      // const responseType = 'code';
      const state = 'fixedState123'
      localStorage.setItem('oauth_state', state);
      // https://accounts.salla.sa/oauth2/auth?client_id=your_client_id&response_type=code&redirect_uri=https://client-app.com/callback&scope=read write&state=random_value
      const url = `https://accounts.salla.sa/oauth2/auth?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
      console.log(url);

      
        console.log('Redirecting to Salla...');

        window.location.href = url;
       // Optional delay for better UX
      console.log(url);

    }
  }
}

</script>
