import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRouter from '@/routers/public-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...publicRouter
  ]
})

export default router
