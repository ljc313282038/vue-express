<template>
  <div>
    <div class="denlu_box">
      <div class="username_box" :class="{border:border1==true}">
        <label for="username">请输入用户名</label>
        <input type="text" class="username" name="username" id="username" v-model="userName" autocomplete="off" @focus='fouce(1)'/>
      </div>
      <span class="error">{{errorusername.errortext}}</span>
      <div class="password_box" :class="{border:border2==true}">
        <label for="password">请输入用户名</label>
        <input type="text" class="password" name="password" id="password" v-model="passWord" autocomplete="off" @focus='fouce(2)' >
      </div>
      <span class="error">{{errorpasswor.errortext2}}</span>
      <div class="btnBox">
        <div class="btn" @click="cancel">取消</div>
        <div class="btn" @click="onlogin">确定</div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      border1: false,
      border2: false
    }
  },
  computed: {
    errorusername() {
      let status, errortext
      if (!/@/g.test(this.userName)) {
        status = false,
          errortext = "没有@"
      } else {
        status = true,
          errortext = ""
      }
      if (!this.userflag) {
        errortext = "";
        this.userflag = true
      }
      return {
        status,
        errortext
      }
    },
    errorpasswor() {
      let status, errortext2
      if (!/^\w{1,6}$/g.test(this.passWord)) {
        status = false,
          errortext2 = "1-6位数"
      } else {
        status = true,
          errortext2 = ""
      }
      if (!this.userflag2) {
        errortext2 = "";
        this.userflag2 = true
      }
      return {
        status,
        errortext2
      }
    }
  },
  methods: {
    onlogin() {
      if (!this.errorpasswor.status || !this.errorusername.status) {
        alert("密码或用户明错误")
      } else {
        this.$http.post('/api/login/onlogin', { userName: this.userName, passWord: this.passWord }).then((data) => {
          //登录成功后返回的值
          var onloginData = data.body;
          console.log(onloginData);
          //组件向外面传递方法
          this.$emit('hasLogin', onloginData);
        }, (data) => {
          console.log("err");
        })
      }
    },
    cancel() {
      this.$emit('cancel');
    },
    fouce(x) {
    	if (x==1) {
    		 this.border1 = true;
    		 this.border2 = false;
    	}else{
    		this.border2 = true;
    		this.border1 = false;
    	}
    }

  }
}

</script>
<style type="text/css" scoped>
.denlu_box {
  width: 100%;
}

.btnBox {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.border {
  border: 1px solid #48caf3 !important
}

.username_box,
.password_box {
  width: 100%;
  border: 1px solid #ccc;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  margin: 10px auto 0;
  text-align: left;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
}

.username_box label,
.password_box label {
  margin-right: 10px;
}

.username_box input,
.password_box input {
  width: 200px;
  height: 30px;
  border: none;
  outline: none;
}

.btn {
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #48caf3;
  color: #fff;
  margin-top: 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.btn:nth-child(1) {
  margin-right: 20px;
  background-color: #ccc;
  color: #333;
}

.error {
  margin: 0 auto;
  display: block;
  width: 80%;
  color: #ccc;
}

</style>
