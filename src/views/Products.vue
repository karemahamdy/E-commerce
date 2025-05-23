<template>
  <div class="flex gap-8 p-6 bg-gray-50 min-h-screen">
    <SidebarFilters v-model:searchTerm="searchTerm" v-model:selectedCategory="selectedCategory"
      v-model:selectedBrand="selectedBrand" v-model:selectedPrice="selectedPrice" v-model:selectedSize="selectedSize"
      v-model:selectedColor="selectedColor" v-model:selectedTag="selectedTag" :categories="categories" :brands="brands"
      :prices="prices" :sizes="sizes" :colors="colors" :tags="tags" />

    <ProductGrid :products="paginatedProducts" :totalRecords="filteredProducts.length" v-model:first="first"
      @page="onPageChange" />
  </div>
</template>

<script>
import ProductGrid from '../components/layout/Product/ProductGrid.vue';
import SidebarFilters from '../components/layout/Product/SidebarFilters.vue';
export default {
  components: { SidebarFilters, ProductGrid },
  data() {
    return {
      searchTerm: '',
      first: 0,
      selectedCategory: null,
      selectedBrand: null,
      selectedPrice: null,
      selectedSize: null,
      selectedColor: null,
      selectedTag: null,

      categories: [
        { name: 'Men', count: 20 },
        { name: 'Women', count: 20 },
        { name: 'Bags', count: 20 },
      ],
      brands: ['Louis Vuitton', 'Chanel', 'Hermes', 'Gucci'],
      prices: [
        { label: '$0 - $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['#000000', '#F4D03F', '#E74C3C', '#8E44AD', '#3498DB', '#2ECC71' , '#E67E22', '#F39C12'],
      tags: ['Product', 'Bags', 'Fashion', 'Clothing'],

      products: Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        name: `Product ${i + 1}`,
        sale: i % 3 === 0,
        rating: Math.floor(Math.random() * 5) + 1,
        price: Math.floor(Math.random() * 200),
        image: 'https://via.placeholder.com/400x300'
      }))
    };
  },
  computed: {
    filteredProducts() {
      let result = this.products;

      if (this.searchTerm) {
        result = result.filter(p => p.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
      if (this.selectedCategory) {
        result = result.filter(p => p.category === this.selectedCategory);
      }
      if (this.selectedPrice) {
        result = result.filter(p =>
          p.price >= this.selectedPrice.min && p.price <= this.selectedPrice.max
        );
      }

      return result;
    },
    paginatedProducts() {
      const start = this.first;
      const end = this.first + 9;
      return this.filteredProducts.slice(start, end);
    }
  },
  methods: {
    onPageChange(e) {
      this.first = e.first;
    }
  }
}
</script>