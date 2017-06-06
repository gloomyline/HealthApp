/**
 * Created by Alan on 2017/6/6.
 */

import * as types from '../mutation-types'

// initial state
const state = {
  isLoading: [false, false, false, false, false]
}

// getters
const getters = {
  isLoading: state => state.isLoading.find((item) => { return item })
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.SEND_REQUEST] ({state}) {
    state.isLoading = true
  },
  [types.REQUEST_SUCCESS] ({state}) {
    state.isLoading = false
  },
  [types.REQUEST_FAILURE] ({state}) {
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
