<template>
  <div class="panel panel-default">
    <div class="panel-heading">社区运行状况</div>
    <div class="panel-body">
      <table class='uk-table no-bottom-line no-margin-top-bottom'>
        <tbody>
          <tr>
            <td width='58px' class='uk-text-right'>注册会员</td>
            <td>{{ stats.member_max }}</td>
          </tr>
          <tr>
            <td width='58px' class='uk-text-right'>主题</td>
            <td>{{ stats.topic_max }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        stats: []
      }
    },

    ready: function () {
      this.initData()
    },

    methods: {
      initData: function () {
        this.$http.get('/api/site/stats.json').then(function (response) {
          this.$set('stats', response.body)
        }).then(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>
