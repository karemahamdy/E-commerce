<template>
  <div class="max-w-7xl mx-auto p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-2 space-y-6">
      <div class="border-l-4 border-amber-900 bg-gray-100 p-4">
        <p class="text-sm text-gray-700"><i class="pi pi-tag mr-2"></i>donot forget your coupon</p>
      </div>
      <h2 class="text-2xl font-semibold">Billing Details</h2>
      <BillingDetails />
    </div>
    <div class="bg-gray-50 p-6 rounded-lg shadow space-y-4" style="height: fit-content;">
      <OrderSummary :cartItems="cart.items" />
      <PaymentWay />
      <!-- <Button label="Place Order" class="w-full mt-4" style="background-color: black; border-color: black;" /> -->
    </div>
  </div>
</template>

<script setup>
// import Button from 'primevue/button'
import BillingDetails from '../components/layout/Checkout/BillingDetails.vue'
import PaymentWay from '../components/layout/Checkout/PaymentWay.vue'
import OrderSummary from '../components/layout/Checkout/OrderSummary.vue'
import { onMounted } from 'vue'
import { useCartStore } from '../store/cartStore'

    const cart = useCartStore()
    const userId = "test-user-123"   
    onMounted(() => {
      cart.fetchCart(userId)
    })
</script>
