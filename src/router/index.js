import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['../view/order'], resolve)
    },
    {
      path: '/order-detail/:id',
      component: resolve => require(['../view/order-detail'],resolve)
    }
  ]
})
