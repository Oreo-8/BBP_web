import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/page/main/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'bmain',
    component: () => import(/* webpackChunkName: "about" */ '@/page/main/index')
  },
  {
    path: '/bsort',
    name: 'bsort',
    component: () => import(/* webpackChunkName: "about" */ '@/page/sort/index')
  },
  {
    path: '/bsetting',
    name: 'bsetting',
    component: () => import(/* webpackChunkName: "about" */ '@/page/setting/index')
  },
  {
    path: '/bfavorites',
    name: 'bfavorites',
    component: () => import(/* webpackChunkName: "about" */ '@/page/favorites/index')
  },
  {
    path: '/bmanage',
    name: 'bmanage',
    component: () => import(/* webpackChunkName: "about" */ '@/page/manage/index')
  },
  {
    path: '/binternal',
    name: 'binternal',
    component: () => import(/* webpackChunkName: "about" */ '@/page/internal/index')
  },
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
