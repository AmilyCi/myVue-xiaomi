<template>
  <div class="app">
    <div :style="indexStyle" ref="index">
    <mi-load :load="load"></mi-load>
    </div>
  </div>
</template>
<script>
  import util from "../../lib/util.js"
  import load from "../compoments/loading.vue"

  export default {
    components: {
      'mi-load': load
    },
    data () {
      return {
        indexStyle: {
          height: util.screenSize().height + 'px',
          'overflow-y': 'scroll',
          width: 100%
        }
      }
    }
  }
</script>
<style lang='less' scope>
  .app{
    background: #fff;
    overflow-y: scroll;
    width: 100%;
    height:100%;
  }
</style>