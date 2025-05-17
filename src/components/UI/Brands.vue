<template>
  <div class="overflow-hidden bg-white py-6">
    <div class="flex gap-10 animate-slide whitespace-nowrap">
      <div v-for="(brand, index) in repeatedBrands" :key="index" class="flex flex-col items-center flex-shrink-0">
        <router-link :to="brand.route">
          <div class="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow">
            <img :src="brand.image" :alt="brand.name" class="w-20 h-20 object-contain" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandsSection",
  data() {
    return {
      brands: [
        { name: "Nike", image: "/assets/images/Image (1).svg", route: "/brands/nike" },
        { name: "Adidas", image: "/assets/images/Image-2.svg", route: "/brands/adidas" },
        { name: "Puma", image: "/assets/images/Image-3.svg", route: "/brands/puma" },
        { name: "Gucci", image: "/assets/images/Image-4.svg", route: "/brands/gucci" },
        { name: "Zara", image: "/assets/images/Image-5.svg", route: "/brands/zara" },
        { name: "Chanel", image: "/assets/images/Image-3.svg", route: "/brands/chanel" },
        { name: "Rolex", image: "/assets/images/Image-1.svg", route: "/brands/rolex" },
        { name: "Louis Vuitton", image: "/assets/images/Image-5.svg", route: "/brands/lv" },
      ],
    };
  },
  computed: {
    repeatedBrands() {
      return [...this.brands, ...this.brands]; // نكررهم مرتين
    },
  },
};
</script>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-slide {
  display: flex;
  animation: slide 20s linear infinite;
}
</style>
