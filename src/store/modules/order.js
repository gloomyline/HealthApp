/**
 * Created by Alan on 2017/6/15.
 */

import * as types from '../mutation-types'

// init state
const state = {
  detailShow: false,
  isOrderLoading: false,
  orderRes: '',
  alertShow: false
}

// getters
const getters = {
  orderDetailShow: state => state.detailShow,
  isOrderLoading: state => state.isOrderLoading,
  orderRes: state => state.orderRes,
  alertShow: state => state.alertShow
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.TOGGLE_ORDER] (state) {
    state.detailShow = !state.detailShow
  },
  [types.SEND_ORDER_REQ] (state) {
    state.isOrderLoading = true
  },
  [types.ORDER_REQ_SUCCESS] (state) {
    state.isOrderLoading = false
  },
  [types.ORDER_RESPONSE] (state, {orderRes}) {
    state.orderRes = orderRes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
