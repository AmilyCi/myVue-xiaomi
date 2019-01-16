<template>
  <div class= "body-box"> 
    <mi-starGoods :body='body'></mi-starGoods>
    <mi-newGoods :body="body"></mi-newGoods>
    <mi-intelligenceGoods :body="body"></mi-intelligenceGoods>
    <mi-newHomeGoods :body="body"></mi-newHomeGoods>
  </div>
</template>
<script>
import starGoods from "./starGoods.vue";
import newGoods from "./newGoods.vue";
import intelligenceGoods from "./intelligenceGoods.vue";
import newHomeGoods from "./newHomeGoods.vue";

export default {
  props: ['body'],
  components: {
    'mi-starGoods': starGoods,
    'mi-newGoods': newGoods,
    'mi-intelligenceGoods': intelligenceGoods,
    'mi-newHomeGoods': newHomeGoods
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