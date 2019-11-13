<template>
  <div class="personal">
    <div class="main">
      <header class="head">
        <span class="iconfont icon-shangyiye1"></span>
        <router-link to="personal/editData">编辑资料</router-link>
      </header>
      <div class="data">
        <div class="imgbox"></div>
        <h3 class="phone">{{personalData.phone}}</h3>
        <p class="label"><span>{{personalData.age}}</span><span class="iconfont icon-dian"></span><span>{{personalData.work}}</span><span class="iconfont icon-dian"></span><span>{{personalData.company}}</span><span class="iconfont icon-dian"></span><span>{{personalData.occupation}}</span></p>
        <p class="describe">{{personalData.desc}}</p>
      </div>
      <div class="item-box">
        <div class="item">
          <div class="lef"><span class="iconfont icon-star"></span><span>黄金</span></div>
          <div class="right"><span>进入会员主页</span></div>
        </div>
        <div class="item">
          <div class="lef"><span class="iconfont icon-shimingrenzheng"></span><span>实名认证</span></div>
          <div class="right"><span class="iconfont icon-gou had"></span><span>已认证</span></div>
        </div>
        <div class="item">
          <div class="lef"><span class="iconfont icon-chezhuxinxi"></span><span>车主认证</span></div>
          <div class="right"><span class="iconfont icon-gou"></span><span>待认证</span></div>
        </div>
        <div class="item">
          <div class="lef"><span class="iconfont icon-xue had"></span><span>学生认证</span></div>
          <div class="right"><span class="iconfont icon-gou"></span><span>待认证</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personal',
  data () {
    return {
      personalData: {}
    }
  },
  created () {},
  mounted () {
    this.personalData = this.$store.getters.getPersonalData
  },
  methods: {}
}
</script>
<style lang="less" scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a,a:hover,a:focus,a:visited{
    text-decoration: none;
    color: #333;
  }
  ul,ol{
    list-style: none;
  }
  .personal{
    font-size: .14rem;
    color: #333;
  }
  .main{
    margin-top: .1rem;
  }
  // header
  .head{
    padding: .1rem;
    display: flex;
    justify-content: space-between;
    >.iconfont{
      font-size: .24rem;
    }
  }
  // personal data
  .data{
    padding: .1rem;
    .imgbox{
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
      background-color: lightgreen;
      margin: 0 auto;
    }
    .phone{
      margin: .1rem 0rem;
    }
    .label{
      >.iconfont{
        font-size: .12rem;
      }
    }
    .describe{
      margin: .1rem;
    }
  }
  // item box
  .item-box{
    padding: 0rem .1rem;
    .item{
      padding: .15rem .1rem;
      margin: .1rem 0rem;
      display: flex;
      justify-content: space-between;
      border: 1px solid #eee;
      .iconfont{
        margin-right: .05rem;
      }
      .had{
        color: green;
      }
    }
  }

</style>
