<template>
  <div class="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8 relative">
    <!-- Loading overlay -->
    <div v-if="cart.loading" class="absolute inset-0 z-50 bg-white/60 flex items-center justify-center">
      <Loading overlay text="Loading cart..." />
    </div>
    <div v-if="!cart.items.length && !cart.loading" class="lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <div class="text-center text-gray-600">
        Your cart is empty. Start adding some products!
      </div>
    </div>  
    <div v-else-if="!cart.loading" class="lg:col-span-2">
      <ShoppingCart :cartItems="cart.items" @increaseQty="increaseQty" @decreaseQty="decreaseQty"
        @removeItem="removeItem" />
    </div>
    <div class="mt-4" v-if="!cart.loading">
      <CartSummary :subtotal="cart.total" :discount="cart.discount_amount" @applyCoupon="applyCoupon" />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cartStore'
import { onMounted } from 'vue'
import CartSummary from '../components/layout/Cart/CartSummary.vue';
import ShoppingCart from '../components/layout/Cart/ShoppingCart.vue';
import Loading from '../components/Loading.vue';
import { useToast } from 'primevue/usetoast';

    const cart = useCartStore()
    const toast = useToast()
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

    async function applyCoupon(code) {
      const ok = await cart.applyCoupon(code)
      if (ok) {
        toast.add({ severity: 'success', summary: 'Success', detail: 'Coupon applied!', life: 2000 })
      } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Coupon not valid or expired', life: 3000 })
      }
    }
    // return { cart, increaseQty, decreaseQty, removeItem, applyCoupon }
  
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
