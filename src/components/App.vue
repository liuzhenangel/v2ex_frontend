<template>
  <div class="uk-container uk-container-center" id='app'>
    <nav class='uk-navbar uk-margin-bottom'>
      <router-link class='uk-navbar-brand uk-hidden-small' :to="{name: 'index'}">
        <span class='title'>V2EX Clone 2.0</span>
      </router-link>
      <ul class='uk-navbar-nav uk-hidden-small uk-navbar-flip'>
        <li><router-link :to="{name: 'index'}" v-if='! logined'>首页</router-link></li>
        <li><router-link :to="{name: 'register'}" v-if='! logined'>注册</router-link></li>
        <li><router-link :to="{name: 'login'}" v-if='! logined'>登录</router-link></li>
        <li><router-link :to="{name: 'login'}" v-if='logined'>退出</router-link></li>
      </ul>
      <a href="#offcanvas" class='uk-navbar-toggle uk-visible-small' data-uk-offcanvas></a>
      <div class='uk-navbar-brand uk-navbar-center uk-visible-small'>
        <span class='title'>V2EX Clone</span>
      </div>
    </nav>

    <div class='uk-grid' data-uk-grid-margin>
      <div class='uk-width-medium-3-4 uk-row-first'>
        <router-view></router-view>
      </div>

      <div class='uk-width-medium-1-4'>
        <v2ex v-bind:logined="logined"></v2ex>
        <promotion></promotion>
        <hotopics></hotopics>
        <stats></stats>
      </div>
    </div>

    <div id='offcanvas' class='uk-offcanvas' aria-hidden="true">
      <div class='uk-offcanvas-bar' mode='push'>
        <ul class='uk-nav uk-nav-offcanvas'>
          <li><router-link onclick="jQuery.UIkit.offcanvas.hide()" :to="{name: 'index'}" v-if='! logined'>首页</router-link></li>
          <li><router-link onclick="jQuery.UIkit.offcanvas.hide()" :to="{name: 'register'}" v-if='! logined'>注册</router-link></li>
          <li><router-link onclick="jQuery.UIkit.offcanvas.hide()" :to="{name: 'login'}" v-if='! logined'>登录</router-link></li>
          <li><router-link onclick="jQuery.UIkit.offcanvas.hide()" :to="{name: 'login'}" v-if='logined'>退出</router-link></li>
        </ul>
      </div>
    </div>

    <div class='uk-text-center uk-margin-top' id='footer'>
      <div class='uk-panel uk-panel-box'>
        <p><router-link :to="{name: 'index'}">v2ex.liuzhen.me</router-link> © 2016 - 2016</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import '../assets/stylesheets/app.scss'
</style>

<script>
  import V2ex from './V2ex.vue'
  import Promotion from './Promotion.vue'
  import Hotopics from './Hotopics.vue'
  import Stats from './Stats.vue'
  export default {
    components: {
      V2ex,
      Promotion,
      Hotopics,
      Stats
    },
    data () {
      return {
        logined: false
      }
    }
  }
</script>
