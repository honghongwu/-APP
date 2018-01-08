import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import LandE from '../pages/LandE/LandE.vue'
import bran from '../pages/bran/bran.vue'
import classa from '../pages/classa/classa.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Classify',
      component:Classify,
      children:[
        {
          path:'/Classify',
          redirect:'classa'
        },
        {
          path:'bran',
          component:bran
        },
        {
          path:'classa',
          component: classa
        }
      ]
    },
    {
      path: '/ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/LandE',
      component: LandE
    },
  ]
})
