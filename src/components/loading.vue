<template>
  <div>
    <div class="base load-once" :class="{remove: !loadState}" v-show="loadStatus"></div>
    <transition name="fade">
      <div class="base load" v-if="load"></div>
    </transition>
  </div>
</template>
<script>
  export default {
    props: ['load'],
    data (){
      return {
        loadState: true,
        loadStatus: true
      }
    },
    mounted (){
      let mi = this;
      setTimeout(function(){
        mi.loadState = false;
        setTimeout(function(){
          mi.loadStatus = false;
        },500)
      },1500)
    }
  }
</script>
<style lang='less'>
  .base {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 300;
  }
  .load-once {
    background: #F87300 url(../images/mi_load.png) no-repeat center center;
    background-size: 80px;
    opacity: 1;
    transition: all 0.5s;
    &.remove {
      opacity: 0;
    }
  }
  .load {
    background: url(../images/loading.gif) no-repeat center center;
    background-size: 80px;
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>