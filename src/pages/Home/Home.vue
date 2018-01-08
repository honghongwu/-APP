<template>
<div>
  <!--头部及轮播-->
  <div id="headerbox float-div">
    <div class="main">
      <ele-header />
    </div>
  </div>
  <!--放包裹器包裹器-->
  <div class="homeWrapper" ref="HomeWrapper">
    <div class="content">
      <!--轮播-->
      <lunbo />
      <!--中间图片列表  EL宠团 清仓特价-->
      <div class="columnnavdiv">
        <ul v-if="home.datas" class="clearfix hottype">
          <li v-for="(lis,index) in home.datas[2].menus" :key="index" class="fl">
            <a class="lia" href="###">
              <img :src="lis.image" lazy="loaded">
            </a>
          </li>
        </ul>
      </div>
      <split></split>
      <!--新人专享-->
      <div class="banner_item">
        <div class="swiper-slide default_bg">
          <a href="###" class="pointer">
            <img src="../../components/img/xinren.gif" lazy="loaded">
          </a>
        </div>
      </div>
      <!--每天-->
     <div class="surprise">
        <div class="surprise-tit clearfix">
          <div  v-if="homeB.data" class="fl titimg">
            <img :src="homeB.data['3'].surprise_icon.image">
          </div>
          <div class="fl surprise-wenzi">距本场结束</div>
          <div class="time">
            <div class="time1 dib clearfix dtime">
              <span class="time1-1">01</span>
              <span class="time-zi ft12">:</span>
              <span class="time1-1">36</span>
              <span class="time-zi ft12">:</span>
              <span class="time1-1">38</span>
            </div>
          </div>
          <div class="more">
            <a v-if="homeB.data" href="###" class="moerimg db ftr">
              <img :src="homeB.data['3'].right_image.image">
            </a>
          </div>
        </div>
        <!--每天2-->
         <div class="swiper-wrapper" ref="picsWrapper">
           <ul v-if="homeB.data" class="imgbWarp">
             <li v-for="(imgb,index) in homeB.data['3'].goods" class="thispro-img">
               <a href="">
                 <img class="image" :src="imgb.image.image">
                 <span class="ftb ft12">￥{{imgb.sale_price}}</span>
                 <span class=" ftc ft12">{{imgb.little_price}}</span>
               </a>
             </li>
           </ul>
         </div>
      </div>
      <split></split>
      <!--一折开团-->
      <div class="divimg">
        <a href="##">
          <img src="../../components/img/Echongtuan.jpg" lazy="loaded">
        </a>
      </div>
      <split></split>
      <!--E宠国际-->
      <div class="Ewrapper">
        <div class="Eleft E">
          <a href="###" class="Eleft-a">
            <img src="../../components/img/Echong.jpg" lazy="loaded">
          </a>
        </div>
        <div class="Eright E">
          <a href="###" class="Eright-b">
            <img src="../../components/img/huanliang.jpg" lazy="loaded">
          </a>
          <a href="##" class="Eright-c">
            <img src="../../components/img/wu.jpg">
          </a>
        </div>
      </div>
      <split></split>
      <!--视频-->
      <div class="shipinWrap">
        <div class="tubiao">
          <img src="../../components/img/gougshi.jpg" alt="">
        </div>
        <div class="shipin">
          <img src="../../components/img/goushipin.jpg" alt="">
        </div>
      </div>
      <split></split>
    </div>
    </div>
  <!--动态狗-->
  <transition name="eyeFade">
  <div class="eyEdog"  @click="toggleShow">
  </div>
  </transition>
  <transition name="fade">
  <div class="mask" v-show="isShow">
    <div class="mask-wrapper">
      <div class="mask-main">
        <h1>DOG</h1>
        <p>您将进入狗狗站</p>
        <div class="wrapperImg">
          <span class="I">
            <router-link to="/Home" class="link">
              <img src="../../components/img/change-dog.png" @click="toggleShow">
            </router-link>
          </span>
          <span class="I"><img src="../../components/img/change-cat.png" alt=""></span>
          <span class="I"><img src="../../components/img/change-dog1.png" alt=""></span>
        </div>
      </div>
    </div>
    <div class="mask-footer" @click="toggleShow">
      <span class="icon-close">X</span>
    </div>
  </div>
    <router-view />
  </transition>
  </div>
