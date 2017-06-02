import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

import '@/common/stylus/index.styl'

Vue.use(vueResource)

router.push('/home')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
