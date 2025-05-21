<!-- CategoryNavbar.vue -->
<template>
  <div class="bg-white border-b border-gray-200 pt-4">
    <div class="container mx-auto px-4 pb-4">
      <div class="flex gap-4 overflow-x-auto hide-scrollbar justify-center">
        <category-button v-for="(category, index) in categories" :key="index" :label="category.label"
          :has-dropdown="category.hasDropdown" :is-active="currentCategory === index"
         @click="navigateToCategory(index)"/>
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
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Contact us', route: '/contact' },
  { label: 'Cart', route: '/cart' },
  { label: 'Products', route: '/Product' },
  { label: 'Summary', route: '/summary' },
  { label: 'Checkout', route: '/checkout' },
  { label: 'Login', route: '/login' },
      ]
  }
},
    methods: {
        navigateToCategory(index) {
    this.currentCategory = index;
    this.$router.push(this.categories[index].route)
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

}
</style>