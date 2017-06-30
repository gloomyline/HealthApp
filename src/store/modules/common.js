/**
 * Created by Alan on 2017/6/20.
 */

import * as types from '../mutation-types'

// init state
const state = {
  appStat: 1,
  tabShow: true
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  [types.SHOWTAB] (state) {
    state.tabShow = true
  },
  [types.HIDETAB] (state) {
    state.tabShow = false
  },
  [types.CUSTOMER_APP_STATUS] (state) {
    state.appStat = 0
  },
  [types.TECHNICIAN_APP_STATUS] (state) {
    state.appStat = 1
  },
  [types.CAPTAIN_APP_STATUS] (state) {
    state.appStat = 2
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
