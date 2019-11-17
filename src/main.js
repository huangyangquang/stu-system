import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 使用eventBus来进行maskBox 和 stuList组件间通信
Vue.prototype.bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
