<template>
  <b-menu-item icon="coffee" :expanded="btn" :active="btn" @click="btn = !btn">
    <template slot="label" slot-scope="props">
      카페 관리
      <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
    </template>

    <b-menu-item icon="account"        label="Users"></b-menu-item>
    <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>
    <b-menu-item icon="cash-multiple"  label="Payments"></b-menu-item>
  </b-menu-item>
</template>

<script>
export default {
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
