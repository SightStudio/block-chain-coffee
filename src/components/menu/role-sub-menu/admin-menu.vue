<template>
      <b-menu-item icon="desktop-classic" :expanded="btn" :active="btn" @click="btn = !btn">
        <template slot="label" slot-scope="props">
          관리자 패널
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'">ㄴ</b-icon>
        </template>

        <importer-menu/>
        <store-menu   />
        <cafe-menu    />
        <deliver-menu />
      </b-menu-item>
</template>

<script>
import importer from './importer-menu'
import deliver  from './deliver-menu'
import cafe     from './cafe-menu'
import store    from './store-menu'

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
