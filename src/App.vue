<template>
  <div class="min-h-screen bg-gray-50">
    <!-- <Home/> -->
    <Product/>
    </div>
</template>

<script>
import './style.css'
import './tailwind.css'
import Home from './views/Home.vue';
import Product from './views/Product.vue';


export default {
  name: 'App',
  components: {
    Home, 
    Product   
  },
  data() {
    return {
      
    }
  }
}
</script>