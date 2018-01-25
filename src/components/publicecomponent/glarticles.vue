<template>
    <div class="carBox">
        <el-card class="box-card" v-for="item in arcitle" :key="item.id">
            <div slot="header" class="clearfix">
                <span class="arcitleTitle">{{item.type}}<a>{{item.time}}</a></span>
                <el-button style="float: right; padding: 3px 8px" type="text" :data-id="item.id" @click="bianji(item.id)">编辑</el-button>
                <el-button style="float: right; padding: 3px 0" :data-id="item.id" type="text" @click="delet(item.id)">删除</el-button>
            </div>
            <div class="text item">
                {{item.title}}
            </div>
        </el-card>
        
    </div>
</template>
<script>
import { mapState } from "vuex"; // 引入mapState 
export default {
    name: 'glarticles',
    data() {
        return {
         arcitle:"",
         arcitleId:''
        }
    },
     computed: mapState({
     userName: 'userName'
  }),
    methods: {
      bianji(id){
           this.$router.push({ name: "onwrite",query: {update: true,id:id}});
      },
      delet(id){
      console.log(id);
      this.$http.get('/api/login/delet' , { params:{id:id}}).then((res) => {
        var id=JSON.stringify(res.data);

        console.log(id+"sss");
       
          this.open();
          console.log("文章已删除");
        
      }, (res) => {
         throw err;
      })
    },
     open() {
            this.$message({
                message: '文章已删除',
                type: 'success'
            });
             window.location.reload();
        }
      
    },


created() {     
      this.$http.get('/api/glarticles',{ params:{author:this.userName}}).then((res) => {
        this.arcitle=res.data;
      }, (res) => {
         console.log('未登录');
      })
  }
}
</script>
<style scoped>
.carBox{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
}
 .text {
    font-size: 14px;
  }
  .arcitleTitle{
    font-size: 20px;
    float: left;
    text-align: left;
    cursor: pointer;
  }
  .el-card, .el-notification {
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,0); 
}
  .arcitleTitle a{
    color: #666;
    font-size: 14px;
    margin-left: 8px
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 490px;
    margin-bottom: 10px;
  }
  .box-card:nth-child(odd){
    margin-right: 10px;
  }
</style>