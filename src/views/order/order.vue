<template>
  <div class="order">
    <div class="hd">
      <!-- header -->
      <header class="head">
        <span class="iconfont icon-shangyiye" @click.stop="orderRetEvt"></span>
        <h3>我的订单</h3>
        <span>开发票</span>
      </header>
      <!-- 标题 -->
      <p class="title">已完成订单</p>
    </div>
      <!-- 订单容器 -->
    <div class="container">
      <!-- 订单 -->
      <div class="item" @click.stop="orderDetail" v-for="item in orderList" :key="item.index">
        <div class="item-title">
          <span>{{item.type}}</span>
          <div><span>{{item.status}}</span><span class="iconfont icon-next1"></span></div>
        </div>
        <p class="time"><span class="iconfont icon-dian"></span>{{item.time}}</p>
        <p class="starAddr"><span class="iconfont icon-dian"></span>{{item.starAddr}}</p>
        <p class="endAddr"><span class="iconfont icon-dian"></span>{{item.endAddr}}</p>
      </div>
    </div>
    <!-- 查看更多 -->
    <p class="more"><span @click.stop="orderClickMore">轻按查看<span ref="year">19</span>年<span ref="month">09</span>月订单</span></p>
  </div>
</template>
<script>
export default {
  name: 'order',
  data () {
    return {
      orderList: [
        {
          type: '快车',
          status: '已完成',
          time: '2019年11月01日 12:37',
          starAddr: '元岗天河慧通产业广场A区-东北门',
          endAddr: '黄花岗美晨集团（水荫西约）'
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 点击加载更多订单信息
    orderClickMore () {
    },
    // 点击获取订单详情
    orderDetail () {},
    // 返回操作
    orderRetEvt () {
      this.$router.push({ name: 'home', params: {} })
    }
  }
}
</script>
<style lang="less" scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a,a:hover,a:visited,a:focus{
    text-decoration: none;
    color: #333;
  }
  ul, ol{
    list-style: none;
  }
  .order{
    width: 100%;
    height: 100%;
    color: #333;
    font-size: .14rem;
    background-color: #fafafa;
  }
  // header
  .head{
    padding: .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }
  .hd{
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fafafa;
  }
  // title
  .title{
    padding: .1rem;
    text-align: left;
  }
  // container
  .container{
    margin: 0rem .1rem;
    background-color: #fafafa;
    overflow-y: auto;
    .item{
      padding: .1rem;
      text-align: left;
      margin-bottom: .1rem;
      // box-shadow: 0 -2px 3px 3px #aaa;
      background-color: #fff;
      border: 1px solid #eee;
      .item-title{
        display: flex;
        justify-content: space-between;
      }
      >p{
        margin-top: .05rem;
        &:nth-of-type(2){
          .iconfont{
            color: green;
          }
        }
        &:last-of-type{
          .iconfont{
            color: orange;
          }
        }
      }
      .iconfont{
        font-size: .2rem;
      }
    }
  }
  // more
  .more{
    padding-bottom: .1rem;
  }
</style>
