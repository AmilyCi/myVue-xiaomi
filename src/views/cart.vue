<template>
  <div class="cart">
    <mi-header></mi-header>
    <div class="main">
    
    </div>
  </div>
</template>
<script>
import data from "../../data.json";
import header from "../components/cart/header.vue";

export default {
  components: {
    'mi-header': header
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
  .cart {
    width: 100%;
    height: 100%;
    background: #eee;
    .main {
      width: 100%;
      background: #eee;
      overflow-y: scroll;
    }
  }

</style>