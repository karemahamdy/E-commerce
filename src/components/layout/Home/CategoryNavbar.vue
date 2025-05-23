<template>
  <div class="bg-white border-b border-gray-200 pt-4">
    <div class="container mx-auto px-4 pb-4">
      <div class="flex gap-4 overflow-x-auto hide-scrollbar justify-center">
        <category-button v-for="(category, index) in navLinks" :key="index" :label="category.label"
          :has-dropdown="category.hasDropdown" :is-active="currentCategory === index"
          @click="navigateToCategory(index)" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryButton from '../../CategoryButton.vue';
import navLinks from '../../../data/links'
export default {

  name: 'CategoryNavbar',
  components: {
    CategoryButton
  },
  data() {
    return {
      currentCategory: 0,
      navLinks
    }
  },
  methods: {
    navigateToCategory(index) {
      this.currentCategory = index;
      this.$router.push(this.navLinks[index].route)
    }
  }
}
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>