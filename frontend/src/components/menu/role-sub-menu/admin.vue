<template>
      <b-menu-item icon="desktop-classic" :expanded="btn" :active="btn" @click="btn = !btn">
        <template slot="label" slot-scope="props">
          관리자 패널
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
        </template>

        <!-- 
        <b-menu-item icon="account"        label="Users"></b-menu-item>
        <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>
        <b-menu-item icon="cash-multiple"  label="Payments"></b-menu-item>
        -->
        
        <importer-menu />
        <deliver-menu  />
        <store-menu    />
        <cafe-menu     />
      </b-menu-item>
</template>

<script>
import importer from './importer'
import deliver  from './deliver'
import cafe     from './cafe'
import store    from './store'

export default {
  components : {
    'importer-menu': importer,
    'deliver-menu' : deliver,
    'store-menu'   : store,
    'cafe-menu'    : cafe,
  },
  data () {
    return {
      btn : true,
    }
  },
}
</script>

<style scoped>
/* .tile.is-parent > .menu{ width : 20%; } */
</style>
