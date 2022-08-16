/**
 * 公开路由，不需要鉴权
 */

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Index')
  }
]
