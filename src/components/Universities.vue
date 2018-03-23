<template>
  <div>
    <div class="uni" v-for="uni of unis" v-bind:key="uni['.key']">
      <h1>{{uni.name}}</h1>
      <h2>{{uni.country.toUpperCase()}}</h2>
      <a v-bind:href="uni.web_pages[0]" target="_blank">{{uni.web_pages[0]}}</a>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import Vue from 'Vue'
import unisJson from './../assets/unis_json'
import { unisRef, testRef } from './../firebase'
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'universities',
  components: {
    InfiniteLoading
  },
  data () {
    return {
      unis: [],
      lastUniId: "",
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$http.get("http://localhost:5000/universities-of-the-world/us-central1/work?size=5&startId="+this.lastUniId).then(function(data){
        let keys = Object.keys(data.body)
        keys.forEach(key => {
          if (key !== keys[keys.length-1]){
            this.unis.push(data.body[key])
          } else {
            this.lastUniId = key
          }
        });
        $state.loaded()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@font-face {
font-family: "Kollektif";
src: url("./../assets/fonts/kollektif.woff") format("woff");
}
.uni {
  background-color: white;
  margin: 15px 0 15px 0;
  padding: 50px 35px 50px 35px;
  min-height: 150px;
  min-width: 200px;
}
h1 {
  font-weight: 600;
  font-family: Kollektif;
  font-size: 28px;
  margin-top: 0px;
}
h2 {
  font-family: Roboto;
  font-size: 15px;
}
a {
  font-family: Roboto;
  color: black;
  text-decoration: none;
  font-size: 15px;
}

</style>
