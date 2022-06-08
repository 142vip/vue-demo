import Vue from 'vue'
import VueRouter from 'vue-router'
import core from '@/routers/core'
import common from '@/routers/common'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...core, ...common
  ]
})

export default router
