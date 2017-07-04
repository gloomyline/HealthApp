<template>
  <div class="itemList-page">
    <div class="odd">
      <div class="text">单号 :</div>
      <div class="num">1111111111</div>
    </div>
    <div class="service">
      <div class="text">服务 :</div>
      <div class="num">全身理疗（卧）</div>
      <div class="duration">/60分钟</div>
      <div class="day">X1</div>
    </div>
    <div class="price">
      <div class="text">价格 :</div>
      <div class="num">111元</div>
    </div>
    <div class="client">
      <div class="text">客户 :</div>
      <div class="num">xxxx</div>
    </div>
    <div class="time">
      <div class="text">时间 :</div>
      <div class="num">2017-01-01 19:30</div>
      <div class="day">【今天】</div>
    </div>
    <div class="address">
      <div class="text">地址 :</div>
      <div class="num">厦门xx酒店xx楼xx号</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .itemList-page
    position relative
    width 100%
    background rgb(255, 255, 255)
    .odd, .service, .price, .client, .time, .address
      display flex
      padding-top 8px
      font-size 14px
      .text, .duration
        color #7e8c8d
      .text
        margin 0 0 0 30px
      .num
        padding-left 15px
      .day
        color rgb(255, 172, 48)
</style>
