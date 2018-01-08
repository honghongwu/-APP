<template>
  <div>
    <div class="swiper-warp">
      <swiper  v-if="home.datas" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img,index) in home.datas[0].value" :key="index" class="swiperIMG">
          <img :src="img.image"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>
<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  //1.1引入vuex管理的数据
  import {mapState} from 'vuex'

  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          autoplay:1500,
          effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          speed: 1000,
          initialSlide :0,
          autoHeight: true,
          paginationType:"bullets",
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          autoplayDisableOnInteraction : false,

        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      //1.2引入vuex管理的数据
      ...mapState(['home']),
      swiper() {
        return this.$refs.mySwiper.swiper
      },
    },
    mounted() {
      //this.swiper.slideTo(3, 2000, true),
      //3 通知action
      this.$store.dispatch('receive_home')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiperIMG
    &>img
      margin-right 10px
      margin-top 20px
      width 100%
      height 100%
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
  .swiper-warp
    margin-top :-20px

</style>

