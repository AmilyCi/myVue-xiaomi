<template>
  <div class="app">
    <div :style="indexStyle" ref="index">
      <mi-load :load="load"></mi-load>
      <div v-show='a'>
        <mi-footer></mi-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import util from "../../lib/util.js"
  import load from "../components/loading.vue"
  import footer from "../components/index/footer.vue"

  export default {
    components: {
      'mi-load': load,
      'mi-footer': footer
    },
    created () {
      let mi = this;
      setTimeout(function(){
        mi.a = true;
      },2000)
    },
    data () {
      return {
        a: false,
        load: false,
        indexStyle: {
          height: util.screenSize().height + 'px',
          'overfl-y': 'scroll',
          width: '100%'
        }
      }
    }
  }
</script>
<style lang='less' scope>
  // 当 <style> 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素
  .app{
    background: #fff;
    overflow-y: scroll;
    width: 100%;
    height:100%;
  }
</style>