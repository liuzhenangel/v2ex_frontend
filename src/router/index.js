import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/Index.vue'
import Test from '../components/test.vue'
import Show from '../components/Show.vue'
import Member from '../components/Member.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index, name: 'index' },
    { path: '/show/:id', component: Show, name: 'show' },
    { path: '/member/:id', component: Member, name: 'member' },
    { path: '/test', component: Test, name: 'test' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 })
})
