<template>
  <div class="page">
    
    <!-- GNB -->
    <gnb/>
    
    <!-- BODY -->
    <section class="columns">

      <!-- SIDE MENU -->
      <side-menu class="column is-2"></side-menu>

      <!-- MAIN BODY -->
      <div class="column is-10"></div>
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
    gnb,
    'side-menu'  : menu,
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
