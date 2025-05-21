import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Summary from '../views/Summary.vue'
import Products from '../views/Products.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/home', name: 'Home', component: Home },
  { path: '/product', name: 'Product', component: Products },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/summary', name: 'Summary', component: Summary },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
