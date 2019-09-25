<template>
<article class="register-goods-release">
  <h3 class="title">상품 출고 날짜 등록</h3>

  <div class="columns">
    <form class="column is-9">
      <div class="level">
        <div class="column is-5" >
          <b-field label="원두 ID">
            <b-input v-model="form.key"></b-input>
          </b-field>

          <b-field label="상품 출고 날짜 등록">
              <b-datepicker
                  placeholder="등록할 날자를 정해주세요"
                  :month-names="calendar.month"
                  :day-names="calendar.day"
                  v-model="form.value44"
                  icon="calendar-today">
              </b-datepicker>
          </b-field>

          <b-field>
            <vue-timepicker v-model="form.value44_time"></vue-timepicker>
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
import { calendar }       from '../../../util/constant/constant'
import DeliverService     from '../../../api/deliver/deliverService'
import moment             from "moment";
import VueTimepicker      from 'vue2-timepicker/src/vue-timepicker.vue'
export default {
  components :{
    VueTimepicker
  },
  data () {
    return {
      calendar : calendar.kor,
      form : {
        key     : '',
        value44 : new Date(),
        value44_time : '00:00',
      }
    }
  },
  methods: {
    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    },
    registerForm() {
      const _v44_date = moment(this.form.value44).format("YYYY / MM / DD");
      const _v44time  = this.form.value44_time;

      const DTO = {
        key        : this.form.key, 
        value44    : `${_v44_date} - ${_v44time}`,
      }

      let result = DeliverService.registerGoodsRelease(DTO);

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
