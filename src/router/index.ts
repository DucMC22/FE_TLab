import { createRouter, createWebHistory, NavigationGuardWithThis, RouteRecordRaw } from 'vue-router'
import { PageName, Role } from '../common/contant/contants';
import authMiddleware from './authMiddleware';
import VueRouteMiddleware, { GLOBAL_MIDDLEWARE_NAME } from './middleware';
import HomeView from '../views/Admin/HomeView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/IndexView.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Admin/SanPham.vue'),
        props: true
      },
      {
        path: 'users',
        component: () => import('../views/Admin/UserView.vue'),
        props: true
      },
    ]
  },
  {
    path: '/dangnhap',
    name: 'DangNhap',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/DangNhap.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(
//   VueRouteMiddleware({
//     [GLOBAL_MIDDLEWARE_NAME]: authMiddleware,
//   }) as NavigationGuardWithThis<unknown>,
// );

export default router
