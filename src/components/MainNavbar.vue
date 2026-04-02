<template>
  <nav class="bg-black py-4 border-b border-gray-800">
    <div class="container mx px-4 flex items-center justify-between">
      <Logo />
       <CategoryNavbar/>
      <div class="flex items-center mx-[40px]">
        <button class="flex items-center text-[#c0a27e] hover:text-[#c0a27e] mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <router-link to="/login">
            <span class=" text-gray-200">Sign In</span>
          </router-link>
        </button>

        <button class="flex items-center text-[#c0a27e] hover:text-[#c0a27e] relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <router-link to="/cart">
            <span class="ml-1 text-gray-200">Cart</span>
          </router-link>
        </button>
        <router-link to="/cart" class="relative">
          <i class="fa fa-shopping-cart"></i>
          <span v-if="cartStore.count > 0"
            class="absolute -top-2 -right-8 bg-[#be8b4d] text-white text-xs rounded-full px-2">
            {{ cartStore.count }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCartStore } from '../store/cartStore';
import Logo from './Logo.vue';
import CategoryNavbar from './layout/Home/CategoryNavbar.vue';
const router = useRouter();
const cartStore = useCartStore();
</script>