<template>
  <TopHeader />
  <MainNavbar />
  <CategoryNavbar />
  <div class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-2">
      <ShoppingCart :cartItems="cartItems" @increaseQty="increaseQty" @decreaseQty="decreaseQty"
        @removeItem="removeItem" />
    </div>
    <CartSummary :subtotal="subtotal" @applyCoupon="applyCoupon" />
  </div>
  <Footer />
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import TopHeader from '../components/TopHeader.vue'
import MainNavbar from '../components/MainNavbar.vue'
import CategoryNavbar from '../components/layout/Home/CategoryNavbar.vue'
import CartSummary from '../components/layout/Cart/CartSummary.vue';
import ShoppingCart from '../components/layout/Cart/ShoppingCart.vue';
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