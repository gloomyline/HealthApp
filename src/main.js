import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import store from './store'

// global config or methods
import { saveToLocal, loadFromLocal } from '@/common/js/localStore'
import '@/common/stylus/index.styl'
import config from '@/assets/config'

Vue.prototype.saveToLocal = saveToLocal
Vue.prototype.loadFromLocal = loadFromLocal
Vue.prototype.getStaticConfig = function () {
  return config
}

Vue.use(vueResource)

// toggle client stat
let href = window.location.href
if (/customer/.test(href)) {
  // window.location.href = href.replace(/\/customer#/, '')
  store.commit('CUSTOMER_APP_STATUS')
} else if (/technician/.test(href)) {
  // window.location.href = href.replace(/\/technician#/, '')
  store.commit('TECHNICIAN_APP_STATUS')
} else {
  store.commit('CUSTOMER_APP_STATUS')
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
