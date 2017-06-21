/**
 * Created by Alan on 2017/6/21.
 */

import * as req from './base'

export default {
  massageType: {
    manipulation: 1,
    SPA: 2,
    children: 3,
    moxibustion: 4,
    recover: 5,
    scraping: 6,
    foot: 7
  },
  async getItemListById (massageTypeId, cb) {
    let postData = {PageNow: 1, PageSize: 10, Massagetypeid: massageTypeId}
    let data = await req.reqByPost('/appItemData/getItemFootcityList.do', postData)
    console.log('44', data)
    cb(data.Itemfootcitylist)
  },
  async getItemListBySize (massageTypeId, start, size, cb) {
    let postData = {PageNow: start, PageSize: size, Massagetypeid: massageTypeId}
    let data = req.reqByPost('/appItemData/getItemFootcityList.do', postData)
    cb(data)
  }
}
