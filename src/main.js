import Vue from 'vue'

import { formatDate } from './filters'
import App from './components/App.vue'
import router from './router'

const inBrowser = typeof window !== 'undefined'
if (inBrowser) {
  //import VueResource from 'vue-resource'
  //Vue.use(VueResource)
  Vue.use(require('vue-resource'))
}

Vue.filter('formatDate', formatDate)

const app = new Vue({
  router,
  ...App
})

export { app, router }
