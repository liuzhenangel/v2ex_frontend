<template>
  <div class='uk-width-1-1 uk-row-first'>
    <ul class="uk-subnav uk-subnav-pill" data-uk-switcher="{connect:'#switcher-content'}">
      <li v-bind:class='uk-active' aria-expanded="true">
        <a href='/index?tab=tech' v-on:click="category('tech')">技术</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=creative' v-on:click="category('creative')">创意</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=play' v-on:click="category('play')">好玩</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=apple' v-on:click="category('apple')">Apple</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=jobs' v-on:click="category('jobs')">酷工作</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=deals' v-on:click="category('deals')">交易</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=city' v-on:click="category('city')">城市</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=qna' v-on:click="category('qna')">问与答</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=hot' v-on:click="category('hot')">最热</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=all' v-on:click="category('all')">全部</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=r2' v-on:click="category('r2')">R2</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      category: function (tab) {
        this.$dispatch('tab', tab)
      }
    }
  }
</script>
