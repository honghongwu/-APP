<template>
       <div>
          <div class="LandWarp">
              <!--头部-->
              <div class="landHeader">
                <!--返回箭头-->
                <div class="back" @click="$router.back()">
                  <svgImage className="icon" type="#icon-fanhui"></svgImage>
                </div>
                <!--注册-->
                <!--<div class="register-wrap" v-show="showRegister">-->
                  <!--<span v-on:click="ToRegister">马上注册</span>-->
                <!--</div>-->
                <div class="mologo"></div>
                <div class="LandDiv">
                  <div class="tab">
                    <div class="tab-item" @click="setLoginWay(true)" :class="{current:loginWay}">普通登陆</div>
                    <div class="tab-item" @click="setLoginWay(false)" :class="{current:!loginWay}">动态短信登录</div>
                  </div>
                </div>
              </div>
              <!--表单1-->
              <form class="loginForm" v-if="loginWay"  v-show="showLogin">
                <section class="input_container phone_number">
                  <svgImage className="icon" type="#icon-yonghu3"></svgImage>
                  <input type="text" placeholder="用户名" v-model="username">
                </section>
                <section class="input_container">
                  <svgImage className="icon" type="#icon-mima"></svgImage>
                  <input type="password" placeholder="输入密码" v-model="password">
                </section>
              </form>
              <!--表单2-->
              <form class="loginForm" v-else>
                <section class="input_container">
                  <svgImage className="icon" type="#icon-shouji"></svgImage>
                  <input type="text" placeholder="已注册的手机号">
                  <input type="text" placeholder="输入图片内容">
                  <input type="password" placeholder="密码">
                </section>
              </form>
              <!--忘记密码-->
              <div class="forget">
                <router-link to="/">忘记密码？</router-link>
              </div>
              <!--登陆-->
              <div class="landButton">
                <div class="landWZ">
                  <span :click="login">登陆</span>
                </div>
              </div>
            </div>




         <!--<div class="log-email">-->
           <!--<input type="text" placeholder="Email"-->
                  <!--:class="'log-input' + (account==''?' log-input-empty':'')"-->
                  <!--v-model="account">-->
           <!--<input type="password" placeholder="Password"-->
                  <!--:class="'log-input' + (password==''?' log-input-empty':'')"-->
                   <!--v-model="password">-->
           <!--<a href="javascript:;" class="log-btn" @click="login">-->
             <!--Login-->
           <!--</a>-->
         <!--</div>-->

      </div>
</template>
<script>
//  import {mapActions} from 'vuex'
//  import {imgBaseUrl} from '../../common/utils/env'
//  import {getcaptchas, mobileCode, phoneLogin, accountLogin} from 'getBase'
   import {mapState} from 'vuex'
  export default{
    data(){
      return{
//          isLoging: false,
//          account: '',
//          password: ''
        }
    },
    computed: {
      //1.2引入vuex管理的数据
      ...mapState(['Classify'])
    },
    components:{

    },
    methods:{
      // 设置登录方式
      setLoginWay(loginWay) {
        this.loginWay = loginWay
      },
      toggleShow(){
        this.isShow=!this.isShow
      },
      denglu(){

      },
      //
      //登录逻辑
//      login(){
//        if(this.account!='' && this.password!=''){
//          this.toLogin();
//        }
//      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
      .LandWarp
        width 100%
        height 160px
        .landHeader
          padding-top 25px
          padding-left 45px
          width 100%
          height 100%
          background-image url("../../components/img/land.png")
          background-repeat no-repeat
          .back
            position: absolute
            top: 10px
            left: 0
            .icon
              width 30px
              height 30px
              margin-left 15px
          .mologo
            background-image url("../../components/img/logo.png")
            background-repeat no-repeat
            background-size 25%
            background-position: center
            height 49px
            padding-top 40px
            margin-right 70px
          .LandDiv
            text-align center
            .tab
              text-align center
              height 44px
              margin-top 27px
              margin-left -50px
              margin-right 30px
              background-color: rgba(255,255,255,0.3)
              .tab-item
                float left
                width 50%
                height 44px
                line-height 44px
                color #ffffff

              .current
                background-color #a7bcff
                vertical-align middle
        .loginForm
          height 92px
          padding-left 29px
          padding-top 15px
          input
           border-bottom 2px solid #bbaaff
           padding 7px
           font-size 13px
          .icon
            width 20px
            height 20px
            margin-left 5px
            margin-top 8px
        .forget
          float right
          display block
          margin-top 10px
          margin-right 25px
        .landButton
          text-align: center
          width 345px
          height 45px
          margin-top 35px
          .landWZ
            width 100%
            height 100%
            border-radius: 6px
            background: #2ec975
            text-align: center
            margin-left 10px
          span
            display: block
            letter-spacing: 5px
            margin: 0 10%
            border-radius: 6px
            color #fff
            text-align center
            vertical-align middle
            height 45px
            line-height 45px

</style>
