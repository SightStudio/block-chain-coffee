import Vue     from 'vue'
import Router  from 'vue-router'

import Login   from '@/views/user/login'
import Signup  from '@/views/user/signup'

import Menu    from '@/views/main/main'
import MenuInternalRouter from './menu-internal-router'

Vue.use(Router)

// [ 최종 라우트 ]
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
      name: 'MenuView',
      component: Menu,
      children : MenuInternalRouter
    },
  ]
})