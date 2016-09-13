import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import Index from './components/Index.vue'
import Test from './components/test.vue'
import Show from './components/Show.vue'
import Member from './components/Member.vue'
import VueMoment from 'moment'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMoment)

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

  '/show/:id': {
    name: 'show',
    component: Show
  },

  '/member/:id': {
    name: 'member',
    component: Member
  },

  '/test': {
    name: 'test',
    component: Test
  },

  '/login': {
    component: function (resolve) {
      require(['./components/Login.vue'], resolve)
    }
  },

  '/register': {
    component: function (resolve) {
      require(['./components/Register.vue'], resolve)
    }
  }
})

router.redirect({
  '*': '/index'
})

router.start(App, '#app')
