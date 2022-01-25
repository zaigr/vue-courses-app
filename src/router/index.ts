import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import CoursesHome from '@/views/CoursesHome.vue'
import CoursesList from '@/views/CoursesList.vue'
import CreateCourse from '@/views/CreateCourse.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/courses'
  },
  {
    path: '/courses',
    component: CoursesHome,
    children: [
      {
        path: '',
        component: CoursesList
      },
      {
        path: 'add',
        component: CreateCourse
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
