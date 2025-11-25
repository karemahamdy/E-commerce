<template>
  <div class="flex items-center gap-3">
    <svg class="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
    <span class="text-gray-700" v-if="!overlay">{{ text }}</span>
    <span class="text-white" v-else>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    text: { type: String, default: 'Loading...' },
    overlay: { type: Boolean, default: false }
  }
}
</script>