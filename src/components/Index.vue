<template>
  <div class='uk-grid' data-uk-grid-margin>
    <div class='uk-width-medium-3-4 uk-row-first'>
      <div class='uk-panel uk-panel-box'>
        <div class='uk-width-1-1 uk-row-first'>
          <ul class="uk-subnav uk-subnav-pill" data-uk-switcher="{connect:'#switcher-content'}">
            <li v-bind:class='uk-active' aria-expanded="{{$route.query.tab == 'tech'}}">
              <a href='/index?tab=tech'>技术</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=creative'>创意</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=play'>好玩</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=apple'>Apple</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=jobs'>酷工作</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=deals'>交易</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=city'>城市</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=qna'>问与答</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=hot'>最热</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=all'>全部</a>
            </li>
            <li aria-expanded="false">
              <a href='/index?tab=r2'>R2</a>
            </li>
          </ul>
        </div>
        <hr class='uk-article-divider'>
        <div class='uk-grid' data-uk-grid-margin>
          <div class='uk-width-medium-1-1 line-bottom' v-for='list in datas'>
            <div class='uk-grid uk-margin-top'>
              <div class='uk-width-1-10'>
                <img v-bind:src="list.member.avatar_normal"></img>
              </div>
              <div class='uk-width-8-10'>
                <h2 class='uk-h3'><a href="{{ list.url }}" target='_blank' class='topic-title'>{{ list.title }}</a></h2>
                <div>
                  <a href="{{list.node.url}}" class='node-title'>{{ list.node.title }}</a>
                    •
                  <span class='username'>{{ list.member.username }}</span>
                    •
                  <span class='created'>{{ list.created }}</span>
                </div>
              </div>
              <div class='uk-width-1-10'>
                <p class='uk-text-right uk-badge uk-badge-notification'>{{ list.replies }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='uk-width-medium-1-4'>
      <div class='uk-panel uk-panel-box'>
        <dl class='uk-description-list-line'>
          <dt>V2EX = way to explore</dt>
          <dd>V2EX 是一个关于分享和探索的地方</dd>
        </dl>
        <div class='uk-text-center inner line-top'>
          <a class='uk-button' href='/register'>现在注册</a>
          <p>已注册用户请 <a href='/login'>登录</a></p>
        </div>
      </div>
      <div class='uk-panel uk-panel-box'>
        <h4 class='uk-panel-title'>推广</h4>
        <ul class='uk-nav uk-nav-side'>
          <li>
            <a href='http://liuzhen.me' target='_blank'>Rina's Blog</a>
          </li>
          <li>
            <a href='https://github.com/liuzhenangel' target='_blank'>Rina's Github</a>
          </li>
          <li>
            <a href='https://github.com/liuzhenangel/v2ex_frontend' target='_blank'>Project Code</a>
          </li>
          <li>
            <a href='https://github.com/liuzhenangel/Rina_Blog' target='_blank'>Blog Code</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        datas: [
          {
            id: 305514,
            title: '谁的天气 app 敢说比我这个还简洁?',
            url: 'http://www.v2ex.com/t/305514',
            content: 'http://www.v2ex.com/i/15093Lfj.png',
            content_rendered: '<a target="_blank" href="/i/15093Lfj.png" target="_blank" title="在新窗口打开图片 15093Lfj.png"><img src="//i.v2ex.co/15093Lfj.png" class="embedded_image" /></a>',
            replies: 137,
            member: {
              id: 109216,
              username: 'lxyyzm',
              tagline: '',
              avatar_mini: '//cdn.v2ex.co/avatar/781b/eb7f/109216_mini.png?m=1428503179',
              avatar_normal: '//cdn.v2ex.co/avatar/781b/eb7f/109216_normal.png?m=1428503179',
              avatar_large: '//cdn.v2ex.co/avatar/781b/eb7f/109216_large.png?m=1428503179'
            },
            node: {
              id: 17,
              name: 'create',
              title: '分享创造',
              title_alternative: 'Create',
              url: 'http://www.v2ex.com/go/create',
              topics: 6126,
              avatar_mini: '//cdn.v2ex.co/navatar/70ef/df2e/17_mini.png?m=1473309452',
              avatar_normal: '//cdn.v2ex.co/navatar/70ef/df2e/17_normal.png?m=1473309452',
              avatar_large: '//cdn.v2ex.co/navatar/70ef/df2e/17_large.png?m=1473309452'
            },
            created: 1473601228,
            last_modified: 1473601263,
            last_touched: 1473674693
          },
          {
            id: 305514,
            title: '谁的天气 app 敢说比我这个还简洁?',
            url: 'http://www.v2ex.com/t/305514',
            content: 'http://www.v2ex.com/i/15093Lfj.png',
            content_rendered: '<a target="_blank" href="/i/15093Lfj.png" target="_blank" title="在新窗口打开图片 15093Lfj.png"><img src="//i.v2ex.co/15093Lfj.png" class="embedded_image" /></a>',
            replies: 137,
            member: {
              id: 109216,
              username: 'lxyyzm',
              tagline: '',
              avatar_mini: '//cdn.v2ex.co/avatar/781b/eb7f/109216_mini.png?m=1428503179',
              avatar_normal: '//cdn.v2ex.co/avatar/781b/eb7f/109216_normal.png?m=1428503179',
              avatar_large: '//cdn.v2ex.co/avatar/781b/eb7f/109216_large.png?m=1428503179'
            },
            node: {
              id: 17,
              name: 'create',
              title: '分享创造',
              title_alternative: 'Create',
              url: 'http://www.v2ex.com/go/create',
              topics: 6126,
              avatar_mini: '//cdn.v2ex.co/navatar/70ef/df2e/17_mini.png?m=1473309452',
              avatar_normal: '//cdn.v2ex.co/navatar/70ef/df2e/17_normal.png?m=1473309452',
              avatar_large: '//cdn.v2ex.co/navatar/70ef/df2e/17_large.png?m=1473309452'
            },
            created: 1473601228,
            last_modified: 1473601263,
            last_touched: 1473674693
          }
        ]
      }
    },

    ready: function () {
      this.initData()
    },

    methods: {
      initData: function () {
        this.$http.get('http://127.0.0.1:8000/api/topics/hot.json').then(function (response) {
          console.log('xxxxxxx')
          console.log(response)
          this.$set('datas', response)
        }).then(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/stylesheets/index.scss'
</style>
