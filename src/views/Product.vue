<template>
  <div class="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-2 gap-10">
    <!-- Left side: Images -->
    <div>
      <img :src="selectedImage" alt="Main product" class="w-full rounded-2xl shadow" />
      <div class="flex gap-3 mt-4 overflow-x-auto">
        <img v-for="(img, index) in product.images" :key="index" :src="img" alt="Thumbnail" @click="selectedImage = img"
          class="w-20 h-20 object-cover rounded-xl border cursor-pointer hover:border-black transition"
          :class="{ 'border-black': selectedImage === img, 'border-gray-300': selectedImage !== img }" />
        <div v-if="product.images.length > 4"
          class="w-20 h-20 flex items-center justify-center border rounded-xl text-sm bg-gray-100">
          +{{ product.images.length - 4 }} more
        </div>
      </div>
    </div>

    <!-- Right side: Details -->
    <div class="space-y-5">
      <div>
        <h2 class="text-2xl font-semibold">{{ product.title }}</h2>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-yellow-500">★ ★ ★ ★ ★</span>
          <span class="text-sm text-gray-500">{{ product.reviews }} reviews</span>
        </div>
      </div>

      <div class="text-3xl font-bold text-gray-800">
        ${{ product.price.toFixed(2) }}
      </div>

      <div>
        <h4 class="text-sm font-medium mb-2">Color</h4>
        <div class="flex gap-2">
          <div v-for="(color, index) in product.colors" :key="index"
            class="w-10 h-10 rounded-full border cursor-pointer" :style="{ backgroundColor: color }"
            :class="selectedColor === color ? 'ring-2 ring-black' : 'border-gray-300'" @click="selectedColor = color">
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-medium mb-2">Size</h4>
        <div class="grid grid-cols-4 gap-2">
          <button v-for="(size, index) in product.sizes" :key="index" @click="selectedSize = size"
            class="border text-sm px-4 py-2 rounded-lg cursor-pointer hover:border-black"
            :class="selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300'">
            {{ size }}
          </button>
        </div>
      </div>

      <button class="w-[50%] bg-black text-white py-2 rounded-xl text-lg font-semibold hover:opacity-90 transition">
        Add to cart
      </button>

      <p class="text-sm text-gray-500 text-left mt-2">
        Free delivery on orders over $30.00
      </p>
    </div>

    <ProductDescription />
    <!-- Reviews -->
    <div class="mt-12 col-span-2">
      <h2 class="text-xl font-semibold mb-6">Customer Reviews ({{ product.reviews }})</h2>

      <div class="mb-6">
        <div class="flex items-center mb-2">
          <div class="flex text-yellow-400 mr-2">
            <i class="pi pi-star-fill" v-for="n in 5" :key="n"></i>
          </div>
          <span class="font-medium">4.8 out of 5</span>
        </div>

        <div class="space-y-2">
          <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center text-sm text-gray-600">
            <span class="w-20">{{ star }} star{{ star > 1 ? 's' : '' }}</span>
            <div class="flex-1 bg-gray-200 rounded-full h-2 mx-2">
              <div class="bg-yellow-400 h-full rounded-full" :style="{ width: ratingPercentages[star] + '%' }"></div>
            </div>
            <span class="w-10 text-right">{{ ratingCounts[star] }}</span>
          </div>
        </div>
      </div>
      <ProductComments/>
     </div>
    </div>
</template>

<script>
import ProductComments from '../components/layout/Product/ProductId/ProductComments.vue';
import ProductDescription from '../components/layout/Product/ProductId/ProductDescription.vue';

export default {
  name: 'Product',
  data() {
    return {
      product: {
        title: "Shoes Reebok Zig Kinetica 3",
        reviews: 42,
        price: 199.0,
        images: [
          "../../public/assets/images/bag1.avif",
          "../../public/assets/images/bag2.avif",
          "../../public/assets/images/bag3.avif",
          "../../public/assets/images/bag4.avif",
          "../../public/assets/images/P00979395_d4.avif"
        ],
        colors: ['#ffffff', '#e5e5e5', '#000000'],
        sizes: ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"]
      },
      selectedImage: "../../public/assets/images/bag1.avif",
      selectedColor: '#ffffff',
      selectedSize: "41",
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
    ProductDescription
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
  }
};
</script>
