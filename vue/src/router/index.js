import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 路由重定向
  {
    path: '',
    redirect: '/main/home',
  },
  // 登录页路由
  {
    hideInMenu: true,
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
  // 注册页路由
  {
    hideInMenu: true,
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register'),
  },
  //系统主界面
  {
    path: '/main',
    name: 'main',
    component: () => import('@/layout'),
    children: [
      // 系统首页
      {
        path: '/main/home',
        name: 'home',
        meta: { icon: 'el-icon-s-home', title: '系统首页' },
        component: () => import('@/views/home'),
      },
      {
        path: '/main/port',
        name: 'port',
        meta: { icon: 'el-icon-s-home', title: '港口服务' },
        component: () => import('@/views/port'),
      },
      {
        path: '/main/logistics',
        name: 'logistics',
        meta: { icon: 'el-icon-s-home', title: '物流服务' },
        component: () => import('@/views/logistics'),
      },
      {
        path: '/main/mall',
        name: 'mall',
        meta: { icon: 'el-icon-s-home', title: '商城平台' },
        component: () => import('@/views/mall'),
      },
    ],
  },
  // 401页面
  {
    hideInMenu: true,
    path: '/401',
    name: '401',
    component: () => import('@/views/error/401'),
  },
  // 404页面
  {
    hideInMenu: true,
    path: '*',
    name: '404',
    component: () => import('@/views/error/404'),
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
