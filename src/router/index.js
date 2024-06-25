import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendsView from '@/views/FriendsView.vue'
import CarsView from '@/views/CarsView.vue'
import ConsolesView from '../views/ConsolesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsView
  
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  },
  {
    path: '/consoles',
    name: 'consoles',
    component: ConsolesView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
