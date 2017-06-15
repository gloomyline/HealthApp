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
  </div>
</template>

<script type="text/ecmascript-6">
  import titleWrapper from '@/components/uiComponents/titleWrapper'
  import { Group, Cell, CellBox, XButton } from 'vux'

  export default{
    data () {
      return {
        orderState: 0,
        isLoading: false
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
</style>
