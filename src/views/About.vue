<template>
    <TopHeader />
  <MainNavbar />
  <CategoryNavbar />
  <div class="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-12">
    <div class="max-w-2xl w-full text-center">
      <h1 class="text-4xl font-bold text-blue-500 mb-4">About Us</h1>
      <p class="text-lg text-gray-700 mb-6">
        Welcome to our E-commerce platform! We are passionate about delivering the best products and customer experience. Our team is dedicated to quality, innovation, and service.
      </p>
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        <div class="bg-blue-50 rounded-lg p-6 shadow w-full md:w-1/2">
          <h2 class="text-xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p class="text-gray-600">To provide high-quality products and exceptional service to our customers worldwide.</p>
        </div>
        <div class="bg-blue-50 rounded-lg p-6 shadow w-full md:w-1/2">
          <h2 class="text-xl font-semibold text-blue-600 mb-2">Our Values</h2>
          <ul class="text-gray-600 list-disc list-inside">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Quality</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';
import CategoryNavbar from '../components/layout/Home/CategoryNavbar.vue';
import MainNavbar from '../components/MainNavbar.vue';
import TopHeader from '../components/TopHeader.vue';
export default {
  name: 'About',
  components: {
    Footer,
    CategoryNavbar,
    MainNavbar,
    TopHeader
  }
};
</script>