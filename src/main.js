// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import VueFire from 'vuefire'
import router from './router'
import './firebase';

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
   
let prodUrl = "https://us-central1-universities-of-the-world.cloudfunctions.net/"
let devUrl = "http://localhost:5000/universities-of-the-world/us-central1/"
Vue.prototype.$apiUrl = prodUrl