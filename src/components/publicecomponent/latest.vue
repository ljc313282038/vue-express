<template>
	<div class="latestBox">
		<div class="btnBox">
			<div class="btn" @click="swich(1)" :class='{active:myactive==1}'>24小时最新</div>
			<div class="btn" @click="swich(2)" :class='{active:myactive==2}'>24小时最热</div>
		</div>
		<div class="altestext">
			
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapState} from "vuex"  // 引入mapState 
export default {
  name: 'latest',
  components: {
  
  },
  data() {
    return {
    	myactive:1
    }
  },
  methods: {
   swich(index){
   	this.myactive=index;
   	if(index==1){

   	}
   }
  },
  computed: mapState({
    
  })
}

</script>
<style type="text/css" scoped>
	.latestBox{
		width: 100%;
		height: 200px;
		margin-top: 20px;
	}
	.btnBox{
		display: flex;
		justify-content: center;
		height: 40px;
		line-height: 40px;
		color: #333;
	}
	.btnBox .btn{
		width: 50%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #fff;
		border-bottom: 2px solid #f2f2f2;
	}
	.active{
		border-bottom: 2px solid #48caf3!important;
	}
</style>
