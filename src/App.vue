<template>
  <div class="min-h-screen bg-gray-50">
    <Toast />
    <router-view />
  </div>
</template>

<script>
import Toast from 'primevue/toast';
import './style.css'
import './tailwind.css'
export default {
  name: 'App',
  components: { Toast }
}
</script>