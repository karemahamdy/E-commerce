<!-- CategoryButton.vue -->
<template>
  <button class="whitespace-nowrap px-4 py-3 text-sm font-medium flex items-center"
    :class="isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'"
    @click="$emit('click')">
    {{ label }}
    <svg v-if="hasDropdown" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
      stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'CategoryButton',
  props: {
    label: {
      type: String,
      required: true
    },
    hasDropdown: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>