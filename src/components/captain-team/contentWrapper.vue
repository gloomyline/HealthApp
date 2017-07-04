<template>
  <div class="content-wrapper-page">
    <div class="content">
      <div class="avatar">
        <img src="http://www.wangsanchuan.cn/testImg/jishi.png" alt="" width="73" height="73">
      </div>
      <div class="detail-wrapper">
        <div class="name">林技师</div>
        <div class="detail">
          <div class="age">26岁•</div>
          <div class="address">福建•</div>
          <div class="level">高级推拿师</div>
        </div>
      </div>
      <div class="order-placement">
        <div class="num">100</div>
        <div class="month">月单数</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content-wrapper-page
    position relative
    width 100%
    background rgb(255, 255, 255)
    .content
      display flex
      border-bottom 1px solid rgb(238, 238, 238)
      .avatar
        padding 12px
    .detail-wrapper
      padding-top 18px
      .name
        font-size 15px
        color rgb(41, 41, 46)
      .detail
        padding-top 13px
        font-size 12px
        color rgb(85, 85, 85)
        display flex
    .order-placement
      text-align center
      position fixed
      padding-top 22px
      right 22px
      .num
        font-size 15px
        color rgb(255, 172, 48)
      .month
        padding-top 11px
        font-size 12px
        color rgb(155, 155, 155)
</style>
