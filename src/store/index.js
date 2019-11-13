import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personal: {
      phone: '13642581689',
      sex: '男',
      age: '90后',
      work: '其他行业',
      company: '公司',
      occupation: '职业',
      desc: '还未填写个性签名，简单介绍一下自己吧'
    }
  },
  mutations: {
    modifyPersonal (state, dataOdj) {
      state.personal = dataOdj
    }
  },
  getters: {
    getPersonalData: state => {
      return state.personal
    }
  },
  actions: {
  },
  modules: {
  }
})
