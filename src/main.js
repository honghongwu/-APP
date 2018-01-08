
import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import svgImage from './components/svg/svg_image.vue'
import split from './components/split/split.vue'

//注册成全局组件
Vue.use(VueResource)
Vue.component('svgImage', svgImage)
Vue.component('split', split) //一条线

new Vue({
  el:'#app',
  render: h => h(app),
  router,
  store
})
