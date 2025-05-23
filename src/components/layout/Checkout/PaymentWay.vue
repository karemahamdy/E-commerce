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

<script>
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
export default {
  components: {  
    Checkbox,
    Button,
  },
  data() {
    return {
      form: {
        createAccount: false,
        payment: null
      }
    }
  }
}
</script>