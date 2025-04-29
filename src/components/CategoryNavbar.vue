<!-- CategoryNavbar.vue -->
<template>
  <div class="bg-white border-b border-gray-200 pt-4">
    <div class="container mx-auto px-4 pb-4">
      <div class="flex gap-4 overflow-x-auto hide-scrollbar justify-center">
        <category-button v-for="(category, index) in categories" :key="index" :label="category.label"
          :has-dropdown="category.hasDropdown" :is-active="currentCategory === index"
          @click="currentCategory = index" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryButton from './CategoryButton.vue';

export default {
  name: 'CategoryNavbar',
  components: {
    CategoryButton
  },
  data() {
    return {
      currentCategory: 0,
      categories: [
        { label: 'Groceries', hasDropdown: true },
        { label: 'Premium Fruits', hasDropdown: true },
        { label: 'Home & Kitchen', hasDropdown: true },
        { label: 'Fashion', hasDropdown: true },
        { label: 'Electronics', hasDropdown: true },
        { label: 'Beauty', hasDropdown: true },
        { label: 'Home Improvement', hasDropdown: true },
        // { label: 'Sports, Toys & Luggage', hasDropdown: true }
      ]
    }
  }
}
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}
</style>