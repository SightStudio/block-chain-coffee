<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name : 'app',
  components : {}
}
</script>
<style lang="scss">
@import url("https://cdn.materialdesignicons.com/4.4.95/css/materialdesignicons.min.css");
@import url("https://use.fontawesome.com/193cc26c38.css");

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
