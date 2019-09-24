<template>
<article class="register-goods">
  <h3 class="title">도착 날자 등록</h3>

  <div class="columns">
    <form class="column is-9  is-offset-1">
      <div class="level">
        <div>
          <b-field label="원두 ID">
            <b-input v-model="form.key"></b-input>
          </b-field>

          <b-field label="출고 날자 등록">
            <b-datepicker
                placeholder="등록할 날자를 정해주세요"
                v-model="form.value24"
                :month-names="calendar.month"
                :day-names="calendar.day"
                icon="calendar-today">
            </b-datepicker>
          </b-field>
          
          </div>
      </div> <!-- level end -->
      <div class="has-text-right">
        <b-button type="is-info" @click="resetForm">초기화</b-button>
        <b-button type="is-link" @click="registerForm">작성</b-button>
      </div>
    </form>
  </div>
</article>
</template>
<script>
import { calendar, coffeeMeta } from '../../../util/constant/constant'
import CafeService              from '../../../api/cafe/cafeService'
export default {
  data () {
    return {
      calendar   : calendar.kor,
      form : {
        key     : '',
        value24 : new Date(),
      }
    }
  },
  methods: {
    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    },

    registerForm() {
      const DTO = {
        key      : this.form.key, 
        value24  : this.form.value24,
      }

      let result = CafeService.registerDeliverDate(DTO);

      if(result) {
        this.$buefy.snackbar.open('정상적으로 등록되었습니다.')
        this.$router.push('/main/common/show-list')
      } else {
       this.$buefy.snackbar.open({ message : '등록에 실패하였습니다.', type : 'is-danger'})
      }
    } // end registerForm()
  }
}
</script>

<style scoped>
.button.is-info{background-color: #209cee; margin-right: 20px;}
.button.is-link{background-color: #3273dc;}
</style>
