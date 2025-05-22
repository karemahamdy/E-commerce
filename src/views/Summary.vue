<template>
    <TopHeader />
  <MainNavbar />
  <CategoryNavbar />
  <div class="max-w-7xl mx-auto p-6 grid grid-cols-3 lg:grid-cols-3 gap-8">
    <!-- Billing Form -->
    <div class="lg:col-span-2 space-y-6">
      <div class="border-l-4 border-amber-900 bg-gray-100 p-4">
        <p class="text-sm text-gray-700"><i class="pi pi-tag mr-2"></i>Have a coupon? Click here to enter your code</p>
      </div>

      <h2 class="text-2xl font-semibold">Billing Details</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText v-model="form.firstName" placeholder="First Name*" />
        <InputText v-model="form.lastName" placeholder="Last Name*" />
        <InputText v-model="form.country" placeholder="Country*" />
        <InputText v-model="form.address1" placeholder="Street Address*" />
        <InputText v-model="form.address2" placeholder="Apartment, suite, unit etc (optional)" />
        <InputText v-model="form.city" placeholder="Town/City*" />
        <InputText v-model="form.state" placeholder="Country/State*" />
        <InputText v-model="form.zip" placeholder="Postcode / ZIP*" />
        <InputText v-model="form.phone" placeholder="Phone*" />
        <InputText v-model="form.email" placeholder="Email*" />
      </div>
    </div>

    <!-- Order Summary -->
    <div class="bg-gray-50 p-6 rounded-lg shadow space-y-4">
      <h3 class="text-xl font-semibold border-b pb-2">Your Order</h3>
      <div class="space-y-2 text-sm text-gray-700">
        <div class="flex justify-between border-b pb-1">
          <span>01. Vanilla salted caramel</span><span>$300.00</span>
        </div>
        <div class="flex justify-between border-b pb-1">
          <span>02. German chocolate</span><span>$170.00</span>
        </div>
        <div class="flex justify-between border-b pb-1">
          <span>03. Sweet autumn</span><span>$170.00</span>
        </div>
        <div class="flex justify-between border-b pb-1">
          <span>04. Gluten free mini dozen</span><span>$110.00</span>
        </div>
        <div class="flex justify-between font-semibold text-amber-900 pt-2">
          <span>Subtotal</span><span>$750.99</span>
        </div>
        <div class="flex justify-between font-bold text-lg text-amber-900">
          <span>Total</span><span>$750.99</span>
        </div>
      </div>

      <div class="space-y-2 text-sm text-gray-700">
        <div>
          <Checkbox v-model="form.createAccount" inputId="account" />
          <label for="account" class="ml-2">Create an account?</label>
        </div>
        <p class="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>
        <div>
          <Checkbox v-model="form.payment" inputId="check" value="check" />
          <label for="check" class="ml-2">Check Payment</label>
        </div>
        <div>
          <Checkbox v-model="form.payment" inputId="paypal" value="paypal" />
          <label for="paypal" class="ml-2">Paypal</label>
        </div>
      </div>

      <Button label="Place Order" class="w-full mt-4 bg-amber-900" style="background-color: brown;" />
    </div>
  </div>
    <Footer />
</template>

<script>
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Footer from '../components/Footer.vue'
import TopHeader from '../components/TopHeader.vue'
import MainNavbar from '../components/MainNavbar.vue'
import CategoryNavbar from '../components/layout/Home/CategoryNavbar.vue'

export default {
  components: {
    InputText,
    Checkbox,
    Button,
    Footer,
    CategoryNavbar,
    MainNavbar,
    TopHeader
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        country: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        createAccount: false,
        payment: null
      }
    }
  }
}
</script>
