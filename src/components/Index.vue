<template>
  <div class='uk-panel uk-panel-box'>
    <subnav></subnav>
    <hr class='uk-article-divider'>

    <div class='uk-alert' v-if='isBlank()'>
      没有数据~
    </div>

    <div class='line' v-for='topic in topics | filterBy category'>
      <div class='uk-grid' data-uk-grid-margin>
        <div class='uk-width-1-10'>
          <a href="/member/{{topic.member.id}}">
            <img v-bind:src="topic.member.avatar_normal"></img>
          </a>
        </div>
        <div class='uk-width-8-10'>
          <h2 class='uk-h3'><a href="/show/{{topic.id}}" class='topic-title'>{{ topic.title }}</a></h2>
          <div>
            <span>{{ topic.node.title }}</span>
              •
            <a href="/member/{{topic.member.id}}" class='username'>{{ topic.member.username }}</a>
              •
            <span class='created'>{{ topic.created }}</span>
          </div>
        </div>
        <div class='uk-width-1-10 line-height-59'>
          <p class='uk-text-right uk-badge uk-badge-notification'>{{ topic.replies }}</p>
        </div>
      </div>
      <hr/>
    </div>

</template>

<script>
  import Subnav from './Subnav'
  import _ from 'lodash'

  export default {
    components: {
      Subnav
    },

    data () {
      return {
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
      }
    },
    methods: {
      initData: function () {
        this.$http.get('/api/topics/latest.json').then(function (response) {
          this.$set('topics', response.body)
          console.log(response.body)
        }).then(function (err) {
          console.log(err)
        })
      },

      isBlank: function () {
        let categoryTopic = _.find(this.topics, (topic) => {
          return this.category(topic)
        })
        return categoryTopic === undefined
      },

      category: function (val) {
        if (this.tab === 'tech' || this.tab === '' || this.tab === 'all') {
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
