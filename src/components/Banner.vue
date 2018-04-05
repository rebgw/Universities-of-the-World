 <template>
  <div class="banner">
    <img class="logo" src="./../assets/icon.png" alt="Universities of the World"/>
    <h1 class="name">{{name}}</h1>
    <h2 class="secondaryName">{{secondaryName}}</h2>
    <h2 class="country">{{country}}</h2>
    <a v-bind:href="url" class="url">{{url}}</a>
  </div>
</template>

<script>

export default {
  name: 'banner',
  props: [
    'name',
    'secondaryName',
    'country',
    'url'
  ]
}
</script>

<style scoped>
.banner {
  width: 100%;
  background-color: #2b475e;
  font-size: 10px;
  padding-bottom: 50px;
}
.name {
  color: white;
  font-size: 45px;
  font-weight: 1;
  letter-spacing: 3px;
  margin: 0px;
}
.secondaryName {
  color: #ffd43d;
  font-size: 44.6px;
  font-weight: 10;
  letter-spacing: 3px;
  margin: 0px;
  margin-top: -10px;
}
.country {
  color: #ffd43d;
  font-size: 25px;
  font-weight: 10;
  margin: 20px 0 10px 0;
}
.url {
  color: #ffd43d;
  font-size: 20px;
  font-weight: 10;
  margin: 0;
  text-decoration: none;
}
.logo {
  margin-top: 60px;
  margin-bottom: 10px;
  height: 75px;
}
</style>
