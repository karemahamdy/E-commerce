<template>
  <div>
    <h3 class="text-xl font-semibold mb-4">Discount Codes</h3>
    <Coupon @applyCoupon="$emit('applyCoupon', $event)" />
    <CartTotal :subtotal="subtotal" :discount="discount"/>
  </div>
</template>

<script>
import Coupon from './Coupon.vue'
import CartTotal from './CartTotal.vue'

export default {
  components: { Coupon, CartTotal },
  props: ['subtotal', 'discount']
}
</script>
