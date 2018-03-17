<template>
  <div id="app">
    <div id="header"><h1>Universities of the World</h1></div>
    <div id="filler"></div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>


<style>

#header {
    color: white;
    position: fixed;
    width: 100%;
    background-color: black;
    font-size: 10px;
    padding: 1px;
    margin: -4px 0 0 0;
    font-family: Roboto;
}

#filler {
    height: 45px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
