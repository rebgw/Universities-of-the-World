<template>
  <div class="university">
    <a class="back" @click="goHome()">
      <img class="arrow" src="./../assets/arrow.png"/>
      <h4>go back</h4>
    </a>
    <banner v-bind:name="$route.params.name" v-bind:country="$route.params.country" v-bind:url="$route.params.url"></banner>
    <img v-if="image != ''" class="image" v-bind:src="image"/>
    <h3>{{description}}</h3>
  </div>
</template>

<script>
import Banner from '../components/Banner'

export default {
  name: 'SingleUniversity',
  components: {
    Banner
  },
  data () {
    return {
      description: '',
      image: ''
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  },
  created () {
    this.$http.get('http://api.linkpreview.net/?key=5aad9e366222568209dc20595f15c48ddcfbe866ef7b1&q=' + this.$route.params.url).then(function(data) {
      this.description = data.body.description
      this.image = data.body.image
    })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

.university {
  padding: 50px 10% 70px 10%;
  background-color: #2b475e;
  min-height: 100%;
}
h3 {
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
}
h4 {
  color: #54a4a6;
  font-weight: 10;
  top: 0px;
  left: 45px;
  position: fixed;
}
.image {
  width: 100%;
  height: 100%;
  max-width: 700px;
  margin: 20px 0 40px 0;
}
.back {
  position: fixed;
  float: left;
  top: 20px;
  left: 20px;
}
.arrow {
  height: 20px;
  float: left;
}
</style>

<style>
  body,html{
      margin:0;
      width:100%;
  }
  html{
    background-color: #2b475e;
  }
</style>
