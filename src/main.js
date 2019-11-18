import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from '@/tools/toast/index.js'

Vue.config.productionTip = false

// 使用eventBus来进行maskBox 和 stuList组件间通信
Vue.prototype.bus = new Vue();

Vue.prototype.$toast = toast


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
