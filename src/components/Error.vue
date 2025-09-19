<template>
  <div class="text-center p-4 text-red-500">
    {{ message || "Something went wrong" }}
  </div>
</template>

<script setup>
defineProps({ message: String });
</script>