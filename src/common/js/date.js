/**
 * Created by Alan on 2017/5/31.
 */

/**
 * timeStamp 转换成指定格式 timeStr
 * @param date  时间戳
 * @param fmt   时间字符串格式
 * @return {*}  时间字符串
 */
export function formatDate (date, fmt) {
  // 匹配格式化规则中的年份
  if (/(y+)/i.test(fmt)) {
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

/**
 * timeStr 转换成 timeStamp
 * @param dateStr     时间字符串
 * @return {number}   时间戳
 */
export function formatTime (dateStr) {
  return (new Date(dateStr)).getTime()
}

// 字符串前补0
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
