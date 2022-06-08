/**
 * 正式部署环境配置
 */
module.exports = {
  axiosConfig: {
    baseUrl: 'http://127.0.0.1'
  },
  devServer: {
    port: 3000, // 设置端口号
    host: '127.0.0.1', // ip地址
    hot: true, // 热更新
    https: false, // https:{type:Boolean}配置前缀
    open: false, // 配置自动启动浏览器
    // disableHostCheck: true, //  解决Invalid Host/Origin header问题，相关链接：https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=Invalid%20Host%2FOrigin%20header&fenlei=256&oq=Invalid&rsv_pq=a6e2cde000012b22&rsv_t=d287u%2BaRVyBJ%2BEIY8QJHcPowx%2F50J7OfZZRjDr9PlNNGeH2Uwuc7TvqULx0&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_btype=t&inputT=1581&rsv_sug3=4&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1699
    // 配置代理
    proxy: {}
  }
}
