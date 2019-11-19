<template>
  <div>
    <header-main></header-main>
    <div id="main">
      <div id="intro-section" class="section-pt section-pb">
        <div class="container">
          <nuxt />
        </div>
      </div>
    </div>  
  </div>  
</template>


<script>

import HeaderMain from '~/components/HeaderMain.vue'

export default {
  components: {
    HeaderMain
  }
}

</script>
<style>

</style>
