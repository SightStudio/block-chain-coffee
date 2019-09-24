<template>
  <div class="page">
    
    <!-- GNB -->
    <gnb id="gnb"/>
    
    <!-- BODY -->
    <section id="body" class="columns" >

      <!-- SIDE MENU -->
      <side-menu class="column is-3"></side-menu>

      <!-- MAIN BODY -->
      <section class="column is-9" id="main-body">
        <router-view/>
      </section>
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
  data () { return {} }, 
  methods: {}
}
</script>

<style scoped>
#body { margin : 0; }
#main-body {min-height: 400px;}
</style>
