<template>
<article class="register-goods-arrive">
  <h3 class="title">상품 도착 날짜 등록</h3>

  <div class="columns">
    <form class="column is-9">
      <div class="level">
        <div class="column is-5" >
          <b-field label="원두 명">
            <b-input v-model="form.key"></b-input>
          </b-field>

          <b-field label="상품 도착 날짜 등록">
              <b-datepicker
                  placeholder="등록할 날자를 정해주세요"
                  :month-names="calendar.month"
                  :day-names="calendar.day"
                  v-model="form.value40"
                  icon="calendar-today">
              </b-datepicker>
          </b-field>

          <b-field>
            <vue-timepicker v-model="form.value40_time"></vue-timepicker>
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
import DeliverService           from '../../../api/deliver/deliverService'
import moment                   from "moment";
import VueTimepicker            from 'vue2-timepicker/src/vue-timepicker.vue'
export default {
  components :{
    VueTimepicker
  },
  data () {
    return {
      calendar : calendar.kor,
      cafe     : coffeeMeta.cafe,
      form : {
        key          : '',
        value40      : new Date(),
        value40_time : '00:00',
      }
    }
  },
  methods: {
    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    },
    registerForm() {
      const _v40_date = moment(this.form.value40).format("YYYY / MM / DD");
      const _v40time  = this.form.value40_time;

      const DTO = {
        key        : this.form.key, 
        value40    : `${_v40_date} - ${_v40time}`,
      }

      let result = DeliverService.registerGoodsArrive(DTO);

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
