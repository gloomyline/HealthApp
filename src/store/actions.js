/**
 * Created by Alan on 2017/6/5.
 */

import * as types from './mutation-types'
import user from '@/api/user'

export const submitOrder = ({commit}, orderInfo) => {
  if (orderInfo) {
    commit(types.SEND_ORDER_REQ)
    user.submitOrder(orderInfo, orderRes => {
      commit(types.ORDER_REQ_SUCCESS)
      commit(types.ORDER_RESPONSE, {orderRes})
    })
  }
}
