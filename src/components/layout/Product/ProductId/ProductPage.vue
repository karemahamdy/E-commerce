<template>

  <div class="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-2 gap-10">

    <ProductImages :images="product.images" :initialImage="product.images[0]" />

    <ProductDetails :title="product.title" :reviews="product.reviews" :price="product.price" :colors="product.colors"
      :sizes="product.sizes" :initialColor="product.colors[0]" :initialSize="product.sizes[1]" />

    <ProductDescription />

    <div class=" col-span-2 bg-white  px-8 py-4 rounded-lg shadow">
      <ProductReviews :productReviews="product.reviews" :reviewsCount="product.reviews" :ratingCounts="ratingCounts"
        :ratingPercentages="ratingPercentages" />
      <ProductComments />
    </div>
  </div>

</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import ProductComments from './ProductComments.vue';
import ProductDescription from './ProductDescription.vue';
import ProductDetails from './ProductDetails.vue';
import ProductImages from './ProductImages.vue';
import ProductReviews from './ProductReviews.vue';

const product = reactive({
  title: 'Shoes Reebok Zig Kinetica 3',
  reviews: 42,
  price: 199.0,
  images: [
    '../../public/assets/images/bag1.avif',
    '../../public/assets/images/bag2.avif',
    '../../public/assets/images/bag3.avif',
    '../../public/assets/images/bag4.avif',
    '../../public/assets/images/P00979395_d4.avif'
  ],
  colors: ['#ffffff', '#e5e5e5', '#000000'],
  sizes: ['40.5', '41', '42', '43', '43.5', '44', '44.5', '45', '46']
})

const selectedImage = ref(product.images[0])
const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[1])

const ratingCounts = reactive({
  5: 34,
  4: 6,
  3: 2,
  2: 0,
  1: 0
})

const ratingPercentages = computed(() => {
  const total = Object.values(ratingCounts).reduce((a, b) => a + b, 0)
  const result = {}
  for (let i = 1; i <= 5; i++) {
    result[i] = total ? ((ratingCounts[i] || 0) / total) * 100 : 0
  }
  return result
})
</script>
