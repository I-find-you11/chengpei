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
    },
    {
      path: '/tracking/:id',
      component: resolve => require(['../view/logistics-tracking'],resolve)
    },
    {
      path: '/goods-infor/:id',
      component: resolve => require(['../view/goods-infor'],resolve)
    },
    {
      path: '/shipping-details/:id',
      component: resolve => require(['../view/shipping-details'],resolve)
    },
    {
      path: '/Carpooling-distribution/:id',
      component: resolve => require(['../view/Carpooling-distribution'],resolve)
    },
  ]
})
