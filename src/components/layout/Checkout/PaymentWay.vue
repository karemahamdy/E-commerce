<template>
  <div class="space-y-2 text-sm text-gray-700">
        <div>
          <Checkbox v-model="form.payment" inputId="check" value="check" />
          <label for="check" class="ml-2">Cah Payment</label>
        </div>
        <div>
          <Checkbox v-model="form.payment" inputId="paypal" value="paypal" />
          <label for="paypal" class="ml-2">Paypal</label>
        </div>
      </div>
</template>

<script setup>
import { reactive } from 'vue'
import Checkbox from 'primevue/checkbox'

const form = reactive({
  createAccount: false,
  payment: null
})
</script>
