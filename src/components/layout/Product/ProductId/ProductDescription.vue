<template>
  <div class="mt-12 border-t pt-8 col-span-2">
    <h2 class="text-xl font-semibold mb-4">Product Description</h2>
    <p class="text-gray-700 mb-4">
      {{ description }}
    </p>
    <ul class="list-disc pl-6 text-gray-700 mb-4">
      <li>Breathable mesh upper for increased airflow</li>
      <li>Zig Energy Bands for responsive cushioning</li>
      <li>Durable rubber outsole for traction</li>
      <li>Floatride Fuel midsole for lightweight cushioning</li>
      <li>Seamless construction for reduced irritation</li>
    </ul>
    <p class="text-gray-700">
      <strong>Materials:</strong> Upper: {{ materials }}
    </p>
  </div>

</template>

<script>
export default {
  name: "ProductDescription",
  props: {
    description: String,
    materials: String,
  }
};
</script>