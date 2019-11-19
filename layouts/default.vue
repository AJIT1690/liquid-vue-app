<template>
  <div>
    <header-main></header-main>
    <header-mobile></header-mobile>
    <sidebar></sidebar>
    <div id="main">
      <div id="intro-section" class="section-pt section-pb">
        <div class="container">
          <nuxt />
        </div>
      </div>
    </div> 
    <footer></footer> 
  </div>  
</template>


<script>

import HeaderMain from '~/components/HeaderMain.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'
import HeaderMobile from '~/components/HeaderMobile.vue'

export default {
  components: {
    HeaderMain,
    Sidebar,
    Footer,
    HeaderMobile
  }
}

</script>
<style>

</style>
