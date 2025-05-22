<template>
  <nav class="bg-black py-4 border-b border-gray-200">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <Logo/>
      <SearchBar/>
      <!-- User Controls -->
      <div class="flex items-center">
        <button class="flex items-center text-[#c0a27e] hover:text-[#c0a27e] mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class=" text-gray-200">Sign Up/Sign In</span>
        </button>

        <button class="flex items-center text-[#c0a27e] hover:text-[#c0a27e] relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="ml-1 text-gray-200">Cart</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo.vue';
import SearchBar from './SearchBar.vue';

export default {
  name: 'MainNavbar',
  components : { 
    SearchBar,
    Logo
  }
}
</script>