<template>
<article class="register-goods">
  <h3 class="title">로스팅 단계 등록</h3>

  <div class="columns">
    <form class="column is-11">
      <div class="level">
        <div class="column is-5">
          <b-field label="원두 ID">
            <b-input v-model="form.key"></b-input>
          </b-field>

          <br>
          <label>로스팅 방법</label>
          <b-select placeholder="단계 선택" v-model="form.value29">
                <option
                    v-for="option in way"
                    :value="option.value"
                    :key="option.name">
                    {{ option.name }}
                </option>
            </b-select>
            
            <br>
            <h5 class="title is-6">로스팅 단계 등록</h5>

            <div class="column is-10">
              <div class="level">
                  <b-field :label="flavor[0].desc">
                    <b-numberinput :editable="false" v-model="form.flavor.fragrance" :min="0" :max="10" ticks size="is-small"  controls-position="compact"></b-numberinput>
                  </b-field>
                  
                  <b-field :label="flavor[1].desc">
                    <b-numberinput :editable="false" v-model="form.flavor.balance"  :min="0" :max="10" ticks size="is-small"  controls-position="compact"></b-numberinput>
                  </b-field>
              </div>

              <div class="level">
                <b-field :label="flavor[2].desc">
                  <b-numberinput :editable="false" v-model="form.flavor.bitterness" :min="0" :max="10" ticks size="is-small"  controls-position="compact"></b-numberinput>
                </b-field>
                
                <b-field :label="flavor[3].desc">
                  <b-numberinput :editable="false" v-model="form.flavor.sweetess" :min="0" :max="10" ticks size="is-small"  controls-position="compact"></b-numberinput>
                </b-field>
              </div>

              <div class="level">
                <b-field :label="flavor[4].desc">
                  <b-numberinput :editable="false" v-model="form.flavor.aftertaste" :min="0" :max="10" ticks size="is-small"  controls-position="compact"></b-numberinput>
                </b-field>
                
                <b-field :label="flavor[5].desc">
                  <b-numberinput :editable="false" v-model="form.flavor.body" :min="0" :max="10" ticks size="is-small"  controls-position="compact"></b-numberinput>
                </b-field>
              </div>

              <div class="level">
                <b-field :label="flavor[6].desc">
                  <b-numberinput :editable="false" v-model="form.flavor.acidity" :min="0" :max="10" ticks size="is-small"  controls-position="compact"></b-numberinput>
                </b-field>
                
                <b-field :label="flavor[7].desc">
                  <b-numberinput :editable="false" v-model="form.flavor.aroma" :min="0" :max="10" ticks size="is-small"  controls-position="compact"></b-numberinput>
                </b-field>
              </div>
            </div>
        </div> <!-- level-left end -->

        <div class="column is-6">

          <b-field label="로스팅 시간">
            <b-slider v-model="form.value28" :min="15" :max="20" ticks></b-slider>
          </b-field>
          
          <apexchart type=radar height=350 
          :options="{
            labels: [...flavor].map( obj => obj.name),
            title: {
                text: 'Flavor 그래프'
            }
          }" 
          :series="[{
              name: 'flavor',
              data: [
                form.flavor.fragrance ,
                form.flavor.balance   ,
                form.flavor.bitterness,
                form.flavor.sweetess  ,
                form.flavor.aftertaste,
                form.flavor.body      ,
                form.flavor.acidity   ,
                form.flavor.aroma     ,
              ],
          }]"/>
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
      way        : coffeeMeta.roastingWay,
      flavor     : coffeeMeta.flavor,
      calendar   : calendar.kor,
      form : {
        key     : '',
        value28 : 0,
        value29 : 0,
        flavor : {
          fragrance : 0,
          balance   : 0,
          bitterness: 0,
          sweetess  : 0,
          aftertaste: 0,
          body      : 0,
          acidity   : 0,
          aroma     : 0,
        }
      },
    }
  },
  methods: {
    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    },

    registerForm() {
      const DTO = {
        key        : this.form.key, 
        value28    : this.form.value28,
        value29    : 0,
        fragrance  : this.form.flavor.fragrance ,
        balance    : this.form.flavor.balance   ,
        bitterness : this.form.flavor.bitterness,
        sweetess   : this.form.flavor.sweetess  ,
        aftertaste : this.form.flavor.aftertaste,
        body       : this.form.flavor.body      ,
        acidity    : this.form.flavor.acidity   ,
        aroma      : this.form.flavor.aroma     ,
      }

      let result = CafeService.registerRoastHistory(DTO);

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
.field{ margin-bottom: 0 !important; }
</style>
