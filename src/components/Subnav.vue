<template>
  <div class='uk-width-1-1 uk-row-first'>
    <ul class="uk-subnav uk-subnav-pill" data-uk-switcher="{connect:'#switcher-content'}">
      <li v-bind:class="{'uk-active': isThisTab(tab.key)}" v-for="(index, tab) in tabs">
        <a v-link="{name: 'index', query: {tab: tab.key}}">{{tab.value}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          {key: 'tech', value: '技术'},
          {key: 'creative', value: '创意'},
          {key: 'play', value: '好玩'},
          {key: 'apple', value: 'Apple'},
          {key: 'jobs', value: '酷工作'},
          {key: 'deals', value: '交易'},
          {key: 'city', value: '城市'},
          {key: 'qna', value: '问与答'},
          {key: 'hot', value: '最热'},
          {key: 'all', value: '全部'},
          {key: 'r2', value: 'R2'}
        ]
      }
    },
    methods: {
      isThisTab: function (tab) {
        return this.$route.query.tab === tab
      }
    }
  }
</script>
