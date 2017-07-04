/**
 * Created by Alan on 2017/6/13.
 */

'use strict'
let path = require('path')
let config = require('../../config')

let configServerUrl = 'http://' + config.dev._hostname + ':' + config.dev._port + '/massage/appTechnicianData/getAllConstant.do'

module.exports = {
  url: configServerUrl,
  method: 'GET',
  outputPath: path.resolve(__dirname, 'output')
}
