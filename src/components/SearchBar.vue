<template>
    <div>
        <input 
            autocomplete="off"
            type="search"
            id="search"
            name="q"
            placeholder="Search for a University..."
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Search for a University...'"
            aria-label="Search for a University"
            size="100"
            v-model = "searchValue"
            v-on:keyup = "search($event)"
        ></input>
    </div>
</template>

<script>

export default {
  name: 'search-bar',
  data () {
    return {
        searchValue: ''
    }
  },
  methods: {
      search(event) {
          console.log(this.searchValue)
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
    input {
        width: 100%;
        height: 40px;
        border: none;
        color: black;
        background: transparent;
        text-align: center;
        font-family: 'Kollektif';
        font-weight: 600;
        font-size: 20px;
    }
    input:focus {
        outline: none;
    }

</style>
