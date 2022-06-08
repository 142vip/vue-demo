/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站】Rong姐姐好可爱
 * @Date: 2020-07-12 12:16:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-10-04 09:44:58
 */
'use strict'

// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { globalConfig } = require('./config')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css', 'jpg', 'png']
module.exports = {
  configureWebpack: {
    plugins: [
      // webpack配置
      new CompressionWebpackPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    performance: {
      hints: false
    }
  },
  // 开发配置
  devServer: globalConfig.devServer
}
