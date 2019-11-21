<template>
    <h1>CONTACT PAGE</h1>
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