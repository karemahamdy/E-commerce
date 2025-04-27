<!-- MainNavbar.vue -->
<template>
  <nav class="bg-white py-4">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Mobile menu button -->
      <button class="md:hidden text-gray-600 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Logo -->
      <div class="text-2xl font-bold text-blue-500">
        MegaMart
      </div>

      <!-- Search Bar -->
      <div class="hidden md:flex flex-1 mx-12 relative">
        <input type="text" placeholder="Search essentials, groceries and more..."
          class="w-full py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50">
        <button class="absolute right-0 top-0 h-full px-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <!-- User Controls -->
      <div class="flex items-center">
        <button class="flex items-center text-gray-700 hover:text-blue-500 mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Sign Up/Sign In</span>
        </button>

        <button class="flex items-center text-gray-700 hover:text-blue-500 relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="ml-1">Cart</span>
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