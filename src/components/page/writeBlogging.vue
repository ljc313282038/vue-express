<template>
    <div class="writeBloggingBox">
        <div class="arcitleMen">
            <div v-for="(item,index) in nav" :key="index" :data-type="item.type" @click="active(index,item.type)"  :class="{'menList':true, 'menListActive':Active==index}">{{item.navList}}</div>
        </div>
         <div id="main" class="main">
             <router-view></router-view>
         </div>
    </div>
</template>

<script>
export default {
    name: 'writeBlogging',
    components: {
        // onwrite
    },
    data() {
        return {
            Active: 0, 
            Acontent: '',
            nav:[
            { navList:"发布文章",type:'onwrite'},
            { navList:"管理文章",type:'glarticles'},
            { navList:"管理评论",type:'1'}]
        }
    },
    methods: {
        active(index,data){
        this.Active=index;
        this.$router.push({ path: "/page/writeBlogging/"+data });
        console.log(data);
        }
    }
}
</script>
<style scoped>
.writeBloggingBox {
    width: 1200px;
    margin: 30px auto 0;
}
.writeBloggingBox{
    display: flex;

}
.main {
    width: 1000px;
}

.arcitleMen{
    width: 180px;
    margin-right: 20px;
    
}
.menList{
    width: 100%;
    line-height: 40px;
    color: #000;
    text-align: center;
    height: 40px;
    font-size: 16px;
    background: #fff;
    cursor: pointer;
}
.menListActive{
    text-align: center;
     width: 100%;
    line-height: 40px;
     color: #fff;
     font-size: 16px;
    background-color: #409EFF;
}

</style>