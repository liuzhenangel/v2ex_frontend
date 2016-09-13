<template>
  <div class="uk-container uk-container-center uk-margin-top uk-margin-large-bottom" id='main'>
    <nav class='uk-navbar uk-margin-bottom'>
      <a class='uk-navbar-brand uk-hidden-small' href='/'>
        <img src='//cdn.v2ex.co/site/logo@2x.png?m=1346064962'></img>
      </a>
      <ul class='uk-navbar-nav uk-hidden-small uk-navbar-flip'>
        <li><a href='/' v-if='! logined'>首页</a></li>
        <li><a href='/register' v-if='! logined'>注册</a></li>
        <li><a href='/login' v-if='! logined'>登录</a></li>
        <li><a href='/login' v-if='logined'>退出</a></li>
      </ul>
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

    <div class='uk-text-center uk-margin-top' id='footer'>
      <div class='uk-panel uk-panel-box'>
        <p><a href='v2ex.liuzhen.me'>v2ex.liuzhen.me</a> © 2016 - 2016</p>
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
