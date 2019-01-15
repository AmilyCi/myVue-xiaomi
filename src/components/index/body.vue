<template>
  <div class= "body-box"> 
    <mi-starGoods :body='body'></mi-starGoods>
    <mi-newGoods :body="body"></mi-newGoods>
  </div>
</template>
<script>
import starGoods from "./starGoods.vue";
import newGoods from "./newGoods.vue"

export default {
  props: ['body'],
  components: {
    'mi-starGoods': starGoods,
    'mi-newGoods': newGoods
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