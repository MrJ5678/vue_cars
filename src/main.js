import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 高德
import "./plugin/AMap";
// 全局的返回导航按钮组件
import "./components/back"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
