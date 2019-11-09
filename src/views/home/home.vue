<template>
  <div class="home">
    <header class="head">
      <div class="head-box">
        <div>
          <span class="iconfont icon-person"></span>
        </div>
        <div>
          <span></span>
          <span class="city">广州市</span>
          <span class="iconfont icon-down2"></span>
        </div>
        <div>
          <span class="iconfont icon-message"></span>
          <span class="iconfont icon-QR-code"></span>
        </div>
      </div>
      <div class="nav" ref="slider">
        <ul class="navList">
          <li>
            <a href="#">骑车</a>
          </li>
          <li>
            <a href="#">同时呼叫</a>
          </li>
          <li>
            <a href="#" class="color">快车</a>
          </li>
          <li>
            <a href="#">公交</a>
          </li>
          <li>
            <a href="#">礼橙专车</a>
          </li>
          <li>
            <a href="#">拼车</a>
          </li>
          <li>
            <a href="#">出租车</a>
          </li>
          <li>
            <a href="#">代驾</a>
          </li>
          <li>
            <a href="#">豪华车</a>
          </li>
          <li>
            <a href="#">小桔租车</a>
          </li>
          <li>
            <a href="#">顺风车</a>
          </li>
          <li>
            <a href="#">车生活</a>
          </li>
          <li>
            <a href="#">金融服务</a>
          </li>
          <li>
            <a href="#">远程特惠</a>
          </li>
        </ul>
        <div class="ellipsis iconfont icon-ellipsis2">
        </div>
      </div>
    </header>
    <div class="side-box">
      <div class="side">
      <div class="user">
        <div class="imgbox"></div>
        <p class="phone">13642581689</p>
        <p><span class="iconfont icon-star"></span><span>黄金</span><span class="iconfont icon-next1"></span></p>
      </div>
      <div class="func">
        <ul>
          <li><span class="iconfont icon-dingdanguanli"></span>订单</li>
          <li><span class="iconfont icon-anquanzhongxin"></span>订单</li>
          <li><span class="iconfont icon-qianbao"></span>订单</li>
          <li><span class="iconfont icon-kefu"></span>订单</li>
          <li><span class="iconfont icon-shezhi"></span>订单</li>
        </ul>
      </div>
      <div class="footer">
        <p class="show-up"><span class="iconfont icon-up"></span></p>
        <div class="box">
          <div class="item">
            <div class="img-box"><span class="iconfont icon-gift"></span></div>
            <span>推荐有奖</span>
          </div>
          <div class="item">
            <div class="img-box"><span class="iconfont icon-person"></span></div>
            <span>推荐有奖</span>
          </div>
          <div class="item">
            <div class="img-box"><span class="iconfont icon-xuexiao_xuesheng"></span></div>
            <span>推荐有奖</span>
          </div>
          <div class="item">
            <div class="img-box"><span class="iconfont icon-youhuiquan"></span></div>
            <span>推荐有奖</span>
          </div>
          <div class="item">
            <div class="img-box"><span class="iconfont icon-gouwuche"></span></div>
            <span>推荐有奖</span>
          </div>
          <div class="item">
            <div class="img-box"><span class="iconfont icon-jixuduihuan"></span></div>
            <span>推荐有奖</span>
          </div>
        </div>
        <div class="rule">
          <p>法律条款与平台规则 <span class="iconfont icon-next1"></span></p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'home',
  data () {
    return {
      slider: ''
    }
  },
  created () {
  },
  mounted () {
    this.slider = new BScroll(this.$refs.slider, {
      scrollX: true,
      scrollY: false,
      click: true
    })
  },
  beforeDestroy () {

  },
  methods: {},
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a,
a:hover,
a:visited,
a:link {
  text-decoration: none;
  color: #333;
}
ul,
ol {
  list-style: none;
}
.home {
  background-color: #fff;
  font-size: 0.14rem;
  color: #333;
}
// header
.head {
  width: 100%;
  height: 0.8rem;
  padding: 0.1rem 0.1rem 0rem;
  box-shadow: 0px 3px 8px 2px #eee;
  .head-box {
    height: 0.3rem;
    width: 100%;
    // background-color: green;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    line-height: 0.3rem;
    .icon-down {
      font-size: 0.12rem;
    }
    .icon-QR-code {
      margin-left: 0.08rem;
    }
  }
  .nav {
    height: .3rem;
    line-height: .3rem;
    padding-right: .01rem;
    overflow: hidden;
    position: relative;
    .navList {
      width: 10rem !important;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
    }
    .ellipsis{
      position: absolute;
      top: 0;
      right: 0px;
      height: .3rem;
      width: .3rem;
      background-color: #fff;
      box-shadow: -5px 0px 5px 2px #fff;
      z-index: 3;
    }
  }
  .color{
    color: orange;
  }
}
// side
.side-box{
  background: rgba(255,255,255, .2);
}
.side{
  height: 5rem;
  width: 60%;
  background-color: lightgray;
  box-shadow: 2px 0px 9px 3px #eee;
  position: relative;
  .user{
    margin-top: .2rem;
    width: 100%;
    // height: 1rem;
    // background-color: orange;
    .imgbox{
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      background-color: blue;
      margin: 0 auto;
    }
    .phone{
      margin: .05rem 0rem;
    }
    .icon-star{
      color: orange;
    }
    .icon-next1{
      font-size: .12rem;
    }
  }
  .func{
    li{
      padding-left: .2rem;
      text-align: left;
      margin: .1rem 0rem;
      .iconfont{
        font-size: .14rem;
        margin-right: .05rem;
      }
    }
  }
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    .rule{
      border-top: 1px solid #eee;
      p{
        width: 100%;
        text-align: center;
        line-height: .5rem;
      }
    }
    .box{
      padding-top: .05rem;
      width: 100%;
      height: 1.4rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      .item{
        width: 33.3%;
        .img-box{
          width: .3rem;
          height: .3rem;
          line-height: .3rem;
          border-radius: 50%;
          margin: 0 auto;
          border: 1px solid #eee;
          // background-color: orange;
        }
        span{
          font-size: .12rem;
        }
      }
    }
    .show-up{
      font-size: .12rem;
    }
  }
}
</style>
