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

<script setup>
import { ref, computed, onMounted } from 'vue';
import ProductComments from '../components/layout/Product/ProductId/ProductComments.vue';
import ProductDescription from '../components/layout/Product/ProductId/ProductDescription.vue';
import ProductDetails from '../components/layout/Product/ProductId/ProductDetails.vue';
import ProductImages from '../components/layout/Product/ProductId/ProductImages.vue';
import ProductReviews from '../components/layout/Product/ProductId/ProductReviews.vue';
import Loading from '../components/Loading.vue';
import { supabase } from '../lib/supabase.js';

const props = defineProps({ id: { type: [String, Number], required: true } });

const product = ref(null);
const selectedImage = ref(null);
const selectedColor = ref(null);
const selectedSize = ref(null);
const loading = ref(false);
const error = ref(null);
const staticColors = ['#ffffff', '#e5e5e5', '#000000'];
const sizes = ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"];
const staticImages = [
  "../../public/assets/images/bag1.avif",
  "../../public/assets/images/bag2.avif",
  "../../public/assets/images/bag3.avif",
  "../../public/assets/images/bag4.avif",
  "../../public/assets/images/P00979395_d4.avif"
];
const ratingCounts = ref({
  5: 34,
  4: 6,
  3: 2,
  2: 0,
  1: 0
});

const ratingPercentages = computed(() => {
  const total = Object.values(ratingCounts.value).reduce((a, b) => a + b, 0);
  const result = {};
  for (let i = 1; i <= 5; i++) {
    result[i] = total ? ((ratingCounts.value[i] || 0) / total) * 100 : 0;
  }
  return result;
});

async function fetchProduct() {
  loading.value = true;
  try {
    const { data, error: supaError } = await supabase
      .from('products')
      .select('*')
      .eq('id', props.id)
      .single();

    if (supaError) throw supaError;

    product.value = {
      id: data.id,
      name: data.name,
      price: data.price || 0,
      reviews_count: data.reviews_count || 0,
      sizes: data.sizes,
      details: data.details || '',
      comments: data.comments,
      colors: staticColors,
      images: data.image_urls || staticImages,
      materials: data.materials,
      description: data.description || '',
    };

    selectedImage.value = product.value.images ? product.value.images[0] : null;
    selectedColor.value = product.value.colors ? product.value.colors[0] : null;
    selectedSize.value = product.value.sizes ? product.value.sizes[0] : null;
  } catch (err) {
    error.value = err.message || 'Failed to load product';
    console.error(err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchProduct();
});

</script>
