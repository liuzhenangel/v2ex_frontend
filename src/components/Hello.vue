<template>
  <h1>hello {{ msg }}</h1>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
