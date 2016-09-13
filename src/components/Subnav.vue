<template>
  <div class='uk-width-1-1 uk-row-first'>
    <ul class="uk-subnav uk-subnav-pill" data-uk-switcher="{connect:'#switcher-content'}">
      <li v-bind:class='uk-active' aria-expanded="true">
        <a href='/index?tab=tech' v-on:click="category('tech')">技术</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=creative'>创意</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=play'>好玩</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=apple'>Apple</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=jobs'>酷工作</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=deals'>交易</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=city'>城市</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=qna'>问与答</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=hot'>最热</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=all'>全部</a>
      </li>
      <li aria-expanded="false">
        <a href='/index?tab=r2'>R2</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      category: function () {
        console.log(this.lastes)
        console.log(this.$refs.lastes)
        console.log(this.$parent.lastes)
        console.log(this.$children.lastes)
        console.log('xxx')
      }
    }
  }
</script>
