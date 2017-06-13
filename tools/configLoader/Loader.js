/**
 * Created by Alan on 2017/6/13.
 */

'use strict'
let Promise = require('bluebird')
let request = Promise.promisify(require('request'))

class Loader {
  constructor (config) {
    this.config = config || {}
  }

  load () {
    return new Promise((resolve, reject) => {
      request({url: this.config.url, form: {}, method: this.config.method})
        .then((res) => {
          let data = JSON.parse(res.body)
          if (data.Status === 0) {
            resolve(data.Data)
          } else {
            reject(data.Data)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

module.exports = Loader
