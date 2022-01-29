import Vue from 'vue';
import VueRouter from 'vue-router';
import _default from '../layouts/default.vue';
import _auth from '../layouts/account';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "default-layout",
    component: _default,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import('../views/home/index')
      },
      {
        path: "/about",
        name: "about",
        component: () => import('../views/about/index')
      },
      {
        path: "/trading",
        name: "trading",
        component: () => import('../views/trading/index')
      },
      {
        path: "/franchises",
        name: "franchises",
        component: () => import('../views/franchises/index')
      }
    ]
  },
  {
    path: "/account",
    name: "auth-layout",
    component: _auth,
    children: [
      {
        path: "/account/login",
        name: "Account-login",
        component: () => import('../views/account/login')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
