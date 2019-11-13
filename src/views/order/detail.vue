<template>
  <div class="datail clearfix">
    <div class="map"></div>
    <div class="main">
      <div class="dt-hd">
        <span class="iconfont icon-shangyiye"></span>
        <h3>行程结束</h3>
      </div>
      <div class="dt-box" ref="dtBox">
        <!-- 安全中心 -->
        <div class="security">
          <span class="iconfont icon-anquanzhongxin"></span>
          <span>安全中心</span>
        </div>
        <!-- 司机选项 -->
        <div class="driver" v-show="driver">
          <div class="img"></div>
          <div class="box">
            <span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span><br>
            <span>110报警</span>
          </div>
          <div class="box">
            <span class="iconfont icon-tel"></span><br>
            <span>110报警</span>
          </div>
          <div class="box">
            <span class="iconfont icon-ticket-fill"></span><br>
            <span>110报警</span>
          </div>
          <span class="iconfont icon-downarrow" @click.stop="drClickEvt"></span>
        </div>
        <div class="dr-detail" v-show="!driver">
          <div class="dd-hd">
            <div class="dd-left">
              <p><span>粤AF85370</span> <span>比亚迪秦</span><span class="iconfont icon-dian"></span><span>白色</span></p>
              <p><span>过师傅</span> <span class="iconfont icon-star"></span> <span>5.0</span></p>
            </div>
            <div class="dd-img"></div>
          </div>
          <div class="dd-box">
            <div v-for="item in 4" :key="item.index">
              <span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
              <p>110报警</p>
            </div>
            <div class="dd-more">
              <span class="iconfont icon-more"></span>
            </div>
          </div>
        </div>
        <!-- 价格选项 -->
        <div class="price">
          <div class="probably">
            <div class="left">
              <span>19.77</span>元(已优惠<span>4.34</span>元)
            </div>
            <div class="right" @click.stop="prRightEvt($event)">
              <span>展开详情</span>
              <span class="iconfont icon-downarrow"></span>
            </div>
          </div>
          <div class="dt" ref="dtBox">
            <div class="pr-box">
              <p class="tl"><span>起步价</span><span>11.00元</span></p>
              <p class="desc"><span>含时长4分钟，含里程2公里</span></p>
              <p class="tl"><span>里程费<span>(6.50公里)</span></span><span>8.55元</span></p>
              <p class="desc"><span>起步里程(<span>2.00</span>公里)</span></p>
              <p class="desc"><span>普通时段(<span>4.50</span>公里)</span><span>8.55元</span></p>
              <p class="tl"><span>时长费<span>(16分钟)</span></span><span>4.56元</span></p>
              <p class="desc"><span>起步时长(<span>4分钟</span>)</span></p>
              <p class="desc"><span>普通时长(<span>16分钟</span>)</span><span>4.56元</span></p>
            </div>
            <div class="dis">
              <p><span>优惠券抵扣</span><span>-<span>4.34元</span></span></p>
            </div>
            <div class="pr-footer">
              <span>费用疑问</span>
            </div>
          </div>
        </div>
        <!-- 评价 -->
        <div class="evaluate">
          <h2>您的评价会让司机做的更好<span>匿名</span></h2>
          <div class="star">
            <span class="iconfont icon-star" v-for="(item, index) in 5" :key="index"  @click.stop="evClickEvt(index)"></span>
          </div>
        </div>
        <!-- 分享红包 -->
        <div class="share">
          <div class="box">
            <div class="img"></div>
            <span>分享领红包</span>
          </div>
          <div class="box">
            <div class="img"></div>
            <span>领学生特权</span>
          </div>
        </div>
        <!-- 客服 -->
        <div class="service">
          <h2>客服</h2>
          <div class="box">
            <span v-for="item in 4" :key="item.index">我丢了东西</span>
          </div>
          <div class="footer">
            <p>更多问题<span class="iconfont icon-next"></span></p>
          </div>
        </div>
        <!-- 满意度 -->
        <div class="satisfied">
          <h2>本次行程路线是否满意<span>匿名</span></h2>
          <div class="box">
            <p @click.stop="sfClickEvt($event)"><span class="iconfont icon-bumanyi"></span>不满意</p>
            <p  @click.stop="sfClickEvt($event)"><span class="iconfont icon-manyi"></span>满意</p>
          </div>
        </div>
      </div>
      <!-- 满意不满意 -->
      <mt-popup v-model="manyi" position="bottom" popup-transition="popup-fade" class="popup">
        <div class="my-hd"><span class="iconfont icon-baseline-close-px" @click.stop="myRtClickEvt"></span> 评价</div>
        <div class="my-box">
          <h2>{{title}}</h2>
          <div class="box">
            <p v-for="(item, index) in cause" :key="index">{{item}}</p>
          </div>
        </div>
        <button>匿名提交</button>
      </mt-popup>
      <!-- 评价 -->
      <mt-popup v-model="evaluate" position="bottom" popup-tansition="popup-fade" class="popup-ev">
        <div class="pe-hd">
          <span class="iconfont icon-baseline-close-px" @click.stop="evRtClickEvt"></span>
          <h2>评价</h2>
        </div>
        <div class="pe-box">
          <div class="pe-bhd"><span class="iconfont icon-star" v-for="(item, index) in 5" :key="index" @click.stop="evClickEvt(index)" ref="star"></span></div>
          <p>{{evaluateDesc}}</p>
          <div class="item-box">
            <div class="item" v-for="(item, index) in evaluate3" :key=index>{{item}}</div>
          </div>
          <div class="pe-bf">
            <button>匿名提交</button>
          </div>
        </div>
        <div class="pe-footer">
          <p>不再坐该司机的车</p>
          <button>加入黑名单</button>
        </div>
      </mt-popup>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      manyi: false,
      driver: true,
      star: 0,
      evaluate: false,
      evaluateDesc: '非常不满意，各方面都很差',
      evaluate3: [],
      evaluate1: ['道路不熟', '服务态度恶劣', '车辆脏破', '车内异味', '车牌号不符', '司机吸烟', '打电话玩手机', '未坐好就开车', '未提醒系安全带', '未提醒开门注意', '过路口不减速', '索要好评'],
      evaluate2: ['车内整洁', '活地图认路准', '驾驶平稳', '态度好服务棒'],
      cause: [],
      cause1: ['距离近', '时间短', '路况好无拥堵', '是常走路线'],
      cause2: ['路线拥堵', '路线绕路', '不是常走路线', '红绿灯多', '有封路不能走', '路线经常变', '拐弯太多', '有细窄小路', '有收费道路'],
      title: '感谢反馈，我们会继续努力哒'
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 价格选项点击下拉按钮
    prRightEvt (event) {
      var ev = event.currentTarget
      ev.style.opacity = 0
      this.$refs.dtBox.style.display = 'block'
    },
    // 司机选项点击下拉按钮
    drClickEvt () {
      this.driver = !this.driver
    },
    // 评价星星点击事件
    evClickEvt (index) {
      var span = this.$refs.star
      for (let i = 0; i < 5; i++) {
        if (i <= index) {
          span[i].style.color = 'orange'
        } else {
          span[i].style.color = '#ededed'
        }
      }
      this.star = index
      switch (index) {
        case 0:
          this.evaluateDesc = '非常不满意，各方面都很差'
          this.evaluate3 = this.evaluate1
          break
        case 1:
          this.evaluateDesc = '不满意，比较差'
          this.evaluate3 = this.evaluate1
          break
        case 2:
          this.evaluateDesc = '一般，还需改善'
          this.evaluate3 = this.evaluate1
          break
        case 3:
          this.evaluateDesc = '比较满意，仍可改善'
          this.evaluate3 = this.evaluate1
          break
        case 4:
          this.evaluateDesc = '非常满意，无可挑剔'
          this.evaluate3 = this.evaluate2
          break
      }
      this.$refs.dtBox.style.opacity = 0
      if (!this.evaluate) {
        this.evaluate = !this.evaluate
      }
    },
    // 星星点击关闭按钮
    evRtClickEvt () {
      this.evaluate = false
      this.$refs.dtBox.style.opacity = 1
    },
    // 是否满意点击
    sfClickEvt (event) {
      var ev = event.currentTarget.innerText
      if (ev === '满意') {
        this.title = '感谢反馈，我们会继续努力哒'
        this.cause = this.cause1
      } else {
        this.title = '非常抱歉，您遇到了哪些问题'
        this.cause = this.cause2
      }
      if (!this.manyi) {
        this.manyi = !this.manyi
      }
    },
    // 满意评价返回
    myRtClickEvt () {
      this.manyi = false
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
    color: #333;
    text-decoration: none;
  }
  ul,ol{
    list-style: none;
  }
  .datail{
    color: #333;
    font-size: .14rem;
    width: 100%;
    height: 100%;
  }
  .clearfix:after,
  .clearfix:before{
    content: '';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
  }
  .clearfix{
    zoom: 1;
  }
  // map
  .map{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: orange;
    z-index: -1;
  }
  // main
  .main{
    .dt-hd{
      padding: .1rem;
      position: sticky;
      background-color: #fff;
      top: 0;
      left: 0;
      >span{
        position: absolute;
        top: 50%;
        left: .1rem;
        transform: translateY(-50%);
      }
    }
    // box
    .dt-box{
      margin-top: 3rem;
      padding: .1rem;
      .security{
        padding: .05rem;
        background-color: #fff;
        width: 25%;
        border-radius: .1rem;
        >span{
          &:first-of-type{
            margin-right: .05rem;
            color:green;
          }
        }
      }
      // driver
      .driver{
        margin-top: .1rem;
        background-color: #fff;
        padding: .05rem;
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top-left-radius: .27rem;
        border-top-right-radius: .27rem;
        border-bottom-right-radius: .27rem;
        padding-right: .2rem;
        padding-left: .1rem;
        .img{
          width: .4rem;
          height: .4rem;
          border-radius: 50%;
          background-color: pink;
        }
        .box{
          font-size: .12rem;
          >.icon-changyongtubiao-xianxingdaochu-zhuanqu-{
            color: red;
          }
        }
      }
      .dr-detail{
        width: 100%;
        background-color: #fff;
        .dd-hd{
          padding: .1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          margin: .05rem 0rem 0rem;
          border-bottom: 1px solid #eee;
          .dd-img{
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            background-color: pink;
          }
        }
        .dd-box{
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: .05rem;
          >div{
            padding: .05rem;
            border-right: 1px solid #eee;
            width: 22%;
          }
          .dd-more{
            width: 12%;
            text-align: center;
            border: 0;
          }
        }
      }
      // price
      .price{
        margin-top: .05rem;
        background-color: #fff;
        .probably{
          display: flex;
          padding: .1rem;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
          .left{
            span{
              &:first-of-type{
                font-size: .24rem;
              }
              &:last-of-type{
                font-size: .12rem;
                color: red;
              }
            }
          }
        }
        .dt{
          text-align: left;
          padding: .1rem;
          display: none;
        }
        .pr-box{
          border-bottom: 1px solid #eee;
          >p{
            display: flex;
            justify-content: space-between;
            margin: .1rem 0rem;
          }
          .tl{
            font-size: .16rem;
            color: #000;
          }
        }
        .dis{
          padding: .1rem 0rem;
          font-size: .16rem;
          color: orange;
          >p{
            display: flex;
            justify-content: space-between;
          }
        }
        .pr-footer{
          color: #999;
          padding: .1rem 0rem;
          text-align: center;
        }
      }
      // evaluate
      .evaluate{
        margin-top: .05rem;
        padding: .1rem;
        background-color: #fff;
        >h2{
          text-align: left;
          display: flex;
          align-items: center;
          font-weight: 400;
          color: #000;
          >span{
            margin-left: .05rem;
            border: 1px solid #eee;
            font-size: .12rem;
            padding: .01rem;
            font-weight: 400;
          }
        }
        .star{
          display: flex;
          justify-content: space-around;
          padding: .05rem .1rem;
          >span{
            font-size: .3rem;
            color: #ededed;
          }
          .orange{
            color: orange;
          }
        }
      }
      // share
      .share{
        margin-top: .05rem;
        background-color: #fff;
        padding: .1rem .5rem;
        display: flex;
        justify-content: space-between;
        font-size: .12rem;
        .img{
          width: .4rem;
          height: .4rem;
          border-radius: 50%;
          background-color: pink;
          margin: 0 auto;
        }
      }
      // service
      .service{
        margin-top: .05rem;
        background-color: #fff;
        >h2{
          padding: .1rem .1rem 0rem .1rem;
          text-align: left;
          font-weight: 400;
          color: #000;
        }
        .box{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: .1rem;
          >span{
            display: block;
            margin-top: .1rem;
            min-width: 45%;
            border: 1px solid #eee;
            padding: .05rem;
            border-radius: .18rem;
          }
        }
        .footer{
          >p{
            padding: .1rem .1rem;
            text-align: right;
            background: linear-gradient(90deg, #fff 0%, #f7f7f7 100%);
            >span{
              font-size: .12rem;
              margin-left: .05rem;
            }
          }
        }
      }
      // satisfied
      .satisfied{
        background-color: #fff;
        margin-top: .05rem;
        padding: .1rem;
        >h2{
          text-align: left;
          display: flex;
          align-items: center;
          font-weight: 400;
          color: #000;
          >span{
            padding: .01rem;
            font-size: .12rem;
            font-weight: 400;
            border: 1px solid #eee;
            margin-left: .1rem;
          }
        }
        .box{
          margin: .1rem 0rem;
          padding: .1rem;
          display: flex;
          justify-content: space-around;
          font-size: .16rem;
          color: #000;
          >p{
            padding: .02rem .1rem;
            border: 1px solid #eee;
            border-radius: .15rem;
            position: relative;
            padding-left: .2rem;
            >span{
              position: absolute;
              top: -.02rem;
              left: -.1rem;
              font-size: .3rem
            }
          }
        }
      }
    }
    // manyi popup
    .popup{
      width: 100%;
      background-color: #fff;
      .my-hd{
        padding: .1rem;
        border-bottom: 1px solid #eee;
        font-size: .18rem;
        color: #000;
        position: relative;
        >span{
          position: absolute;
          top: 50%;
          left: .1rem;
          transform: translateY(-50%);
          font-size: .20rem;
        }
      }
      >.my-box{
        // padding: 0rem .5rem;
        h2{
          padding: .1rem 0rem;
          font-weight: 400;
          color: #000;
        }
        .box{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          max-height: 1.2rem;
          overflow-y: auto;
          padding: 0rem .45rem;
          >p{
            padding: .02rem;
            border: 1px solid #eee;
            min-width: 45%;
            margin-bottom: .1rem;
          }
        }
      }
      button{
        width: 100%;
        background-color: #ccc;
        border: 1px solid #eee;
        padding: .1rem;
        margin: .1rem 0rem;
        font-size: .2rem;
        color: #fff;
      }
    }
    // 评价弹窗
    .popup-ev{
      width: 100%;
      background-color: #fff;
      .pe-hd{
        padding: .1rem;
        position: relative;
        border-bottom: 1px solid #eee;
        >h2{
          font-weight: 400;
          color: #000;
        }
        >span{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: .1rem;
          font-size: .24rem;
          color: #000;
        }
      }
      .pe-box{
        padding: .1rem .4rem;
        .pe-bhd{
          display: flex;
          justify-content: space-between;
          color: #ededed;
          >span{
            font-size: .3rem;
          }
        }
        >p{
          padding: .1rem;
          color: orange;
        }
        .item-box{
          width: 100%;
          max-height: 1.2rem;
          overflow-y: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          .item{
            width: 45%;
            border: 1px solid #eee;
            padding: .03rem;
            margin: .05rem 0rem;
          }
        }
        .pe-bf{
          padding: .1rem 0rem;
          >button{
            width: 100%;
            padding: .1rem;
            background-color: #ccc;
            color: #fff;
            font-size: .2rem;
          }
        }
      }
      .pe-footer{
        background-color: #f7f7f7;
        padding: .1rem .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >button{
          border: 1px solid #aaa;
          padding: .05rem;
          background-color: transparent;
        }
      }
    }
  }
</style>
