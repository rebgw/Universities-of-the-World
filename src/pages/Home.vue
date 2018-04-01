<template>
  <div class="home">
    <universities></universities>
  </div>
</template>

<script>
import Universities from './../components/Universities.vue'

export default {
  name: 'Home',
  components: {
    Universities}
}
</script>

<style scoped>
  .home {
      margin: -80px 40px 15px 40px;
  }
</style>
