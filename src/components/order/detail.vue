<template>
  <div class="order-detail">
    <title-wrapper title="订单详情" @close-page="closeDetail"></title-wrapper>
    <group class="good-info" title="商品信息">
      <cell-box class="info">
        <div class="info-left">
          <div class="service-content">
            <span class="name">服务内容:</span>
            <span class="text">全身理疗  (卧)</span>
          </div>
          <div class="count">
            <span class="name">数量:</span>
            <span class="text">1份</span>
          </div>
          <div class="price">
            <span class="name">价格:</span>
            <span class="text">168元/60分钟</span>
          </div>
        </div>
        <div class="info-right">
          <img width="50" height="50" src="http://139.196.106.144:8080/testImg/jishi.png">
        </div>
      </cell-box>
      <cell-box class="coupon">
        <span class="name">优惠券:</span>
        <span class="text">减20元</span>
      </cell-box>
      <cell-box class="pay">
        <span class="text">&yen;148</span>
      </cell-box>
    </group>
    <group class="order-info" title="订单信息">
      <cell-box class="contact-info">
        <div class="phone">
          <span class="name">手机:</span>
          <span class="text">13154220555</span>
        </div>
        <div class="address">
          <span class="name">地址:</span>
          <span class="text">xxx酒店xx楼xxx号</span>
        </div>
      </cell-box>
      <cell-box class="order-info-content">
        <div class="order-id">
          <span class="name">单号:</span>
          <span class="text">efe2221444654</span>
        </div>
        <div class="order-time">
          <span class="name">下单时间:</span>
          <span class="text">2017-06-15 15:10</span>
        </div>
        <div class="service-time">
          <span class="name">服务时间:</span>
          <span class="text">2017-05-24 19:30</span>
        </div>
        <div class="order-state">
          <span class="name">订单状态:</span>
          <span class="text">等待技师接单</span>
        </div>
      </cell-box>
    </group>
    <div class="btn-container">
      <x-button v-if="orderState === 0" class="goto-pay-btn btn" type="primary" :show-loading="isLoading" mini
                @click.native="goToPay">前往付款
      </x-button>
      <x-button v-else class="apply-refund-btn btn" type="primary" :show-loading="isLoading" mini
                @click.native="applyRefund">前往申请退款
      </x-button>
    </div>
    <div class="refund-wrapper" v-show="refundShow">
      <div class="refund-pannel">
        <div class="reason">
          <span class="name">退款原因</span>
          <!--<span class="text">预约行程有变更</span>-->
          <input class="text" type="text" v-model="refundReason" placeholder="请选择退款原因">
        </div>
        <div class="refund-count">
          <span class="name">需退金额:</span>
          <span class="text">148</span>
        </div>
        <div class="pannel-btn-container">
          <x-button class="btn-cancel btn" type="warn" mini @click.native="refundShow = !refundShow">取消</x-button>
          <x-button class="btn-confirm btn" type="primary" mini>申请退款</x-button>
        </div>
      </div>
      <div class="mask" @click="refundShow = !refundShow"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleWrapper from '@/components/uiComponents/titleWrapper'
  import { Group, Cell, CellBox, XButton } from 'vux'

  export default{
    data () {
      return {
        orderState: 1,
        isLoading: false,
        refundShow: false,
        refundReason: '预约行程有变更'
      }
    },
    methods: {
      showDetail () {
        console.log('show detail')
      },
      closeDetail () {
        this.$store.commit('TOGGLE_ORDER')
      },
      goToPay () {
        if (this.isLoading) return
        console.log('go to pay')
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      },
      applyRefund () {
        if (this.isLoading) return
        console.log('apply refund')
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.refundShow = true
        }, 2000)
      }
    },
    components: {
      titleWrapper,
      Group,
      Cell,
      CellBox,
      XButton
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order-detail
    .weui-cells__title
      height 36px
      line-height 36px
      margin 0
      padding 0 16px
      font-size 16px
      color #a894b9
    .weui-cells
      .weui-cell
        font-size 0
        div
          line-height 24px
          .name
            margin-right 6px
            font-size 15px
            color #737373
          .text
            font-size 15px
            color #635b6b
    .good-info
      .info
        position relative
        .info-right
          position absolute
          top 18px
          right 16px
      .coupon
        .name
          margin-right 36px !important
          color #000 !important
          font-weight 600
        .text
          color #518eff !important
      .pay
        .text
          color #ea5e63 !important
    .order-info
      .order-state
        .text
          color #fe7938 !important
    .btn-container
      margin-top 50px
      text-align center
      .btn
        width 250px
        height 37px
        margin 0 auto
        line-height 37px
        border-radius 5px
        font-size 18px
        color #fff
        font-weight 700
        &:active
          background rgb(88, 79, 50)
          box-shadow #c5bdcb
      .goto-pay-btn
        background #8e8e8e
      .apply-refund-btn
        background rgb(88, 79, 96)
    .refund-wrapper
      position fixed
      left 0
      top 0
      width 100%
      height 100%
      .refund-pannel
        width 307px
        height 197px
        box-sizing border-box
        margin 156px auto 0 auto
        padding 50px 0 0 27px
        border-radius 5px
        background #fff
        .reason
          line-height 30px
          font-size 0
          color #656464
          .name
            font-size 15px
            margin-right 11px
          .text
            font-size 15px
        .refund-count
          line-height 30px
          font-size 0
          .name
            margin-right 16px
            font-size 15px
            color #656464
          .text
            font-size 15px
            color #ff8b4b
        .pannel-btn-container
          font-size 0
          .btn
            width 108px
            height 37px
            letter-spacing .2em
          .btn-cancel
            margin-right 35px
          .btn-confirm
            background #584f60
      .mask
        position fixed
        left 0
        top 0
        width 100%
        height 100%
        z-index -1
        background rgba(0, 0, 0, .5)
</style>
