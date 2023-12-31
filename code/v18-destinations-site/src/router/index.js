import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/allDestinations',
      name: 'allDestinations',
      component: () => import('../views/AllDestinationsView.vue')
    },
    {
      path: '/allDestinations/:id',
      name: 'DestinationDetail',
      component: () => import('../views/DestinationDetailView.vue')
    }
  ]
})

export default router
