<template>
  <div id="app">
    <div id="header"><h1>Universities of the World</h1></div>
    <div id="filler"></div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'Vue'
import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyB799scvfDY0vXGSQmFVYRgeSVtCP0ZceI',
  authDomain: 'universities-of-the-world.firebaseapp.com',
  databaseURL: 'https://universities-of-the-world.firebaseio.com',
  projectId: 'universities-of-the-world',
  storageBucket: 'universities-of-the-world.appspot.com',
  messagingSenderId: '301526515197'
}

let app = Firebase.initializeApp(config)
Vue.prototype.$database = app.database()

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

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
    height: 70px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
