<template>
  <div class="col-span-1 md:col-span-2 lg:col-span-3">
    <h1 class="text-2xl font-bold text-center mb-4">{{ title }}</h1>
    <p class="text-center text-gray-600">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "TextBanner",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
