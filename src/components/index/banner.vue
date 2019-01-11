<template>
  <div class="banner-box">
    <!--<div ref="swipe" class="swiper-contain">
      <div class="swipe-wrap">
        <img :src="item" v-for="item in bannerTop">
      </div>
    </div>-->
    <swiper :options="swiperOption">
      <swiper-slide  v-for="item in bannerTop">
        <img :src="item">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import data from "../../../data.json";
import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  props: ['banner'],
  data () {
    return {
      bannerTop: [],
      swiperOption: {
      autoplay: 3000,
      speed: 1000,
      loop:true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.bannerTop = data.banner.bannerTop;
  },
  // mounted () {
  //   let miSwiper = new Swiper('.swiper-contain',{
  //     loop: true,
  //     autoplay: 2500
  //   })
  //    console.log(miSwiper)
  // }
}
</script>
<style>
  img {
    width: 100%;
    margin-top: 40px;
  }
</style>