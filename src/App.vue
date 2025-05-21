<template>
  <div class="min-h-screen bg-gray-50">
    <!-- <Home/> -->
    <!-- <Product/> -->
    <!-- <Summary/> -->
    <!-- <Cart/> -->
    <!-- <Login/> -->
     <Products/>
     </div>
</template>

<script>
import './style.css'
import './tailwind.css'
import Cart from './views/Cart.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Product from './views/Product.vue';
import Products from './views/Products.vue';
import Summary from './views/Summary.vue';


export default {
  name: 'App',
  components: {
    Home, 
    Product,
    Summary,
    Cart,
    Login, 
    Products
  },
  data() {
    return {
      
    }
  }
}
</script>