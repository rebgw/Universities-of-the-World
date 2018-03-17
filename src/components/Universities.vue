<template>
    <div>
        <div class="uni" v-if="isLoaded">
            <h1>Hey, I'm Loaded</h1>
            <h1>{{uni123.name}}</h1>
            <h2>{{uni123.country.toUpperCase()}}</h2>
            <a v-bind:href="uni123.web_pages[0]" target="_blank">{{uni123.web_pages[1]}}</a>
        </div>
        <div class="uni" v-for="uni in unis">
            <h1>{{uni.name}}</h1>
            <h2>{{uni.country.toUpperCase()}}</h2>
            <a v-bind:href="uni.web_pages[0]" target="_blank">{{uni.web_pages[0]}}</a>
        </div>
    </div>
</template>

<script>
    import Vue from 'Vue'
    import unisJson from './../assets/unis_json'  

    export default {
        name: 'universities',
        data () {
            return {
                unis: unisJson,
                isLoaded: false,
            }
        },
        mounted: function(){
            Vue.prototype.$database.ref('123').once('value').then(function(snapshot) {
                console.log(snapshot.val())
            })
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
    padding: 35px;
    min-height: 150px;
    min-width: 200px;
}
h1 {
    font-weight: 600;
    font-family: Kollektif;
    font-size: 28px;
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
