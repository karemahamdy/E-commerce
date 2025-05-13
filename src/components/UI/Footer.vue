<template>
  <footer class="bg-black text-white py-12 px-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 md:grid-cols-4 gap-8">
        <!-- Brand section -->
        <div class="col-span-1">
          <h2 class="text-xl font-bold mb-4">Mega Mart<span class="text-[#6b4619]">.</span></h2>
          <p class="text-gray-400 text-sm mb-6">
            The customer is at the heart of our unique business model, which includes design.
          </p>
          <div class="flex space-x-2">
            <img src="../../../public/assets/images/payment.png" alt="Visa" class="h-8" /> 
          </div>
        </div>

        <!-- Shopping section 1 -->
        <div class="col-span-1">
          <h3 class="uppercase font-bold mb-4 tracking-wide">Shopping</h3>
          <ul class="space-y-3 text-gray-400">
            <li><a href="#" class="hover:text-white transition">Clothing Store</a></li>
            <li><a href="#" class="hover:text-white transition">Trending Shoes</a></li>
            <li><a href="#" class="hover:text-white transition">Accessories</a></li>
            <li><a href="#" class="hover:text-white transition">Sale</a></li>
          </ul>
        </div>

        <!-- Shopping section 2 -->
        <div class="col-span-1">
          <h3 class="uppercase font-bold mb-4 tracking-wide">Shopping</h3>
          <ul class="space-y-3 text-gray-400">
            <li><a href="#" class="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" class="hover:text-white transition">Payment Methods</a></li>
            <li><a href="#" class="hover:text-white transition">Delivery</a></li>
            <li><a href="#" class="hover:text-white transition">Return & Exchanges</a></li>
          </ul>
        </div>

        <!-- Newsletter section -->
        <div class="col-span-1">
          <h3 class="uppercase font-bold mb-4 tracking-wide">Newsletter</h3>
          <p class="text-gray-400 text-sm mb-4">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <div class="flex mt-2">
            <InputText v-model="email" placeholder="Your email"
              class="p-inputtext-sm w-full bg-black border-b border-gray-700 focus:border-red-500 focus:outline-none text-gray-300" />
            <Button icon="pi pi-envelope" class="p-button-text text-white hover:text-gray-300"
              @click="subscribeNewsletter" />
          </div>
        </div>
      </div>

      <!-- Copyright section -->
      <div class="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        <p>
          Copyright © 2025 All rights reserved | This template is made with
          <i class="pi pi-heart text-[#6b4619]"></i> by
          <a href="#" class="text-[#9c6f37] hover:text-[#ccb395b2] transition">Karema Hamdy</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import  Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const email = ref('');

const subscribeNewsletter = () => {
  if (email.value) {
    // Handle newsletter subscription
    console.log('Subscribing email:', email.value);
    // Here you would typically send this to your API
    email.value = '';
  }
};
</script>