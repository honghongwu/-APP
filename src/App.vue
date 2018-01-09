<template>
    <div>
      <ele-footer />
    </div>
</template>
<script>
  import footer from './components/footer/footer.vue'
  export default{
    components:{
      'ele-footer':footer,
    },
    //登陆验证
//    mounted(){
//      //组件开始挂载时获取用户信息
//      this.getUserInfo();
//    },
//    methods: {
//      //请求用户的一些信息
//      getUserInfo(){
//        this.userInfo = { //？？？？？？
//          nick: 'Doterlin',
//          ulevel: 20,
//          uid: '10000',
//          portrait: 'images/profile.png'
//        }
//
//        //获取信息请求
//        ts.$http.get(url, {
//          //参数
//          "params": this.userInfo
//        }).then((response) => {
//          //Success
//          if(response.data.code == 0){
//            this.$store.commit('updateUserInfo', this.userInfo);
//          }
//        }, (response) => {
//          //Error
//        })
//
//      }
//    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
