<template>
  <div class="hello">
    <universities></universities>
  </div>
</template>

<script>
import Universities from './../components/Universities.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      unis: ""
    }
  },
  components: {
    Universities}
}
</script>

<style scoped>
  .hello {
      margin: -80px 40px 15px 40px;
  }
</style>
