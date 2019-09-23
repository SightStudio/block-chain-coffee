import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state : {
      userRole  : sessionStorage.userRole ? sessionStorage.userRole : null,
  },
  mutations: {
      LOGIN (state, role) {

          state.userRole  = role;
          // [2] Session 저장
          sessionStorage.userRole = role;
      },
      LOGOUT (state) { 

          // [1] Vuex 제거
          state.userRole  = null;

          // [2] Session 제거
          sessionStorage.userRole = null;
      }
  },
  actions: { 
      LOGIN({commit} , role) {
          commit('LOGIN', role);
      },
      LOGOUT({commit}){ commit('LOGOUT') }
  }
})