<template>
  <div class='uk-panel uk-panel-box'>
    <subnav></subnav>
    <hr class='uk-article-divider'>

    <div class='line' v-for='list in topics | filterBy category'>
      <div class='uk-grid' data-uk-grid-margin>
        <div class='uk-width-1-10'>
          <a href="/member/{{list.member.id}}">
            <img v-bind:src="list.member.avatar_normal"></img>
          </a>
        </div>
        <div class='uk-width-8-10'>
          <h2 class='uk-h3'><a href="/show/{{list.id}}" class='topic-title'>{{ list.title }}</a></h2>
          <div>
            <span>{{ list.node.title }}</span>
              •
            <a href="/member/{{list.member.id}}" class='username'>{{ list.member.username }}</a>
              •
            <span class='created'>{{ list.created }}</span>
          </div>
        </div>
        <div class='uk-width-1-10 line-height-59'>
          <p class='uk-text-right uk-badge uk-badge-notification'>{{ list.replies }}</p>
        </div>
      </div>
      <hr class='uk-article-divider'>
    </div>
</template>

<script>
  import Subnav from './Subnav'

  export default {
    components: {
      Subnav
    },

    data () {
      return {
        latest: [],
        topics: [],
        tab: ''
      }
    },
    ready: function () {
      this.initData()
    },
    events: {
      tab: function (tab) {
        this.$set('tab', tab)
        console.log(tab)
      }
    },
    methods: {
      initData: function () {
        this.$http.get('/api/topics/latest.json').then(function (response) {
          this.$set('latest', response.body)
          this.$set('topics', response.body)
          console.log(response.body)
        }).then(function (err) {
          console.log(err)
        })
      },
      category: function (val) {
        if (this.tab === 'tech' || this.tab === '') {
          return true
        } else {
          return val.node.name === this.tab
        }
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/stylesheets/index.scss'
</style>
