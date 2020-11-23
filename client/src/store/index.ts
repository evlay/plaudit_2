import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: '' || localStorage.getItem('currentPlauditUser'),
    posts: []
  },
  mutations: {
    setUser(state, plauditUser){
      state.currentUser = plauditUser
      localStorage.setItem('currentPlauditUser', plauditUser)
    },
    logout(state){
      state.currentUser = ''
      localStorage.removeItem('currentPlauditUser')
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