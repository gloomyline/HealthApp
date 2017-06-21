/**
 * Created by Alan on 2017/6/20.
 */

import * as types from '../mutation-types'

// init state
const state = {
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
