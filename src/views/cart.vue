<template>
  <div class="cart">
    <mi-header></mi-header>
    <div class="main">
      <div class="login">登录后享受更多优惠<span>去登录></span></div>
      <div class="item-box" v-for="(item,index) in list">
        <div class="item">
          <div class="left">
            <img :src="item.imgSrc"/>
          </div>
          <div class="right">
            <div class="title">{{`${item.title} ${item.rom} ${item.color}`}}</div>
            <div class="price">售价: {{ item.price }} 元</div>
            <div class="number">
              <span class="can" @click="resEvent(item)">-</span>
              <span>{{ item.buyNum }}</span>
              <span class="can" @click="addEvent(item)">+</span>
              <span class='r' @click="deleteEvent(index)">删</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../../data.json";
import header from "../components/cart/header.vue";

export default {
  components: {
    'mi-header': header
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = this.changeDataFunc(data.starGoods.starGoodsList)
  },
  methods: {
    changeDataFunc (arr) {
      for(let i = 0; i < arr.length; i++){
        arr[i].buyNum = 1;
      }
      return arr;
    },
    resEvent (item) {
      if(item.buyNum > 1){
        item.buyNum --;
      }
    },
    addEvent (item) {
      item.buyNum ++
    },
    deleteEvent (index) {
      this.list.splice(index,1);
    }
  }
}
</script>
<style lang="less" scoped>
  .cart {
    width: 100%;
    height: 100%;
    background: #eee;
    .main {
      padding-top: 40px;
      width: 100%;
      background: #eee;
      overflow-y: scroll;
      .login {
        line-height: 50px;
        padding: 0 15px;
        background: #fff;
        font-size: 15px;
        color: #333;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        span {
          float: right;
          color: #888;
          font-size: 14px;
          }
        }
      .item-box {
        padding: 0 10px;
        width: 100%;
        border-bottom: 1px solid #eee;
        background: #fff;
        box-sizing: border-box;
        .item {
          width: 100%;
          display: flex;
          .left {
            padding: 10px;
            width: 120px;
            height: 120px;
            box-sizing: border-box;
            img {
              width: 100%;
            }
          }
          .right {
            padding: 10px;
            flex: 1;
            .title {
              font-size: 15px;
              height: 40px;
            }
            .price {
              font-size: 14px;
              color: #888;
              line-height: 25px;
            }
            .number {
              line-height: 30px;
              span {
                display: inline-block;
                width: 30px;
                height:30px;
                border: 1px solid #eee;
                text-align: center;
                margin: 0 2px; 
                &.can {
                  &:active {
                    background: #eee;
                  }
                }
                &.r {
                  float: right;
                  &:active {
                    background: #eee;
                  }
                }
              }
            }
          }
        }
      }
    }
    
  }

</style>