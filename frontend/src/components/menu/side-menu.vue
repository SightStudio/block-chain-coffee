<template>
<div class="container">

    <br>
    <b-menu>

      <!-- [1] 작업 관리 -->
      <b-menu-list label="계정 메뉴">
        <admin-menu    v-if="role=='admin'   " />
        <importer-menu v-if="role=='importer'" />
        <deliver-menu  v-if="role=='deliver' " />
        <store-menu    v-if="role=='store'   " />
        <cafe-menu     v-if="role=='cafe'    " />

      </b-menu-list>
      <br>

      <!-- [2] 계정 관리 -->
      <b-menu-list label="계정 메뉴">
        <b-menu-item icon="account-card-details" :expanded="btn" :active="btn" @click="btn = !btn">
            <template slot="label" slot-scope="props">
              계정 관리
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
            </template>

            <b-menu-item icon="account" label="정보 조회"></b-menu-item>
          </b-menu-item>
      </b-menu-list>
    </b-menu>
</div>
</template>

<script>
import adm      from './role-sub-menu/admin'
import importer from './role-sub-menu/importer'
import deliver  from './role-sub-menu/deliver'
import cafe     from './role-sub-menu/cafe'
import store    from './role-sub-menu/store'
export default {
  components : {
    'admin-menu'   : adm,
    'importer-menu': importer,
    'deliver-menu' : deliver,
    'store-menu'   : store,
    'cafe-menu'    : cafe,
  },
  props: {
    role : {              // [1] 유저 role
      type    : String,
      default : 'admin',
      // required: true,
    }
  },
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
