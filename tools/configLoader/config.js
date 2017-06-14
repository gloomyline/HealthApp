/**
 * Created by Alan on 2017/6/13.
 */

'use strict'
let path = require('path')
let config = require('../../config')
let env = process.env.NODE_ENV === 'production' ? 'build' : 'dev'

let configServerUrl = 'http://' + config[env].hostname + ':' + config[env]._port + '/massage/appTechnicianData/getAllConstant.do'

module.exports = {
  url: configServerUrl,
  method: 'GET',
  outputPath: path.resolve(__dirname, 'output')
}
