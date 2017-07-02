/**
 * Created by Alan on 2017/6/13.
 */

import * as types from '../mutation-types'
import user from '@/api/user'

// init state
const state = {
  userInformation: {},
  isOrderLoading: false,
  favoriteTechs: [],
  favoriteProjects: [],
  ticketsShow: false,
  tickets: []
}

// getters
const getters = {
  userInfo: state => state.userInformation
}

// actions
const actions = {
  addFavorite ({commit}, payload) {
    commit(types.SEND_REQUEST)
    user.addFavorite(payload, data => {
      commit(types.REQUEST_SUCCESS)
      // console.log('11', data)
    })
  },
  cancelFavorite ({commit}, payload) {
    commit(types.SEND_REQUEST)
    user.cancelFavorite(payload, data => {
      commit(types.REQUEST_SUCCESS)
      // console.log('22', data)
    })
  },
  fetchUserInfos ({commit}, payload) {
    commit(types.SEND_REQUEST)
    user.fetchUserInfos(payload, userInfo => {
      commit(types.REQUEST_SUCCESS)
      commit(types.RECEIVE_USRE_INFO, {userInfo})
    })
  }
}

// mutations
const mutations = {
  [types.SEND_REQUEST] (state) {
    state._isLoading = true
  },
  [types.REQUEST_SUCCESS] (state) {
    state._isLoading = false
  },
  [types.RECEIVE_USRE_INFO] (state, {userInfo}) {
    state.userInformation = userInfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
