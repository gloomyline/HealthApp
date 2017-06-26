import Vue from 'vue'
import Router from 'vue-router'

// customer client route
import customerRoute from './customerClient/index'

// technician client route
import technicianRoute from './technicianClient/index'

Vue.use(Router)

export default new Router({
  routes: [
    customerRoute.home,
    customerRoute.order,
    customerRoute.me,
    customerRoute.service,
    technicianRoute.home,
    technicianRoute.order,
    technicianRoute.me
  ],
  linkActiveClass: 'active'
})

