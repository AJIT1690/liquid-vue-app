

const TestMixin = {
  created () {
    this.$nuxt.$loading.start()
  },
  mounted() {
    
    setTimeout(() => this.$nuxt.$loading.finish(), 700)
  }
}  


const _TestMixin = { TestMixin }
export { _TestMixin as TestMixin } 

