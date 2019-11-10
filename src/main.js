import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(BaiduMap, {
  ak: 'lc4ry9AoQ1ueLtgRRqc8uAYjjcouVyub'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
