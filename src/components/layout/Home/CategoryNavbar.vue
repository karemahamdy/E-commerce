<template>
  <div class="">
    <div class="container mx-auto px-4 ">
      <div class="flex gap-4 overflow-x-auto hide-scrollbar justify-center">
        <category-button v-for="(category, index) in navLinks" :key="index" :label="category.label"
          :has-dropdown="category.hasDropdown" :is-active="currentCategory === index"
          @click="navigateToCategory(index)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CategoryButton from '../../CategoryButton.vue'
import navLinks from '../../../data/links'

const currentCategory = ref(0)
const router = useRouter()

function navigateToCategory(index) {
  currentCategory.value = index
  router.push(navLinks[index].route)
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