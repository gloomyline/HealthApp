<template>
  <div class="teches">
    <group class="content-wrapper">
      <cell-box is-link>
        <div class="avtar">
          <img src="http://139.196.106.144:8080/testImg/jishi.png" alt="" width="73" height="73">
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
      </cell-box>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, CellBox } from 'vux'
  import dot from '@/components/uiComponents/dot'
  export default{
    components: {
      dot,
      Group,
      Cell,
      CellBox
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
    /*background #fff*/
    .content-wrapper
      position relative
      display flex
      border-top 5px solid #f1f1f1
      border-bottom 5px solid #f1f1f1
      width 100%
      .weui-cells
        width 100%
        margin 0
        height 130px
      .weui-cells:before
        display none
        .weui-cell:before
          display none
      .avtar
        position fixed
      .content
        padding-left 100px
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
