import Vue from 'vue'
import Router from 'vue-router'
import phones from '@/components/phones'
import pagenotfound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'phones',
      component: phones
    },
    {
      path: '/404',
      name: '404',
      component: pagenotfound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  mode: 'history'
})
