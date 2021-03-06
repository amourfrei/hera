import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userInfo: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
