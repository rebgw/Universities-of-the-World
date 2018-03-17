<template>
  <div class="hello">
    <search-bar></search-bar>
    <universities></universities>
  </div>
</template>

<script>
import SearchBar from './../components/SearchBar.vue'
import Universities from './../components/Universities.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components: {SearchBar, Universities}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        margin: 15px 40px 15px 40px;
    }
</style>
