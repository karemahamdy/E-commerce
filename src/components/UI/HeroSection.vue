<template>
  <div class="relative overflow-hidden" :style="{ '--aspect-ratio': aspectRatio }">
    <video class="absolute inset-0 w-full h-[25%] object-cover" playsinline muted autoplay preload="metadata"
      :poster="poster">
      <source :src="src" type="video/mp4" />
    </video>

    <!-- Black overlay -->
    <div class="absolute inset-0 h-[25%] bg-black opacity-50 z-10"></div>

    <!-- Content over video and overlay -->
    <div class="absolute inset-0 h-[25%] flex flex-col justify-center items-center p-4 z-20">
      <div class="text-center">
        <h2 class="text-3xl text-white">New Collection</h2>
        <p class="text-lg text-white">Beauties</p>
      </div>
      <button
        class="mt-4 bg-black text-[#AE9B84] px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
        @click="handleClick">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "HeroSection",
  props: {
    src: String,
    poster: String,
    aspectRatio: {
      type: String,
      default: "0.75"
    },
    buttonText: {
      type: String,
      default: "Shop Now"
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      // يمكنك إضافة أي تعامل هنا عند الضغط على الزر
      alert("Shop Now clicked!");
    }
  }
};
</script>

<style scoped>
.relative::before {
  content: "";
  display: block;
  padding-bottom: calc(100% / var(--aspect-ratio));
}
</style>
