/**
 * 封装关于时间格式处理的操作
 */
export default class {
  /**
   * 将时间错转化为标准格式时间
   * @param {number} bigIntValue 10位或者13位时间戳
   */
  formatBigIntToDateTimeStr (bigIntValue) {
    // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    if (Number(bigIntValue).toString().length === 10) {
      bigIntValue *= 1000
    }
    const date = new Date(bigIntValue)
    const Y = date.getFullYear() + '-'
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
    return Y + M + D + h + m + s
  }
}
