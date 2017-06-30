<template>
  <div class="password-page">
    <div class="title-wrapper">
      <h1 class="title">提现密码</h1>
      <div class="back">
        <router-link to="/technician/me">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
      </div>
    </div>
    <h1 class="content">请输入提现密码，已验证身份</h1>
    <div class="input-wrapper">
      <div class="input"></div>
      <div class="input"></div>
      <div class="input"></div>
      <div class="input"></div>
      <div class="input"></div>
      <div class="input"></div>
    </div>
    <div class="btn">
      <div class="text">确认</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .password-page
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    font-size 12px
    background #f1f1f1
    .title-wrapper
      width 100%
      height 47px
      color #fff
      background #000
      .title
        padding-top 15px
        text-align center
        font-size 18px
        vertical-align top
      .back
        position absolute
        left 12px
        top 6px
        padding 4px
    .content
      font-size 19px
      color rgb(142, 142, 142)
      margin auto 64px
      padding-top 123px
    .input-wrapper
      display flex
      margin 29px
      .input
        border 1px solid cornflowerblue
        width 40px
        height 40px
        background-color rgb(255, 255, 255)
        margin 6px
    .btn
      position relative
      width 100%
      margin-top 74px
      .text
        position relative
        margin 15px auto
        width 80%
        height 25px
        background rgb(88, 79, 96)
        border-radius 5px
        color rgb(255, 255, 255)
        text-align center
        padding-top 10px
</style>
