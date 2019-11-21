

export const TestMixin = {
  created () {
    this.$nuxt.$loading.start()
  },
  mounted() {
    
    setTimeout(() => this.$nuxt.$loading.finish(), 700)
  }
}