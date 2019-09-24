<template>
  <b-menu-item icon="truck" :expanded="btn" :active="btn" @click="btn = !btn">
    <template slot="label" slot-scope="props">
      정기 배송 센터
      <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
    </template>

    <b-menu-item icon="cellphone-link" label="상품 출고 날짜 등록"   tag="router-link" to="/main/deliver/register-goods-release"></b-menu-item>
    <b-menu-item icon="cellphone-link" label="상품 패키징 날짜 등록" tag="router-link" to="/main/deliver/register-goods-package"></b-menu-item>
    <b-menu-item icon="cash-multiple"  label="상품 도착 날짜 등록"   tag="router-link" to="/main/deliver/register-goods-arrive"></b-menu-item>
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
