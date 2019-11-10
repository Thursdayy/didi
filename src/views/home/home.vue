<template>
  <div class="home">
    <div class="main">
      <header class="head">
        <div class="head-box">
          <div @click.stop="sideShowChange">
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
          <div class="ellipsis iconfont icon-ellipsis2"></div>
        </div>
      </header>
      <div class="map-container">
        <baidu-map center="深圳" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" style="height:100%" @click="getClickInfo"></baidu-map>
      </div>
    </div>
    <transition>
      <div class="side-box" v-show="sideShow">
      <div class="side">
        <div class="user">
          <div class="imgbox" ref="imgbox"></div>
          <p class="phone" ref="phone">13642581689</p>
          <p ref="star">
            <span class="iconfont icon-star"></span>
            <span>黄金</span>
            <span class="iconfont icon-next1"></span>
          </p>
        </div>
        <div class="func">
          <ul>
            <li>
              <span class="iconfont icon-dingdanguanli"></span>订单
            </li>
            <li>
              <span class="iconfont icon-anquanzhongxin"></span>订单
            </li>
            <li>
              <span class="iconfont icon-qianbao"></span>订单
            </li>
            <li>
              <span class="iconfont icon-kefu"></span>订单
            </li>
            <li>
              <span class="iconfont icon-shezhi"></span>订单
            </li>
          </ul>
        </div>
        <div class="footer">
          <p class="show-up">
            <span class="iconfont icon-up" @click.stop='sideBoxShowMore($event)'></span>
          </p>
          <div class="box" ref="box">
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-gift"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-person"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-xuexiao_xuesheng"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-youhuiquan"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-gouwuche"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-jixuduihuan"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-gift"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-person"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-xuexiao_xuesheng"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-youhuiquan"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-gouwuche"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-jixuduihuan"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-gift"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-person"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-xuexiao_xuesheng"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-youhuiquan"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-gouwuche"></span>
              </div>
              <span>推荐有奖</span>
            </div>
            <div class="item">
              <div class="img-box">
                <span class="iconfont icon-jixuduihuan"></span>
              </div>
              <span>推荐有奖</span>
            </div>
          </div>
          <div class="rule">
            <p>
              法律条款与平台规则
              <span class="iconfont icon-next1"></span>
            </p>
          </div>
        </div>
      </div>
      <div class="side-r" @click.stop="sideShowChange">
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'home',
  data () {
    return {
      slider: ' ',
      sideShow: false,
      center: { lng: 0, lat: 0 },
      zoom: 15
    }
  },
  created () {},
  mounted () {
    this.slider = new BScroll(this.$refs.slider, {
      scrollX: true,
      scrollY: false,
      click: true
    })
    // this.createMap()
  },
  beforeDestroy () {},
  methods: {
    sideShowChange () {
      this.sideShow = !this.sideShow
    },
    sideBoxShowMore (el) {
      var e = el.currentTarget
      var box = this.$refs.box
      var imgbox = this.$refs.imgbox
      var phone = this.$refs.phone
      var star = this.$refs.star
      if (e.classList.contains('icon-up')) {
        e.classList.remove('icon-up')
        e.classList.add('icon-down2')
        box.style.height = '5rem'
        imgbox.style.transform = 'scale(.7)'
        phone.style.opacity = 0
        star.style.opacity = 0
      } else {
        e.classList.remove('icon-down2')
        e.classList.add('icon-up')
        box.style.height = '1.35rem'
        imgbox.style.transform = 'scale(1)'
        phone.style.opacity = 1
        star.style.opacity = 1
      }
    },
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 113.822348
      this.center.lat = 22.635538
      this.zoom = this.zoom
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
  }
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
    height: 0.3rem;
    line-height: 0.3rem;
    padding-right: 0.01rem;
    overflow: hidden;
    position: relative;
    .navList {
      width: 10rem !important;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
    }
    .ellipsis {
      position: absolute;
      top: 0;
      right: 0px;
      height: 0.3rem;
      width: 0.3rem;
      background-color: #fff;
      box-shadow: -5px 0px 5px 2px #fff;
      z-index: 3;
    }
  }
  .color {
    color: orange;
  }
}
// map container
.map-container{
  width: 100%;
  height: 4rem;
}
// side
.side-box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
}
.side {
  height: 100%;
  width: 60%;
  padding-top: 0.2rem;
  background-color: #fff;
  box-shadow: 2px 0px 9px 3px #eee;
  position: relative;
  .user {
    width: 100%;
    // height: 1rem;
    // background-color: orange;
    .imgbox {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: blue;
      margin: 0 auto;
      transition: all .4s ease;
    }
    .phone {
      margin: 0.05rem 0rem;
    }
    .icon-star {
      color: orange;
    }
    .icon-next1 {
      font-size: 0.12rem;
    }
  }
  .func {
    li {
      padding-left: 0.2rem;
      text-align: left;
      margin: 0.1rem 0rem;
      .iconfont {
        font-size: 0.14rem;
        margin-right: 0.05rem;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 6;
    background-color: #fff;
    .rule {
      border-top: 1px solid #eee;
      p {
        width: 100%;
        text-align: center;
        line-height: 0.5rem;
      }
    }
    .box {
      padding-top: 0.05rem;
      width: 100%;
      height: 1.35rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      overflow: hidden;
      transition: all .4s ease;
      // align-items: center;
      .item {
        width: 33.3%;
        height: .65rem;
        .img-box {
          width: 0.3rem;
          height: 0.3rem;
          line-height: 0.3rem;
          border-radius: 50%;
          margin: 0 auto;
          border: 1px solid #eee;
          margin-bottom: .05rem;
          // background-color: orange;
        }
        span {
          font-size: 0.12rem;
        }
      }
    }
    .show-up {
      font-size: 0.12rem;
    }
  }
}
.side-r{
  background: rgba(0, 0, 0, 0.05);
  flex: 1;
}
.v-enter, .v-leave-to{
  opacity: 0;
  transform: translateX(-60%);
}
.v-enter-active, .v-leave-active{
  transition: all .4s ease;
}
</style>
