<template>
  <div>
    <div :class="{screen: focus}">
      <div class="top">
        <div class="bg" :style="bgOpacSty" v-show="!focus"></div>
        <div class="bg1" v-show="focus"></div>
        <div class="main-head">
          <div class="left logo" v-show="!focus"></div>
          <div class="left back" @click="goBackEvent" v-show="focus"></div>
          <div class="center">
            <input type='text' :class="{border:focus}" @focus="handleFocus" v-model="inputText">
          </div>
          <div class="right" v-show="!focus">登录</div>
          <div class="right search" v-show="focus"></div>
        </div>
      </div>
      <div class="main" v-show="focus">
        <div class="title">热门搜索</div>
        <img :src="searchImg">
        <ul>
          <li v-for="(item,index) in hotWord" :key="index" @click="inputFillEvent(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import data from '../../../data.json';
  export default {
    props: ['opac'],
    data () {
      return {
        focus: false,
        bgOpacSty: {
          opacity: 1
        },
        inputText: '',
        searchImg: '',
        hotWord: ['红米4 超长续航','小米note2','小米5s','小米8','笔记本','小米电视','智能电饭煲']
      }
    },
    created () {
      this.searchImg = data.searchImg;
    },
    watch: {
      opac () {
        this.bgOpacSty.opacity = this.opac;
      }
    },
    methods: {
      goBackEvent () {
        this.focus = false;
        this.$emit('searchEvent',false);
      },
      handleFocus () {
        this.focus = true;
        this.$emit('searchEvent',true);
      },
      inputFillEvent (word) {
        this.inputText = word
      } 
    }
  } 
</script>

<style lang='less' scoped>
  .screen {
    position: fixed;
    width: 100%;
    height: 100%;
    display: block;
    background: #fff;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .absolute100 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .top {
    width: 100%;
    height: 40px;
    font-family: 'Microsoft YaHei';
    font-size: 0;
    position: fixed;
    color: #fff;
    z-index: 200;
    .bg {
      .absolute100;
      background: #ff6700;
    }
    .bg1 {
      .absolute100;
      background: #efefef;
    }
    .main-head {
      .absolute100;
    }
    .left {
      width: 15%;
      line-height: 40px;
      text-align: center;
      font-size: 0;
      display: inline-block;
      &.logo {
        width: 15%;
        height: 40px;
        background: url('../../images/svg/mi.svg') no-repeat center center;
        background-size: 30px;
      }
      &.back {
        width: 15%;
        height: 40px;
        background: url('../../images/svg/back.svg') no-repeat center center;
        background-size: 20px;
      }
    }
    .center {
      width: 70%;
      font-size: 16px;
      display: inline-block;
      vertical-align: top;
      input {
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: #fff;
        border: none;
        padding: 0;
        margin: 5px 0 0 0;
        outline: none;
        text-indent: 10px;
        &.border {
          box-sizing: border-box;
          border: 1px solid #dedede;
        }
      }
    }
    .right {
      width: 15%;
      font-size: 16px;
      line-height: 40px;
      display: inline-block;
      text-align: center;
      padding: 0;
      margin: -1px 0 0 0;
      vertical-align: top;
      &.search {
        width: 15%;
        height: 40px;
        background: url('../../images/svg/search.svg') no-repeat center center;
        background-size: 20px;
      }
    } 
  }
  .main {
    width: 100%;
    margin: 40px 0 0 0;
    .title {
      line-height: 40px;
      font-size: 16px;
      color: #333;
      text-indent: 20px;
    }
    img {
      width: 100%;
    }
    ul {
      padding: 0 10px;
      li {
        list-style-type: none;
        font-size: 16px;
        padding: 8px 10px;
        margin: 5px;
        display: inline-block;
        background: #F8F2EC;
        border: 1px solid #FAC288;
      }
    }
  }   
</style>