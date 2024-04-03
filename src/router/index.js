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
      path: '/matriculation',
      name: 'matriculation',
      component: () => import('../views/users/student/MatriculationView.vue')
    },
    {
      path: '/class-schedule',
      name: 'class-schedule',
      component: () => import('../views/users/student/ClassScheduleView.vue')
    },
    {
      path: '/kardex',
      name: 'kardex',
      component: () => import('../views/users/student/KardexView.vue')
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: () => import('../views/users/student/CurriculumView.vue')
    }
  ]
})

export default router
