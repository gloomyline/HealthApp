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
      <cell-box
        class="title"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001">
        <span class="num">{{num[0]}}</span>
        <span class="text">{{text.text1}}</span>
      </cell-box>
      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item">content 001</cell-box>
      </template>
      <cell-box
        is-link
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002" class="title">
        <span class="num">{{num[1]}}</span>
        <span class="text">{{text.text2}}</span>
      </cell-box>
      <template v-if="showContent002">
        <cell-box :border-intent="false" class="sub-item">content 001</cell-box>
      </template>
      <cell-box
        class="title"
        is-link
        :border-intent="false"
        :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="showContent003 = !showContent003">
        <span class="num">{{num[2]}}</span>
        <span class="text">{{text.text3}}</span>
      </cell-box>
      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item">content 001</cell-box>
      </template>
    </group>
    <group class="join">
      <cell
        class="title"
        :title="text.text4"
        is-link
        :border-intent="false"
        :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004"></cell>
      <template v-if="showContent004">
        <cell-box :border-intent="false" class="sub-item">content 001</cell-box>
      </template>
      <cell
        class="title"
        :title="text.text5"
        is-link
        :border-intent="false"
        :arrow-direction="showContent005 ? 'up' : 'down'"
        @click.native="showContent005 = !showContent005"></cell>
      <template v-if="showContent005">
        <cell-box :border-intent="false" class="sub-item">content 001</cell-box>
      </template>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cell, CellBox, Group } from 'vux'
  export default {
    data () {
      return {
        num: [1, 2, 3],
        text: {
          title: '常见问题',
          text1: '怎么支付订单 ',
          text2: '怎么取消订单',
          text3: '怎么充值',
          text4: '领班如何加入好多养生',
          text5: '足浴城如何加入好多养生'
        },
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false,
        showContent005: false
      }
    },
    methods: {
      onClick () {
        console.log('on click')
      }
    },
    components: {
      Cell,
      CellBox,
      Group
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'

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
      .sub-item
        font-size 13px
</style>
