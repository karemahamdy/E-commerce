<template>
  <main class="flex-1">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      <div v-for="product in products" :key="product.id"
        class="bg-white p-4 rounded-lg shadow group hover:shadow-lg transition">
        <div class="relative">
          <img :src="product.image" alt="" class="w-full h-52 object-cover mb-3 rounded" />
          <span v-if="product.sale" class="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
        </div>

        <h3 class="font-semibold mb-1">{{ product.name }}</h3>
        <div class="flex items-center text-yellow-400 mb-2">
          <i v-for="n in 5" :key="n" class="pi" :class="product.rating >= n ? 'pi-star-fill' : 'pi-star'"></i>
        </div>
        <p class="text-gray-800 font-bold">${{ product.price }}</p>
      </div>
    </div>

    <!-- Pagination -->
    <Paginator :rows="9" :totalRecords="totalRecords" v-model:first="first" @page="$emit('page', $event)" />
  </main>
</template>

<script>
import Paginator from 'primevue/paginator';

export default {
  components: { Paginator },
  props: {
    products: Array,
    totalRecords: Number
  },
  emits: ['page', 'update:first'],
  computed: {
    first: {
      get() {
        return this.$attrs.first;
      },
      set(value) {
        this.$emit('update:first', value);
      }
    }
  }
}
</script>

<style scoped>
.pi-star,
.pi-star-fill {
  font-size: 1rem;
}
</style>