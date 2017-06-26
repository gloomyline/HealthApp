/**
 * Created by Alan on 2017/6/5.
 */

import * as req from './base'

export default {
  async getTechList (postData, cb) {
    postData = postData || {page_now: 0, page_size: 10}
    let data = await req.reqByPost('/appTechnicianData/getTechniciansList.do', postData)
    cb(data.Technicianlists)
  },
  async getTech (postData, cb) {
    let data = await req.reqByPost('/appTechnicianData/getTechnicianInfo.do', postData)
    cb(data)
  }
}
