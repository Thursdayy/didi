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
      <!-- map contianer -->
      <div class="map-container">
        <baidu-map center="广州" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" style="height:100%" @click="getClickInfo"></baidu-map>
        <div class="notice"><span class="iconfont icon-icon--"></span></div>
      </div>
      <div class="tip">
        <div class="words">
          <div class="box">
            <p>人脸认证</p>
            <p>出车司机已全部完成安全培训</p>
          </div>
          <div class="safe">
            <span class="iconfont icon-anquanzhongxin"></span>
          </div>
        </div>
        <div class="location">
          <span class="iconfont icon-location"></span>
        </div>
      </div>
      <!-- banner -->
      <div class="banner">
        <div class="ban-icon"><span class="iconfont icon-icon--"></span></div>
        <p>助力11.11，30元快车券免费拿</p>
        <button>点击领取</button>
      </div>
      <!-- book car -->
      <div class="book-car">
        <ul class="book">
          <li><a href="#">现在</a></li>
          <li><a href="#">预约</a></li>
          <li><a href="#">代叫</a></li>
          <li><a href="#">接送机</a></li>
          <li><a href="#">远程特惠</a></li>
        </ul>
        <div class="star">
          <div class="point"></div>
          <p class="starAddr">安居宝科技园-西北2门</p>
          <p class="starDesc"><span ref="remonedAddr">“中能科技园”</span>附近最佳的上车点</p>
        </div>
        <div class="end">
          <div class="point"></div>
          <p class="endAddr">您要去哪儿</p>
        </div>
      </div>
      <!-- safe banner -->
      <div class="banner-safe">
        <div class="level">
          <div class="left">
            <p>安全中心全新升级</p>
            <h4>状态全程更新</h4>
            <h4>守护清晰可见</h4>
          </div>
          <div class="right"></div>
        </div>
        <div class="detail">
          <p><span>查看详情</span><span class="iconfont icon-next"></span></p>
        </div>
      </div>
      <!-- safe banner -->
      <div class="banner-safe">
        <div class="level">
          <div class="left">
            <p>建国为大家的车费要了个透明交代</p>
            <h4>一千个哈密雷特打车</h4>
            <h4>也只有一套规则</h4>
          </div>
          <div class="right"></div>
        </div>
        <div class="detail">
          <p><span>速来围观</span><span class="iconfont icon-next"></span></p>
        </div>
      </div>
      <!-- advertisement -->
      <div class="ad">
        <span>广告</span>
      </div>
      <!-- member part -->
      <div class="member">
        <div class="up">
          <p class="time">有效期至2019年12月31日</p>
        <h1 class="member-level"><span>黄金会员</span><span class="iconfont icon-star"></span></h1>
        <div class="box">
          <div class="item">
            <div class="imgbox iconfont icon-quan"></div>
            <span>购券折扣</span>
          </div>
          <div class="item">
            <div class="imgbox iconfont icon-gift"></div>
            <span>生日礼包</span>
          </div>
          <div class="item">
            <div class="imgbox iconfont icon-kefu"></div>
            <span>vip客服</span>
          </div>
          <div class="item">
            <div class="imgbox iconfont icon-car"></div>
            <span>免费升舱</span>
          </div>
          <div class="item">
            <div class="imgbox iconfont icon-shandian"></div>
            <span>极速接驾</span>
          </div>
        </div>
        </div>
        <p class="member-more">查看更多福利<span class="iconfont icon-next"></span></p>
      </div>
      <!-- discount -->
      <div class="discount">
        <div class="main-box">
          <div class="item">
            <div class="up">
              <p>85折5张仅售1元</p>
              <h2>套餐新用户专享</h2>
              <div class="box">
                <div class="one">
                  <span>5次</span>
                  <h1>8.5折</h1>
                </div>
                <div class="two"></div>
              </div>
            </div>
            <div class="buy">
              <p><span>1.00元</span><del>50.00元</del></p>
              <p><span>立即购买</span><span class="iconfont icon-next"></span></p>
            </div>
          </div>
          <div class="item">
            <div class="up">
              <p>85折5张仅售1元</p>
              <h2>套餐新用户专享</h2>
              <div class="box">
                <div class="one">
                  <span>5次</span>
                  <h1>8.5折</h1>
                </div>
                <div class="two"></div>
              </div>
            </div>
            <div class="buy">
              <p><span>1.00元</span><del>50.00元</del></p>
              <p><span>立即购买</span><span class="iconfont icon-next"></span></p>
            </div>
          </div>
          <div class="item">
            <div class="up">
              <p>85折5张仅售1元</p>
              <h2>套餐新用户专享</h2>
              <div class="box">
                <div class="one">
                  <span>5次</span>
                  <h1>8.5折</h1>
                </div>
                <div class="two"></div>
              </div>
            </div>
            <div class="buy">
              <p><span>1.00元</span><del>50.00元</del></p>
              <p><span>立即购买</span><span class="iconfont icon-next"></span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- 好礼放送 -->
      <div class="banner-safe">
        <div class="level">
          <div class="left">
            <p>领最高3888元快车券</p>
            <h4>好礼放送 守护加倍</h4>
            <h4></h4>
          </div>
          <div class="right"></div>
        </div>
        <div class="detail">
          <p><span>查看详情</span><span class="iconfont icon-next"></span></p>
        </div>
      </div>
      <!-- 11.11正品狂欢 -->
      <div class="banner-safe">
        <div class="level">
          <div class="left">
            <p>领最高3888元快车券</p>
            <h4>5折狂购</h4>
            <h4>养车优惠 限时限量</h4>
          </div>
          <div class="right"></div>
        </div>
        <div class="detail">
          <p><span>查看详情</span><span class="iconfont icon-next"></span></p>
        </div>
      </div>
      <!-- 证照信息 -->
      <div class="banner-safe">
        <div class="level">
          <div class="left">
            <p>证照信息详情</p>
            <h4>滴滴平台</h4>
            <h4>证照信息公示</h4>
          </div>
          <div class="right"></div>
        </div>
        <div class="detail">
          <p><span>查看详情</span><span class="iconfont icon-next"></span></p>
        </div>
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
  position: relative;
  .notice{
    width: .3rem;
    height: .3rem;
    font-size: .26rem;
    font-weight: 700;
    color: orangered;
    // background-color: #fff;
    border-radius: 50%;
    line-height: .3rem;
    position: absolute;
    top: 0rem;
    right: 0rem;
  }
}
// tip
.tip{
  margin: .1rem;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  .words{
    margin-left: .15rem;
    padding: .1rem .1rem .1rem .2rem;
    background-color: #578ffc;
    color: #fff;
    border-radius: 10px;
    position: relative;
    height: .4rem;
    >.box{
      height: .2rem;
      overflow: hidden;
    }
    p{
      line-height: .2rem;
      &:first-of-type{
        animation: change 5s linear infinite;
      }
    }
    // overflow: hidden;
    // >p{
    //   line-height: .25rem;
    // }
    >.safe{
      position: absolute;
      padding: .08rem;
      background-color: #fff;
      border-radius: 5px;
      color: #578ffc;
      left: -.15rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .location{
    width: .3rem;
    height: .3rem;
    font-size: .26rem;
    font-weight: 700;
    background-color: #fff;
    border-radius: 50%;
    line-height: .3rem;
  }
}
// tip animate
@keyframes change {
  0%{
    margin-top: -40px;
  }
  5%{
    margin-top: -20px;
  }
  45%{
    margin-top: -20px;
  }
  50%{
    margin-top: 0;
  }
  99.9%{
    margin-top: 0;
  }
  100%{
    margin-top: -40px;
  }
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
// banner part
.banner{
  margin: 0rem .1rem;
  // width: 100%;
  height: .5rem;
  // background-color: orange;
  // line-height: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem .1rem;
  .ban-icon{
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    background-color: #f5f6f8;
    line-height: .3rem;
  }
  >button{
    padding: .1rem;
    border: 1px solid #cab38a;
    color: #cab38a;
    background-color: transparent;
  }
}
// book car
.book-car{
  margin: .1rem .1rem;
  // background-color: orange;
  .book{
    padding: .15rem 0rem;
    display: flex;
    justify-content: space-between;
    a{
      display: block;
      padding: .05rem .12rem;
      border: 1px solid #eee;
      border-radius: 18px;
    }
  }
  .star,.end{
    position: relative;
    margin-left: .3rem;
    // background-color: orange;
    text-align: left;
    padding: .1rem 0rem;
    .point{
      width: .08rem;
      height: .08rem;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: -.15rem;
      transform: translateY(-50%);
    }
    .starDesc{
      font-size: .12rem;
      color: #36b393;
    }
  }
  .star{
    border-bottom: 1px solid #eee;
    .point{
      background-color: #36b393;
    }
  }
  .end{
    padding: .15rem 0rem;
    .point{
      background-color: orange;
    }
  }
}
// banner safe
.banner-safe{
  margin: .1rem 0rem;
  // background-color: orange;
  .level{
    padding: .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-size: .14rem;
      color: #999;
      text-align: left;
    }
    h4{
      font-size: .24rem;
      text-align: left;
    }
    .right{
      width: .7rem;
      height: .7rem;
      border-radius: 50%;
      background-color: #36b393;
    }
  }
  .detail{
    padding: .15rem;
    text-align: right;
    background: linear-gradient(90deg, #fff 0%, #f2f2f2 100%);
    .icon-next{
      font-size: .14rem;
      margin-left: .1rem;
    }
  }
}
// advertisement
.ad{
  margin: 0rem .1rem;
  height: 1rem;
  position: relative;
  background-color: orange;
  >span{
    padding: 0rem .03rem;
    background-color: #a0a1a3;
    font-size: .12rem;
    position: absolute;
    top: .02rem;
    right: .02rem;
  }
}
// member
.member{
  margin: .1rem;
  text-align: left;
  background: linear-gradient(#f4e4c2 0%,#eed2a3 100%);
  .up{
    padding: .15rem;
  }
  h1{
    margin: .1rem 0rem;
    >.iconfont{
      padding: .03rem;
      color: #ebc07c;
      // border: 1px solid #eee;
      border-radius: 50%;
      background-color: #333;
    }
  }
  .box{
    display: flex;
    justify-content: space-between;
    .item{
      .imgbox{
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        border: 1px solid #eee;
        text-align: center;
        line-height: .3rem;
        margin: 0 auto;
        background-color: #d7c097;
      }
      span{
        font-size: .12rem;
      }
    }
  }
  .member-more{
    padding: .15rem;
    text-align: right;
    background: linear-gradient(90deg, #eace9c 0%, #e1d1af 100%);
    >span{
      margin-left: .1rem;
      font-size: .14rem;
    }
  }
}
// discount
.discount{
  // height: 2.5rem;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
  // position: relative;
  .main-box{
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 7.9rem;
    display: flex;
    justify-content: center;
    >.item{
      text-align: left;
      width: 2.5rem;
      background-color: lightgreen;
      margin: 0rem .05rem;
      .up{
        padding: .1rem;
      }
      p{
        font-size: .12rem;
        color: #999;
      }
      .box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .one{
          >span{
            padding: 0rem .1rem;
            border-radius: .1rem;
            color: #fff;
            background-color: #393939;
          }
        }
        .two{
          width: 1rem;
          height: .5rem;
          background-color: #fff;
        }
      }
      .buy{
        padding: .15rem;
        display: flex;
        justify-content: space-between;
        background: linear-gradient(90deg, #fff 0%, #f7f7f7 100%);
        >p{
          &:first-of-type{
            span{
              &:first-of-type{
                color: orange;
                margin-right: .05rem;
              }
            }
          }
          &:last-of-type{
            >.icon-next{
              font-size: .12rem;
              margin-left: .05rem;
            }
          }
        }
      }
    }
  }
}
// 动画
.v-enter, .v-leave-to{
  opacity: 0;
  transform: translateX(-60%);
}
.v-enter-active, .v-leave-active{
  transition: all .4s ease;
}
</style>
