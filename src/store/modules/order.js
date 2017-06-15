/**
 * Created by Alan on 2017/6/15.
 */

import * as types from '../mutation-types'

// init state
const state = {
  detailShow: false
}

// getters
const getters = {
  orderDetailShow: state => state.detailShow
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.TOGGLE_ORDER] (state) {
    state.detailShow = !state.detailShow
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
