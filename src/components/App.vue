<template>
  <div class="uk-container uk-container-center" id='main'>
    <nav class='uk-navbar uk-margin-bottom'>
      <a class='uk-navbar-brand uk-hidden-small' v-link="{name: 'index'}">
        <img class='logo' src='//cdn.v2ex.co/site/logo@2x.png?m=1346064962'></img>
      </a>
      <ul class='uk-navbar-nav uk-hidden-small uk-navbar-flip'>
        <li><a v-link="{name: 'index'}" v-if='! logined'>首页</a></li>
        <li><a v-link="{name: 'register'}" v-if='! logined'>注册</a></li>
        <li><a v-link="{name: 'login'}" v-if='! logined'>登录</a></li>
        <li><a v-link="{name: 'login'}" v-if='logined'>退出</a></li>
      </ul>
      <a href="#offcanvas" class='uk-navbar-toggle uk-visible-small' data-uk-offcanvas></a>
      <div class='uk-navbar-brand uk-navbar-center uk-visible-small'>
        <img class='logo' src='//cdn.v2ex.co/site/logo@2x.png?m=1346064962'></img>
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
          <li><a v-link="{name: 'index'}" v-if='! logined'>首页</a></li>
          <li><a v-link="{name: 'register'}" v-if='! logined'>注册</a></li>
          <li><a v-link="{name: 'login'}" v-if='! logined'>登录</a></li>
          <li><a v-link="{name: 'login'}" v-if='logined'>退出</a></li>
        </ul>
      </div>
    </div>

    <div class='uk-text-center uk-margin-top' id='footer'>
      <div class='uk-panel uk-panel-box'>
        <p><a v-link="{name: 'index'}">v2ex.liuzhen.me</a> © 2016 - 2016</p>
      </div>
    </div>
  </div>

</template>

<style lang="sass">
  @import '../assets/stylesheets/app.scss'
</style>

<script>
  import V2ex from './V2ex'
  import Promotion from './Promotion'
  import Hotopics from './Hotopics'
  import Stats from './Stats'
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
