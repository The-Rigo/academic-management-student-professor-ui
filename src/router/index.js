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
      path: '/student',
      name: 'student',
      component: () => import('../views/users/student/StudentHomeView.vue')
    },
    {
      path: '/student/matriculation',
      name: 'matriculation',
      component: () => import('../views/users/student/MatriculationView.vue')
    },
    {
      path: '/student/class-schedule',
      name: 'class-schedule',
      component: () => import('../views/users/student/ClassScheduleView.vue')
    },
    {
      path: '/student/kardex',
      name: 'kardex',
      component: () => import('../views/users/student/KardexView.vue')
    },
    {
      path: '/student/curriculum',
      name: 'curriculum',
      component: () => import('../views/users/student/CurriculumView.vue')
    },
    {
      path: '/professor',
      name: 'professor',
      component: () => import('../views/users/professor/ProfessorHomeView.vue')
    }
  ]
})

export default router
