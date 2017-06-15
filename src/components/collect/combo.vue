<template>
  <div class="combo">
    <group class="content-wrapper">
      <cell is-link>
        <div class="avtar">
          <img src="" alt="" width="73" height="73">
        </div>
        <div class="title-wrapper">
          <span class="avtar"></span>
          <span class="name">精品水疗养生SPA套餐</span>
        </div>
        <div class="info-wrapper">
          <star :size="36" style="margin-right: 10px"></star>
          <span class="unit-price">￥153/人</span>
        </div>
        <div class="detail-wrapper">
          <span class="detail">实力派按摩套餐</span>
        </div>
      </cell>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '@/components/uiComponents/star'
  import { Group, Cell } from 'vux'
  export default{
    components: {
      star,
      Group,
      Cell
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .combo
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background #fff
    .content-wrapper
      flex 1
      position relative
      border-top 5px solid #f1f1f1
      border-bottom 7px solid #f1f1f1
      .weui-cells
        margin-top 0
        .vux-cell-primary
          display none
        .weui-cell__ft
          text-align left
          &::after
            right -155px
            height 10px
            width 10px
        .title-wrapper
          margin-bottom 16px
          .name
            margin-right 10px
            font-size 15px
            color #29292E
        .info-wrapper
          display flex
          margin-bottom 16px
          font-size 12px
          color #555
        .detail-wrapper
          margin-bottom 16px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          font-size 13px
          color #FF6F36
</style>
