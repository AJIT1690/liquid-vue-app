<template>
    <h1> Details Html</h1>
</template> 

<script>
export default {
    created () {
      this.$nuxt.$loading.start()
    },
    mounted() {
      
      setTimeout(() => this.$nuxt.$loading.finish(), 700)
    }
}
</script>