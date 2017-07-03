/**
 * Created by Alan on 2017/6/14.
 */

import * as req from './base'

export default {
  // 请求用户信息
  async fetchUserInfos (postData, cb) {
    postData = postData || {Openid: 'o-9OW0v0J_s8gJQdWRAVQ67tTYrQ'}
    let data = await req.reqByPost('/appOrderData/getRoleByOpenid.do', postData)
    cb(data)
  },
  // 我的订单
  async fetchMyOrderLists (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('')
    cb(data)
  },
  // 我的优惠券列表
  async getCouponlist (postData, cb) {
    let data = await req.reqByPost('/appCouponData/getMyCouponList.do', postData)
    cb(data.Couponlist)
  },
  // 根据优惠券id获取优惠券
  async getCoupon (postData, cb) {
    let data = req.reqByPost('/appCouponData/getMyCouponList.do', postData)
    cb(data)
  },
  // 添加收藏（技师/服务项目）
  async addFavorite (postData, cb) {
    let data = await req.reqByPost('/appCollectData/addCollect.do', postData)
    cb(data)
  },
  // 取消收藏（技师/服务项目）
  async cancelFavorite (postData, cb) {
    let data = await req.reqByPost('/appCollectData/cancelCollect.do', postData)
    cb(data)
  },
  // 获取收藏列表
  async getFavoriteList (postData, cb) {
    let data = await req.reqByPost('/appCollectData/getCollectListByCustomerid.do', postData)
    cb(data)
  },
  // 下单请求
  async submitOrder (postData, cb) {
    postData = postData || {CustomerId: 1111}
    let data = await req.reqByPost('/appOrderData/submitOrder.do', postData)
    cb(data)
  },
  async bindMobile (postData, cb) {
    console.log(postData)
    let data = await req.reqByGet('/appuser/setCustomerPhone.do', postData)
    data = Object.assign({}, data, {Tel: postData.userPhone})
    cb(data)
  }
}
