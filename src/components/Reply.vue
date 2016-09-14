<template>
  <div class='panel panel-default'>
    <div class="panel-heading">回复</div>
    <ul class='uk-pagination links' v-if='showPage(limitedRepliesLinks)'>
      <li :class="{'uk-active': currentRepliesPage == replieLink}" v-for="replieLink in limitedRepliesLinks">
      <span v-if="currentRepliesPage == replieLink">
        {{ replieLink }}
      </span>
      <a @click="changeRepliesPage(replieLink)" href="#" v-else>
        {{ replieLink }}
      </a>
      </li>
    </ul>
    <hr v-if="showPage(limitedRepliesLinks)">
    <section v-paginate:10="replies" limit="3">
      <table class='uk-table no-margin-top-bottom'>
        <tbody>
          <tr v-for="reply in replies">
            <td width="40px"><a href="/member/{{reply.member.id}}"><img class='uk-border-radius-10' v-bind:src="reply.member.avatar_normal"></img></a></td>
            <td>
              <span class='reply-username'>
                <a class='username' href="/member/{{reply.member.id}}">{{reply.member.username}}</a>
              </span>
              <span class='reply-created uk-text-small'>{{reply.created | formatDate}}</span>
              <p class='reply-content'>{{{ reply.content_rendered }}}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
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
          this.fullReplies = response.body
        }).then(function (err) {
          console.log(err)
        })
      },
      showPage: function (page) {
        if (page === undefined) {
          return false
        }
        if (page.length > 3) {
          return true
        } else {
          return page[page.length - 1] > 1
        }
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/stylesheets/reply.scss'
</style>
