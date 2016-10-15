<template>
  <div class="panel panel-default">
    <div class="panel-heading">最热议主题</div>
    <table class='uk-table no-margin-top-bottom'>
      <tbody>
        <tr v-for="topic in hots">
          <td width='35px' class='uk-vertical-middle'><router-link :to="{name: 'member', params: {id: topic.member.id}}"><img class='uk-border-radius-10' v-bind:src="topic.member.avatar_normal"></img></router-link></td>
          <td class='uk-vertical-middle'><router-link :to="{name: 'show', params: {id: topic.id}}" class='topic-title'>{{ topic.title }}</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hots: []
      }
    },

    mounted: function () {
      this.$nextTick(function () {
        this.initData()
      })
    },

    methods: {
      initData: function () {
        this.$http.get('/api/topics/hot.json').then(function (response) {
          this.hots = response.body
        }).then(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/stylesheets/hotopics.scss'
</style>
