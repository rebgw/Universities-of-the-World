<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo.png" alt="Universities of the World"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lilita+One');

.header {
  width: 100%;
  background-color: #2b475e;
  font-size: 10px;
  padding-bottom: 15px;
  margin: -4px 0 100px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
.logo {
  height: 200px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b475e;
  font-family: 'Lilita One', cursive;
}
</style>
