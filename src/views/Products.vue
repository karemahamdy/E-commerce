<template>
  <div v-if="loading" class="bg-white/60 flex items-center justify-center mt-50 mb-50">
      <Loading overlay text="Loading products..." />
    </div>
  <Error v-else-if="error" :message="error" />
  <Empty v-else-if="!products.length" />
  <div v-else class="flex gap-8 p-6 bg-gray-50 min-h-screen">
    <SidebarFilters v-model:searchTerm="searchTerm" v-model:selectedCategory="selectedCategory"
      v-model:selectedBrand="selectedBrand" v-model:selectedPrice="selectedPrice" v-model:selectedSize="selectedSize"
      v-model:selectedColor="selectedColor" v-model:selectedTag="selectedTag" :categories="categories" :brands="brands"
      :prices="prices" :sizes="sizes" :colors="colors" :tags="tags" />
    <ProductGrid :products="products" :totalRecords="totalRecords" v-model:first="first" @page="onPageChange" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ProductGrid from '../components/layout/Product/ProductGrid.vue';
import SidebarFilters from '../components/layout/Product/SidebarFilters.vue';
import { supabase } from '../lib/supabase.js';
import Loading from "../components/Loading.vue";
import Error from "../components/Error.vue";
import Empty from "../components/Empty.vue";

const searchTerm = ref('');
const first = ref(0);
const selectedCategory = ref(null);
const selectedBrand = ref(null);
const selectedPrice = ref(null);
const selectedSize = ref(null);
const selectedColor = ref(null);
const selectedTag = ref(null);
const totalRecords = ref(0);
const rowsPerPage = ref(6);
const loading = ref(false);
const error = ref(null);
const categories = ref([
  { name: 'Men', count: 20 },
  { name: 'Women', count: 20 },
  { name: 'Bags', count: 20 },
]);
const brands = ref(['Louis Vuitton', 'Chanel', 'Hermes', 'Gucci']);
const prices = ref([
  { label: '$0 - $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
]);
const sizes = ref(['XS', 'S', 'M', 'L', 'XL']);
const colors = ref(['#000000', '#F4D03F', '#E74C3C', '#8E44AD', '#3498DB', '#2ECC71', '#E67E22', '#F39C12']);
const tags = ref(['Product', 'Bags', 'Fashion', 'Clothing']);
const products = ref([]);

const filteredProducts = computed(() => {
  let result = products.value;
  if (searchTerm.value) {
    result = result.filter(p => p.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
  }
  if (selectedCategory.value) {
    result = result.filter(p => p.category === selectedCategory.value);
  }
  if (selectedPrice.value) {
    result = result.filter(p => p.price >= selectedPrice.value.min && p.price <= selectedPrice.value.max);
  }
  return result;
});

async function fetchProducts() {
  loading.value = true;
  const { data, error: supaError, count } = await supabase
    .from('products')
    .select('*', { count: 'exact' })
    .range(first.value, first.value + rowsPerPage.value - 1);
  if (supaError) {
    error.value = supaError.message;
  } else {
    products.value = data;
    totalRecords.value = count;
  }
  loading.value = false;
}

function onPageChange(e) {
  first.value = e.first;
  fetchProducts();
}

onMounted(() => {
  fetchProducts();
});
</script>