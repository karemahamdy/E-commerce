<template>
    <TopHeader />
  <MainNavbar />
  <CategoryNavbar />
  <div class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-3 lg:grid-cols-3 gap-8">
    <!-- Cart Items -->
    <div class="flex flex-col  justify-between gap-4 lg:col-span-2">
      <h2 class="text-2xl font-semibold mb-6">Shopping Cart</h2>
      <div v-for="(item, index) in cartItems" :key="index" class="flex items-center justify-between py-4 border-b">
        <!-- Product Info -->
        <div class="flex items-center gap-4 w-[40%]">
          <img :src="item.image" alt="Product" class="w-16 h-16 rounded-md object-cover" />
          <div>
            <h4 class="font-medium">{{ item.name }}</h4>
            <p class="text-sm text-gray-500">${{ item.originalPrice.toFixed(2) }}</p>
          </div>
        </div>

        <!-- Quantity Controls -->
        <div class="flex items-center justify-center gap-2 ">
            <BaseButton label="-" bgColor="bg-[sienna]" textColor="text-white" borderColor="border-[sienna]" 
          rounded="rounded-full" padding="" textSize="text-base"  @click="decreaseQty(index)"/>
          <h6>{{ item.quantity }}</h6>
            <BaseButton label="+" bgColor="bg-[sienna]" textColor="text-white" borderColor="border-[sienna]" 
          rounded="rounded-full" padding="" textSize="text-[18px]"  @click="increaseQty(index)"/>
        </div>

        <!-- Total Price -->
        <div class="w-24 text-right font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</div>

        <!-- Remove -->
        <Button icon="pi pi-times" severity="" text @click="removeItem(index)" style="color: black !important;"/>
      </div>

      <div class="flex justify-between mt-6">
        <BaseButton label="Continue Shopping" bgColor="" textColor="text-[sienna]" borderColor="border-[sienna]" 
          rounded="rounded-lg" padding="px-4 py-4" textSize="text-base" to="/product" />
      </div>
    </div>

    <!-- Cart Summary -->
    <div>
      <h3 class="text-xl font-semibold mb-4">Discount Codes</h3>
      <div class="flex mb-6">
        <InputText v-model="coupon" placeholder="Coupon code" class="flex-1 mx-2" />
          <BaseButton label="Apply" bgColor="bg-[sienna]" textColor="text-white" borderColor="border-[sienna]" 
          rounded="rounded-lg" padding="" textSize="text-base" />
      </div>

      <div class="bg-gray-50 p-6 rounded-lg shadow">
        <h4 class="text-lg font-semibold mb-4">Cart Total</h4>
        <div class="flex justify-between mb-2">
          <span class="text-gray-600">Subtotal</span>
          <span class="text-red-500 font-medium">${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-gray-600 font-medium">Total</span>
          <span class="text-red-600 font-bold text-lg">${{ subtotal.toFixed(2) }}</span>
        </div>
    
        <Button label="Proceed to Checkout" class="w-full" style="background-color: black !important;"/>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import TopHeader from '../components/TopHeader.vue'
import MainNavbar from '../components/MainNavbar.vue'
import CategoryNavbar from '../components/layout/Home/CategoryNavbar.vue'
import Footer from '../components/Footer.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  components: {
    Button,
    InputText,
    TopHeader,
    MainNavbar,
    CategoryNavbar,
    BaseButton,
    Footer
  },
  data() {
    return {
      coupon: '',
      cartItems: [
        {
          name: 'T-shirt Contrast Pocket',
          image: '../../public/assets/images/blog-01.jpg.webp',
          originalPrice: 98.49,
          price: 30.0,
          quantity: 1
        },
        {
          name: 'Diagonal Textured Cap',
          image: '../../public/assets/images/blog-01.jpg.webp',
          originalPrice: 98.49,
          price: 32.5,
          quantity: 1
        },
        {
          name: 'Basic Flowing Scarf',
          image: '../../public/assets/images/blog-01.jpg.webp',
          originalPrice: 98.49,
          price: 47.0,
          quantity: 1
        },
        {
          name: 'Basic Flowing Scarf',
          image: '../../public/assets/images/blog-01.jpg.webp',
          originalPrice: 98.49,
          price: 30.0,
          quantity: 1
        }
      ]
    }
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
  },
  methods: {
    increaseQty(index) {
      this.cartItems[index].quantity++
    },
    decreaseQty(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1)
    }
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