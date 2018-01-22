<template>
  <div id="app">
    <header style="padding: 0 40px;">

      <span><a class="mylogo"></a><a v-for="(item,index) in navlist" :key="item.navn" class="navA" @click="go(index)">{{item.navn}}</a></span>
      <span>
        <div class="searchBox"><input type="text" name="search"><a class="searchBtn">搜索</a></div>
        <div class="blog" @click="writeBlogging"><i class="xbk" ></i>写博客</div>
        <div class="logon">
          <a class="vdl" v-if="userName==''" @click="login">登录</a>
          <a class="ydl" v-else><i class="userAvatar"></i>{{userName}}</a>
          <a class="vdl" v-if="userName==''" @click="res">注册</a>
          <a v-else @click="tuichu">退出登录</a>
        </div>
      </span>
    </header>
    <router-view></router-view>
    <mydialog :showDialog="show_login" @on-close="closeDialog('show_login')">
      <logform @hasLogin="soccesLogin" @cancel="cancel"></logform>
    </mydialog>

     <mydialog :showDialog="show_res" @on-close="closeDialog('show_res')">
       <resform @hasRes="soccesres"  @cancel="cancel"></resform>
    </mydialog>
  </div>
</template>
<script>
import mydialog from '@/components/publicecomponent/mydialog'
import logform from '@/components/publicecomponent/logform'
import resform from '@/components/publicecomponent/resform'
import Hub from '@/components/publicecomponent/hub.js'
import { mapState } from "vuex" // 引入mapState 
export default {
  components: {
    mydialog,
    logform,
    resform
  },
  name: 'app',
  data() {
    return {
      show_login: false,
      show_res:false
    }
  },
  //通过计算属性将数据中心数据映射过来
  computed: mapState({
    navlist: 'navlist',
    userName: 'userName',
    passWord: 'passWord',
    userAvatar: 'userAvatar'
  }),
  methods: {
    login() {
      this.show_login = true
    },
    res(){   
      this.show_res=true
    },
    go(index){
        if(index==0){
            this.$router.push({ name: 'indexpage' });
        }
    },
    closeDialog(attr) {
      this[attr] = false
    },
    soccesLogin(data) {
      this.$store.state.userName = data;
      console.log(this.$store.state.userName);
      this.closeDialog("show_login")
    },
    soccesres(){
    
      this.closeDialog("show_res")
    },
    cancel(data){
      this.closeDialog(data)
    },
    tuichu() {
      this.$http.get('/api/exitLogin', {params:{data:0}}).then((res)=>{
           this.$store.state.userName = ""
      },(res)=>{
          console.log(ree);
      });
     
    },
    writeBlogging(){
     this.$router.push({ name: 'writeBlogging' });
    }
  },
  created() {     
      this.$http.get('/api/beforlogin').then((res) => {
        this.$store.state.userName = res.data;
      }, (res) => {
         console.log('未登录');
      })
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.mylogo{
  background-image: url(./assets/images/3d4f668531c7ed11befd3a25f1122b47.png);
  display: block;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

}
.userAvatar {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 100%;
  background-image: url('./assets/images/15828041.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #ccc;
  vertical-align: middle;
  margin-right: 6px;
}

.xbk {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 100%;
  background-image: url('./assets/images/xbk.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
  margin-right: 6px;
}


/*.on{ background-color: #41b883; color:#fff;}*/

.searchBox {
  display: flex;
  align-items: center;
}

.searchBox {
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-right: 20px
}

.searchBox>.searchBtn {
  width: 100%;
  height: 30px;
  background: none;
  display: inline;
  line-height: 30px;
  font-size: 12px
}

.searchBox input {
  border: none;
}

header {
  width: 100%;
  height: 50px;
  background: #fff;
  line-height: 50px;
  padding: 0 40px;
  min-width: 920px;
  justify-content: space-between;
  position: relative;
}

header {
  display: flex;
  cursor: pointer;
}

header .navA {
  background: #fff;
  display: block;
  padding: 0 16px;
  text-align: center;
  font-size: 16px;
  color: #3f3f3f
}

header span {
  display: flex;
  align-items: center;
}

.logon {
  display: flex;
  align-items: center;
}

.logon .vdl {
  width: 40px;
  vertical-align: middle;
  font-size: 14px;
}

.logon .ydl {
  vertical-align: middle;
  margin-right: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.blog {
  color: #666;
  font-size: 14px;
  margin-right: 20px;
  display: flex;
  align-items: center;
}
.v-note-wrapper .v-note-op{
  box-shadow: none!important;
  border: 1px solid #dcdfe6 !important;
      border-bottom: none !important;
}
.v-note-wrapper .v-note-panel{
   box-shadow: none!important;
  border: 1px solid #dcdfe6 !important;

}

</style>
