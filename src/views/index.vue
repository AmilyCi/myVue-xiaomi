<template>
  <div class="app">
    <div :style="indexStyle" ref="index">
      <mi-load :load="load"></mi-load>
      <mi-header @searchEvent="searchHandle" :opac="headerOpacity"></mi-header>
      <div v-show='a'>
        <mi-banner :banner="banner"></mi-banner>
        <mi-footer></mi-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import util from "../../lib/util.js";
  import load from "../components/loading.vue";
  import footer from "../components/index/footer.vue";
  import header from "../components/index/header.vue";
  import banner from "../components/index/banner.vue";
  import data from "../../data.json";

  export default {
    components: {
      'mi-load': load,
      'mi-footer': footer,
      'mi-header': header,
      'mi-banner': banner
    },
    created () {
      let mi = this;
      setTimeout(function(){
        mi.a = true;
      },2000)
      mi.banner = data.banner
    },
    mounted () {
      let mi = this;
      let height = util.screenSize().width;
      this.$refs.index.onscroll = function () {
        mi.headerOpacity = this.scrollTop / height;
      };
    },
    data () {
      return {
        banner: {},
        a: false,
        load: false,
        searchState: false,
        indexStyle: {
          height: util.screenSize().height + 'px',
          'overfl-y': 'scroll',
          width: '100%'
        },
        headerOpacity: 0,
      }
    },
    methods: {
      searchHandle (Boolean) {
        if(Boolean) {
          this.searchState = true;
        } else {
          this.searchState = false;
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
    height: 100%;
  }
</style>