import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/index'
import issue from '../components/home/components/issue'
import manage from '../components/home/components/manage'
import setting from '../components/login/components/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/issue',
      name: issue,
      component: issue
    },
    {
      path: '/manage',
      name: manage,
      component: manage
    },
    {
      path: '/setting',
      name: setting,
      component: setting
    }
  ]
})
