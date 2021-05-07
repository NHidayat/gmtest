import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ImageRotate from '../views/ImageRotate.vue'
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image-rotate',
    name: 'ImageRotate',
    component: ImageRotate
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
