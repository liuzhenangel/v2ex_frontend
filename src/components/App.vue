<template>
  <div id="app-wrapper">
    <section class='top-bar-left' id='topbar_left'>
      <ul>
        <li>搜索</li>
      </ul>
    </section>
    <section class='top-bar-right' id='topbar_right'>
      <ul>
        <li>首页</li>
      </ul>
    </section>
    <router-view></router-view>
  </div>
  <tooltip effect="scale" placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
    <button class="btn btn-default">tooltip on bottom</button>
  </tooltip>
</template>

<style lang="sass">
  @import "../assets/stylesheets/app.scss"
</style>
