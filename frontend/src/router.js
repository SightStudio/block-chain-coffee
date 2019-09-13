import Vue from 'vue'
import Router from 'vue-router'

import Login      from '@/views/user/login'
import Signup     from '@/views/user/signup'
import Main       from '@/views/main/main'

Vue.use(Router)

export default new Router({
  mode  : 'history',
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: Login
    },
    {
      path: '/user/signup',
      name: 'SignupView',
      component: Signup
    },
    {
      path: '/main',
      name: 'MainView',
      component: Main
    },
    {
      // 이렇게도 됨 ㄷㄷㄷ
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})