<template>
  <div class="wipper">
    <mi-img></mi-img>
    <mi-buyControl :goodsAttr="goodsAttr" ref="control"></mi-buyControl>
    <mi-detail :detailData="detailData"></mi-detail>
    <div class="addCart">
      <div class="home" @click="toHomeEvent"></div>
      <div class="add"><span @click="butEvent">加入购物车</span></div>
      <div class="cart"></div>
    </div>
      <mi-modal ref="alert" type="alert" >
        <div class="alert" slot="alert">
          <h5>您选择的产品</h5>
          <h6>{{ popInfo.title }}</h6>
          <p>{{ popInfo.ram }}  {{ popInfo.color }}</p>
        </div>
      </mi-modal>
  </div>
  
</template>
<script>
import data from "../../data.json";
import img from "../components/goods/img.vue";
import buyControl from "../components/goods/buyControl.vue";
import detail from "../components/goods/detail.vue";
import modal from "../components/modal.vue";

export default {
  components:{
    "mi-img": img,
    "mi-buyControl": buyControl,
    "mi-detail": detail,
    "mi-modal": modal
  },
  data () {
    return {
      goodsAttr: {},
      detailData: [],
      popInfo: {}
    }
  },
  created () {
    this.goodsAttr = data.detail.goodsAttr;
    this.detailData = data.detail;
  },
  methods: {
    toHomeEvent () {
      this.$router.replace({path:'/index'})
    },
    butEvent () {
      let checkInfo = this.$refs.control.submitBuyInfo();
      let info = {};
      info.title = data.detail.goodsAttr.title;
      info.ram = checkInfo.ram.text;
      info.color = checkInfo.color.text;
      this.popInfo = info;
      this.$refs.alert.modelOpen();
    }
  }
}
</script>
<style lang="less">
  .wipper {
    font-family: "Microsoft YaHei";
    .addCart {
      width: 100%;
      height: 50px;
      background: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      font-size: 0;
      border-top: 1px solid #efefef;
      div {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 0;
        overflow: hidden;
        &.home {
          width: 15%;
          color: #333;
          background: url("../images/svg/home.svg") no-repeat center center;
          background-size: 25px;
        }
        &.cart {
          width: 15%;
          color: #333;
          background: url("../images/svg/cart.svg") no-repeat center center;
          background-size: 25px;
        }
        &.add {
          width: 70%;
          color: #fff;
          height: 50px;
          span {
            text-align: center;
            height: 40px;
            line-height: 40px;
            background: #FF5722;
            margin: 5px auto 0 auto; 
            width: 94%;
            display: block;
            font-size: 16px;
          }
        }
      }
    }
    .alert {
      h5 {
        margin: 5px;
        text-align: center;
        font-weight: normal;
        color: #333;
        font-size: 16px;
      }
      h6 {
        margin: 10px;
        font-weight: normal;
        font-size: 14px;
        color: #ff8a27;
      }
      p {
        margin: 5px;
        line-height: 25px;
        font-size: 14px;
        color: #666;
      }
    }
  }
</style> 