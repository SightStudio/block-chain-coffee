<template>
  <div class="login">

    <p class="tip"></p>
    <section class="cont">

      <!-- 로그인 폼 -->
      <article class="form sign-in">

        <h2 class="is-size-3">관리자 로그인 페이지</h2>
        <br>
        <label>
          <span class="is-size-6">아이디</span>
          <input type="email">
        </label>

        <label>
          <span class="is-size-6">비밀 번호</span>
          <input type="password">
        </label>
        <br>
        <b-dropdown aria-role="list">
            <button class="button is-primary" slot="trigger">
                <span>역활</span>
                <!-- <b-icon icon="menu-down"></b-icon> -->
                <menu-down-icon/>
            </button>

            <b-dropdown-item aria-role="listitem">  ROOT  </b-dropdown-item>
            <b-dropdown-item aria-role="listitem">수입업자 </b-dropdown-item>
            <b-dropdown-item aria-role="listitem">유통업자 </b-dropdown-item>
            <b-dropdown-item aria-role="listitem">카페사장 </b-dropdown-item>
        </b-dropdown>

        <button class="submit is-size-5" type="button"  @click="login" >로그인</button>
      </article>
      
      <article class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2 class="is-size-6">아이디가 없으신가요?</h2>
            <p>아래의 버튼을 눌러</p>
            <p>회원가입을 진행해주세요.</p>
          </div>

          <div class="img__text m--in">
            <h2 class="is-size-6">이미 아이디가 있으신가요?</h2>
            <p>아래 버튼을 눌러</p>
            <p>로그인 화면으로 이동해주세요.</p>
          </div>

          <div class="img__btn">
            <span class="m--up">회원가입</span>
            <span class="m--in">로그인</span>
          </div>
        </div>

      <!-- 회원 가입 폼 -->
        <div class="form sign-up">
          <h2>회원가입 양식</h2>
          <label>
            <span>아이디</span>
            <input type="text">
          </label>

          <label>
            <span>비밀번호</span>
            <input type="password">
          </label>

          <br>

          <b-dropdown aria-role="list">
            <button class="button is-primary" slot="trigger">
                <span>역활</span>
                <!-- <b-icon icon="menu-down"></b-icon> -->
                <menu-down-icon/>
            </button>

            <b-dropdown-item aria-role="listitem">  ROOT </b-dropdown-item>
            <b-dropdown-item aria-role="listitem">수입업자</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">유통업자</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">카페사장</b-dropdown-item>
          </b-dropdown>

          <button type="button" class="submit">Sign Up</button>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { AUTH } from '../../util/enum/enum'
import MenuDown from 'vue-material-design-icons/MenuDown';
export default {
  components : {
    'menu-down-icon' : MenuDown
  },
  data () {
    return {
      enumAuth : AUTH,
      userAuth : AUTH.admin,
    }
  },
  mounted() {
    document.querySelector('.img__btn').addEventListener('click', ()=> {
      document.querySelector('.cont').classList.toggle('s--signup');
    });
  },
  methods: {
    login () {
      this.$buefy.snackbar.open('로그인에 성공하였습니다.');
      this.$router.push('/main')
    },
  }
}
</script>

<style scoped lang="scss">
.login{ text-align: center; }
input, button { border: none; outline: none; background: none; }

$contW: 900px;
$imgW: 260px;
$formW: $contW - $imgW;
$switchAT: 1.2s;

$inputW: 260px;
$btnH: 36px;

$diffRatio: ($contW - $imgW) / $contW;

@mixin signUpActive {
  .cont.s--signup & {
    @content;
  }
}

.tip { font-size: 20px; margin: 40px auto 50px; text-align: center; }
.cont { overflow: hidden; position: relative; width: $contW; height: 550px; margin: 0 auto 100px; background: #fff;}
.form { position: relative; width: $formW; height: 100%; transition: transform $switchAT ease-in-out; padding: 50px 30px 0;}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: $formW;
  top: 0;
  width: $contW;
  height: 100%;
  padding-left: $imgW;
  background: #fff;
  transition: transform $switchAT ease-in-out;

  @include signUpActive {
    transform: translate3d($formW * -1,0,0);
  }
}

button { display: block; margin: 0 auto; width: $inputW; height: $btnH; border-radius: 30px; color: #fff; font-size: 15px; cursor: pointer;}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: $imgW;
  height: 100%;
  padding-top: 360px;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: $contW;
    height: 100%;
    background-image: url('~@/assets/images/common/main-background.png');
    background-size: cover;
    transition: transform $switchAT ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }

  @include signUpActive {
    &:before {
      transform: translate3d($formW,0,0);
    }
  }

  &__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    transition: transform $switchAT ease-in-out;

    h2 {
      margin-bottom: 10px;
      font-weight: normal;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }

    &.m--up {

      @include signUpActive {
        transform: translateX($imgW*2);
      }
    }

    &.m--in {
      transform: translateX($imgW * -2);

      @include signUpActive {
        transform: translateX(0);
      }
    }
  }

  &__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: $btnH;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    
    &:after {
      content: '';
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 30px;
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform $switchAT;
      
      &.m--in {
        transform: translateY($btnH*-2);
        
        @include signUpActive {
          transform: translateY(0);
        }
      }
      
      &.m--up {
        @include signUpActive {
          transform: translateY($btnH*2);
        }
      }
    }
  }
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: $inputW;
  margin: 25px auto 0;
  text-align: center;

  span {
    font-size: 12px;
    color: #cfcfcf;
    text-transform: uppercase;
  }
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: darken(#d3dae9, 20%);

  span {
    font-weight: bold;
    color: darken(#768cb6, 20%);
  }
}

.sign-in {
  transition-timing-function: ease-out;

  @include signUpActive {
    transition-timing-function: ease-in-out;
    transition-duration: $switchAT;
    transform: translate3d($formW,0,0);
  }
}

.sign-up {
  transform: translate3d($contW * -1,0,0);

  @include signUpActive {
    transform: translate3d(0,0,0);
  }
}

.icon-link {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 32px;

  img {
    width: 100%;
    vertical-align: top;
  }

  &--twitter {
    left: auto;
    right: 5px;
  }
}
</style>
