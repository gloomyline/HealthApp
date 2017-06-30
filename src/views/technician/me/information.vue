<template>
  <div class="information-page">
    <div class="avatar-wrapper">
      <img class="avatar" src="http://139.196.106.144:8080/testImg/jishi.png" alt="" width="73" height="73">
      <div class="title">中医推拿</div>
    </div>
    <!--<p>This is desc here!  Xinput  age:daytime</p>-->
    <div class="content-wrapper">
      <group>
        <x-input border-1px title="姓名" name="username" placeholder="请输入姓名"></x-input>
        <div class="">性别</div>
        <div class="">年龄</div>
        <x-input title="手机号码" placeholder="必填"></x-input>
      </group>
    </div>
    <div class="btn">
      <router-link to="/technician/me">
        <div class="text">保存</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, XInput, Checklist, Datetime } from 'vux'
  export default{
    data () {
      return {
        value: '1991-01-01'
      }
    },
    methods: {
      change (value) {
        console.log('change', value)
      }
    },
    components: {
      Group,
      XInput,
      Checklist,
      Datetime
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .information-page
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    font-size 12px
    background #f1f1f1
    .avatar-wrapper
      display flex
      flex-direction column
      /*justify-content space-between*/
      align-items center
      width 100%
      height 130px
      background rgb(88, 79, 96)
      .avatar, .title
        padding-top 15px
      .title
        color rgb(255, 255, 255)
        font-size 13px
    .content-wrapper
      width 100%
      position relative
      padding-top 15px
      .weui-cells
        margin 0

    .btn
      position relative
      width 100%
      margin-top 220px
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
