<template>
    <b-navbar>

      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png">
        </b-navbar-item>
      </template>

      <!-- 
      <template slot="start">
        <b-navbar-item href="#"></b-navbar-item>
        <b-navbar-item href="#">Documentation</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template> 
      -->

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-light" @click="logout">Log out</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    logout() {
      this.$buefy.snackbar.open('성공적으로 로그아웃하였습니다.');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>
