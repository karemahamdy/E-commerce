<!-- CategoryButton.vue -->
<template>
  <button class="whitespace-nowrap px-4 py-2 text-sm font-medium flex items-center rounded-full transition" :class="isActive
    ? 'bg-[#c0a27e] text-white'
  : 'bg-gray-200 text-gray-600 hover:bg-[#AE9B84] hover:text-white'" @click="$emit('click')">
    {{ label }}
    <svg v-if="hasDropdown" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
      stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  hasDropdown: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false }
})

const emit = defineEmits(['click'])
</script>