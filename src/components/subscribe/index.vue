<template>
  <div class="subscribe-page">
    <title-wrapper title="预约下单" @close-page="closeSubscribe"></title-wrapper>
    <div class="content">
      <group class="sim-info">
        <cell-box class="technician">
          <img width="44" height="44" src="http://139.196.106.144:8080/testImg/jishi.png" class="avatar">
          <span class="name">林技师</span>
        </cell-box>
        <cell-box class="item">
          <span class="name">全身理疗</span>
          <span class="time">&yen;168/60分钟</span>
        </cell-box>
        <x-number class="count" title="服务份数" :value="itemCount" :min="0" @on-change="changeCount"></x-number>
      </group>
      <group class="extra-info">
        <x-input class="phone" title="联系电话" v-model="phone" :is-type="'china-mobile'" placeholder="请填写您的手机号码"
                 required></x-input>
        <x-input class="address" title="服务地址" v-model="address" placeholder="请填写您所在的酒店及房间号" required></x-input>
        <datetime-range
          class="service-time"
          title="上门时间"
          start-date="2017-01-01"
          end-date="2027-02-02"
          format="YYYY年MM月DD日"
          v-model="serviceTime"
          @on-change="changeTime"></datetime-range>
        <!--<datetime-->
        <!--title="上门时间"-->
        <!--v-model="formatValue"-->
        <!--:display-format="formatValueFunction"-->
        <!--@on-change="change"></datetime>-->
        <x-input class="message" v-model="message" placeholder="如有特殊情况请留言"></x-input>
      </group>
      <group class="pay">
        <cell-box class="discount" is-link @click.native="chooseDiscount">
          <span class="name">优惠券</span>
          <span class="val">减20元</span>
        </cell-box>
        <cell-box class="truecount" is-link>
          <span class="name">预计实付</span>
          <span class="val">148元</span>
        </cell-box>
      </group>
    </div>
    <div class="commit">
      <x-button class="confirm-btn" type="primary" :show-loading="isLoading" mini @click.native="confirmOrder">确认订单
      </x-button>
    </div>
    <div class="order-detail-wrapper" v-show="orderDetailShow">
      <order-detail ref="orderDetail"></order-detail>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { formatDate } from '@/common/js/date'
  import { mapGetters } from 'vuex'
  import titleWrapper from '@/components/uiComponents/titleWrapper'
  import { Group, CellBox, XNumber, XInput, XButton, DatetimeRange } from 'vux'
  import orderDetail from '@/components/order/detail'

  export default{
    data () {
      return {
        itemCount: 0,
        now: new Date(),
        serviceTime: ['2017-01-15', '03', '05'], // 获取上门服务时间
        phone: '',
        address: '',
        message: '',
        isLoading: false
      }
    },
    created () {
    },
    mounted () {
      this.now = new Date()
    },
    computed: {
      ...mapGetters({
        orderDetailShow: 'orderDetailShow'
      }),
      getNow () {
        let timeStr = formatDate(this.now, 'yyyy-MM-dd,hh,mm')
        return timeStr.split(',')
      }
    },
    methods: {
//      showSubscribe () {
//        this.now = new Date()
//      },
      closeSubscribe () {
        this.$store.commit('TOGGLE_SUBSCRIBE')
      },
      changeCount (val) {
        this.itemCount = val
      },
      changeTime (val) {
        this.serviceTime = val
      },
      chooseDiscount () {
        console.log('display choose discount page')
      },
      confirmOrder () {
        if (this.isLoading) return
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.$store.commit('TOGGLE_ORDER')
          this.$refs.orderDetail.showDetail()
        }, 2000)
      }
    },
    components: {
      titleWrapper,
      Group,
      CellBox,
      XNumber,
      XInput,
      XButton,
      DatetimeRange,
      orderDetail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .subscribe-page
    .content
      .weui-cells
        margin-top 0
      .sim-info
        .technician
          div
            height 54px
            line-height 54px
            font-size 0
            .avatar
              display inline-block
              vertical-align top
              margin-right 23px
              margin-top 5px
            .name
              display inline-block
              vertical-align top
              font-size 16px
              font-weight 600
              color #29292e
        .item
          height 42px
          box-sizing border-box
          div
            font-size 0
            .name
              display inline-block
              vertical-align top
              margin-right 20px
              font-size 16px
              font-weight 600
              color #29292e
            .time
              display inline-block
              vertical-align top
              font-size 16px
              color #939393
        .count
          & > div > p
            font-size 16px
            font-weight 600
            color #29292e
          .vux-number-selector
            &.vux-number-selector-sub
              margin-right 8px
              padding 6px 6px 4px 6px
              background #c5bdcb
              svg
                fill #fff
            &.vux-number-selector-plus
              margin-left 8px
              padding 6px 6px 4px 6px
              background #584f60
              svg
                fill #fff
          .vux-number-input
            height 18px
            padding 5px 0
            border-radius 2px
            border 2px solid #584f60
            color #29292e
      .extra-info
        margin-top 7px
        .phone
          .weui-label
            font-size 16px
            font-weight 600
            color #29292e
        .address
          .weui-label
            font-size 16px
            font-weight 600
            color #29292e
        .service-time
          .weui-label
            font-size 16px
            font-weight 600
            color #29292e
        .message
          .weui-input
            height 28px
            box-sizing border-box
            padding-left 16px
            width 100%
            font-size 14px
            border-radius 5px
            background #ededed
      .pay
        margin-top 7px
        .discount
          div
            font-size 0
            .name
              margin-right 36px
              font-size 16px
              font-weight 600
              color #29292e
            .val
              font-size 14px
              color #518eff
        .truecount
          div
            font-size 0
            .name
              margin-right 18px
              font-size 16px
              font-weight 600
              color #29292e
            .val
              font-size 14px
              color #ea5e63
    .commit
      margin-top 80px
      text-align center
      .confirm-btn
        width 250px
        height 37px
        margin 0 auto
        line-height 37px
        background rgb(88, 79, 96)
        border-radius 5px
        font-size 18px
        color #fff
        font-weight 700
        &:active
          background rgb(88, 79, 50)
          box-shadow #c5bdcb
</style>
