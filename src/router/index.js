import { createRouter, createWebHistory } from 'vue-router'
import ShoppingList from '../views/ShoppingList.vue'

const routes = [
  {
    path: '/',
    name: 'ShoppingList',
    component: ShoppingList
  },
  {
    path: '/product',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
