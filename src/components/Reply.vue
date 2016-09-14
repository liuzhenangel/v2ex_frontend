<template>
  <div class='panel panel-default'>
    <div class="panel-heading">回复</div>
    <table class='uk-table no-margin-top-bottom'>
      <tbody>
        <tr v-for="reply in replies">
          <td width="40px"><a href="/member/{{reply.member.id}}"><img class='uk-border-radius-10' v-bind:src="reply.member.avatar_normal"></img></a></td>
          <td>
            <span class='reply-username'>
              <a class='username' href="/member/{{reply.member.id}}">{{reply.member.username}}</a>
            </span>
            <span class='reply-created uk-text-small'>{{reply.created}}</span>
            <p class='reply-content'>{{{ reply.content_rendered }}}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        replies: []
      }
    },
    ready: function () {
      this.initData()
    },
    methods: {
      initData: function () {
        this.$http.get('/api/replies/show.json', {params: {topic_id: this.$route.params.id}}).then(function (response) {
          this.$set('replies', response.body)
          console.log('replies', response.body)
        }).then(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/stylesheets/reply.scss'
</style>
