<template>
  <div v-if="loading" class="loading-page">
    <p><img src="~assets/img/loader.gif"  alt="banner"/></p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 9999;
}
.loading-page p {
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
</style>
