import Vue from 'vue'
import App from './App.vue'
import Vuik from '../packages' // 全局引入组件库

Vue.config.productionTip = false
Vue.use(Vuik)

new Vue({
  render: h => h(App)
}).$mount('#app')
