/**
 * Created by Alan on 2017/6/13.
 */
let fs = require('fs')
let path = require('path')

class Output {
  constructor (Arr, config) {
    this.data = Arr || []
    this.outputPath = config.outputPath || ''
  }

  write () {
    let objArr = this.data[0]
    let listKeys = this.data[1]

    fs.exists(this.outputPath, (exists) => {
      if (!exists) {
        fs.mkdir(this.outputPath)
      } else {
        console.log('the output folder is already exsisted')
      }
      objArr.forEach((item, index) => {
        fs.writeFile(path.join(this.outputPath, listKeys[index] + '.json'), JSON.stringify(item), (err) => {
          if (err) {
            throw err
          } else {
            console.log('%s has been saved'.replace(/%s/, listKeys[index] + '.json'))
          }
        })
      })
    })
  }
}

module.exports = Output
