<template>
  <div class="uk-container-center uk-width-medium-3-4">
    <h3 class="uk-text-center uk-margin-top">登录</h3>
    <div class="uk-alert uk-alert-danger" v-show="message" v-text="message"></div>
    <form class="uk-form uk-form-stacked uk-panel uk-panel-box" v-on:submit.prevent="submit">
        <div class="uk-alert uk-alert-danger" hidden="hidden"></div>
        <div class="uk-form-row">
          <label class="uk-form-label uk-hidden-small">用户名</label>
          <div class="uk-form-controls uk-width-1-1 uk-form-icon">
            <i class="uk-icon-envelope-o"></i>
            <input class="uk-form-large uk-width-1-1" type="text" placeholder="用户名或电子邮箱" maxlength="50" v-model="username">
          </div>
        </div>

        <div class="uk-form-row">
          <label class="uk-form-label uk-hidden-small">密码</label>
          <div class="uk-form-controls uk-width-1-1 uk-form-icon">
            <i class="uk-icon-lock"></i>
            <input class="uk-form-large uk-width-1-1" type="password" maxlength="50" v-model="password">
          </div>
        </div>

        <div class="uk-form-row">
          <button type="submit" class="uk-width-1-1 uk-button uk-button-primary uk-button-large">登录</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  methods: {
    submit: function () {
      if (this.username.trim() === '' || this.password === '') {
        this.message = '用户名或密码不能为空'
      } else {
        this.message = '对不起, 暂时不能登录'
      }
    }
  },
  data () {
    return {
      username: '',
      password: '',
      message: ''
    }
  }
}
</script>

<style lang="sass">
</style>
