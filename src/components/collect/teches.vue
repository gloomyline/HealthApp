<template>
  <div class="teches">
    <group class="content-wrapper">
      <cell is-link>
        <div class="avtar">
          <img src="" alt="" width="73" height="73">
        </div>
        <div class="content">
          <div class="title-wrapper">
            <span class="name">林技师</span>
          </div>
          <div class="info-wrapper">
            <span class="age">26岁</span>
            <span class="area">福建</span>
            <dot></dot>
            <span class="cretificate">高级推拿师</span>
          </div>
          <div class="detail-wrapper">
            <p class="text">详情</p>
          </div>
        </div>
      </cell>
    </group>
  </div>

</template>

<script type="text/ecmascript-6">
  import { Group, Cell } from 'vux'
  import dot from '@/components/uiComponents/dot'
  export default{
    components: {
      dot,
      Group,
      Cell
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .teches
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background #fff
    .content-wrapper
      display flex
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
            right -15px
            height 10px
            width 10px
          .avtar
            flex 0 0 103px
            position relative
          .content
            flex 1
            position relative
            .title-wrapper
              margin-bottom 16px
              .name
                margin-right 10px
                font-size 15px
                color #29292E
            .info-wrapper
              margin-bottom 16px
              font-size 12px
              color #555
            .detail-wrapper
              margin-bottom 16px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
              font-size 11px
              color #919191

</style>
