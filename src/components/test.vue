<template>
  <div id="app">
    <p v-once="message"></p>
    <p>{{ message }}</p>
    <p v-html="raw_html"></p>
    <p>{{ raw_html }}</p>
    <input v-model="message">
    <!--<a v-bind:href = "ture ? 'http://www.baidu.com' : 'http://www.baidu.com'">baidu</a>-->
    <!--<a v-bind:href.literal = 'http://www.baidu.com'>baidu</a>-->
    <ul>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ul>
    <button v-on:click="reverseMessage">Reverse Message</button>

    <alert :show="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
      <span class="icon-ok-circled alert-icon-float-left"></span>
      <strong>Well Done!</strong>
      <p>You successfully read this important alert message.</p>
    </alert>

    <p v-if='true'>hello!</p>
    <p v-if='false'>hello!</p>

    <input v-model='newTodo' v-on:keyup.enter='addTodo'>
    <ul>
      <li v-for='todo in todos'>
        <span>{{ todo.text }}</span>
        <button v-on:click="removeTodo(index)">X</button>
      </li>
      <template v-for='todo in todos'>
        <li>{{ todo.text }}</li>
      </template>
    </ul>

    <p>v-bind:a="a" v-bind:b="b"></p>
    <p>{{ fullName }}</p>

    <p v-bind:class='classObject'></p>
    <p v-show='true'>v-show</p>

    <transition name='expand'>
      <div v-if='true'>hello</div>
    </transition>
    <transition name='transitionName'>
      <div v-if='true'>hello</div>
    </transition>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },

      addTodo: function () {
        let text = this.newTodo.trim()
        if (text) {
          this.todos.push({ text: text })
          this.newTodo = ''
        }
      },

      removeTodo: function (index) {
        this.todos.splice(index, 1)
      }
    },
    computed: {
      b: function () {
        return this.a + 1
      },
      fullName: {
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },
    data () {
      return {
        a: 1,
        classObject: {
          classA: true,
          classB: false
        },
        transitionName: 'fade',
        todos: [
          {text: 111},
          {text: 222},
          {text: 333}
        ],
        newTodo: '',
        message: 'Hello Vue.js!',
        raw_html: '<p> raw html </p>',
        firstName: 'Foo',
        lastName: 'Bar'
      }
    }
  }
</script>
<style>
  .expand-enter, .expand-leave-active {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }
  .expand-enter-active, .expand-leave-active{
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }
</style>
