<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">Canye外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;"> 密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button class="get_verification" disabled="disabled">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册Canye外卖账号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div></div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:;" class="go_back" @click="$router.back()">
        <i class="iconfont icon-arrow-left"></i>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        loginWay: true
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style lang="stylus">
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            font-size 14px
            padding-bottom 4px
            color #333
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            input
              box-sizing border-box
              width 100%
              height 100%
              padding-left 10px
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
            .login_message
              position relative
              margin-top 16px
              height 48px
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
            .login_verification
              margin-top 16px
              height 48px
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774

          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border 0
            border-radius 4px
            background #4cd96f
            text-align center
            font-size 16px
            line-height 42px
            color #fff
        .about_us
          display block
          margin-top 20px
          font-size 12px
          color #999
          text-align center
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
