<template>
  <TopHeader />
  <MainNavbar />
  <CategoryNavbar />

  <div class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-3 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-2">
      <ShoppingCart :cartItems="cart.items" @increaseQty="increaseQty" @decreaseQty="decreaseQty"
        @removeItem="removeItem" />
    </div>
    <div class="mt-4">
      <CartSummary :subtotal="cart.total" :discount="cart.discount_value" @applyCoupon="applyCoupon" />
    </div>
  </div>

  <Footer />
</template>

<script>
import { useCartStore } from '../store/cartStore'
import { onMounted } from 'vue'
import TopHeader from '../components/TopHeader.vue'
import MainNavbar from '../components/MainNavbar.vue'
import CategoryNavbar from '../components/layout/Home/CategoryNavbar.vue'
import CartSummary from '../components/layout/Cart/CartSummary.vue';
import ShoppingCart from '../components/layout/Cart/ShoppingCart.vue';
import Footer from '../components/Footer.vue'

export default {
  components: {
    TopHeader,
    MainNavbar,
    CategoryNavbar,
    CartSummary,
    ShoppingCart,
    Footer
  },

  setup() {
    const cart = useCartStore()
    const userId = "test-user-123"
    onMounted(() => {
      cart.fetchCart(userId)
    })

    function increaseQty(item) {
      cart.updateQuantity(userId, item.product_id, item.quantity + 1)
    }

    function decreaseQty(item) {
      if (item.quantity > 1) {
        cart.updateQuantity(userId, item.product_id, item.quantity - 1)
      }
    }

    function removeItem(item) {
      cart.removeItem(userId, item.product_id)
    }

    function applyCoupon(code) {
      cart.applyCoupon(code)
    }

    return { cart, increaseQty, decreaseQty, removeItem, applyCoupon }
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
