<template>
  <div class="home">
    <banner name="UNIVERSITIES" secondaryName="OF THE WORLD"></banner>
    <universities></universities>
  </div>
</template>

<script>
import Universities from './../components/Universities.vue'
import Banner from './../components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Universities,
    Banner
  }
}
</script>

<style scoped>
banner {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
</style>
