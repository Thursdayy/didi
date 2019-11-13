import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
// import Personal from '../views/personal/personal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/personal/personal.vue')
  },
  {
    path: '/personal/editData',
    name: 'editData',
    component: () => import('../views/personal/editData.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/order.vue')
  },
  {
    path: '/order/detail',
    name: 'detail',
    component: () => import('../views/order/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
