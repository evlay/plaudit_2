import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: ''
  },
  mutations: {
    setUser(state, plauditUser){
      state.currentUser = plauditUser
    },
    logout(state){
      state.currentUser = ''
      router.push('/login')
    }
  },
  actions: {
    setUser(context, plauditUser){
      context.commit('setUser', plauditUser)
    },
    logout(context){
      context.commit('logout')
    }
  },
  modules: {
  }
})