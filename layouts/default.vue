<template>
  <div>
    <header-main></header-main>
    <sidebar></sidebar>
    <div id="main">
      <div id="intro-section" class="section-pt section-pb">
        <div class="container">
          <nuxt />
        </div>
      </div>
    </div> 
    <footer-main></footer-main> 
  </div>  
</template>


<script>

import HeaderMain from '~/components/HeaderMain.vue'
import Sidebar from '~/components/Sidebar.vue'
import FooterMain from '~/components/FooterMain.vue'


export default {
  components: {
    HeaderMain,
    Sidebar,
    FooterMain
  }
}

</script>
<style>

</style>
