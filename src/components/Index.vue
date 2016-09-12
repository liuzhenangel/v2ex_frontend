<template>
  <div id='index-wrapper'>
    <div class='content'>
      <div id='Rightbar'>
        <div class='box'>
          <div class='cell-bar'>
            <strong>V2EX = way to explore</strong>
            <p class='description'> V2EX 是一个关于分享和探索的地方</p>
          </div>
          <div class='text-center inner'>
            <button>现在注册</button>
            <p>已注册用户请 <a>登录</a></p>
          </div>
        </div>
      </div>
      <div id='Main'>
        <div class='box cell'>
          <div class='box-title'>
            <a href='/index?tab=tech' v-bind:class="['tab', $route.query.tab==='tech' ? 'active': '' ]">技术</a>
            <a href='/index?tab=creative' v-bind:class="['tab', $route.query.tab==='creative' ? 'active': '' ]">创意</a>
            <a href='/index?tab=play' v-bind:class="['tab', $route.query.tab === 'play' ? 'active' : '' ]">好玩</a>
            <a href='/index?tab=apple' v-bind:class="['tab', $route.query.tab === 'apple' ? 'active' : '' ]">Apple</a>
            <a href='/index?tab=jobs' v-bind:class="['tab', $route.query.tab === 'jobs' ? 'active' : '' ]">酷工作</a>
            <a href='/index?tab=deals' v-bind:class="['tab', $route.query.tab === 'deals' ? 'active' : '' ]">交易</a>
            <a href='/index?tab=city' v-bind:class="['tab', $route.query.tab === 'city' ? 'active' : '' ]">城市</a>
            <a href='/index?tab=qna' v-bind:class="['tab', $route.query.tab === 'qna' ? 'active' : '' ]">问与答</a>
            <a href='/index?tab=hot' v-bind:class="['tab', $route.query.tab === 'hot' ? 'active' : '' ]">最热</a>
            <a href='/index?tab=all' v-bind:class="['tab', $route.query.tab === 'all' ? 'active' : '' ]">全部</a>
            <a href='/index?tab=r2' v-bind:class="['tab', $route.query.tab === 'r2' ? 'active' : '' ]">R2</a>
          </div>
          <div class='box-list'>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="sass">
  @import "../assets/stylesheets/index.scss"
</style>
