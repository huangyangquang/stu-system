import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import Api from './api.js'
Api.findByPage(1)
	.then(res => console.log(res))
	.catch(err => console.log(err))



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
