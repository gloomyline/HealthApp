/**
 * Created by Alan on 2017/6/5.
 */

import tech from '../../api/technician'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allTechnicians: state => state.all
}

// actions
const actions = {
  getAllTechnicians ({commit}, postData) {
    tech.getTechList(postData, technicians => {
      commit(types.RECEIVE_TECHLIST, {technicians})
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_TECHLIST] (state, {technicians}) {
    state.all = technicians
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
