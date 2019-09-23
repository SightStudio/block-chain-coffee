<template>
  <b-menu-item icon="warehouse" :expanded="btn" :active="btn" @click="btn = !btn">
    <template slot="label" slot-scope="props">
      창고 관리
      <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
    </template>

    <!-- <b-menu-item icon="account"        label="도착 날짜 조회" tag="router-link" to="/store/register-history"></b-menu-item> -->
    <b-menu-item icon="cellphone-link" label="보관 이력 등록" tag="router-link" to="/main/store/register-history"></b-menu-item>
    <b-menu-item icon="cellphone-link" label="상품 출고 등록" tag="router-link" to="/main/store/release-goods"></b-menu-item>
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
