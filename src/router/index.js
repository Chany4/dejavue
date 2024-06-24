import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendsView from '@/views/FriendsView.vue'
import CarsView from '@/views/CarsView.vue'
import ConsolesView from '@/views/ConsolesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/friends',
    name: 'Friends',
    component: FriendsView
  
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarsView
  },
  {
    path: '/consoles',
    name: 'Consoles',
    component: ConsolesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
