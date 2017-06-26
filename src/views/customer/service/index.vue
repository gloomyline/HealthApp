<template>
  <div class="service-page">
    <div class="header-wrapper">
      <h1 class="title">客服</h1>
    </div>
    <div class="tel">
      <div class="icon"></div>
      <div class="title">客服电话:</div>
      <div class="num">100-000-000</div>
    </div>
    <group class="collapse">
      <cell :title="text.title" :border-intent="false" class="que"></cell>
      <up-down-cell :title="{num: 1, text: '怎么支付订单'}"></up-down-cell>
      <up-down-cell :title="{num: 2, text: '怎么取消订单'}"></up-down-cell>
      <up-down-cell :title="{num: 3, text: '怎么充值'}"></up-down-cell>
    </group>
    <group class="join">
      <up-down-cell :title="{text: '领班如何加入好多养生'}"></up-down-cell>
      <up-down-cell :title="{text: '足浴城如何加入好多养生'}"></up-down-cell>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cell, CellBox, Group } from 'vux'
  import upDownCell from '@/components/uiComponents/upDownCell'

  export default {
    data () {
      return {
        text: {
          title: '常见问题'
        }
      }
    },
    mounted () {
    },
    methods: {},
    components: {
      Cell,
      CellBox,
      Group,
      upDownCell
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixin.styl'

  .service-page
    position fixed
    top 0
    left 0
    bottom 49px
    width 100%
    height 100%
    overflow hidden
    background #f1f1f1
    .header-wrapper
      width 100%
      height 47px
      color #fff
      background rgb(88, 79, 96)
      .icon
        bg-img('list_icon')
      .title
        padding-top 12px
        text-align center
        font-size 18px
    .tel
      background #fff
      display flex
      height 40px
      width 100%
      color #322E36
      border-bottom 6px solid #f1f1f1
      .icon
        padding 16px 12px 16px 12px
      .title
        font-size 15px
        padding-top 11px
      .num
        padding-top 11px
        padding-left 30px
    .collapse
      width 100%
      position relative
      .weui-cells
        margin-top 0
        .que
          font-size 13px
        .title
          font-size 13px
          height 30px
          .num
            display inline-block
            width 10px
            height 10px
            left 13px
            line-height 13px
            text-align center
            padding 5px
            font-size 15px
            border-radius 50%
            color #fff
            background rgb(88, 79, 96)
          .text
            padding-left 13px
        .sub-item-wrapper
          height 150px
          overflow hidden
          padding 15px
          line-height 1px
          .sub-item
            height 38px
        &::after
          display none
      .sub-item
        font-size 13px
    .join
      margin-top 71px
      width 100%
      .weui-cells
        margin-top 0
        &::before
          display none
      .weui-cells
        &::after
          display none
      .title
        font-size 13px
        height 30px
      .sub-item-wrapper
        height 150px
        overflow hidden
        padding 15px
        line-height 1px
        .sub-item
          height 38px
          font-size 13px
</style>
