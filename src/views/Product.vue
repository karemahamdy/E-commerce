<template>
  <div class="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-2 gap-10" v-if="product">
    <ProductImages :images="product.images" :initialImage="selectedImage" />
    <ProductDetails :title="product.name" :reviews="product.reviews_count" :price="product.price"
      :productId="product.id" :colors="product.colors" :sizes="product.sizes" :initialColor="selectedColor"
      :initialSize="selectedSize" />
    <ProductDescription :description="product.description" :details="product.details" :materials="product.materials" />
    <div class="col-span-2 bg-white px-8 py-4 rounded-lg shadow">
      <ProductReviews :reviews_count="product.reviews_count" :reviewsCount="product.reviews_count"
        :ratingCounts="ratingCounts" :ratingPercentages="ratingPercentages" />
      <ProductComments :comments="product.comments" />
    </div>
  </div>
<div v-else class="bg-white/60 flex items-center justify-center mt-50 mb-50">
      <Loading overlay text="Loading product..." />
    </div>
</template>

<script>
import ProductComments from '../components/layout/Product/ProductId/ProductComments.vue';
import ProductDescription from '../components/layout/Product/ProductId/ProductDescription.vue';
import ProductDetails from '../components/layout/Product/ProductId/ProductDetails.vue';
import ProductImages from '../components/layout/Product/ProductId/ProductImages.vue';
import ProductReviews from '../components/layout/Product/ProductId/ProductReviews.vue';
import Loading from '../components/Loading.vue';
import { supabase } from '../lib/supabase.js';

export default {
  name: 'Product',
  props: ['id'],
  data() {
    return {
      product: null,
      selectedImage: null,
      selectedColor: null,
      selectedSize: null,
      loading: false,
      error: null,
      staticColors: ['#ffffff', '#e5e5e5', '#000000'],
        sizes: ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"],
      staticImages: [
        "../../public/assets/images/bag1.avif",
        "../../public/assets/images/bag2.avif",
        "../../public/assets/images/bag3.avif",
        "../../public/assets/images/bag4.avif",
        "../../public/assets/images/P00979395_d4.avif"
      ],
      ratingCounts: {
        5: 34,
        4: 6,
        3: 2,
        2: 0,
        1: 0
      }
    };
  },
  components: {
    ProductComments,
    ProductDescription,
    ProductReviews,
    ProductDetails,
    ProductImages,
    Loading
  },
  computed: {
    ratingPercentages() {
      const total = Object.values(this.ratingCounts).reduce((a, b) => a + b, 0);
      const result = {};
      for (let i = 1; i <= 5; i++) {
        result[i] = total ? ((this.ratingCounts[i] || 0) / total) * 100 : 0;
      }
      return result;
    }
  },
  methods: {
    async fetchProduct() {
      this.loading = true;
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', this.id)
          .single();

        if (error) throw error;

        this.product = {
          id: data.id,
          name: data.name,
          price: data.price || 0,
          reviews_count: data.reviews_count || 0,
          sizes: data.sizes,
          details: data.details || '',
          comments: data.comments,
          colors: this.staticColors,
          images: data.image_urls || this.staticImages,
          materials: data.materials,
          description: data.description || '',
          
        };

        this.selectedImage = this.product.images[0];
        this.selectedColor = this.product.colors[0];
        this.selectedSize = this.product.sizes[0];

      } catch (err) {
        this.error = err.message || 'Failed to load product';
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchProduct();
  }
};
</script>
