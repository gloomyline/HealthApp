/**
 * Created by Alan on 2017/6/26.
 */

'use strict'

import me from '@/components/me'
import ticket from '@/components/ticket'
import collect from '@/components/collect'
import myOrders from '@/components/myOrders'
import aboutUS from '@/components/aboutUS'
import integral from '@/components/integral'

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
