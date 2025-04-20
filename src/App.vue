<template>
  <div class="card flex justify-center">
    <Toast />
    <form @submit.prevent="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
      <div class="flex flex-col gap-1">
        <InputText v-model="username" placeholder="Username" />
        <Message v-if="error" severity="error">{{ error }}</Message>
      </div>
      <Button type="submit" label="Submit" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Button from 'primevue/button'

const toast = useToast()
const username = ref('')
const error = ref('')

const onFormSubmit = () => {
  if (!username.value) {
    error.value = 'Username is required'
    return
  }

  toast.add({
    severity: 'success',
    summary: 'Form Submitted',
    detail: `Username: ${username.value}`,
    life: 3000
  })

  error.value = ''
}
</script>