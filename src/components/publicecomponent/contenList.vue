<template>
    <div class="tj">
        <ul class="conentBox">
            <li v-for="(item,index) in rott" :key="item.index" @click="pageContentA(item)">
                <div :data-id='item.id'>
                    <div class="title">
                        <!-- <h2 :href="'page/pageContent/'+item.id">{{item.titile}}</h2> -->
                        <h2> {{item.title}}</h2>
                    </div>
                    <div class="tag">
                        <span class="time"><i></i><a>{{item.time}}</a></span>
                        <span class="read"><i></i><a>{{item.read}}</a></span>
                        <!-- <span class="talk"><i></i><a>{{item.talk}}</a></span> -->
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import { mapState } from "vuex" // 引入mapState 
export default {
    props: {
        mytype: {
            type: String, //这样可以指定传入的类型，如果类型不对，会警告
            default: "tj"
        }
    },
    name: 'tj',
    data() {
        return {
            rott: '',
            imgmap: [
                { adv: require('../../assets/images/0.jpg') },
                { adv: require('../../assets/images/1.jpg') },
                { adv: require('../../assets/images/2.jpg') },
                { adv: require('../../assets/images/3.jpg') }
            ],
            imgmap2: [
                { adv: require('../../assets/images/4.jpg') },
                { adv: require('../../assets/images/5.jpg') }
            ],
            imgmap3: [
                { adv: require('../../assets/images/1_yangdengxian.jpg') },
            ]
        }
    },
    methods: {
        ajax() {
            this.$http.get('/api/login', { params: { rot: this.mytype } }).then((res) => {
                this.rott = res.data;
            }, (res) => {
                // body...
            })
        },
        pageContentA(item) {
            //修改数据中心里的值
            var items = item;
            this.$store.commit('seTpageContentAData', items);
            var obj = JSON.stringify(this.$store.state.pageContentAData); //方法将json对象转换成字符串形式
            localStorage.setItem('ms', obj);
            this.$router.push({ path: 'page/pageContent' });
        }
    },
    created() {
        this.$nextTick(
            this.ajax()
        )

    },
    watch: {
        "mytype": "ajax" //监听父组件传过来的值执行ajax
    },

}
</script>
<style scoped>
.tag span {
    display: flex;
    cursor: pointer;
}

.tag span i {
    width: 16px;
    height: 16px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
}

.time i {
    background: url('../../assets/images/1_yangdengxian.jpg');
}

.read i {
    background: url('../../assets/images/1_yangdengxian.jpg');
}

.talk i {
    background: url('../../assets/images/1_yangdengxian.jpg');
}

.tj {
    width: 100%;
    color: red
}

.conentBox {
    width: 100%;
}

.conentBox li {
    text-align: left;
    width: 100%;
    height: 100px;
    padding: 22px 24px;
    background: #fff;
    border-bottom: 1px solid #f4f4f4;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    position: relative;
}

.tag span {
    padding-right: 20px;
    display: flex;
    align-items: center;
}

.tag span i {
    margin-right: 10px;
    border-radius: 80px;
}

.title {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    line-height: 24px;
    height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 11px;
}

.tag {
    display: flex;
    align-items: center;
    height: 24px;
    line-height: 24px;
}
</style>