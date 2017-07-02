/**
 * Created by Alan on 2017/6/21.
 */

/**
 * 描述: 处理api请求公用部分
 */

import config from '../../config/index'
import Vue from 'vue'

let env = process.env.NODE_ENV === 'production' ? 'build' : 'dev'

let prefix = 'http://' + config[env]._hostname + ':' + config[env]._port + '/massage'
// send request body as 'application/x-www-form-urlencoded' content type
let options = {emulateJSON: true}

console.log('prefix:', prefix)

export function reqByPost (url, postData = {}) {
  return new Promise((resolve, reject) => {
    postData = Object.assign({}, {CustomerId: 1111}, postData)
    Vue.http.post(prefix + url, postData, options)
      .then(res => {
        let _res = res.body
        if (_res.Status === 0) {
          if (_res.Data) {
            resolve(_res.Data)
          } else {
            resolve(_res.Status)
          }
        } else {
          console.log('errMsg:', _res.msg)
          reject(_res)
        }
      }).catch(err => reject(err))
  })
}

export function reqByGet (url, params = {}) {
  return new Promise((resolve, reject) => {
    params = Object.assign({}, {Customerid: 1111}, params)
    Vue.http.get(prefix + url, params, options)
      .then(res => {
        let _res = res.body
        if (_res.Status === 0) {
          resolve(_res.Data)
        } else {
          console.log('errMsg:', _res.msg)
          reject(_res)
        }
      }).catch(err => reject(err))
  })
}
