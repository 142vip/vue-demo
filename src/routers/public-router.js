/**
 * 公开路由，不需要鉴权
 */
import homeView from '@/views/HomeView'
import aboutView from '@/views/AboutView'
import indexHome from '@/views/IndexHome'

export default [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  },
  {
    path: '/admin',
    name: 'admin',
    component: indexHome
  }
]
