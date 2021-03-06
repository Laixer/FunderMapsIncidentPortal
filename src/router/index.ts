import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/vragen',
    name: 'Questions',
    component: () => import('../views/Questions.vue')
  },
  {
    path: '/klaar',
    name: 'Finish',
    component: () => import('../views/Finish.vue')
  },
]

const router = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes
})

export default router
