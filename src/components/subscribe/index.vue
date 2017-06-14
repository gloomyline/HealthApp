<template>
  <div class="subscribe-page">
    <div class="title-wrapper">
      <div class="return-btn" @click="toggleSubscribe">
        <x-icon type="ios-arrow-back" size="30"></x-icon>
        <span class="label">返回</span>
      </div>
      <h1 class="title">预约下单</h1>
    </div>
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
        <x-number class="count" title="服务份数" :value="itemCount" :min="0" @on-change="change"></x-number>
      </group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, CellBox, XNumber } from 'vux'

  export default{
    data () {
      return {
        itemCount: 0
      }
    },
    computed: {},
    methods: {
      toggleSubscribe () {
        this.$store.commit('TOGGLE_SUBSCRIBE')
      },
      change (val) {
        this.itemCount = val
      }
    },
    components: {
      Group,
      CellBox,
      XNumber
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .subscribe-page
    .title-wrapper
      position relative
      height 47px
      background rgb(88, 79, 96)
      .return-btn
        position absolute
        left 0
        top 0
        font-size 0
        .vux-x-icon
          padding 8px 0 8px 4px
        .label
          display inline-block
          vertical-align top
          line-height 47px
          font-size 16px
          color #fff
      .title
        text-align center
        line-height 47px
        font-size 18px
        color #fff
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
          div
            height 42px
            line-height 42px
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
          height 42px
          & > div > p
            font-size 16px
            font-weight 600
            color #29292e
          .vux-number-selector
            &.vux-number-selector-sub
              margin-right 8px
              background #c5bdcb
              svg
                fill #fff
            &.vux-number-selector-plus
              margin-left 8px
              background #584f60
              svg
                fill #fff
</style>
