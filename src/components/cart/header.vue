<template>
  <div>
    <div :class="{'screen': focus}">
      <div class="top">
        <div class="bg1"></div>
        <div class="main-head">
          <div class="left back" @click="goBackEvent"></div>
          <div class="center">
            <span v-show="!focus">购物车</span>
            <input type="text" v-show="focus" v-model="inputText"/>
          </div>
          <div class="right search" @click="searchEvent"></div>
        </div>
      </div>
      <div class="main" v-show="focus">
        <div class="title">热门搜索</div>
        <img :src="searchImg"/>
        <ul>
          <li v-for="(item,index) in hotWord" :key="index" @click="addInputText(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../../../data.json"
export default {
  data () {
    return {
      focus: false,
      searchImg: '',
      hotWord: ['小米机器人','小米手机','小米充电宝','小米音箱','小米电饭煲','小米手表','小米键盘'],
      inputText: ''
    }
  },
  created () {
    this.searchImg = data.searchImg
  },
  methods: {
    addInputText(text){
      this.inputText = text;
    },
    goBackEvent () {
      this.focus =false;
    },
    searchEvent () {
      this.focus =true;
    }
  }
}
</script>
<style lang="less" scoped>
  .absolute100 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .screen {
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    overflow: hidden;
  }  
  .top {
    position: fixed;
    width: 100%;
    height: 40px;
    font-size: 0;
    font-family: "Microsoft YaHei";
    color: #fff;
    .bg1 {
      .absolute100;
      background: #efefef;
    }
    .main-head {
      .absolute100;
      display: flex;
    }
    .left {
      width: 15%;
      line-height: 40px;
      text-align: center;
      &.back {
        background: url("../../images/svg/back.svg") no-repeat center center;
        background-size: 15px;
      }
    }
    .center {
      width: 70%;
      text-align: center;
      height: 100%;
      font-size: 16px;
      color:  #333;
      span {
        text-align: center;
        line-height: 40px;
      }
      input {
        outline: none;
        margin: 5px 0 0 0;
        padding: 0 5px;
        width: 90%;
        line-height: 25px;
      }
    }
    .right {
      width: 15%;
      line-height: 40px;
      text-align: center;
      &.search {
        background: url("../../images/svg/search.svg" ) no-repeat center center;
        background-size: 15px;
      }
    }
  }
  .main {
    display: block;
    width: 100%;
    margin: 40px 0 0 0;
    .title {
      line-height: 40px;
      font-size: 14px;
      color: #333;
      text-indent: 20px;
    }
    img {
      width: 100%;
    }
    ul {
      padding: 10px;
      li {
        list-style-type: none;
        font-size: 13px;
        padding: 5px 10px;
        background: #F8F2EC;;
        border:1px solid #FAC288;
        margin: 5px;
        display: inline-block;
      }
    }
  }
  
</style>