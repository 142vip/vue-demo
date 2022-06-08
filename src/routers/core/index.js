// 引入其他页面路由，一般需要授权

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/HomeView')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../views/AboutView')
  }
]
