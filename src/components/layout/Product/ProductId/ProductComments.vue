<template>
  <div class="space-y-6">
    <div v-for="comment in comments" :key="comment.name" class="pb-4">
      <div class="flex justify-between mb-2">
        <div class="flex items-center space-x-2">
          <img :src="comment.image" class="w-8 h-8 rounded-full" />
          <span class="font-medium">{{ comment.name }}</span>
        </div>
        <span class="text-sm text-gray-500">{{ comment.date }}</span>
      </div>
      <div class="flex text-yellow-400 mb-2">
        <i class="pi pi-star-fill" v-for="n in comment.stars" :key="n"></i>
        <i class="pi pi-star" v-for="n in 5 - comment.stars" :key="'empty-' + n"></i>
      </div>
      <p class="text-gray-700">{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComments",
  data() {
    return {
      comments: [
        {
          name: "Layla Hassan",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          stars: 5,
          date: "May 20, 2025",
          text: "Amazing product, exceeded my expectations. The quality is excellent and the customer service was very helpful."
        },
        {
          name: "Omar Khaled",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          stars: 4,
          date: "May 18, 2025",
          text: "The product is really good but delivery was a bit late. Overall, satisfied."
        },
        {
          name: "Nour Adel",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          stars: 3,
          date: "May 16, 2025",
          text: "Good quality, but not exactly as shown in pictures. Colors were slightly different."
        }
      ],
      sizes: ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"]
    }
  },
};
</script>
