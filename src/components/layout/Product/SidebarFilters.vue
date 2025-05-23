<template>
  <aside class="w-64 space-y-8">
    <div>
      <InputText v-model="searchTerm" placeholder="Search..." class="w-full mb-4" />
    </div>

    <div>
      <h2 class="font-semibold mb-3">CATEGORIES</h2>
      <ul class="space-y-2">
        <li v-for="cat in categories" :key="cat.name" class="flex justify-between cursor-pointer hover:text-blue-600"
          @click="$emit('update:selectedCategory', cat.name)">
          <span>{{ cat.name }}</span>
          <span class="text-gray-500">({{ cat.count }})</span>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-semibold mb-3">BRANDING</h2>
      <ul class="space-y-2">
        <li v-for="brand in brands" :key="brand" class="cursor-pointer hover:text-blue-600"
          @click="$emit('update:selectedBrand', brand)">
          {{ brand }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-semibold mb-3">FILTER PRICE</h2>
      <ul class="space-y-2">
        <li v-for="range in prices" :key="range.label" class="cursor-pointer hover:text-blue-600"
          @click="$emit('update:selectedPrice', range)">
          {{ range.label }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-semibold mb-3">SIZE</h2>
      <div class="flex flex-wrap gap-2">
        <Button v-for="size in sizes" :key="size" style="background-color: #a98a6b;"
          @click="$emit('update:selectedSize', size)">
          {{ size }}
        </Button>
      </div>
    </div>

    <div>
      <h2 class="font-semibold mb-3">COLORS</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="color in colors" :key="color" :style="{ backgroundColor: color }"
          class="w-6 h-6 rounded-full border cursor-pointer" @click="$emit('update:selectedColor', color)"></span>
      </div>
    </div>

    <div>
      <h2 class="font-semibold mb-3">TAGS</h2>
      <div class="flex flex-wrap gap-2">
        <Button v-for="tag in tags" :key="tag" style="background-color: #a98a6b;"
          @click="$emit('update:selectedTag', tag)">
          {{ tag }}
        </Button>
      </div>
    </div>
  </aside>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  components: { InputText, Button },
  props: {
    categories: Array,
    brands: Array,
    prices: Array,
    sizes: Array,
    colors: Array,
    tags: Array
  },
  emits: [
    'update:searchTerm',
    'update:selectedCategory',
    'update:selectedBrand',
    'update:selectedPrice',
    'update:selectedSize',
    'update:selectedColor',
    'update:selectedTag'
  ],
  computed: {
    searchTerm: {
      get() {
        return this.$attrs['searchTerm'];
      },
      set(value) {
        this.$emit('update:searchTerm', value);
      }
    }
  }
}
</script>

<style scoped>
.p-button {
  color: #ffffff;
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  transition: none;
  outline-color: transparent;
}

.p-button:focus {
  border: 1px solid transparent !important;
  outline-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}
</style>