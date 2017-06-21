/**
 * Created by Alan on 2017/6/14.
 */

import * as req from './base'

export default {
  async addFavorite (postData, cb) {
    let data = await req.reqByPost('/appCommentsData/addCollect.do', postData)
    cb(data)
  },
  async cancelFavorite (postData, cb) {
    let data = await req.reqByPost('/appCommentsData/cancelCollect.do', postData)
    cb(data)
  },
  async getFavoriteList (postData, cb) {
    let data = await req.reqByPost('/appCommentsData/getCollectListByCustomerid.do', postData)
    cb(data)
  }
}
