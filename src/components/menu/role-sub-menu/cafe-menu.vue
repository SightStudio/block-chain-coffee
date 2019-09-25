<template>
  <b-menu-item icon="coffee" :expanded="btn" :active="btn" @click="btn = !btn">
    <template slot="label" slot-scope="props">
      카페 관리
      <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
    </template>
    
    <b-menu-item icon="cellphone-link" label="도착 날짜 등록" tag="router-link" to="/main/cafe/register-deliver-date"></b-menu-item>
    <b-menu-item icon="cellphone-link" label="로스팅 등록"    tag="router-link" to="/main/cafe/register-roast-history"></b-menu-item>
    <b-menu-item icon="cellphone-link" label="상품 출고 등록" tag="router-link" to="/main/cafe/register-goods-release"></b-menu-item>
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
