<template>
    <h1>CONTACT PAGE</h1>
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