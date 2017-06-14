/**
 * Created by Alan on 2017/6/14.
 */

import config from '../../config/index'
import Vue from 'vue'

let env = process.env.NODE_ENV === 'production' ? 'build' : 'dev'

let prefix = 'http://' + config[env].hostname + ':' + config[env]._port + '/massage'
// send request body as 'application/x-www-form-urlencoded' content type
let options = {emulateJSON: true}

export default {
  async addFavorite (postData, cb) {
    let url = prefix + '/appCommentsData/addCollect.do'
    let res = await Vue.http.post(url, postData, options)
    let _data = res.body
    if (_data && _data.Status === 0) {
      cb(_data.Data)
    } else {
      console.log(_data.ErrMsg)
    }
  },
  async cancelFavorite (postData, cb) {
    let url = prefix + '/appCommentsData/cancelCollect.do'
    let res = await Vue.http.post(url, postData, options)
    let _data = res.body
    if (_data && _data.Status === 0) {
      cb(_data.Data)
    } else {
      console.log(_data.ErrMsg)
    }
  },
  async getFavoriteList (postData, cb) {
    let url = prefix + '/appCommentsData/getCollectListByCustomerid.do'
    let res = await Vue.http.post(url, postData, options)
    let _data = res.body
    if (_data && _data.Status === 0) {
      cb(_data.Data.CollectList)
    } else {
      console.log(_data.ErrMsg)
    }
  }
}
