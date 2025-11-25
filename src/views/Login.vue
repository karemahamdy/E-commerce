<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 py-4">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm space-y-5">
      <h2 class="text-center text-xl font-semibold">Welcome back</h2>
      <p class="text-center text-sm text-gray-500">Login with your Apple or Google account</p>

      <!-- Social Buttons -->
      <Button label="Login with Apple" icon="pi pi-apple" class="w-full p-button-outlined"
        style="border-color: black; color: black;" />
      <Button label="Login with Google" icon="pi pi-google" class="w-full p-button-outlined"
        style="border-color: black; color: black;" />

      <div class="flex items-center my-3">
        <div class="flex-grow h-px bg-gray-300"></div>
        <span class="px-3 text-sm text-gray-400">Or continue with</span>
        <div class="flex-grow h-px bg-gray-300"></div>
      </div>

      <!-- Email Input -->
      <div>
        <label for="email" class="text-sm block mb-1">Email</label>
        <InputText v-model="email" id="email" placeholder="m@example.com" class="w-full" />
      </div>

      <!-- Password Input -->
      <div>
        <div class="flex justify-between mb-1">
          <label for="password" class="text-sm">Password</label>
          <a href="#" class="text-xs text-amber-900">Forgot your password?</a>
        </div>
        <Password v-model="password" id="password" :feedback="false" toggleMask class="w-full" />
      </div>

      <!-- Login Button -->
      <Button label="Login" class="w-full bg-black text-white border-none" style="background-color: black; color: white;" />

      <p class="text-center text-sm text-gray-500">Don't have an account?
        <a href="#" class="text-amber-900">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

// export default defineComponent({
  // name: 'Login',
  // components: { Button, InputText, Password },
  // data() {
    // return {
      let email = '';
      let password =  '';
    // };
  // },
// });
</script>
