<template>
  <div class='uk-panel uk-panel-box'>
    <div class='uk-grid' data-uk-grid-margin>

      <div class='uk-width-8-10'>
        <div class='short-navigate'>
          <a href='/'>V2EX</a>
          <span> › </span>
          <span>{{ topic.node.title }}</span>
        </div>
        <h2>{{ topic.title }}</h2>
        <div>
          <span class='node-title'>{{ topic.node.title }}</span>
          •
          <a href="/member/{{topic.member.id}}" class='username'>{{ topic.member.username }}</a>
          •
          <span class='created'>{{ topic.created }}</span>
        </div>
      </div>

      <div class='uk-width-2-10 uk-text-right'>
        <a href="/member/{{topic.member.id}}">
          <img class='uk-border-radius-10' v-bind:src="topic.member.avatar_normal"></img>
        </a>
      </div>
    </div>

    <hr class='uk-article-divider'>
    <p class='topic-content'>{{ topic.content }}</p>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        topic: {}
      }
    },

    ready: function () {
      this.initData()
    },

    methods: {
      initData: function () {
        console.log('xxx')
        this.$http.get('/api/topics/show.json', {params: {id: this.$route.params.id}}).then(function (response) {
          this.$set('topic', response.body[0])
          console.log('show xxx', response)
        }).then(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/stylesheets/show.scss'
</style>
