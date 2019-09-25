<template>
<article class="register-goods">
  <h3 class="title">보관 이력 등록</h3>

  <div class="columns">
    <form class="column is-9  is-offset-1">
      <div class="level">
        <div>
          <b-field label="원두 ID">
            <b-input v-model="form.key"></b-input>
          </b-field>

          <b-field label="이력 등록 날자">
            <b-datepicker
                placeholder="등록할 날자를 정해주세요"
                v-model="form.value19"
                :month-names="calendar.month"
                :day-names="calendar.day"
                icon="calendar-today">
            </b-datepicker>
          </b-field>

          <b-field>
            <vue-timepicker v-model="form.value19_time"></vue-timepicker>
          </b-field>

          <b-field label="보관 온도">
              <b-slider v-model="form.value20" :min="10" :max="20" ticks lazy></b-slider>
          </b-field>

          <b-field label="보관 습도"> <!-- 단위 : rh -->
              <b-slider v-model="form.value21" :min="55" :max="65" ticks lazy></b-slider>
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
import { calendar }    from '../../../util/constant/constant'
import StoreService    from '../../../api/store/storeService'
import moment          from "moment";
import VueTimepicker   from 'vue2-timepicker/src/vue-timepicker.vue'
export default {
  components :{
    VueTimepicker
  },
  data () {
    return {
      calendar : calendar.kor,
      form : {
        key          : '',
        value19      : new Date(),
        value19_time : '00:00',
        value20      : 0,
        value21      : 0,
      }
    }
  },
  methods: {

    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    },

    registerForm() {
      const _v19_date = moment(this.form.value19).format("YYYY / MM / DD");
      const _v19time  = this.form.value19_time;

      const DTO = {
        key      : this.form.key, 
        value19  : `${_v19_date} - ${_v19time}`,
        value20  : this.form.value20,
        value21  : this.form.value21,
      }

      let result = StoreService.registerStoreHistory(DTO);

      if(result) {
        this.$buefy.snackbar.open('정상적으로 등록되었습니다.')
        this.$router.push('/main/common/show-list')
      } else {
        this.$buefy.snackbar.open({ message : '등록에 실패하였습니다.', type: 'is-danger'})
      }
    } // end registerForm()
  }
}
</script>

<style scoped>
.button.is-info{background-color: #209cee; margin-right: 20px;}
.button.is-link{background-color: #3273dc;}
</style>
