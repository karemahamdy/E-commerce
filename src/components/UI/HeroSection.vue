<template>
  <div class="relative overflow-hidden w-full h-[500px]">
    <video class="absolute inset-0 w-full  object-cover" playsinline muted autoplay loop preload="metadata"
      :poster="poster">
      <source :src="src" type="video/mp4" />
    </video>

    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black opacity-50 z-10"></div>

    <!-- Content over video and overlay -->
    <div class="absolute inset-0 flex flex-col justify-center items-center p-4 z-20">
      <div class="text-center">
        <h2 class="text-4xl text-white mb-2">New Collection</h2>
        <p class="text-xl text-white mb-6">Beauties</p>
        <button
          class="bg-black text-[#AE9B84] px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition"
          @click="handleClick">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    src: String,
    poster: String,
    buttonText: {
      type: String,
      default: "Shop Now"
    }
  },
  methods: {
    handleClick() {
      alert("Shop Now clicked!");
    }
  }
};
</script>

<style scoped></style>
