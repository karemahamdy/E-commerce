<template>
  <div class="space-y-5">
    <div>
      <h2 class="text-2xl font-semibold">{{ title }}</h2>
      <div class="flex items-center gap-2 mt-1">
        <span class="text-yellow-500">★ ★ ★ ★ ★</span>
        <span class="text-sm text-gray-500">{{ reviews }} reviews</span>
      </div>
    </div>

    <div class="text-3xl font-bold text-gray-800">
      ${{ price.toFixed(2) }}
    </div>

    <div>
      <h4 class="text-sm font-medium mb-2">Color</h4>
      <div class="flex gap-2">
        <div v-for="(color, index) in colors" :key="index" class="w-10 h-10 rounded-full border cursor-pointer"
          :style="{ backgroundColor: color }" :class="selectedColor === color ? 'ring-2 ring-black' : 'border-gray-300'"
          @click="selectedColor = color"></div>
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium mb-2">Size</h4>
      <div class="grid grid-cols-4 gap-2">
        <button v-for="(size, index) in sizes" :key="index" @click="selectedSize = size"
          class="border text-sm px-4 py-2 rounded-lg cursor-pointer hover:border-black"
          :class="selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300'">
          {{ size }}
        </button>
      </div>
    </div>

    <button @click="handleAddToCart"
      class="w-[50%] bg-black text-white py-2 rounded-xl text-lg font-semibold hover:opacity-90 transition">
      Add to cart
    </button>

    <p class="text-sm text-gray-500 text-left mt-2">
      Free delivery on orders over $30.00
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../../../store/cartStore";

// props
const props = defineProps({
  title: String,
  reviews: Number,
  price: Number,
  colors: Array,
  sizes: Array,
  initialColor: String,
  initialSize: String,
  productId: Number
});

// stores
const cartStore = useCartStore();
const router = useRouter();

// state
const selectedColor = ref(props.initialColor ?? props.colors?.[0] ?? null);
const selectedSize = ref(props.initialSize ?? props.sizes?.[0] ?? null);

function handleAddToCart() {
  cartStore.addItem(props.productId, {
    name: props.title,
    price: props.price,
    color: selectedColor.value,
    size: selectedSize.value,
    quantity: 1
  });
  console.log("Sending to cart:", props.productId);

  // router.push("/cart");
}
</script>
