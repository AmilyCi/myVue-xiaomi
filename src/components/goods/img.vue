<template>
  <div class="img">
    <div class="control">
      <div class="left hook" @click="goBackEvent"></div>
      <div class="right hook" @click="goodSearchEvent"></div>
    </div>
    <div class="banner-box">
      <swiper :options="swiperOption" class="banner-img">
        <swiper-slide  v-for="(item,index) in bannerList" :key="index"> 
          <img :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    
  </div>
</template>
<script>
import data from "../../../data.json";
import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      bannerList: '',
      swiperOption: {
      speed: 1000,
      loop:true,
      // autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: true
      //   },
      pagination: {
            el: '.swiper-pagination'
          }  
      }
    }
  },
  created () {
    this.bannerList = data.detail.img;
  },
  methods: {
    goBackEvent () {
      this.$router.go(-1);
    },
    goodSearchEvent () {
      this.$router.push({path:'/index', query: {sign: 1}});
    }
  }
}
</script>
<style lang="less" scoped>
  .img {
    width: 100%;
    font-family: "Microsoft YaHei";
    .control {
      width: 100%;
      height: 30px;
      position: fixed;
      top: 10px;
      left: 0;
      padding: 0 10px;
      box-sizing: border-box;
      z-index: 10;
      div.hook {
        width: 30px;
        height: 30px;
        display: block;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        color: #fff;
        &.left {
          float: left;
          background: rgba(0,0,0,0.5) url("../../images/svg/back1.svg") no-repeat center center;
          background-size: 15px
        }
        &.right {
          float: right;
          background: rgba(0,0,0,0.5) url("../../images/svg/search1.svg") no-repeat center center;
          background-size: 15px;
        }
      }
    }
    .banner-box {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
</style>
<style>
  .swiper-pagination-bullet-active {
    background: #ff8b0f !important;
  }  
</style>