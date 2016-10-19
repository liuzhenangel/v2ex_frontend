<template>
  <div class='uk-panel uk-panel-box'>
    <subnav></subnav>
    <hr class='uk-article-divider'>

    <div v-if="loading">Loading...</div>
    <div class='uk-alert uk-alert-warning' v-if='loadError'>
      数据加载失败, 可能是V2EX API访问超过限额, 请稍候再试
    </div>
    <div class='uk-alert' v-if='isBlank()'>
      暂无数据
    </div>

    <section v-show="!loading">
      <!--v-paginate:12="topics" limit="3">-->
      <div class='line' v-for='topic in topics'>
        <div class='uk-grid' data-uk-grid-margin>
          <div class='uk-width-2-10 uk-width-small-1-10'>
            <router-link :to="{name: 'member', params: {id: topic.member.id}}">
              <img class='uk-border-radius-10' v-bind:src="topic.member.avatar_normal"></img>
            </router-link>
          </div>
          <div class='uk-width-6-10 uk-width-small-8-10'>
            <h2 class='uk-h3'><router-link :to="{name: 'show', params: {id: topic.id}}" class='topic-title'>{{ topic.title }}</router-link></h2>
            <div>
              <span>{{ topic.node.title }}</span>
                •
              <router-link :to="{name: 'member', params: {id: topic.member.id}}" class='username'>{{ topic.member.username }}</router-link>
                •
              <span class='created'>{{ topic.created | formatDate }}</span>
            </div>
          </div>
          <div class='uk-width-2-10 uk-width-small-1-10 line-height-59'>
            <p class='uk-text-right uk-badge uk-badge-notification'>{{ topic.replies }}</p>
          </div>
        </div>
        <hr/>
      </div>
    </section>

    <!--<ul class='uk-pagination links'>-->
      <!--<li :class="{'uk-active': currentTopicsPage == topicLink}" v-if="showPage(limitedTopicsLinks)" v-for="topicLink in limitedTopicsLinks">-->
      <!--<span v-if="currentTopicsPage == topicLink">-->
        <!--{{ topicLink }}-->
      <!--</span>-->
      <!--<a @click="changeTopicsPage(topicLink)" v-else>-->
        <!--{{ topicLink }}-->
      <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import Subnav from './Subnav.vue'
  import _ from 'lodash'

  export default {
    components: {
      Subnav
    },

    data () {
      return {
        loading: true,
        loadError: false,
        topics: [],
        originResponseTopics: [],
        tab: ''
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.initData()
      })
    },
    watch: {
      '$route': function () {
        this.topics = this.categoryTopics()
      }
    },
    methods: {
      initData: function () {
        this.$http.get('/api/topics/latest.json').then(function (response) {
          this.originResponseTopics = response.body
          this.topics = response.body
          this.loading = false
          this.loadError = false
        }, function (err) {
          this.loading = false
          this.loadError = true
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
        return this.topics.length === 0 && !this.loading
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
