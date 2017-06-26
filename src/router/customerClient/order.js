/**
 * Created by Alan on 2017/6/26.
 */

'use strict'

import order from '@/components/order'
import orderType from '@/components/order/orderType'

export default {
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
}
