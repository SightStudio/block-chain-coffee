import Vue     from 'vue'
import Router  from 'vue-router'


import introView    from '../views/user/login'
import MenuView     from '../views/main/main-body';
import MenuInternalRouter from './menu-internal-router'

Vue.use(Router)

// [ 최종 라우트 ]
export default new Router({
  mode  : 'history',
  routes: [
    {
      path: '/',
      name: 'introView',
      component: introView
    },
    {
      path: '/main',
      name: 'MenuView',
      component: MenuView,
      children : MenuInternalRouter
    },
  ]
})