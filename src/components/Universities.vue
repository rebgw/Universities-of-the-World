<template>
  <div>
    <input
      autocomplete="off"
      type="search"
      id="search"
      name="q"
      placeholder="Search for a University"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'Search for a University'"
      aria-label="Search for a University"
      size="100"
      v-model = "searchValue"
      v-on:keyup.enter = "search($event)"
    />
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
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'universities',
  components: {
    InfiniteLoading
  },
  data () {
    return {
      unis: [],
      startId: "",
      searchValue: "",
      query: ""
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$http.get(this.$apiUrl + "unis?size=10&startId="+this.startId).then(function(data){
        let keys = Object.keys(data.body)
        keys.forEach(key => {
          if (key !== keys[keys.length-1]){
            this.unis.push(data.body[key])
          } else {
            this.startId = key
          }
        });
        $state.loaded()
      })
    },
    search (event) {
      this.unis = []
      this.$http.get(this.$apiUrl + "search?term=" + this.searchValue).then(function(data){
        let keys = Object.keys(data.body)
        keys.forEach(key => {
          if (key !== keys[keys.length-1]){
            this.unis.push(data.body[key])
          } else {
            this.startId = key
          }
        })
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lilita+One');

.uni {
  background-color: white;
  border-color: #2b475e;
  margin: 15px 0 15px 0;
  padding: 80px 35px 35px 35px;
  min-height: 150px;
  min-width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0px;
}
h1 {
  font-weight: 200;
  font-size: 28px;
  margin-top: 0px;
}
h2 {
  font-size: 15px;
  font-weight: 50;
}
a {
  color: #2b475e;
  text-decoration: none;
  font-size: 15px;
}
input {
  width: 100%;
  min-width: 200px;
  height: 40px;
  border: none;
  font-weight: 10;
  color: #2b475e;
  background: white;
  font-family: 'Lilita One', cursive;
  text-align: center;
  font-size: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 7px;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: #2b475e;
}

</style>
