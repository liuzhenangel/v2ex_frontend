<template>
  <div id="app-wrapper">
    <section class='top-bar-left' id='topbar_left'>
    </section>
    <section class='top-bar-right' id='topbar_right'>
      <ul>
        <li>首页</li>
        <li>注册</li>
        <li>登录</li>
      </ul>
    </section>
  </div>
  <router-view></router-view>
</template>

<style lang="sass">
  @import "../assets/stylesheets/app.scss"
</style>
