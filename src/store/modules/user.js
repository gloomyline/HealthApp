/**
 * Created by Alan on 2017/6/13.
 */

import * as types from '../mutation-types'
import user from '@/api/user'

// init state
const state = {
  userInformation: {},
  favoriteTechs: [],
  favoriteProjects: [],
  ticketsShow: false,
  couponList: [],
  phoneBS: false,
  isOrderLoading: false
}

// getters
const getters = {
  userInfo: state => state.userInformation,
  couponList: state => state.couponList,
  phoneBindingShow: state => state.phoneBS
}

// actions
const actions = {
  fetchUserInfos ({commit}, payload) {
    commit(types.SEND_REQUEST)
    user.fetchUserInfos(payload, userInfo => {
      commit(types.REQUEST_SUCCESS)
      commit(types.RECEIVE_USRE_INFO, {userInfo})
    })
  },
  fetchMyCouponList ({commit}, payload) {
    commit(types.SEND_REQUEST)
    user.getCouponlist(payload, couponlist => {
      commit(types.REQUEST_SUCCESS)
      commit(types.RECEIVE_MY_COUPONLISTS, {couponlist})
    })
  },
  bindMobile ({commit}, payload) {
    commit(types.SEND_REQUEST)
    user.bindMobile(payload, data => {
      commit(types.REQUEST_SUCCESS)
      commit(types.UPDATE_USER_MOBILE_INFO, {data})
    })
  },
  addFavorite ({commit}, payload) {
    commit(types.SEND_REQUEST)
    user.addFavorite(payload, data => {
      commit(types.REQUEST_SUCCESS)
      // console.log('11', data)
      commit(types.UPDATE_USER_MOBILE_INFO, {data})
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
  },
  [types.RECEIVE_USRE_INFO] (state, {userInfo}) {
    state.userInformation = userInfo
  },
  [types.RECEIVE_MY_COUPONLISTS] (state, {couponList}) {
    state.couponList = couponList
  },
  [types.OPEN_PHONE_BINDING] (state) {
    state.phoneBS = true
  },
  [types.CLOSE_PHONE_BINDING] (state) {
    state.phoneBS = false
  },
  [types.UPDATE_USER_MOBILE_INFO] (state, {data}) {
    state.userInformation.Customerinfo.Tel = data.Tel
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
