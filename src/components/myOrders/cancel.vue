<template>
  <div class="ing">
    <div class="content-wrapper">
      <div class="nav">
        <span class="time">2017-05-23 00:00:00</span>
        <span class="cancel">已取消</span>
      </div>
      <div class="content">
        <div class="avatar">
          <img src="http://139.196.106.144:8080/testImg/jishi.png" alt="" width="73" height="73">
        </div>
        <div class="guide">
          <div class="info-wrapper">
            <span class="service">服务：全身理疗</span>
          </div>
          <div class="jishi">
            <span class="name">技师：林技师</span>
          </div>
          <div class="time-wrapper">
            <span class="shijian">服务时间：2017-01-01</span>
          </div>
        </div>
      </div>
      <!--<div class="tap">-->
      <!--<x-button mini plain class="again" @click.native="">再来一单</x-button>-->
      <!--<x-button mini plain type="primary" class="refund">申请退款</x-button>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XButton } from 'vux'
  export default{
    components: {
      XButton
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ing
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background #fff
    .content-wrapper
      border-top 5px solid #f1f1f1
      border-bottom 5px solid #f1f1f1
      height 135px
      .nav
        display flex
        justify-content: space-between
        height 27px
        border-bottom 1px solid #f1f1f1
        .time
          font-size 13px
          padding-left 10px
          padding-top 5px
        .cancel
          font-size 15px
          padding-top 7px
          padding-right 16px
          color #778899
      .content
        border-bottom 1px solid rgba(241, 241, 241, 0.7)
        height 100px
        display flex
        .avatar
          padding 15px
          flex 0
        .guide
          flex 1
          font-size 13px
          text-align left
          padding-top 20px
          padding-left 5px
          .info-wrapper
            margin-bottom 13px
          .jishi
            margin-bottom 13px
          .time-wrapper
            margin-bottom 13px

  /* <!--.tap-->
     <!--text-align right-->
     <!--padding-right 15px-->
     <!--height 45px-->
     <!--margin-top -8px*/

</style>
