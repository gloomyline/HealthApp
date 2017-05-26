import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home'
import order from 'components/order'
import me from 'components/me'
import service from 'components/service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/service',
      name: 'service',
      component: service
    }
  ],
  linkActiveClass: 'active'
})

