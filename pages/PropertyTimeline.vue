<template>
    <h1>Property Timeline page</h1>
</template>

<script>
export default {
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 700)
      })
    }
}
</script>