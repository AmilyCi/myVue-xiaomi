<template>
  <div class="banner-box">
    <swiper :options="swiperOption" class="banner-img">
      <swiper-slide  v-for="(item,index) in bannerTop" :key="index"> 
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
      // autoplay: 3000,
      speed: 1000,
      loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.bannerTop = data.banner.bannerTop;
  }
}
</script>
<style lang="less" scoped>
.banner-box {
  width: 100%;
  z-index: 100;
  img {
    width: 100%;
  } 
}

</style>