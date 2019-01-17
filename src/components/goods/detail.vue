<template>
  <div>
    <div class="tab">
      <span :class="{'active': tabState}" @click="tabEvent1">商品详情</span>
      <span :class="{'active': !tabState}" @click="tabEvent2">参数</span>
    </div>
    <div class="detail" v-show="tabState">
      <img v-for="item in detailList" :src="item"/>
    </div>
    <div class="attr" v-show="!tabState">
      <img v-for="item in attrList" :src="item"/>
    </div>
  </div>
</template>
<script>
  export default {
    props:['detailData'],
    data () {
      return {
        tabState: true,
        detailList: [],
        attrList: []
      }
    },
    created () {
      this.detailList = this.detailData.detailList;
      this.attrList = this.detailData.attrList;
    },
    methods: {
      tabEvent1 () {
        this.tabState = true;
      },
      tabEvent2 () {
        this.tabState = false;
      }
    }
  }
</script>
<style lang="less" scoped>
  .tab {
    width: 100%;
    font-size: 0;
    font-family: 'Microsoft YaHei';
    height: 45px;
    box-sizing: border-box;
    background: #fff;
    border-top: 1px solid #d5d5d5;
    span {
      margin-top: 6px;
      box-sizing: border-box;
      width: 50%;
      font-size: 16px;
      color: #333;
      line-height: 30px;
      text-align: center;
      display: inline-block;
      &:first-child {
        border-right: 1px solid #d5d5d5;
      }
      &.active {
        color: #ff5722;
      }
    }
  }
  .detail,.attr {
    width: 100%;
    font-size: 0;
    img {
      width: 100%;
    }
  }
</style>