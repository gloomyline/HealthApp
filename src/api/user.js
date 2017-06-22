/**
 * Created by Alan on 2017/6/14.
 */

import * as req from './base'

export default {
  // 我的优惠券
  async getCouponList (postData, cb) {
    postData = postData || {CUSTOMER_ID: 1111}
    let data = await req.reqByPost('/appCouponData/getMyCouponList.do', postData)
    cb(data.CouponList)
  },
  async getCoupon (postData, cb) {
    let data = req.reqByPost('/appCouponData/getMyCouponList.do', postData)
    cb(data)
  },
  // 我的收藏
  async addFavorite (postData, cb) {
    let data = await req.reqByPost('/appCollectData/addCollect.do', postData)
    cb(data)
  },
  async cancelFavorite (postData, cb) {
    let data = await req.reqByPost('/appCollectData/cancelCollect.do', postData)
    cb(data)
  },
  async getFavoriteList (postData, cb) {
    let data = await req.reqByPost('/appCollectData/getCollectListByCustomerid.do', postData)
    cb(data)
  }
}
