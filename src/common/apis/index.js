/*
 * @Description: axios对象封装
 * @Version: Beata1.0
 * @Author: 【B站】Rong姐姐好可爱
 * @Date: 2020-07-12 12:16:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-11-06 22:10:55
 */

import axios from 'axios'
import { globalConfig } from '../../../config'
import { cookiesTool } from '@/common/utils'
import { message } from 'ant-design-vue'

/**
 * request拦截统一处理请求数据
 */
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 添加登录的tokenKey
  const tokenKey = localStorage.getItem('tokenKey') || cookiesTool.getCookie('tokenKey')
  console.log('front tokenKey:', tokenKey)
  config.headers['token-key'] = tokenKey

  // 登录采用cookies
  // config.headers.tokenKey = this.$cookies.get('tokenKey')
  // console.log(getCookie('tokenKey'))
  // config.data = qs.stringify(config.data)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

/**
 * response拦截统一处理响应数据
 *
 */
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  const { data } = response
  // if (data && data.code === 401) {
  //   // 清空localstorage
  //   localStorage.clear()
  //   // 清空cookies
  //   cookies.clearCookie('tokenKey')
  //   // 跳转到登录
  //   window.location.href = '/login'
  // }
  if (data && data.code === 200) {
    return data
  }
  // 不在预期中的返回，需要特殊处理
  console.log('response-->response:', response)
  return response
}, error => {
  // 对响应错误做点什么
  message.error('网络错误')
  return Promise.reject(error)
})

// 配置全局路由
axios.defaults.baseURL = globalConfig.axiosConfig.baseUrl

// 超时封装10s
axios.defaults.timeout = 10000
// 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// api路由导统一导出 todo
