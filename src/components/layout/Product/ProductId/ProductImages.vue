<template>
  <div>
    <img :src="selectedImage" alt="Main product" class="w-120 h-100 rounded-2xl shadow" />
    <div class="flex gap-3 mt-4 overflow-x-auto">
      <img v-for="(img, index) in images" :key="index" :src="img" alt="Thumbnail" @click="selectImage(img)"
        class="w-20 h-20 object-cover rounded-xl border cursor-pointer hover:border-black transition"
        :class="{ 'border-black': selectedImage === img, 'border-gray-300': selectedImage !== img }" />
      <div v-if="images.length > 4"
        class="w-20 h-20 flex items-center justify-center border rounded-xl text-sm bg-gray-100">
        +{{ images.length - 4 }} more
      </div>
    </div>
  </div>
</template>
 
<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  initialImage: {
    type: String,
    required: true,
  }
})

const selectedImage = ref(props.initialImage)

function selectImage(img) {
  selectedImage.value = img
}
</script>

