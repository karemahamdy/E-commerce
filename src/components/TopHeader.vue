<!-- TopHeader.vue -->
<template>
  <header class="bg-[#1E1F29] py-2 border-b border-[#1E1F29] text-sm">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div>
        <span class="text-white">Welcome to worldwide Megamart!</span>
      </div>
      <div class="flex items-center space-x-6">
        <span class="flex items-center text-[#c0a27e] hover:text-[#AE9B84]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="text-white">Deliver to <span class="text-[#c0a27e] font-bold">423651</span></span>
        </span>
        <span class="flex items-center text-[#c0a27e] hover:text-[#AE9B84]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span class="text-white">Track your order</span>
        </span>
        <span class="flex items-center text-[#c0a27e] hover:text-[#AE9B84]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span class="text-white">All Offers</span>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>