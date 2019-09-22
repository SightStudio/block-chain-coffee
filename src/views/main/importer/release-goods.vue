<template>
<article class="register-goods">
  <h3 class="title">상품 출고</h3>

  <div class="columns">
    <form class="column is-9  is-offset-1">
      <div class="level">
        <div>
          <b-field label="원두 명">
            <b-input v-model="form.key"></b-input>
          </b-field>

          <b-field label="상품 출고 날짜 등록">
              <b-datepicker
                  placeholder="등록할 날자를 정해주세요"
                  :month-names="calendar.month"
                  :day-names="calendar.day"
                  v-model="form.value11">
                  icon="calendar-today">
              </b-datepicker>
          </b-field>

          <b-field label="배송지 주소">
            <b-input v-model="form.dest"></b-input>
          </b-field>
        </div>
      </div> <!-- level end -->
      <div class="has-text-right">
        <b-button type="is-info" @click="resetForm">초기화</b-button>
        <b-button type="is-link">작성</b-button>
      </div>
    </form>
  </div>
</article>
</template>
<script>
export default {
  data () {
    return {
      bean : [
        { name : 'AA', val : '1',},
        { name : 'A', val : '2',},
        { name : 'AMEX', val : '3',},
        { name : 'B', val : '4',},
        { name : 'C', val : '4',},
      ],
      from : [
        { name : '에티오피아', val : '1',},
        { name : '케냐', val : '2',},
        { name : '파나마', val : '3',},
        { name : '과테말라', val : '4',},
        { name : '콜롬비아', val : '4',},
        { name : '브라질', val : '4'},
        { name : '인도네시아', val : '4'},
      ],
      kind : [
        { name : '아라비카', val : '1',},
        { name : '로부스타', val : '2',},
        { name : '리베리카', val : '3',},
      ],
      calendar : {
        month : ['1월', '2월', '3월', "4월", "5월",'6월', '7월', '8월', "9월", "10월", "11월","12월"] ,
        day   : ['일', '월', '화', '수', '목', '금', '토']
      },
      form : {
        name   : '',
        info_1 : '',
        info_2 : '',
        info_3 : '',
        count  : 0,
        tagArr : [],
        dest   : '인천 중구 인중로 305 북성동 1가 4-1'
      }
    }
  },
  methods: {
    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    },

    addTag(selectBoxName) {
      this.form.tagArr.push(selectBoxName)
    }
  }
}
</script>

<style scoped>
.button.is-info{background-color: #209cee; margin-right: 20px;}
.button.is-link{background-color: #3273dc;}
</style>
