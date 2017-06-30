/**
 * Created by Alan on 2017/6/12.
 */
import * as types from '../mutation-types'

// init state
const state = {
  isSubscribing: false,
  subscribing: {},
  subscribed: {}
}

// getters
const getters = {
  subscribeShow: state => state.isSubscribing,
  subscribingItem: state => state.subscribing,
  subscribedOrder: state => state.subscribed
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.TOGGLE_SUBSCRIBE] (state) {
    state.isSubscribing = !state.isSubscribing
  },
  [types.SELECT_SUBSCRIBE] (state, {subscribingTech}) {
    state.subscribing = subscribingTech
  },
  [types.CONFIRMED_SUBSCRIBE] (state, {confirmedOrderInfo}) {
    state.subscribed = confirmedOrderInfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

