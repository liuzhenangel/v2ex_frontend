import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import Index from './components/Index.vue'
import Test from './components/test.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  hashbang: false
})

router.map({
  '/index': {
    name: 'index',
    component: Index
  },

  '/index?tab=tech': {
    name: 'index?tab=tech',
    component: Index
  },

  '/test': {
    name: 'test',
    component: Test
  }
})

router.redirect({
  '*': '/index'
})

router.start(App, '#app')
