<template>
 <div class="footWarp">
   <div class="footernav bottom_menu_bar bgfff bottomBox">
     <ul class="clearfix footernav_ul bgfff">
       <li class="index-a dogon">
         <svgImage className="icon" type="#icon-shouye1"></svgImage>
         <router-link to="/Home" replace>首页</router-link>
       </li>
       <li class="type-a">
         <svgImage className="icon" type="#icon-gouwuche"></svgImage>
         <router-link to="/Classify" replace>分类</router-link>
       </li>
       <li class="cart-a">
         <svgImage className="icon" type="#icon-leimupinleifenleileibie"></svgImage>
         <router-link to="/ShoppingCart" replace>购物车</router-link>
       </li>
       <li class="myepet-a">
         <svgImage className="icon" type="#icon-chongwu"></svgImage>
         <router-link to="/LandE" replace>我的E宠</router-link>
       </li>
     </ul>
   </div>
   <keep-alive>
     <router-view />
   </keep-alive>
 </div>
</template>
<script>
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footernav
    width 100%
    position fixed
    bottom 0px
    left 0px
    right 0px
    height 55px
    background-color white
    z-index 50
    &>ul
      width 100%
      height 100%
      &>li
        float left
        margin-left 35px
        padding-bottom  20px
        padding-right 15px
        &>a
          display block
          font-size 14px
        .icon
          width 30px
          height 30px
</style>
