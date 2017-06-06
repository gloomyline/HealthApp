/**
 * Created by Alan on 2017/6/5.
 */

import config from '../../config/index'
import Vue from 'vue'

let env = process.env.NODE_ENV === 'production' ? 'build' : 'dev'

let prefix = 'http://' + config[env].hostname + ':' + config[env]._port + '/massage'
// send request body as 'application/x-www-form-urlencoded' content type
let options = {emulateJSON: true}

export default {
  async getTechList (postData, cb) {
    let url = prefix + '/appTechnicianData/getTechniciansList.do'
    postData = postData || {page_now: 0, page_size: 10}
    let res = await Vue.http.post(url, postData, options)
    let _data = res.body
    if (_data && _data.Status === 0) {
      cb(_data.Data.TechnicianLists)
    } else {
      console.log(_data.ErrMsg)
    }
  }
}