</template>
<script>

  import header from '../../components/header/header.vue'
  import lunbo from '../../components/lunbo/lunbo.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default{
    data(){
      return{
        isShow:false
      }
    },
    methods: {
      toggleShow(){
        this.isShow=!this.isShow
      }
    },
    components:{
      'ele-header':header,
      'lunbo':lunbo
    },
    computed: {
      //1.2引入vuex管理的数据
      ...mapState(['home','homeB'])
    },
    mounted(){
      this.$store.dispatch('receive_homeB')
      this.$store.dispatch('receive_home',()=>{
        this.$nextTick(() => { // 回调函数在界面更新之后立即执行
     let homeScroll = new BScroll(this.$refs.HomeWrapper, {probeType: 2, click: true})
     let picsScroll = new BScroll(this.$refs.picsWrapper, {click: true, scrollX: true})
      })
     })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.homeWrapper
  height 490px
  overflow hidden
  .titimg
    width 100%
    &>img
      float left
      width 30%
      height 30%
  .time
    width 100%
    .time1
      text-align center
      .time1-1
        border 1px solid #ddd
      &>span
        padding 7px
        float left
        font-size 1px
  .more
    width 100%
    .moerimg
      overflow hidden
      &>img
       float right
       width 20%
       height 20%
       margin-right -10px
       margin-top -70px
  .columnnavdiv
      width 100%
      height 190px
      .clearfix
        margin-top -10px
      &>ul
        width 100%
        height 100%
        overflow hidden
        &>li
          width 75px
          float: left
          .lia
            width 100%
            &>img
              width 100%
              display:block
  .banner_item
    width 100%
    height 100%
    img
      width 100%
      height 100%
  .surprise
    width 100%
    height 190px
    .swiper-wrapper
      padding 10px
      width 100%
      height 130px
      &>.imgbWarp
        display flex
        width 200%
        height 100%
        &>li
          width 40%
          float left
          height 85px
          &>a
            display block
            img
              width 85px
              height 85px
              display block
            .ft12
              display block
              width 50%
              float left
              margin-top 7px
            .ftb
              font-size 11px
              color red
              text-align center
            .ftc
              font-size 6px
              margin-left 7px
              text-align center
  .surprise-wenzi
    padding-left 6px
    font-size 14px
    float left
    margin-top 7px
  .divimg
    width 100%
    height 185px
    img
      width 100%
      height 185px
      margin-bottom 10px
  .Ewrapper
    display flex
    width 100%
    height 250px
    .E
      width 50%
      img
       width 100%
  .shipinWrap
    width 100%
    height 284px
    .tubiao
      width 50%
      height 75px
      &>img
        width 100%
        height 100%
    .shipin
      width 100%
      height 210px
      &>img
        width 100%
        height 100%
        margin-bottom 10px
.eyEdog
  position absolute
  top: 490px
  bottom 70px
  left 318px
  width 100%
  height 100%
  background-image url("../../components/img/godog.png")
  background-repeat no-repeat
  background-size 30%
.mask
  z-index 100
  position fixed
  top: 0
  left: 0
  width:100%
  height 100%
  background-color  #ffff
  &.fade-enter-active,&.fade-leave-active
    transition opacity .5s
  &.fade-enter,&.fade-leave-to
    opacity 0
  .mask-wrapper
    min-height 100%
    .mask-main
      padding 64px 36px  32px
      &>h1
        font-size 16px
        line-height 16px
        font-weight 700
        text-align center
        margin-bottom 16px
      &>p
        font-size 16px
        line-height 16px
        font-weight 300
        text-align center
      .wrapperImg
        display flex
        position absolute
        top 270px
        left 70px
        .I
          width 30%
          &>img
            width 80%
        .link
          width 30%
          &>img
            width 80%
  .mask-footer
    margin-top -64px
    text-align center
    line-height 32px
</style>

