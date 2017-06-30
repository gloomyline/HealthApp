/**
 * Created by Alan on 2017/6/13.
 */

import * as types from '../mutation-types'
import user from '@/api/user'

// init state
const state = {
  _isLoading: false,
  userId: 1111,
  favoriteTechs: [],
  favoriteProjects: [],
  ticketsShow: false,
  tickets: []
}

// getters
const getters = {
  getUserId: state => state.userId
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
  }
}

// mutations
const mutations = {
  [types.SEND_REQUEST] (state) {
    state._isLoading = true
  },
  [types.REQUEST_SUCCESS] (state) {
    state._isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
