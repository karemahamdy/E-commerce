import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/product', name: 'Product', component: Product },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/summary', name: 'Summary', component: Summary },
  { path: '/login', name: 'Login', component: Login },
  { path: '/allProducts', name: 'Products', component: Products },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
