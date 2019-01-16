<template>
  <div class="new-box">
    <div class="newHomeGoodsBanner">
      <img :src="newHomeGoodsBannerSrc"/>
    </div>
    <div
    v-for="(good,index) in newHomeGoodsList"
    :key="index"
    :class="{'item1': index % 2 === 0, 'item2': index % 2 !== 0}"
    >
      <div class="top">
        <img :src="good.imgSrc"/>
      </div>
      <div class="bottom">
        <span class="title">{{ good.title }}</span>
        <span class="desc">{{ good.desc }}</span>
        <span class="price">{{ good.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["body"],
  data () {
    return {
      newHomeGoodsBannerSrc:'',
      newHomeGoodsList: []
    }
  },
  created () {
    this.newHomeGoodsBannerSrc = this.body.newHomeGoods.img;
    this.newHomeGoodsList = this.body.newHomeGoods.newHomeGoodsList;
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
      display:block;
      color: #333;
      line-height: 25px;
    }
    .desc {
      width: 100%;
      display: block;
      color: #666;
      line-height: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
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
  .newHomeGoodsBanner {
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
    .item-bottom;
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
    .item-bottom;
  }
}
</style>