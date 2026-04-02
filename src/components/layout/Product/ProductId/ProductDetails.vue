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
    <div class="flex flex- items-start gap-4 mt-4">
      <button @click="handleAddToCart"
        class="w-[50%] bg-black text-white py-2 rounded-xl text-lg font-semibold hover:opacity-90 transition">
        Add to cart
      </button>

      <div class="flex items-center justify-center gap-2">
        <BaseButton label="-" bgColor="bg-[black]" textColor="text-white" borderColor="border-[black]"
          rounded="rounded-full" padding="" textSize="text-base" @click="decreaseQty" />
        <h6>{{ quantity }}</h6>
        <BaseButton label="+" bgColor="bg-[black]" textColor="text-white" borderColor="border-[sienna]"
          rounded="rounded-full" padding="" textSize="text-base" @click="increaseQty" />
      </div>
    </div>
    <p class="text-sm text-gray-500 text-left mt-2">
      Free delivery on orders over $30.00
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../../../store/cartStore";
import BaseButton from "../../../BaseButton.vue";

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
let quantity = ref(1);
// stores
const cartStore = useCartStore();
const router = useRouter();

// state
const selectedColor = ref(props.initialColor ?? props.colors?.[0] ?? null);
const selectedSize = ref(props.initialSize ?? props.sizes?.[0] ?? null);

async function handleAddToCart() {
  await cartStore.addItem(props.productId, {
    name: props.title,
    price: props.price,
    color: selectedColor.value,
    size: selectedSize.value,
    quantity: quantity.value
  }, { suppressLoading: true });
  localStorage.setItem('cartCount', String(cartStore.count || 0));
  router.push('/cart');
}
  function increaseQty() {
    quantity.value++;
  }

function decreaseQty(index) {
  if (  quantity.value > 1) {
      quantity.value--
  }
}
</script>
<style scoped>
.p-button {
  color: #ffffff;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
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