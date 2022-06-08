/**
 * 获取全局配置，根据项目启动环境
 * - development : 开发环境
 * - production : 正式环境，一般指上线
 * @param nodeEnv
 */
const development = require('./development')
const production = require('./production')

function getGlobalConfig (nodeEnv) {
  if (nodeEnv === 'development') {
    return development
  }

  if (nodeEnv === 'production') {
    return production
  }
}

// 导出全局配置
exports.globalConfig = getGlobalConfig(process.env.NODE_ENV)
