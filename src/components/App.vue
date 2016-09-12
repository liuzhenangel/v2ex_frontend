<template>
  <div class="uk-container uk-container-center uk-margin-top uk-margin-large-bottom" id='main'>
    <nav class='uk-navbar uk-margin-bottom'>
      <a class='uk-navbar-brand uk-hidden-small' href='/'>
        <img src='//cdn.v2ex.co/site/logo@2x.png?m=1346064962'></img>
      </a>
      <ul class='uk-navbar-nav uk-hidden-small uk-navbar-flip'>
        <li><a href='/'>首页</a></li>
        <li><a href='/register'>注册</a></li>
        <li><a href='/login'>登录</a></li>
      </ul>
    </nav>
    <router-view></router-view>
    <div class='uk-text-center uk-margin-top' id='footer'>
      <div class='uk-panel uk-panel-box'>
        <p><a href='liuzhen.me'>liuzhen.me</a> © 2016 - 2016</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import '../assets/stylesheets/app.scss'
</style>
