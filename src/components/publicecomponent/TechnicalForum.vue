<template>
  <div class="Technical">
    <h3 class="feed_new_tit">
            <span class="line"></span><span  @click="eve" class="txt">技术论坛</span>
    </h3>
    <div class="Technicalbox">
      <div class="Technicallist" v-for="(item,index) in Technical ">
        <a :href="item.url"><img :src="item.img"></a>
        <span>
        <a :href="item.url">{{item.Tetit}}</a>
        <p>{{item.text}}</p>
        </span>
      </div>
      <div class="Technicalbox2">
        <a v-for='item in Technical2':href="item.url">{{item.Tetit}}</a>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState } from "vuex" // 引入mapState
import Hub from './hub.js'//兄弟之间传递值事件中心 
export default {
  name: 'Technical',
  data() {
    return {

    }
  },
  methods: {
    //兄弟之间传递值
    eve() {
        Hub.$emit('change',"hehe"); //Hub触发事件
    },
    
  },
  computed: mapState({
    Technical: 'Technical',
    Technical2:'Technical2'
  })
}

</script>
<style type="text/css" scoped>
.feed_new_tit{padding: 10px}
.Technical {
  background: #fff;
  cursor: pointer;
}
.Technicalbox{
  padding: 10px;
}
.Technicallist {
  display: flex;;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
      padding-bottom: 20px;
    border-bottom: 1px dashed #ddd;
}

.Technicallist>a {
  border: 1px solid #ccc;
}

.Technicallist>a img {
  width: 55px;
  height: 55px;
}
.Technicallist span p{
  font-size: 12px;
  color: #9c9c9c;
}
.Technicallist span {
  display: inline-block;
  box-sizing: border-box;
  padding-left: 10px;
  text-align: left;
}
.Technicallist span a{
  font-size: 14px;
  padding-bottom: 2px;
  display:block;
}
.Technicallist span a:hover{
  color:red;
}
.Technicalbox2{text-align: left;}
.Technicalbox2 a{
  display: inline-block;
  padding: 8px;
}.Technicalbox2 a:hover{
  color: red
}
h3.feed_new_tit {
  font-size: 16px;
  color: #4f4f4f;
  height: 28px;
  margin-bottom: 7px;
}

h3.feed_new_tit .line {
  display: block;
  float: left;
  width: 3px;
  height: 22px;
  background: #cf2730;
  overflow: hidden;
  margin: 0 5px 0 0;
}

h3.feed_new_tit .txt {
  display: block;
  float: left;
  font-size: 16px;
  color: #2c3033;
  font-weight: normal;
}

</style>
