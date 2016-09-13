<template>
  <div class="uk-container-center uk-width-medium-3-4">
    <h3 class="uk-text-center uk-margin-top">注册</h3>
    <div class="uk-alert uk-alert-danger" v-if="message" v-text="message"></div>
    <form class="uk-form uk-form-stacked uk-panel uk-panel-box" v-on:submit.prevent="submit">
      <div class="uk-alert uk-alert-danger" hidden="hidden"></div>
      <div class="uk-form-row">
        <label class="uk-form-label uk-hidden-small">用户名</label>
        <div class="uk-form-controls">
          <input class="uk-form-large uk-form-width-large" type="text" placeholder="用户名" maxlength="50" v-model="username">
        </div>
      </div>

      <div class="uk-form-row">
        <label class="uk-form-label uk-hidden-small">电子邮箱</label>
        <div class="uk-form-controls uk-form-icon">
          <i class="uk-icon-envelope-o"></i>
          <input class="uk-form-large uk-form-width-large" type="text" placeholder="电子邮箱" maxlength="50" v-model="email">
        </div>
      </div>

      <div class="uk-form-row">
        <label class="uk-form-label uk-hidden-small">密码</label>
        <div class="uk-form-controls uk-form-icon">
          <i class="uk-icon-lock"></i>
          <input class="uk-form-large uk-form-width-large" type="password" placeholder="密码" maxlength="50" v-model="password">
        </div>
      </div>

      <div class="uk-form-row">
        <label class="uk-form-label uk-hidden-small">确认密码</label>
        <div class="uk-form-controls uk-form-icon">
          <i class="uk-icon-lock"></i>
          <input class="uk-form-large uk-form-width-large" type="password" placeholder="确认密码" maxlength="50" v-model="password1">
        </div>
      </div>

      <div class="uk-form-row">
        <button type="submit" class="uk-width-1-1 uk-button uk-button-primary uk-button-large"><i class="uk-icon-sign-in"></i>注册</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submit: function () {
      if (this.username.trim() === '' || this.password === '' || this.email === '') {
        this.message = '用户名, 邮箱, 密码都能为空'
      } else {
        this.register(this.username, this.password)
      }
    }
  },
  data () {
    return {
      username: '',
      email: '',
      password: '',
      password1: '',
      message: ''
    }
  }
}
</script>
<style lang="sass">
</style>
