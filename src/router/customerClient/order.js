/**
 * Created by Alan on 2017/6/26.
 */

'use strict'

import order from '@/views/customer/order'
import orderType from '@/views/customer/order/orderType'

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
