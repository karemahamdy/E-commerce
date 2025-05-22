<template>
  <div class="flex mb-6">
    <InputText v-model="coupon" placeholder="Coupon code" class="flex-1 mx-2" />
    <BaseButton label="Apply" bgColor="bg-[sienna]" textColor="text-white" borderColor="border-[sienna]"
      rounded="rounded-lg" padding="" textSize="text-base" @click="$emit('applyCoupon', coupon)" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: { InputText, BaseButton },
  data() {
    return { coupon: '' }
  }
}
</script>
