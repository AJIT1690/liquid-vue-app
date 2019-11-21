import Vue from 'vue'

Vue.mixin({
  mounted: function () {
    console.dir(this.$nuxt)
    console.log('mixin hook called')
  }
})