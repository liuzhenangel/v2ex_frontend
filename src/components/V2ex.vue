<template>
  <div class='uk-panel uk-panel-box'>
    <dl class='uk-description-list-line'>
      <dt>V2EX = way to explore</dt>
      <dd>V2EX 是一个关于分享和探索的地方</dd>
    </dl>
    <div class='uk-text-center inner line-top' v-if='! logined'>
      <router-link class='uk-button' :to="{name: 'register'}">现在注册</router-link>
      <p>已注册用户请 <router-link :to="{name: 'login'}">登录</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['logined']
  }
</script>
