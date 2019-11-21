import Vue from 'vue'

Vue.mixin({
  mounted: function () {
    console.dir(this.$nuxt)
    console.log('mixin hook called')
  },
  beforeRouteEnter: function(to, from, next) { 
    console.log('****kgiugigu')
    next() 
  }
})