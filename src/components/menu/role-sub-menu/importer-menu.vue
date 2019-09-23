<template>
  <b-menu-item icon="ferry" :expanded="btn" :active="btn" @click="btn = !btn">
    <template slot="label" slot-scope="props">
      수입 업자
      <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
    </template>

    <b-menu-item icon="cellphone-link" label="원두 등록" tag="router-link" to="/main/importer/register-goods"></b-menu-item>
    <b-menu-item icon="cellphone-link" label="상품 출고" tag="router-link" to="/main/importer/release-goods"></b-menu-item>
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
