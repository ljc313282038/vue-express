<template>
    <div>
        <template>
            <div class="nav_box">
                <ul class="nav">
                    <li v-for="(item,index) in productList" :key="item.key" @click="xuanze(index,item.key)" :class="{active:index==nowIndex}">{{item.name}}</li>
                </ul>
            </div>
        </template>
        <div class="container">
            <adv></adv>
            <div class="left_main">
                <lunbo class="lunbo"></lunbo>
                <contentList :mytype="mytypedata"></contentList>
            </div>
            <div class="right">
                <TechnicalForum></TechnicalForum>
                <latest></latest>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from "vuex" // 引入mapState 
import adv from '@/components/publicecomponent/adv'
import latest from '@/components/publicecomponent/latest'
import contentList from '@/components/publicecomponent/contenList'
import lunbo from '@/components/publicecomponent/lunbo'
import TechnicalForum from '@/components/publicecomponent/TechnicalForum'
export default {
    components: {
        lunbo,
        adv,
        latest,
        TechnicalForum,
        contentList

    },
    name: 'pageIndex',
    data() {
        return {
            mytypedata: "tj"
        }
    },
    methods: {
        xuanze(index, item) {
            this.mytypedata = item;
            this.$store.state.nowIndex = index;

        }
    },
    computed: mapState({
        productList: 'productList',
        nowIndex: "nowIndex"
    })
}
</script>
<style scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    margin-top: 20px;
}

.lub {
    width: 100%;
}

.left_main {
    float: left;
    width: 885px;
    margin-bottom: 40px;
}

.right {
    float: right;
    width: 300px;
    display: block;
    overflow: hidden;
    background: #f3f3f3;
}

.nav_box {
    width: 100%;
    background: #eaebec;
    border-top: 1px solid #ddd;
    box-shadow: inset 0 -1px 0 0 #ddd;
}

.nav {
    width: 1200px;
    margin: 0 auto;
    height: 43px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.nav li {
    width: 80px;
    height: 100%;
    line-height: 43px;
    font-size: 15px;
    color: #4f4f4f;
}

.active {
    border-bottom: 4px solid #48caf3;
    box-sizing: border-box;
}
</style>