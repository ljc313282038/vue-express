<template>
    <div>
        <div class="denlu_box">
            <div class="username_box" :class="{border:border1==true}">
                <label for="username">请输入用户名</label>
                <input type="text" class="username" name="username" id="username" v-model="userName" autocomplete="off" @focus='fouce(1)' />
            </div>
            <span class="error">{{errorpasswor.errortext1}}</span>
            <div class="password_box" :class="{border:border2==true}">
                <label for="password">请输入密码</label>
                <input type="text" class="password" name="password" id="password" v-model="passWord" autocomplete="off" @focus='fouce(2)'>
            </div>
            <span class="error">{{errorpasswor.errortext2}}</span>
            <div class="password_box" :class="{border:border3==true}">
                <label for="password">请再次输入密码</label>
                <input type="text" class="password" name="password" id="password" v-model="agenpassWord" autocomplete="off" @focus='fouce(3)'>
            </div>
            <span class="error">{{errorpasswor.errortext3}}</span>
            <div class="btnBox">
                <div class="btn" @click="cancel">取消</div>
                <div class="btn" @click="reslogin">确定</div>
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
            agenpassWord: "",
            border1: false,
            border2: false,
            border3: false,
            errorpasswor: {
                errortext1: '',
                errortext2: '',
                errortext3: ''
            }
        }
    },
    computed: {

    },
    methods: {
        reslogin() {

            this.$http.post('/api/login/reslogin', { userName: this.userName, passWord: this.passWord, agenpassWord: this.agenpassWord }).then((data) => {
                //登录成功后返回的值
                var onResData = data.body;
                if (data.body.code == 0) {
                    this.errorpasswor.errortext1 = data.body.masg
                } else if (data.body.code == 1) {
                    this.errorpasswor.errortext2 = data.body.masg
                } else if (data.body.code == 2) {
                    this.errorpasswor.errortext3 = data.body.masg
                } else {
                    // data.body.masg
                    this.$emit('hasRes');
                    this.open()
                }
                console.log(onResData);
                //组件向外面传递方法
                //t
            }, (data) => {
                console.log("err");
            })

        },
        open() {
            this.$message({
                message: '恭喜你，注册成功',
                type: 'success'
            });
        },
        cancel() {
            this.$emit('cancel', "show_res");
        },
        fouce(x) {
            if (x == 1) {
                this.border1 = true;
                this.border2 = false;
                this.border3 = false;
            } else if (x == 2) {
                this.border2 = true;
                this.border1 = false;
                this.border3 = false;
            } else {
                this.border3 = true;
                this.border2 = false;
                this.border1 = false;
            }
        }

    }
}
</script>
<style type="text/css" scoped>
.denlu_box {
    width: 100%;
    z-index: 1000
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