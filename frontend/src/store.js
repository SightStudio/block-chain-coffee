import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    userJwt  : sessionStorage.userJwt  ? sessionStorage.userJwt  : null,
    userInfo : sessionStorage.userInfo ? sessionStorage.userInfo : null,
  },
  mutations: {
    LOGIN (state, {data}) {
        // [1] Vuex 저장
        state.userJwt  = data.USER_JWT;
        state.userInfo = JSON.stringify(data.USER_INFO);

        // [2] Session 저장
        sessionStorage.userJwt  = data.USER_JWT;
        sessionStorage.userInfo = JSON.stringify(data.USER_INFO);
    },
    LOGOUT (state) { 

         // [1] Vuex 제거
         state.userJwt  = null;
         state.userInfo = null;

         // [2] Session 제거
         sessionStorage.userJwt  = null;
         sessionStorage.userInfo = null;
        }
    },
    actions: { 
        LOGIN({commit} , {id, pw}) {
            return axios.get(`api/user/login/${id}&${pw}`)
                        .then( res => {
                            let data = res.data.response;
                            if(data.REPL_CD == '000000') commit('LOGIN', {data});
                            return data.REPL_CD;
                        }).catch(e => {return null;})
        },
        LOGOUT({commit}){ commit('LOGOUT') }
    }
})