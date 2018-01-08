<template>
  <div class="headerWrap">
    <div class="overflow rela">
      <div class="appdowimg">
        <a href="###" style="display: block;">
          <img src="../../components/img/a.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="clearfix">
      <div class="epet-search bgf">
        <div class="fl rela location">
          <a href="###">
            <span class="c89 catordog ">狗狗站</span>
            <span class="c89">|</span>
            <span data-name="my-place"class="myposition c89 ">重庆</span>
            <i></i>
          </a>
        </div>
        <p class="search-text">
          <a href="###">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="eico serach-ico"></span>
          </a>
        </p>
        <a href="###" class="epet-category">
          <img src="../../components/img/mydope.png">
        </a>
      </div>
    </div>
    <div class="find_nav">
      <div class="find_nav_left dscroll">
        <div class="find_nav_list dscroll-div">
          <ul class="dscroll-ul">
           <!-- 2  遍历的时候是从home中找menus,menu 在这相当于item,{{item.name}}-->
             <li v-for="(menu,index) in home.menus"
                 :key="index">{{menu.menu_name}}
             </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //1.1引入vuex管理的数据
  import {mapState} from 'vuex'

  export default {
    computed: {
      //1.2引入vuex管理的数据
      ...mapState(['home']),
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .headerWrap
   z-index :100
  .find_nav
    width: 100%
    height: 35px
    min-width: 320px
    box-sizing: border-box
    .dscroll
      overflow-x: auto
      overflow-y: hidden
      .dscroll-div
        width 140%
        .dscroll-ul
          white-space: nowrap
          display: flex
          list-style: none
          &>li
            margin: -10px  7px -10px 7px
            color: #666
            line-height: 36px
            font-size: 15px
            text-align: center
   .clearfix
    width 375px
    height 51px
    .location
      float left
      margin-top 7px
      margin-left 15px
      margin-right 20px
    .search-text
      float left
      margin-top 7px
      margin-left 8px
    .epet-category
      float left
      margin-top 10px
      margin-left 10px
      &>img
        width 30px
        height 30px
   .appdowimg
     img
      width 100%
      height 100%
</style>



