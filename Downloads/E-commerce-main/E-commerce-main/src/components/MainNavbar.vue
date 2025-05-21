<!-- MainNavbar.vue -->
<template>
  <nav class="bg-black py-4 border-b border-gray-200">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Mobile menu button -->
      <button class="md:hidden text-gray-600 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Logo -->
      <div class="text-2xl font-bold text-[#c0a27e]">
        MegaMart
      </div>

      <!-- Search Bar -->
      <div class="md:flex flex-1 mx-8 justify-center relative">
        <input type="text" placeholder="Tab to Search"
          class="w-[50%] py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c0a27e] focus:border-transparent bg-[#f3e9de]">
        <div class="absolute right-[26%] top-1/2 transform -translate-y-1/2 text-[#c0a27e]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>


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
export default {
  name: 'MainNavbar'
}
</script>