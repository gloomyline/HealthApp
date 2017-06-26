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

// router.push('/home')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
