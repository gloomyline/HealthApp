import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
// import order from '@/components/order'
// import orderType from '@/components/order/orderType'
// import me from '@/components/me'
// import ticket from '@/components/ticket'
// import service from '@/components/service'
// import collect from '@/components/collect'
// import myOrders from '@/components/myOrders'
// import aboutUS from '@/components/aboutUS'
// import integral from '@/components/integral'

// customer client route
import customerRoute from './customerClient/index'

// technician client route
import technicianRoute from './technicianClient/index'

// import technician from '@/components/technician'
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

