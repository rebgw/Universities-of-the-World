<template>
    <div>
        <div class="uni" v-for="uni in unis">
            <h1>{{uni.name}}</h1>
            <h2>{{uni.country.toUpperCase()}}</h2>
            <a v-bind:href="uni.web_pages[1]" target="_blank">{{uni.web_pages[1]}}</a>
        </div>
    </div>
</template>

<script>
import unisJson from './../assets/unis_json'

export default {
  name: 'universities',
  data () {
    return {
      unis: unisJson
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
font-family: "Kollektif";
src: url("./../assets/fonts/kollektif.woff") format("woff");
}
.uni {
    background-color: white;
    margin: 15px 0 15px 0;
    padding: 35px;
    height: 150px;
}
h1 {
    font-weight: 600;
    font-family: Kollektif;
    font-size: 28px;
}
h2 {
    font-family: Roboto;
    font-size: 100%;
}
a {
    font-family: Roboto;
    color: black;
    text-decoration: none;
}

</style>
