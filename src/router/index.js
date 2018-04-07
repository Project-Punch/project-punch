import Vue from 'vue'
import Router from 'vue-router'
import phones from '@/components/phones'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'phones',
      component: phones
    }
  ],
  mode: 'history'
})
