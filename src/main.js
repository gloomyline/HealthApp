import Vue from 'vue'
import App from './App'
import router from './router'

import '@/common/stylus/index.styl'

router.push('/home')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
