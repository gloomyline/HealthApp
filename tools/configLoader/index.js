/**
 * Created by Alan on 2017/6/13.
 */

let config = require('./config')
let Loader = require('./Loader')
let Parser = require('./Parser')
let Output = require('./Output')

let loader = new Loader(config)
loader.load().then((data) => {
  let parser = new Parser(data)
  let parseData = parser.parse()

  let output = new Output(parseData, config)
  output.write()
})

