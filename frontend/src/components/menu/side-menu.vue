<template>
<div class="container">

    <br>
    <b-menu-list label="관리자 메뉴">
      <b-menu-item icon="account" :expanded="btn" @click="btn = !btn">
          <template slot="label" slot-scope="props">
            계정 관리
            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
          </template>

          <b-menu-item icon="account"        label="Users"></b-menu-item>
          <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>
          <b-menu-item icon="cash-multiple"  label="Payments"></b-menu-item>
        </b-menu-item>
    </b-menu-list>

    <br>
    <b-menu>
      <b-menu-list label="계정 관리">
        <b-menu-item icon="account" :expanded="btn" @click="btn = !btn">
          <template slot="label" slot-scope="props">
            계정 관리
            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
          </template>

          <b-menu-item icon="account"        label="Users"></b-menu-item>
          <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>
          <b-menu-item icon="cash-multiple"  label="Payments"></b-menu-item>
        </b-menu-item>

        <b-menu-item icon="information-outline" label="Info"></b-menu-item>
      </b-menu-list>
    </b-menu>
</div>
</template>

<script>
export default {
  components : {},
  data () {
    return {
      btn : false,
    }
  },
}
</script>

<style scoped>
/* .tile.is-parent > .menu{ width : 20%; } */
</style>
