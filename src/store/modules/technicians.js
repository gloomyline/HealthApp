/**
 * Created by Alan on 2017/6/5.
 */

import tech from '../../api/technician'
import * as types from '../mutation-types'

// initial state
const state = {
  _isLoading: false,
  all: [],
  finite: false, // 服务端技师列表数据是否请求完
  detailShow: false,
  selected: {},
  alertShow: false
}

// getters
const getters = {
  _isLoading: state => state._isLoading,
  allTechnicians: state => state.all,
  detailShow: state => state.detailShow,
  selectedTechnician: state => state.selected,
  techListAlertShow: state => state.alertShow
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
    state._isLoading = true
  },
  [types.REQUEST_SUCCESS] (state) {
    state._isLoading = false
  },
  [types.RECEIVE_TECHLIST] (state, {technicians}) {
    if (technicians.length === 0) {
      state.finite = true
      state.alertShow = true
      return
    }
    state.all = state.all.concat(technicians)
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
