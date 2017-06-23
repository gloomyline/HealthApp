/**
 * Created by admin on 2017/6/22.
 */
import * as req from './base'

export default {
  // 9. 客户下单 POST
  async submitOrder (postData, cb) {
    let data = await req.reqByPost('/appOrderData/submitOrder.do', postData)
    cb(data)
  },

  // 10 订单列表 POST
  async getOrderList (postData, cb) {
    postData = postData || {CUSTOMER_ID: 1111}
    let data = await req.reqByPost('/appOrderData/orderList.do', postData)
    cb(data.OrderList)
  },

  // 12 首页广告 POST
  async getAdsList (postData, cb) {
    postData = postData || {CUSTOMER_ID: 1111}
    let data = await req.reqByPost('/appAdData/getAdsList.do', postData)
    cb(data.AdsList)
  },
// 16 注册技师
  async registerTechnician (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appTechnicianData/registerTechnician.do', postData)
    cb(data)
  },
  // 17 获取所有常量值
  async getAllCertificatelist (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appTechnicianData/getAllConstant.do', postData)
    cb(data.Certificatelist)
  },
  // 18 修改提现资料
  async changeGiftInfo (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appGiftsData/changeGiftInfo.do', postData)
    cb(data)
  }
}
