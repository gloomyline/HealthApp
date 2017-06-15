<template>
  <div class="ticket-page">
    <div class="header-wrapper">
      <h1 class="title">我的优惠券</h1>
      <div class="back" @click="closeDetail">
        <span class="icon-back">返回</span>
      </div>
    </div>
    <div class="favourable">
      <input class="infan" type="text" placeholder="请输入优惠券激活码"/>
      <button class="icon">激活</button>
    </div>
    <div class="coupon">
      <div class="coupon-item">
        <div class="item">
          <div class="indate">
            <span class="text">上门服务优惠券</span>
            <span class="time">有效期：2017.5.30（剩余4天）</span>
          </div>
          <div class="price">
            <span class="num">￥20</span>
            <span class="state">立即使用</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      closeDetail (event) {
        if (!event._constructed) return
        this.$store.commit('')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*@import '../../common/stylus/mixin.styl'*/

  .ticket-page
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    z-index 100
    background #f1f1f1
    .header-wrapper
      width 100%
      height 47px
      color #fff
      background rgb(88, 79, 96)
      .title
        padding-top 12px
        text-align center
        font-size 18px
      .back
        position absolute
        left 12px
        top 10px
        padding 4px
        .icon-back
          display inline-block
    .favourable
      flex 1
      width 100%
      height 42px
      background #fff
      border-bottom 15px solid #f1f1f1
      .infan
        height 27px
        width 285px
        border 1px solid #9B9B9B
        margin 8px
        border-radius 5px
        box-sizing border-box
        padding-left 13px
      .icon
        width 60px
        height 27px
        border-radius 5px
        border 0px
        background rgb(88, 79, 96)
        font-size 15px
        color #fff
        text-align center

    .coupon
      width 100%
      .coupon-item
        position absolute
        width 360px
        height 100px
        background #fff
        margin 8px
        border-radius 5px
        .item
          display block
          background-image url("img@2x.png")
          height 80px
          width 330px
          margin-left 15px
          margin-top 10px
          .indate, .price
            display inline-block
            color #fff
            box-sizing border-box
          .indate
            margin-left 8px
            margin-top 8px
            margin-bottom 8px
            border-right 1px
            width 260px
            .text
              position relative
              top -5px
              display flex
              font-size 14px
              padding 15px
            .time
              margin 10px
              padding-left 5px
              font-size 13px
          .price
            margin-left -4px
            .num
              position relative
              display block
              font-size 20px
              padding-left 5px
              top -15px
            .state
              padding 6px
              font-size 6px
</style>
