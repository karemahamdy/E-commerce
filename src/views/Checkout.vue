<template>
  <TopHeader />
  <MainNavbar />
  <CategoryNavbar />

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
      <Button label="Place Order" class="w-full mt-4" style="background-color: black; border-color: black;" />
    </div>

  </div>
  <Footer />
</template>

<script>
import Button from 'primevue/button'
import Footer from '../components/Footer.vue'
import TopHeader from '../components/TopHeader.vue'
import MainNavbar from '../components/MainNavbar.vue'
import CategoryNavbar from '../components/layout/Home/CategoryNavbar.vue'
import BillingDetails from '../components/layout/Checkout/BillingDetails.vue'
import PaymentWay from '../components/layout/Checkout/PaymentWay.vue'
import OrderSummary from '../components/layout/Checkout/OrderSummary.vue'
import { onMounted } from 'vue'
import { useCartStore } from '../store/cartStore'

export default {
  components: {
    PaymentWay,
    Button,
    Footer,
    CategoryNavbar,
    MainNavbar,
    BillingDetails,
    TopHeader,
    OrderSummary
  },
  setup() {
    const cart = useCartStore()
    const userId = "test-user-123"   // later → auth user

    onMounted(() => {
      cart.fetchCart(userId)
    })
    return { cart }
  }
}
</script>
