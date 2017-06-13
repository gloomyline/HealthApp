/**
 * Created by Alan on 2017/6/12.
 */
import * as types from '../mutation-types'

// init state
const state = {
  isSubscribing: false,
  subscribing: {}
}

// getters
const getters = {
  subscribeShow: state => state.isSubscribing
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.TOGGLE_SUBSCRIBE] (state) {
    state.isSubscribing = !state.isSubscribing
  },
  [types.SELECT_SUBSCRIBE] (state, {subscribingTech}) {
    state.subscribing = subscribingTech || {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

