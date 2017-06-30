<template>
  <div class="balance-page">
    <div class="title-wrapper">
      <h1 class="title">余额</h1>
      <div class="back">
        <router-link to="/technician/me">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="detail-top">
        <span class="acount">余额账号(元)</span>
        <span class="detail">明细</span>
      </div>
      <div class="detail-bottom">20000</div>
    </div>
    <group class="deposit-wrapper">
      <cell-box is-link link="/technician/me/balance/deposit">
        <div class="icon"></div>
        <div class="text">提现</div>
      </cell-box>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, CellBox } from 'vux'
  export default{
    components: {
      Group,
      CellBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .balance-page
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
    .content-wrapper
      position relative
      width 100%
      height 100px
      background rgb(88, 79, 96)
      .detail-top
        display flex
        justify-content space-between
        font-size 13px
        color rgb(184, 169, 198)
        .acount, .detail
          margin 16px 16px
      .detail-bottom
        font-size 35px
        color rgb(255, 255, 255)
        margin-left 16px
    .deposit-wrapper
      display flex
      width 100%
      .weui-cells
        width 100%
        margin 0
        .vux-cell-box > div
          display flex
          .icon
            bg-img(list_icon_4)
            background-repeat no-repeat
            width 36px
            height 31px
            background-size 25px 20px
            margin-top 3px
          .text
            font-size 13px
            font-weight bold
            margin-top 5px
</style>
