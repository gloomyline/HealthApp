import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import order from '@/components/order'
import orderType from '@/components/order/orderType'
import me from '@/components/me'
import ticket from '@/components/ticket'
import service from '@/components/service'
import collect from '@/components/collect'
import teches from '@/components/collect/teches'
import combo from '@/components/collect/combo'
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
      component: order,
      children: [
        {
          path: ':type',
          name: 'orderType',
          component: orderType
        }
      ]
    },
    {
      path: '/me',
      name: 'me',
      component: me,
      children: [
        {
          path: 'ticket',
          name: 'ticket',
          component: ticket
        },
        {
          path: 'collect',
          name: 'collect',
          component: collect,
          children: [
            {
              path: 'teches',
              name: 'teches',
              component: teches
            },
            {
              path: 'combo',
              name: 'combo',
              component: combo
            }
          ]
        }
      ]
    },
    {
      path: '/service',
      name: 'orders',
      component: service
    }
  ],
  linkActiveClass: 'active'
})

