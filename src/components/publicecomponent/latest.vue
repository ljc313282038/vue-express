<template>
    <div class="latestBox">
        <div class="btnBox">
            <div class="btn" @click="swich(1)" :class='{active:myactive==1}'>24小时最新</div>
            <div class="btn" @click="swich(2)" :class='{active:myactive==2}'>24小时最热</div>
        </div>
        <div class="altestext">
            <ul>
                <li v-for="(item,index) in latestData " :key="item.id"><a :href="'page/pageContent/'+item.id">{{item.latestTit}}</a></li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from "vuex" // 引入mapState 
import Hub from './hub.js' //兄弟之间传递值事件中心
export default {
    name: 'latest',
    components: {

    },
    data() {
        return {
            myactive: 1,
            latestData: "",

        }
    },
    methods: {
        swich(index) {
            this.myactive = index;
        }
    },
    //兄弟之间传递值
    created() { //事件钩子 组件渲染完成后
        Hub.$on('change', (data) => { 
            this.msg = data;
            console.log(this.msg+1);
        });
    },
    mounted: function() {
        this.$http.get('/api/login/latest', { params: { val: this.myactive } }).then((res) => {
            // 响应成功回调
            this.latestData = res.data.contentLatest;
        }, function(res) {
            // 响应错误回调
            // console.log(err);
        });
    },
    watch: {
        myactive: function(val) {
            this.$http.get('/api/login/latest', { params: { val: val } }).then((res) => {
                // 响应成功回调
                this.latestData = res.data.contentLatest;

            }, function(res) {
                // 响应错误回调
                // console.log(err);
            });
        }
    },
    computed: mapState({

    })
}
</script>
<style type="text/css" scoped>
.latestBox {
    width: 100%;
    height: 200px;
    margin-top: 20px;
}

.btnBox {
    display: flex;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    color: #333;
}

.btnBox .btn {
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
    border-bottom: 2px solid #f2f2f2;
}

.active {
    border-bottom: 2px solid #48caf3!important;
}

.altestext ul li {
    width: 100%;
    line-height: 40px;
    background: #fff;
    text-align: left;
    padding: 0 8px;
}

.altestext ul li a {
    font-size: 13px;
    color: #666;
    cursor: pointer;

}
</style>