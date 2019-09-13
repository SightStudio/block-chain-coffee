<template>
  <div class="page">
    
    <!-- GNB -->
    <main-gnb></main-gnb>
    
    <!-- BODY -->
    <section class="columns">

      <!-- SIDE MENU -->
      <main-menu class="column is-2"></main-menu>

      <!-- MAIN BODY -->
      <div class="column is-10">

      </div>
    </section>

    <!-- FOOTER -->
    <main-footer></main-footer>
  </div><!-- .page END -->
</template>

<script>
import gnb      from '../../components/gnb/gnb';
import menu     from '../../components/menu/side-menu';
import footer   from '../../components/footer/footer'
export default {
  components : { 
    'main-gnb'   : gnb,
    'main-menu'  : menu,
    'main-footer': footer,
  },
  data () {
    return {}
  }, 
  methods: {
  }
}
</script>

<style scoped>

</style>
