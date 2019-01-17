<template>
  <div class="new-box">
    <div class="newGoodsBanner">
      <img :src="newGoodsBannerSrc"/>>
    </div>
    <div
    v-for="(good,index) in newGoodsList"
    :key="index"
    :class="{'item1': index % 2 === 0, 'item2': index % 2 !== 0}"
    @click="productEvent"
    >
      <div class="top">
        <img :src="good.imgSrc"/>
      </div>
      <div class="bottom">
        <span class="title">{{ good.title }}</span>
        <span class='desc'>{{ good.desc }}</span>
        <span class="price">{{ good.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['body'],
  data () {
    return {
      newGoodsBannerSrc: '',
      newGoodsList: []
    }
  }, 
  created () {
    
    this.newGoodsBannerSrc = this.body.newGoods.img;
    this.newGoodsList = this.body.newGoods.newGoodsList;
    console.log('newGoodsBannerSrc::::',this.newGoodsBannerSrc)
  },
  methods: {
    productEvent () {
      this.$router.push({path:'/goods'});
    }
  }
}
</script>
<style lang="less" scoped>
  .img100 {
    img {
      width: 100%;
    }
  }
  .item-bottom {
    .bottom {
      width: 100%;
      display: block;
      padding: 5px 10px;
      box-sizing: border-box;
      font-size: 16px;
      .title {
        width: 100%;
        display: block;
        color: #333;
        line-height: 25px;
      }
      .desc {
        width: 100%;
        display: block;
        color: #666;
        font-size: 14px;
      }
      .price {
        width: 100%;
        display: block;
        color: #ff601e;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .new-box {
    margin-top: 2px;
    overflow: hidden;
    width: 100%;
    background: #fff;
    font-family: "Microsoft Yahei";
    .newGoodsBanner {
      padding-top: 7px;
      width: 100%;
      margin-bottom: 7px;
      font-size: 0;
      .img100;
    }
    .item1 {
      width: 50%;
      float: left;
      box-sizing: border-box;
      border-right: 1px solid #fff;
      font-size: 0;
      .top {
        width: 100%;
        .img100;
      }
      .item-bottom
    }
    .item2 {
      width: 50%;
      float: right;
      box-sizing: border-box;
      border-left: 1px solid #fff;
      font-size: 0;
      .top {
        width: 100%;
        .img100;
      }
      .item-bottom
    }
  }
</style>