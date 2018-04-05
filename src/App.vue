<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'Vue'

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lilita+One');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b475e;
  font-family: 'Lilita One', cursive;
}
</style>
