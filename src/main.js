
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
  store,
  // //验证
  // methods:{
  //   checkLogin(){
  //     //检查是否存在session
  //     //cookie操作方法在源码里有或者参考网上的即可
  //     if(!this.getCookie('session')){
  //       //如果没有登录状态则跳转到登录页
  //       this.$router.push('/login');
  //     }else{
  //       //否则跳转到登录后的页面
  //       this.$router.push('/user_info');
  //     }
  //   },
  //   //进入页面时
  //   checkLogin(){
  //   }
  // },
  //   //监听路由检查登录
  //   watch:{
  //     "$route" : 'checkLogin'
  //   },
  //   //进入页面时
  //   created() {
  //     this.checkLogin();
  //   }
})
