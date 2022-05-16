/**
 * 封装关于cookie的操作
 */
export default class {
  /**
   * 获取cookies
   * @param {string} name 键值对中的键
   */
  getCookie (name) {
    const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    if (arr != null) {
      return unescape(arr[2])
    } else {
      return null
    }
  }

  /**
   * @author xxxx
   * @description 删除cookie
   * @param {String} name 需要删除cookie的key
   */
  clearCookie (name) {
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cVal = this.getCookie(name)
    if (cVal) document.cookie = `${name}=cval;expires=${exp.toGMTString()}`
  }
}
