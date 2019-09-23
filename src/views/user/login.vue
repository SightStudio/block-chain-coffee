<template>
<div class="login">
  <div class="login-card">

    <div class="card-title">
      <h1>
        <p>관리자 시스템</p>
      </h1>
    </div>

    <div class="content">
      <form method="POST" id="login-form">

        <div class="level">
          <a class="btn button btn-primary submit-btn is-size-6" @click="login(enumAuth.admin)">
            관리자 로그인
          </a>
        </div>

        <div class="level">
          <a class="btn button btn-primary submit-btn is-size-6" @click="login(enumAuth.importer)">
            수입업자 로그인
          </a>
          포트 번호 : 8080
        </div>

        <div class="level">
          <a class="btn button btn-primary submit-btn is-size-6" @click="login(enumAuth.store)">
            창고관리 로그인
          </a>
          포트 번호 : 8081
        </div>

        <div class="level">
          <a class="btn button btn-primary submit-btn is-size-6" @click="login(enumAuth.cafe)">
            카페관리 로그인
          </a>
          포트 번호 : 8082
        </div>

        <div class="level">
          <a class="btn button btn-primary submit-btn is-size-6" @click="login(enumAuth.deliver)">
            정기배송 로그인
          </a>

          포트 번호 : 8083
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { AUTH }  from '../../util/enum/enum'
export default {
  data () {
    return {
      enumAuth : AUTH,
    }
  },
  methods: {
    login (auth) {
      
      // [1] 로그인 actions 실행
      this.$store.dispatch('LOGIN', auth)
                 .then( () => {
                    this._alertLogin('로그인에 성공하였습니다.');
                    this.$router.push('/main')
                 })
                 .catch( () => {
                    this._alertLogin('로그인에 실패하였습니다.');
                 })
    },
    _alertLogin (MSG) {
      this.$buefy.snackbar.open(MSG)
    }
  }
}
</script>

<style scoped>
.login { display: flex; align-items: center; justify-content: center; height: 100vh; background: #F7F7F7; }
.login .login-card { background: #fff; width: 24rem; box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.11); }
.login .login-card .card-title { background-color: #7957d5; padding: 2rem; }
.login .login-card .card-title h1 { color: #fff; text-align: center; font-size: 1.2rem; }
.login .login-card .content { padding: 3rem 2.5rem 5rem; }
.login .login-card .login-id, .login .login-card .login-pw { display: block; width: 100%; font-size: 1rem; margin-bottom: 1.75rem; padding: 0.25rem 0; border: none; border-bottom: 1px solid #dbdbdb;  transition: all .5s;}
.login .login-card .login-id:hover, .login .login-card .login-pw:hover { border-color: #7a7a7a;}
.login .login-card .login-id:active, .login .login-card .login-id:focus, .login .login-card .login-pw:active, .login .login-card .login-pw:focus { border-color: #7957d5; }
.login .login-card .checkbox { color: #b5b5b5; font-size: 0.8rem; }
.login .login-card .checkbox span { margin-left: 0.5rem; }
.login .login-card a { font-size: 0.8rem; }
.login .login-card .options { color: #b5b5b5; margin-bottom: 1.5rem; }
.login .login-card button { cursor: pointer; font-size: 1.2rem; color: #7957d5; border-radius: 4rem; display: block; width: 100%; background: transparent; border: 2px solid #00d1b2; padding: 0.9rem 0 1.1rem; transition: color .5s, border-color .5s; }
.login .login-card button:hover, .login .login-card button:focus { color: #7957d5; border-color: #7957d5;}
.login .login-card button:active { transform: translateY(1px);}

label { cursor: pointer;}
.regular-checkbox { display: none;}
.regular-checkbox + label { background-color: #fafafa; border: 1px solid #dbdbdb; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); padding: 7px; border-radius: 3px; display: inline-block; position: relative;}
.regular-checkbox:checked + label { background-color: #e9ecee; }
.regular-checkbox:checked + label:after { content: '\2714'; font-size: 11px; position: absolute; top: 0; left: 3px; color: #b5b5b5;}

input:focus,
select:focus,
textarea:focus,
button:focus { outline: none;}
</style>
