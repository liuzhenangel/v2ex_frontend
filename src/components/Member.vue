<template>
  <div class='uk-panel uk-panel-box'>
    <div class='uk-grid' data-uk-grid-margin>
      <div class='uk-width-1-10'>
        <img class='uk-border-radius-10' v-bind:src="member.avatar_normal"></img>
      </div>

      <div class='uk-width-8-10'>
        <h3 class='uk-h2'>{{member.username}}</h3>
        <p>V2EX 第 {{member.id}} 号会员, 加入于 {{member.created | formatDate}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        member: {}
      }
    },

    ready: function () {
      this.initData()
    },

    methods: {
      initData: function () {
        this.$http.get('/api/members/show.json', {params: {id: this.$route.params.id}}).then(function (response) {
          this.$set('member', response.body)
        }).then(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>
