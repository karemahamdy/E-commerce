<template>
  <div class="min-h-screen">
    <TopHeader />
  <MainNavbar/>
    <Toast />
    <router-view />
      <Footer />
  </div>
</template>

<script setup> 
import Toast from 'primevue/toast';
import './style.css'
import './tailwind.css'
import TopHeader from './components/TopHeader.vue';
import MainNavbar from './components/MainNavbar.vue';
import Footer from './components/Footer.vue';
</script>