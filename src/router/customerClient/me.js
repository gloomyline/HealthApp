/**
 * Created by Alan on 2017/6/26.
 */

'use strict'

import me from '@/views/customer/me'
import ticket from '@/views/customer/ticket'
import collect from '@/views/customer/collect'
import myOrders from '@/views/customer/myOrders'
import aboutUS from '@/views/customer/aboutUS'
import integral from '@/views/customer/integral'

export default {
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
      component: collect
    },
    {
      path: 'myOrders',
      name: 'myOrders',
      component: myOrders
    },
    {
      path: 'integral',
      name: 'integral',
      component: integral
    },
    {
      path: 'aboutUS',
      name: 'aboutUS',
      component: aboutUS
    }
  ]
}
