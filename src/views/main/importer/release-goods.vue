<template>
<article class="register-goods">
  <h3 class="title">상품 출고</h3>

  <div class="columns">
    <form class="column is-9  is-offset-1">
      <div class="level">
        <div class="column is-8">
          <b-field label="원두 ID">
            <b-input v-model="form.key"></b-input>
          </b-field>

          <b-field label="상품 출고 날짜 등록">
              <b-datepicker
                  placeholder="등록할 날자를 정해주세요"
                  :month-names="calendar.month"
                  :day-names="calendar.day"
                  v-model="form.value17">
                  icon="calendar-today">
              </b-datepicker>
          </b-field>

          <b-field>
            <vue-timepicker v-model="form.value17_time"></vue-timepicker>
          </b-field>

          <b-field label="배송지 주소">
            <b-input v-model="form.destination1"></b-input>
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
import { calendar }             from '../../../util/constant/constant'
import ImporterService          from '../../../api/importer/importerService'
import moment                   from "moment";
import VueTimepicker            from 'vue2-timepicker/src/vue-timepicker.vue'
export default {
  components :{
    VueTimepicker
  },
  data () {
    return {
      calendar : calendar.kor,
      form : {
        key          : '',
        value17      : new Date(),
        value17_time : '00:00',
        destination : '인천 중구 인중로 305 북성동 1가 4-1'
      }
    }
  },
  methods: {
    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    },

    registerForm() {

      const _v17_date = moment(this.form.value17 ).format("YYYY / MM / DD");
      const _v17time  = this.form.value17_time;

      const DTO = {
        key           : this.form.key, 
        value17       : `${_v17_date} - ${_v17time}`,
        desttination  : this.form.desttination,
      }

      let result = ImporterService.releaseGood(DTO);

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
