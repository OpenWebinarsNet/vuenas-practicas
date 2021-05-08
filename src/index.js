import 'frontend/styles/main.scss'
import App from 'frontend/App.vue'
import Vue from 'vue'
import { router } from 'frontend/router'

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})
