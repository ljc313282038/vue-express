<template>
  <div class="lunboBox">
    <div style="width:592px; float:left">
      <el-carousel :interval="5000" height='320px'>
        <el-carousel-item v-for="item in imgmap" :key="item.adv">
          <img :src="item.adv">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="rightBanner">
      <a v-for="item in imgmap2" :key="item.adv">
     <img :src="item.adv">
  </a>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      imgmap: [
        { adv: require('../../assets/images/0.jpg') },
        { adv: require('../../assets/images/1.jpg') },
        { adv: require('../../assets/images/2.jpg') },
        { adv: require('../../assets/images/3.jpg') }
      ],
      imgmap2: [
        { adv: require('../../assets/images/4.jpg') },
        { adv: require('../../assets/images/5.jpg') }
      ]
    }
  }
}

</script>
<style>
.lunboBox{
  height: 320px;
}
.rightBanner {
  float: right;
  padding-left: 2px;
  height: 100%;
  box-sizing: border-box;
}

.rightBanner a {
  width: 290px;
  height: 160px;
  display: block;
  font-size: 0;
}
.rightBanner a:nth-child(2){
  padding-top: 2px;
}
.rightBanner a img {
  width: 100%;
  height: 100%;
   font-size: 0px;
}

.el-carousel__item img {

  font-size: 0px;
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
