/**
 * Created by Alan on 2017/7/2.
 */

var express = require('express')
var app = express()
var router = express.Router()
var config = require('./config')
var hostname = config.build.hostname
var port = config.build.port

// assign the static files path
app.use('', express.static('./dist'))

router.get('/', (req, res, next) => {
  req.url = 'index.html'
  next()
})

app.use(router)

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server is running on %s:%d', hostname, port)
  }
})
