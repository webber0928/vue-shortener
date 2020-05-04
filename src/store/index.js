import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    top3: [1,2,3]
  },
  actions,
  mutations: {
    changeCity (state, val){
      console.log(state)
      console.log(val)
      state.city = val
    },
    getTop (state, val) {

    }
  },
  getters: {
    getTop: (state) => {
        return state.top3
    }
  },
  strict: true
})
