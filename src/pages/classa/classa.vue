<template>
    <div>
      <div class="kindbox">
        <!--左侧-->
        <div class="leftbox" ref="leftWrapper">
          <ul v-if="Classify" class="leftUL" @click="getBran">
            <li v-for="(kind,index) in Classify.categorys" class="leftLI"
                :key="index" :dataId="kind.cateid">
              {{kind.name}}
            </li>
          </ul>
        </div>
        <!--右侧-->
        <div class="kindbox2">
          <div class="rightbox" ref="rightWrapper">
            <div v-for="(classa,index) in ClassifyB.cate_list" :key="index" class="rightDiv" >
              <div class="remen">
                <span>{{classa.title}}</span>
              </div>
              <ul class="rightUL">
                <li v-for="(item,index) in classa.list">
                  <img :src="item.logo || item.photo" alt="">
                  <span class="classp">{{item.name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default{
    computed: {
      //1.2引入vuex管理的数据
      ...mapState(['Classify','ClassifyB'])
    },
    mounted(){
      let obj={
        do:'getChildren',
        pet_type:'dog',
        system:'wap',
        version:'303',
        owner:'88888'
      }
      //传参数静态拼接显示
      this.$store.dispatch('receive_ClassifyB',obj,()=>{
          this.$nextTick(() => {new BScroll(this.$refs.rightWrapper, {probeType: 2, click: true})})
      })
      this.$store.dispatch('receive_Classify',()=>{
        this.$nextTick(() => {new BScroll(this.$refs.leftWrapper, {probeType: 2, click: true})})
      })

    },
    methods:{
      getBran(event){
        let dataId= event.target.getAttribute('dataId')
        console.log(dataId)
        let obj={
          do:'getChildren',
          pet_type:'dog',
          system:'wap',
          version:'303',
          owner:dataId
        }
        //传参数静态拼接
        this.$store.dispatch('receive_ClassifyB',obj)
    },
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .kindbox
    width 100%
    position absolute
    top 41px
    left 0
    bottom 66px
    overflow hidden
    display flex
    .leftbox
      width 70px
      .leftUL
        &>li
          padding 10px 0
          margin-top 17px
          border-bottom 2px solid #f3f4f5
          border-right 3px solid #f3f4f5
          width 70px
          height 15px
          font-size 14px
          margin-left 7px
    .kindbox2
      width 100%
      .rightbox
        .rightDiv
          .remen
            &>span
              margin-left 15px
              display block
              margin-top 20px
          .rightUL
            width 100%
            display flex
            flex-wrap wrap
            li
              width 29%
              margin-top 10px
              img
               width 100%
               margin-left 20px
              span
               font-size 13px
               margin-left 30px
               display block
               text-align center
</style>
