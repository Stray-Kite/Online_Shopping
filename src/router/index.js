import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Goods from '@/components/Goods'
import Cart from '@/components/Cart'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
