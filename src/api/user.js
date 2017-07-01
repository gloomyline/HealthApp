/**
 * Created by Alan on 2017/6/14.
 */

import * as req from './base'

export default {
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
  }
}
