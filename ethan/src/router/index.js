import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Temp from '../views/temp.vue'
import Learn from '../views/Learn.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/learn',
    name: 'Learn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Learn
  },
  {
    path: '/temp',
    name: 'Temp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Temp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
