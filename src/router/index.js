import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Checkout from '../views/Checkout.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product', name: 'Products', component: Products },
    { path: '/product/:id', name: 'Product', component: Product },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/login', name: 'login', component: Login },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
