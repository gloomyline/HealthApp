<template>
  <div class="myOrders-page">
    <div class="header-wrapper">
      <h1 class="title">我的订单</h1>
      <div class="back">
        <router-link to="/me">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
      </div>
    </div>
    <div class="nav">
      <tab active-color="#5B4F60">
        <tab-item selected @on-item-click="onItemClick">进行中</tab-item>
        <tab-item @on-item-click="onItemClick">已完成</tab-item>
        <tab-item @on-item-click="onItemClick">已取消</tab-item>
      </tab>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem } from 'vux'

  export default{
    methods: {
      onItemClick () {}
    },
    components: {
      Tab,
      TabItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myOrders-page
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
        vertical-align top
      .back
        position absolute
        left 12px
        top 6px
        padding 4px
        .icon-back
          display inline-block
</style>
