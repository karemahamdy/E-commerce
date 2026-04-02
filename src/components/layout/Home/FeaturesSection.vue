<template>
  <div class="bg-white py-10 px-6 md:px-20">
    <div class="grid md:grid-cols-3 gap-10">
      <div v-for="(feature, index) in features" :key="index" class="text-center space-y-4">
        <div class="flex justify-center">
          <img :src=feature.icon class="text-[#c0a27e] text-5xl"></img>
        </div>
        <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
        <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
       const features = [
        {
          icon: "../../public/assets/images/Button (1).png",
          title: "Reliable Shipping",
          description:
            "Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!",
        },
        {
          icon: "../../public/assets/images/Button (2).png",
          title: "You’re Safe With Us",
          description:
            "Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.",
        },
        {
          icon: "../../public/assets/images/Button (3).png",
          title: "Best Quality & Pricing",
          description:
            "Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely.",
        },
      ];
</script>
