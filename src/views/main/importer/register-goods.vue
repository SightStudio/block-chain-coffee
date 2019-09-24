<template>
  <section class="register-goods">
    <h3 class="title">원두 등록</h3>

    <article class="columns">
      <form class="column is-9">
        <div class="level">
          <div class="jobs is-6">
            <b-field label="원두 ID">
              <b-input v-model="form.key"></b-input>
            </b-field>

            <b-field label="날짜 등록">
              <b-datepicker
                placeholder="등록할 날자를 정해주세요" 
                :month-names="calendar.month" 
                :day-names="calendar.day"
                v-model="form.value11"
                icon="calendar-today">
              </b-datepicker>
            </b-field>

            <label class="has-text-weight-bold">품종 목록</label>
            <b-field>
              <b-select placeholder="품종 선택"
                        v-model="form.value12">
                <option v-for="option in kind" :value="option.value" :key="option.name">
                  {{ option.name }}
                </option>
              </b-select>
            </b-field>

            <label class="has-text-weight-bold">산지</label>
            <b-field>
              <b-select 
                placeholder="산지 선택"
                v-model="form.value13">
                <option v-for="option in from" 
                        :value="option.value" 
                        :key="option.name">
                  {{ option.name }}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column is-5 is-offset-2">
            <br>

            <b-field label="수확일">
              <b-datepicker 
                placeholder="등록할 날자를 정해주세요" 
                v-model="form.value14"
                :month-names="calendar.month" 
                :day-names="calendar.day"
                icon="calendar-today">
              </b-datepicker>
            </b-field>

            <b-field label="수량">
              <b-numberinput :editable="false" v-model="form.value15" :min="1" :max="10" ticks></b-numberinput>
            </b-field>

            <br>
            <b-field label="재배 고도">
              <b-slider :min="0" :max="3" aria-label="고도" :tooltip="false" v-model="form.latitute">
                <b-slider-tick :value="0">1500~2000</b-slider-tick>
                <b-slider-tick :value="1">2000~2500</b-slider-tick>
                <b-slider-tick :value="2">2500~3000</b-slider-tick>
                <b-slider-tick :value="3">3000~3500</b-slider-tick>
              </b-slider>
            </b-field>
            <br>

            <label class="has-text-weight-bold">생두 등급</label>
            <b-select 
              placeholder="등급 선택"
              v-model="form.value16">
              <option v-for="option in bean" 
                      :value="option.value" 
                      :key="option.name">
                {{ option.name }}
              </option>
            </b-select>

            <div class="has-text-right">
              <b-button type="is-info" @click="resetForm">초기화</b-button>
              <b-button type="is-link" @click="registerForm">작성</b-button>
            </div>
          </div>
        </div> <!-- level end -->
      </form>
    </article>
  </section>
</template>
<script>
import moment from "moment";
import { calendar, coffeeMeta } from '../../../util/constant/constant'
import ImporterService          from '../../../api/importer/importerService'
export default {
  data () {
    return {
      calendar : calendar.kor,
      bean     : coffeeMeta.bean,
      from     : coffeeMeta.origin,
      kind     : coffeeMeta.kinds,

      form : {
        key      : '',
        value11  : new Date(),
        value12  : '',
        value13  : '',
        value14  : new Date(),
        value15  : 0,
        value16  : '',
        latitute : 0
      }
    }
  },
  methods: {
    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    },
    registerForm() {
      let lat = '';
      switch(this.form.latitute) {
        case 0: 
          lat = '1500 ~ 2000';
          break;
        case 1: 
          lat = '2000 ~ 2500';
          break;
        case 2: 
          lat = '2500 ~ 3000';
          break;
        case 3: 
          lat = '3000 ~ 3500';
          break;
      }

      const DTO = {
        key      : this.form.key, 
        value11  : this.form.value11,
        value12  : this.form.value12,
        value13  : this.form.value13,
        value14  : this.form.value14,
        value15  : this.form.value15,
        value16  : this.form.value16,
        latitute : lat
      }

      let result = ImporterService.registerGood(DTO);

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
