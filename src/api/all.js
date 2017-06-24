/**
 * Created by admin on 2017/6/22.
 */
import * as req from './base'

export default {
  // 9. 客户下单 POST
  async submitOrder (postData, cb) {
    postData = postData || {CustomerId: 1111}
    let data = await req.reqByPost('/appOrderData/submitOrder.do', postData)
    cb(data)
  },

  // 10 订单列表 POST
  async getOrderList (postData, cb) {
    postData = postData || {CustomerId: 1111}
    let data = await req.reqByPost('/appOrderData/orderList.do', postData)
    cb(data.OrderList)
  },
  async getOrder (postData, cb) {
    let data = req.reqByPost('/appOrderData/orderList.do', postData)
    cb(data)
  },
  //  11 处理订单
  // async gethandleOrder (postData, cb) {
  //   postData = postData || {}
  //   let data = await req.reqByPost('/appOrderData/handleOrder.do', postData)
  //   cb(data)
  // },
  // 12 首页广告 POST
  async getAdsList (postData, cb) {
    postData = postData || {CUSTOMER_ID: 1111}
    let data = await req.reqByPost('/appAdData/getAdsList.do', postData)
    cb(data.AdsList)
  },
// 15 提交评论
  async sendComment (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appCommentsData/sendComment.do', postData)
    cb(data)
  },
// 16 注册技师
  async registerTechnician (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appTechnicianData/registerTechnician.do', postData)
    cb(data)
  },
  // 17 获取所有常量值
  // async getAllCertificatelist (postData, cb) {
  //   postData = postData || {}
  //   let data = await req.reqByPost('/appTechnicianData/getAllConstant.do', postData)
  //   cb(data.Certificatelist)
  // },
  // 18 修改提现资料
  async changeGiftInfo (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appGiftsData/changeGiftInfo.do', postData)
    cb(data)
  },
  // 19. 提现操作接口
  async withdrawDeposit (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appGiftsData/withdrawDeposit.do', postData)
    cb(data)
  },
  // 20 明细列表接口
  async getGiftsdetaillist (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appGiftsData/getGiftsdetailList.do', postData)
    cb(data.Giftsdetaillist)
  },
  async getGiftsdetail (postData, cb) {
    let data = req.reqByPost('/appGiftsData/getGiftsdetailList.do', postData)
    cb(data)
  },
  // // 21. 项目列表接口 POST
  // async getItemfootcitylist (postData, cb) {
  //   postData = postData || {}
  //   let data = await req.reqByPost('/appItemData/getItemFootcityList.do', postData)
  //   cb(data.Itemfootcitylist)
  // },
  // async getItemFootcity (postData, cb) {
  //   let data = req.reqByPost('/appItemData/getItemFootcityList.do', postData)
  //   cb(data)
  // },
  // 22. 技师查询 POST
  async getTechnicianIds (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appTechnicianData/searchTechnicians.do', postData)
    cb(data)
  },
  // 23. 查看附属技师完成的订单列表
  async getTechnicianListByLeaderid (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appTechleaderData/getTechnicianListByLeaderid.do', postData)
    cb(data)
  },

  // 24 根据领班id获取旗下的技师列表
  async getOrderListOfTechByTechid (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appTechleaderData/getOrderListOfTechByTechid.do', postData)
    cb(data.Technicianlist)
  },
  // async getOrderListOfTech (postData, cb) {
  //   let data = req.reqByPost('/appTechleaderData/getOrderListOfTechByTechid.do', postData)
  //   cb(data)
  // },

  // 25 领班删除附属技师
  async leaderDeletedTech (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appTechleaderData/leaderDeletedTech.do', postData)
    cb(data)
  },

  // 26. 领班首页数据接口
  async getOrderlisttoday (postData, cb) {
    postData = postData || {}
    let data = await req.reqByPost('/appTechleaderData/getLeaderHomePage.do', postData)
    cb(data.Orderlisttoday)
  },
  async getOrderlist (postData, cb) {
    let data = await req.reqByPost('/appTechleaderData/getLeaderHomePage.do', postData)
    cb(data)
  }
}
