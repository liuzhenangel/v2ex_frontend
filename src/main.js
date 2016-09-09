import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import Hello from './components/Hello.vue'
import Test from './components/test.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  hashbang: false
})

router.map({
  '/hello': {
    name: 'hello',
    component: Hello
  },
  '/test': {
    name: 'test',
    component: Test
  }
})

router.redirect({
  '*': '/test'
})

router.start(App, '#app')
