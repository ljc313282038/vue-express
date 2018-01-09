<template>
  <div class="adv">
    <img :src="dav">
    <img :src="adf">
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'adv',
  data() {
    return {
      dav: require('../../assets/images/banner.jpg'),
      adf: require('../../assets/images/201712131523198313.jpg'),
    }
  },
  methods: {

  }
}

</script>
<style type="text/css" scoped>
.adv {
  width: 1200px;
  margin:20px auto;
  display: flex;
}
.adv img{
}

</style>
