/**
 * Created by Alan on 2017/6/5.
 */

import tech from '../../api/technician'
// import { deepCopy } from '@/common/js/util'
import * as types from '../mutation-types'

// initial state
const state = {
  isLoading: false,
  all: [],
  detailShow: false,
  selected: {}
}

// getters
const getters = {
  isLoading: state => state.isLoading,
  allTechnicians: state => state.all,
  detailShow: state => state.detailShow,
  selectedTechnician: state => state.selected
}

// actions
const actions = {
  getAllTechnicians ({commit}, postData) {
    commit(types.SEND_REQUEST)
    tech.getTechList(postData, technicians => {
      commit(types.REQUEST_SUCCESS)
      commit(types.RECEIVE_TECHLIST, {technicians})
    })
  },
  getTechnicians ({commit}, payload) {
    commit(types.SEND_REQUEST)
    tech.getTech(payload, technician => {
      commit(types.REQUEST_SUCCESS)
      commit(types.RECEIVE_TECH, {technician})
    })
  }
}

// mutations
const mutations = {
  [types.SEND_REQUEST] (state) {
    state.isLoading = true
  },
  [types.REQUEST_SUCCESS] (state) {
    state.isLoading = false
  },
  [types.RECEIVE_TECHLIST] (state, {technicians}) {
    state.all = technicians
  },
  [types.RECEIVE_TECH] (state, {technician}) {
    let selected = state.selected
    state.selected = Object.assign({}, selected, technician)
  },
  [types.TOGGLE_TECH_DETAIL] (state) {
    state.detailShow = !state.detailShow
  },
  [types.SELECT_TECHNICIAN] (state, {selectedTech}) {
    state.selected = selectedTech
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
