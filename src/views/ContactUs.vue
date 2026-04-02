<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
    <div class="max-w-2xl w-full bg-white rounded-lg shadow p-8">
      <h1 class="text-3xl font-bold text-[#9e621a] mb-6 text-center">Contact Us</h1>
      <form class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-1" for="name">Name</label>
          <input id="name" type="text" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
        </div>
        <div>
          <label class="block text-gray-700 mb-1" for="email">Email</label>
          <input id="email" type="email" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@example.com" />
        </div>
        <div>
          <label class="block text-gray-700 mb-1" for="message">Message</label>
          <textarea id="message" rows="4" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Type your message..."></textarea>
        </div>
        <button type="submit" class="w-full bg-[#9e621a] text-white py-2 rounded hover:bg-[#9e621a] transition">Send Message</button>
      </form>
      <div class="mt-8 text-center text-gray-600">
        <p><span class="font-semibold">Email:</span> support@ecommerce.com</p>
        <p><span class="font-semibold">Phone:</span> +1 234 567 890</p>
        <p><span class="font-semibold">Address:</span> 123 E-commerce St, City, Country</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
