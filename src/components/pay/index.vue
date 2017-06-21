<template>
  <div class="pay-page">
    <title-wrapper title="付款" @close-page="cancelPay"></title-wrapper>
    <group class="order-info">
      <cell-box class="service-info">
        <div class="service">
          <span class="name">服务内容:</span>
          <span class="text">全身理疗  (卧)</span>
        </div>
        <div class="service">
          <span class="name">上门时间:</span>
          <span class="text">5月24日(周三) 19:30(晚上)</span>
        </div>
        <div class="service">
          <span class="name">服务地址:</span>
          <span class="text">xx酒店xxx楼xxx号房</span>
        </div>
        <div class="service">
          <span class="name">联系电话:</span>
          <span class="text">13154220555</span>
        </div>
        <div class="service">
          <span class="name">总金额&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          <span class="text">168元</span>
        </div>
      </cell-box>
      <cell-box class="coupon" is-link>
        <span class="name" style="margin-right:30px">优惠券</span>
        <span class="text" style="font-size:14px;color:#518eff;">减20元</span>
      </cell-box>
      <cell-box class="pay">
        <span class="name" style="margin-right:30px">需支付</span>
        <span class="text" style="font-size:14px;color:#ea5e63;">148.00元</span>
      </cell-box>
    </group>
    <group class="how-to-pay" title="请选择支付方式">
      <cell-box class="wechat">
        <span class="icon-wechat"></span>
        <span class="name">微信支付</span>
        <span class="selector"></span>
      </cell-box>
    </group>
    <div class="btn-container">
      <x-button class="btn-confirm btn" :show-loading="isLoading" type="primary" mini @click.native="confirmToPay">确认支付
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
        isLoading: false
      }
    },
    methods: {
      cancelPay () {
        this.$emit('cancel-pay')
      },
      confirmToPay () {
        if (this.isLoading) return
        this.isLoading = true
        setTimeout(() => { // 模拟调用wechat js-sdk 唤醒微信支付界面
          this.isLoading = false
        }, 2000)
      }
    },
    components: {
      XButton,
      Group,
      Cell,
      CellBox,
      titleWrapper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .pay-page
    .how-to-pay
      .wechat
        position relative
        .icon-wechat
          margin 5px 8px 0 0
          inline-icon(25px, 22px)
          bg-img('icon_weixin')
        .name
          line-height 32px
          font-size 16px !important
          font-weight 600 !important
          color #000 !important
        .selector
          inline-icon(21px, 21px)
          bg-img('radio_sel')
          position absolute
          top 15px
          right 15px
          border-radius 50%
    .btn-container
      text-align center
      .btn
        background rgb(88, 79, 96) !important
        &:active
          background rgb(88, 79, 50) !important
</style>
