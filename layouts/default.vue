<template>
  <div>
    <loading></loading>
    <header-main v-on:openMenu="bodyMenuClass"></header-main>
    <sidebar v-on:openSidebar="openSidebar"></sidebar>
    <div id="main">
      <div id="intro-section" class="section-pt section-pb">
        <div class="container">
          <transition name="fade">
            <nuxt />
          </transition>
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
import Loading from '~/components/Loading.vue'


export default {
  components: {
    HeaderMain,
    Sidebar,
    FooterMain,
    Loading
  },

  methods: {
    bodyMenuClass: function(isOpen) {
      if(isOpen) {
        document.body.classList.add('dropdown-open');
      }
      else {
        document.body.classList.remove('dropdown-open');
      }
      
    },
		openSidebar: function(sideOpen) {
      if(sideOpen) {
        document.body.classList.add('sidepanel-open');
      }
      else {
        document.body.classList.remove('sidepanel-open');
      }

    }
    
  }
}

</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
