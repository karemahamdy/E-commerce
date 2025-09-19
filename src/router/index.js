import { createRouter, createWebHistory } from 'vue-router'
import CallBack from '../views/CallBack.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product', name: 'Products', component: Products },
  { path: '/product/:id', name: 'Product', component: Product, props: true },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/login', name: 'login', component: Login },
  { path: '/callback', name: 'CallBack', component: CallBack },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
