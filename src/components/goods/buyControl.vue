<template>
  <div>
    <div class="buy-control">
      <div class="title">{{ goodsAttr.title }}</div>
      <div class="price">{{ goodsAttr.price }}</div>
      <div class="desc">
        <span class="tag">【{{ goodsAttr.desc.tag }}】</span>
        <span>{{ goodsAttr.desc.sc }}</span>
      </div>
      <div class='attr'>
        <ul>
          <li 
          v-for="(item,index) in goodsAttr.attr.color"
          :key="index"
          :class="{'active': index === colorIndex}"
          @click="checkColorEvent(index)">{{ item.text }}
          </li>
        </ul>
        <ul>
          <li
          v-for="(item,index) in goodsAttr.attr.ram"
          :key="index"
          :class="{'active': index === ramIndex}"
          @click="checkRamEvent(index)">{{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>    
</template>
<script>
export default {
  props: ["goodsAttr"],
  data () {
    return {
      colorIndex: 0,
      ramIndex: 0
    }
  },
  methods: {
    checkColorEvent (index) {
      this.colorIndex = index;
    },
    checkRamEvent (index) {
      this.ramIndex = index;
    },
    submitBuyInfo () {
      let ram = this.goodsAttr.attr.ram[this.ramIndex];
      let color = this.goodsAttr.attr.color[this.colorIndex];
      return { ram: ram, color: color };
    }
  }
}

</script>
<style lang="less" scoped>
  .buy-control {
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #ddd;
    font-family: 'Microsoft YaHei';
    .title {
      line-height: 25px;
      font-size: 15px;
    }
    .price {
      line-height: 25px;
      font-size: 16px;
      color: #FF5722;
    }
    .desc {
      font-size: 12px;
      color: #999;
      .tag {
        color: #FF5722;
      }
    }
    .attr {
      width: 100%;
      padding: 10px 0 0 0;
      ul {
        width: 100%;
        padding: 0;
        margin: 0;
        li {
          list-style-type: none;
          font-size: 12px;
          border: 1px solid #bbb;
          padding: 6px 10px;
          margin: 5px;
          display: inline-block;
          &.active {
            border: 1px solid #ff5722;
            color: #ff5722;
          }
        }
      }
    }
  }
</style>