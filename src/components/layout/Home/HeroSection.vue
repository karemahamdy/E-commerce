<template>
  <div class="relative overflow-hidden w-full h-[500px]">
    <video class="absolute inset-0 w-full  object-cover" playsinline muted autoplay loop preload="metadata"
      :poster="poster">
      <source :src="src" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div class="absolute inset-0 flex flex-col justify-center items-center p-4 z-20">
      <div class="text-center">
        <h2 class="text-4xl text-white mb-2">New Collection</h2>
        <p class="text-xl text-white mb-6">Beauties</p>
        <BaseButton label="Add to Cart" bgColor="bg-black" textColor="text-white" hoverBgColor="hover:bg-[#AE9B84]"
          rounded="rounded-full" padding="px-8 py-[1rem]" textSize="text-base" to="/product" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../BaseButton.vue';

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
  components: { BaseButton },
  methods: {
    handleClick() {
      alert("Shop Now clicked!");
    }
  }
};
</script>

<style scoped></style>
