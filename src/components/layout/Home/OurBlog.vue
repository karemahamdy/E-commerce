<template>
  <section class="py-16 px-4 md:px-16 bg-white">
    <h2 class="text-2xl font-semibold text-center mb-12">Our Blog</h2>

    <div class="grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-10">
      <div v-for="(post, index) in blogPosts" :key="index" class="flex flex-col">
        <img :src="post.image" :alt="post.title" class="mb-4 w-full h-64 object-cover rounded-md" />
        <h3 class="text-lg font-medium mb-1">{{ post.title }}</h3>
        <p class="text-xs text-gray-500 mb-2">By {{ post.author }} on {{ post.date }}</p>
        <p class="text-sm text-gray-600">{{ post.excerpt }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    title: "Black Friday Guide: Best Sales & Discount Codes",
    author: "Nancy Ward",
    date: "July 22, 2017",
    excerpt:
      "Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod.",
    image: "../../public/assets/images/blog-01.jpg.webp",
  },
  {
    title: "The White Sneakers Nearly Every Fashion Girls Own",
    author: "Nancy Ward",
    date: "July 18, 2017",
    excerpt:
      "Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus.",
    image: "../../public/assets/images/blog-02.jpg.webp",

  },
  {
    title: "New York SS 2018 Street Style: Annina Mislin",
    author: "Nancy Ward",
    date: "July 2, 2017",
    excerpt:
      "Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt.",
    image: "../../public/assets/images/blog-03.jpg.webp",

  },
];
</script>
