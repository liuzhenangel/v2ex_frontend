<template>
  <div class='uk-panel uk-panel-box'>
    <subnav></subnav>
    <hr class='uk-article-divider'>

    <div class='uk-alert' v-if='isBlank()'>
      没有数据~
    </div>

    <section v-paginate:10="topics" limit="3">
      <div class='line' v-for='topic in topics'>
        <div class='uk-grid' data-uk-grid-margin>
          <div class='uk-width-1-10'>
            <a href="/member/{{topic.member.id}}">
              <img class='uk-border-radius-10' v-bind:src="topic.member.avatar_normal"></img>
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
    </section>

    <ul class='uk-pagination links'>
      <li :class="{'uk-active': currentTopicsPage == topicLink}" v-if="showPage(limitedTopicsLinks)" v-for="topicLink in limitedTopicsLinks">
      <span v-if="currentTopicsPage == topicLink">
        {{ topicLink }}
      </span>
      <a @click="changeTopicsPage(topicLink)" href="#" v-else>
        {{ topicLink }}
      </a>
      </li>
    </ul>
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
        originResponseTopics: [],
        tab: ''
      }
    },
    ready: function () {
      this.initData()
    },
    watch: {
      '$route': function () {
        console.log(this.$route.query.tab)
        this.fullTopics = this.categoryTopics()
      }
    },
    methods: {
      initData: function () {
        this.$http.get('/api/topics/latest.json').then(function (response) {
          this.originResponseTopics = response.body
          this.fullTopics = this.categoryTopics()
        }).then(function (err) {
          console.log(err)
        })
      },

      showPage: function (page) {
        if (page.length > 3) {
          return true
        } else {
          return page[page.length - 1] > 1
        }
      },

      isBlank: function () {
        return this.topics.length === 0
      },

      categoryTopics: function () {
        return _.filter(this.originResponseTopics, (topic) => {
          return this.category(topic)
        })
      },

      category: function (val) {
        let tab = this.$route.query.tab
        if (tab === 'tech' || tab === undefined || tab === 'all') {
          return true
        }
        return val.node.name === tab
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/stylesheets/index.scss'
</style>
