<template>
  <nav class="flex items-center justify-between p-4 bg-primary text-secondary">

    <div class="flex items-center gap-2">
      <!-- <img src="./assets/images/logo.svg" alt="Logo" class="w-10 h-10" /> -->
      <span class="text-lg font-bold">ShopName</span>
    </div>

    <div class="hidden md:flex items-center gap-6">
      <router-link v-for="link in navLinks" :key="link.name" :to="link.to" class="hover:text-accent transition">
        {{ link.name }}
      </router-link>
    </div>

    <div class="flex items-center gap-4">
      <i class="pi pi-user text-2xl cursor-pointer hover:text-accent"></i>
      <i class="pi pi-s hopping-cart text-2xl cursor-pointer hover:text-accent"></i>

      <button class="md:hidden" @click="toggleMenu">
        <i class="pi pi-bars text-2xl"></i>
      </button>
    </div>
  </nav>

  <div v-if="isOpen" class="md:hidden bg-primary text-secondary p-4 space-y-3">
    <router-link v-for="link in links" :key="link.name" :to="link.to" class="block hover:text-accent transition"
      @click="toggleMenu">
      {{ link.name }}
    </router-link>
  </div>
</template>

<script>
import '../style.css'
import '../tailwind.css'

export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
      links: [
        { name: 'الرئيسية', to: '/' },
        { name: 'المنتجات', to: '/products' },
        { name: 'عن المتجر', to: '/about' },
        { name: 'اتصل بنا', to: '/contact' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
