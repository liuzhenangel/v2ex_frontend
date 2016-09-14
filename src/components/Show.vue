<template>
  <div class='uk-panel uk-panel-box'>
    <div v-if="loading">Loading...</div>

    <div v-if="!loading" class='uk-grid' data-uk-grid-margin>
      <div class='uk-width-8-10'>
        <div class='short-navigate'>
          <a v-link="{name: 'index'}">V2EX</a>
          <span> › </span>
          <span>{{ topic.node.title }}</span>
        </div>
        <h2>{{ topic.title }}</h2>
        <div>
          <span class='node-title'>{{ topic.node.title }}</span>
          •
          <a v-link="{name: 'member', params: {id: topic.member.id}}" class='username'>{{ topic.member.username }}</a>
          •
          <span class='created'>{{ topic.created | formatDate }}</span>
        </div>
      </div>

      <div class='uk-width-2-10 uk-text-right'>
        <a v-link="{name: 'member', params: {id: topic.member.id}}">
          <img class='uk-border-radius-10' v-bind:src="topic.member.avatar_normal"></img>
        </a>
      </div>
    </div>
    <p class='topic-content'>{{{ topic.content_rendered }}}</p>
  </div>

  <reply></reply>
</template>

<script>
  import Reply from './Reply'

  export default {
    components: {
      Reply
    },
    data () {
      return {
        loading: true,
        topic: {}
      }
    },
    watch: {
      '$route': function () {
        this.initData()
      }
    },
    ready: function () {
      this.initData()
    },
    methods: {
      initData: function () {
        this.$http.get('/api/topics/show.json', {params: {id: this.$route.params.id}}).then(function (response) {
          this.$set('topic', response.body[0])
          this.loading = false
        }).then(function (err) {
          this.loading = false
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/stylesheets/show.scss'
</style>
