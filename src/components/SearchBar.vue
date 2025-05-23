<template>
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
  </template>

  <script>
export default {
  name: 'SearchBar'
}
</script>