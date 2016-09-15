import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'

import { formatDate } from './filters'
import App from './components/App.vue'
import Index from './components/Index.vue'
import Test from './components/test.vue'
import Show from './components/Show.vue'
import Member from './components/Member.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VuePaginate)

Vue.filter('formatDate', formatDate)

const router = new VueRouter({
  history: true,
  hashbang: false
})

router.beforeEach(function (transition) {
  window.scrollTo(0, 0)
  transition.next()
})

router.map({
  '/': {
    name: 'index',
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
    name: 'login',
    component: function (resolve) {
      require(['./components/Login.vue'], resolve)
    }
  },

  '/register': {
    name: 'register',
    component: function (resolve) {
      require(['./components/Register.vue'], resolve)
    }
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
