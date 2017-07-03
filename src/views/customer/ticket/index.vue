<template>
  <div class="ticket-page">
    <div class="header-wrapper">
      <h1 class="title">我的优惠券</h1>
      <div class="back">
        <router-link to="/me">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
      </div>
    </div>
    <div class="favourable">
      <input class="infan" type="text" placeholder="请输入优惠券激活码"/>
      <div class="icon">激活</div>
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
  import { mapGetters } from 'vuex'

  export default{
    data () {
      return {}
    },
    created () {
      // fetch data when this component was created && the data is observed now
      this._fetchData()
    },
    watch: {
      // fetch data again when the route is changed
      '$route': 'fetchData'
    },
    computed: {
      ...mapGetters({
        couponList: 'couponList'
      })
    },
    methods: {
      _fetchData () {
        this.$store.dispatch('fetchMyCouponList')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixin.styl'

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
        padding-top 15px
        text-align center
        font-size 18px
      .back
        position absolute
        left 12px
        top 6px
        padding 4px
    .favourable
      display flex
      width 100%
      height 42px
      background #fff
      border-bottom 15px solid #f1f1f1
      .infan
        height 27px
        flex 80% 0 0
        border 1px solid #9B9B9B
        margin 8px
        border-radius 5px
        box-sizing border-box
        padding-left 13px
      .icon
        flex 0 0 15%
        position relative
        height 20px
        border-radius 5px
        background rgb(88, 79, 96)
        font-size 15px
        color #fff
        text-align center
        padding-top 6px
        top 8px
    .coupon
      width 100%
      .coupon-item
        width 100%
        height 100px
        background #fff
        margin 8px
        border-radius 5px
        .item
          bg-img('card-bg')
          height 80px
          background-size 95% 100%
          background-repeat no-repeat
          margin 10px auto 0 10px
          display flex
          .indate, .price
            display inline-block
            color #fff
            box-sizing border-box
          .indate
            flex 0 0 78%
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
            padding-top 22px
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
