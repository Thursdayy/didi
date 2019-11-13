<template>
  <div class="edit">
    <div v-show="flag">
      <div class="ed-head">
        <span @click.stop="editCancel">取消</span>
        <h2>编辑资料</h2>
        <span @click.stop="editComplete">完成</span>
      </div>
      <div class="ed-box">
        <div class="ed-item">
          <label for="">昵称</label><input type="text" placeholder="起个独特的名字吧" v-model="inputval">
        </div>
        <div class="ed-item">
          <label for="">性别</label><span>{{personalData.sex}}</span>
        </div>
        <div class="ed-item" @click.stop="ageClickEvt">
          <label for="">年龄</label>
          <div class="pop-box">
            <p>{{personalData.age}}</p>
          </div>
        </div>
      </div>
      <div class="ed-box">
        <div class="ed-item" @click.stop="openWkEvt">
          <label for="">行业</label><p>{{personalData.work}}<span class="iconfont icon-next1"></span></p>
        </div>
        <div class="ed-item">
          <label for="">公司</label><input type="text" placeholder="添加所在公司">
        </div>
        <div class="ed-item">
          <label for="">职业</label><input type="text" placeholder="添加您的职业">
        </div>
        <div class="ed-item">
          <label for="">个性签名</label><input type="text" placeholder="还未填写个性签名，简单介绍一下自己吧">
        </div>
      </div>
      <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" class="pop">
        <mt-picker :slots="slots" @change="onValuesChange" :showToolbar=true>
          <p class="identity"><button @click="cancelEvt">取消</button><button @click="identityEvt">确定</button></p>
          </mt-picker>
      </mt-popup>
    </div>
    <!-- 行业选择 -->
    <div v-show="!flag">
      <div class="work">
        <div class="work-head">
          <span class="iconfont icon-shangyiye" @click.stop="wkRetClickEvt"></span>
          <h3>行业</h3>
        </div>
        <div class="work-box">
          <div class="item" @click.stop="workClickEvt($event)" v-for="item in workList" :key="item.index">
            <p ref="work"><span>{{item}}</span><span class="iconfont icon-gou_ico"></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'editData',
  data () {
    return {
      flag: true,
      inputval: '13642581689',
      personalData: {},
      slots: [
        {
          flex: 1,
          values: ['00后', '90后', '80后', '70后', '60后', '50后'],
          className: 'slot1',
          textAlign: 'center'
        }
      ],
      popupVisible: false,
      Iage: '90后',
      age: '',
      workList: ['互联网-软件', '通信-硬件', '房地产-建筑', '文化传媒', '金融类', '消费品', '汽车-机械', '教育-翻译', '贸易-物流', '生物-医疗', '能源-化工', '政府机构', '服务业', '其他行业']
    }
  },
  created () {},
  mounted () {
    this.personalData = this.$store.getters.getPersonalData
  },
  methods: {
    // 年龄选择界面滚动改变值
    onValuesChange (picker, values) {
      this.age = values[0]
    },
    // 点击年龄选项打开年龄界面
    ageClickEvt () {
      if (this.popupVisible === true) {
        this.popupVisible = false
      } else {
        this.popupVisible = true
      }
    },
    // 关闭年龄界面
    cancelEvt () {
      this.popupVisible = false
    },
    // 确定年龄段
    identityEvt () {
      this.personalData.age = this.age
      this.cancelEvt()
    },
    // 编辑完成
    editComplete () {
      this.$store.commit('modifyPersonal', this.personalData)
      this.$router.push({ name: 'personal', params: {} })
    },
    // 编辑取消
    editCancel () {
      this.$router.push({ name: 'personal', params: {} })
    },
    // 点击行业选项打开行业选择界面
    openWkEvt () {
      this.flag = false
      var workTe = this.$refs.work
      for (let i = 0; i < workTe.length; i++) {
        workTe[i].children[1].classList.remove('show-gou')
        if (workTe[i].children[0].innerText === this.personalData.work) {
          workTe[i].children[1].classList.add('show-gou')
        }
      }
    },
    // 一下是选择行业的事件处理
    // 选择了某项行业
    workClickEvt (el) {
      var target = el.currentTarget
      var workText = target.children[0].children[0].innerText
      this.personalData.work = workText
      // this.$store.commit('modify', this.personalData)
      this.flag = true
    },
    // 行业界面点击返回
    wkRetClickEvt () {
      this.flag = true
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
  ul,ol{
    list-style: none;
  }
   // 编辑资料
  .edit{
    font-size: .14rem;
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    .ed-head{
      padding: .1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      >h2{
        font-weight: 400;
      }
    }
    .ed-box{
      padding-left: .1rem;
      background-color: #fff;
      margin-bottom: .2rem;
      .ed-item{
        padding: .1rem .1rem .1rem 0rem;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: flex-start;
        >label{
          margin-right: .1rem;
        }
        >input{
          outline: none;
          flex: 1;
        }
        >p{
          flex: 1;
          display: flex;
          justify-content: space-between;
        }
        .pop-box{
          flex: 1;
          >p{
            text-align: left;
          }
        }
      }
    }
    .pop{
      width: 100%;
      .identity{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid orange;
        >button{
          padding: .1rem;
          &:last-of-type{
            color: orange;
          }
        }
      }
    }
  }
  // 行业选择
  .work{
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow-y: auto;
    .work-head{
      padding: .1rem;
      border-bottom: 1px solid #eee;
      position: sticky;
      top: 0;
      left: 0;
      >.iconfont{
        position: absolute;
        left: .1rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .work-box{
      margin-left: .1rem;
      .item{
        padding: .15rem .1rem .15rem 0rem;
        text-align: left;
        border-bottom: 1px solid #eee;
        >p{
          display: flex;
          justify-content: space-between;
          .iconfont{
            display: none;
            color: orangered;
          }
          .show-gou{
            display: block;
          }
        }
      }
    }
  }
</style>
