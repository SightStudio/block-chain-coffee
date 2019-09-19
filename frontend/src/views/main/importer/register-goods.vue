<template>
<article class="register-goods">
  <h3 class="title">원두 등록</h3>

  <div class="columns">
    <form class="column is-3  is-offset-1">
      
      <b-field label="원두 명">
        <b-input v-model="form.name"></b-input>
      </b-field>

      <b-field label="정보 1">
        <b-input v-model="form.info_1"></b-input>
      </b-field>

      <b-field label="정보 2">
        <b-input v-model="form.info_2"></b-input>
      </b-field>

      <b-field label="정보 3">
        <b-input v-model="form.info_3"></b-input>
      </b-field>

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
      form : {
        name   : '',
        info_1 : '',
        info_2 : '',
        info_3 : ''
      }
    }
  },
  methods: {
    resetForm() {
      for ( let key in this.form ) { this.form[key] = '' }
    }
  }
}
</script>

<style scoped>
.button.is-info{background-color: #209cee; margin-right: 20px;}
.button.is-link{background-color: #3273dc;}
</style>
