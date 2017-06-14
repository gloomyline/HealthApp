/**
 * Created by Alan on 2017/5/31.
 */

export function formatDate (date, fmt) {
  // 匹配格式化规则中的年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = String(o[k])
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

// 字符串前补0
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
