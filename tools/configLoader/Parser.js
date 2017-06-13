/**
 * Created by Alan on 2017/6/13.
 */
class Parser {
  constructor (data) {
    this.data = data || ''
  }
  parse () {
    let listKeys = Object.keys(this.data)
    let objArr = []
    listKeys.forEach((item) => {
      objArr.push(this.data[item])
    })
    return [objArr, listKeys]
  }
}

module.exports = Parser
