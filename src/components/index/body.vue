<template>
  <div class= "body-box"> 
    <mi-starGoods :body='body'></mi-starGoods>
  </div>
</template>
<script>
import starGoods from "./starGoods.vue";

export default {
  props: ['body'],
  components: {
    'mi-starGoods': starGoods
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='less' scoped>
  .body-box {
    background: #f5f5f5;
  }
</style>