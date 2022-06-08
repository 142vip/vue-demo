import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

// ant-design
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(Antd)

// 注入
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
