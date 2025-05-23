<template>
  <div class="mb-6">
    <div class="flex items-center mb-2">
      <div class="flex text-yellow-400 mr-2">
        <i class="pi pi-star-fill" v-for="n in 5" :key="n"></i>
      </div>
      <span class="font-medium">4.8 out of 5</span>
    </div>

    <div class="space-y-2">
      <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center text-sm text-gray-600">
        <span class="w-20">{{ star }} star{{ star > 1 ? 's' : '' }}</span>
        <div class="flex-1 bg-gray-200 rounded-full h-2 mx-2">
          <div class="bg-yellow-400 h-full rounded-full" :style="{ width: ratingPercentages[star] + '%' }"></div>
        </div>
        <span class="w-10 text-right">{{ ratingCounts[star] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductReviews",
  props: {
    ratingCounts: Object,
    ratingPercentages: Object
  }
};
</script>
