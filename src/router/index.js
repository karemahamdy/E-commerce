import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/product', name: 'Product', component: Product },
  { path: '/summary', name: 'Summary', component: Summary },



]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
