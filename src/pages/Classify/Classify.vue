<template>
    <div>
     <div class="categorybox">
       <header class="topHeader">
         <router-link to="/Classify/classa">分类</router-link>
         <router-link to="/Classify/bran">品牌</router-link>
       </header>
     </div>
      <router-view />
    </div>
</template>
<script>
  //1.1
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default{
    data(){
      return{

      }
    },
    methods:{

      },
    computed: {
      //1.2引入vuex管理的数据
      ...mapState(['Classify'])
    },
    mounted(){
//      this.$store.dispatch('receive_Classify',()=>{
//        this.$nextTick(() => {new BScroll(this.$refs.leftWrapper, {probeType: 2, click: true})})
//      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .categorybox
   width 100%
   height 100%
   .topHeader
    width 100%
    display flex
    padding: 0 15px
    border-bottom: 1px solid #cbcbcb
    height: 40px
    z-index: 11
    text-align center
    line-height 40px
    a
      display: block
      font-size: 16px
      font-weight: 200
      color:rgb(77,85,93)
      margin-right -13px
      margin-left 77px
      &.active
        color:red
        border-bottom 2px solid red
</style>
