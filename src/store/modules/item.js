/**
 * Created by Alan on 2017/6/21.
 */

import * as types from '../mutation-types'
import item from '@/api/item'

let itemTypes = item.massageType

// init state
const state = {
  _isLoading: false,
  itemsList: {
    manipulation: [],
    SPA: [],
    children: [],
    moxibustion: [],
    recover: [],
    scraping: [],
    foot: []
  }
}

// getters
const getters = {
  manipulation: state => state.itemsList.manipulation,
  SPA: state => state.itemsList.SPA,
  children: state => state.itemsList.children,
  moxibustion: state => state.itemsList.moxibustion,
  recover: state => state.itemsList.recover,
  scraping: state => state.itemsList.scraping,
  foot: state => state.itemsList.foot
}

// actions
const actions = {
  getItemListById ({commit}, payload) {
    commit(types.SEND_REQUEST)
    item.getItemListById(itemTypes[payload], data => {
      commit(types.REQUEST_SUCCESS)
      commit(types.RECEIVE_ITEM_LIST, {payload, data})
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
  [types.RECEIVE_ITEM_LIST] (state, {payload, data}) {
    state.itemsList[payload] = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
