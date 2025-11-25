import { createRouter, createWebHistory } from 'vue-router'
import CallBack from '../views/CallBack.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product', name: 'Products', component: Products },
  { path: '/product/:id', name: 'Product', component: Product, props: true },
  {path: '/about', name: 'About', component: About},
  {path: '/contact', name: 'ContactUs', component: ContactUs},
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
