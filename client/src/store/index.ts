import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: ''
  },
  mutations: {
    setUser(state, plauditUser){
      state.currentUser = plauditUser
    }
  },
  actions: {
    setUser(context, plauditUser){
      context.commit('setUser', plauditUser)
    }
  },
  modules: {
  }
})