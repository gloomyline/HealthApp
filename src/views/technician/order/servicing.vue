<template>
  <div class="service-page">
    <div class="service-wrapper">
      <div class="wait">待服务</div>
      <!--<div class="odd">-->
      <!--<div class="text">单号 :</div>-->
      <!--<div class="num">1111111111</div>-->
      <!--</div>-->
      <!--<div class="service">-->
      <!--<div class="text">服务 :</div>-->
      <!--<div class="num">全身理疗（卧）</div>-->
      <!--<div class="duration">/60分钟</div>-->
      <!--<div class="day">X1</div>-->
      <!--</div>-->
      <!--<div class="price">-->
      <!--<div class="text">价格 :</div>-->
      <!--<div class="num">111元</div>-->
      <!--</div>-->
      <!--<div class="client">-->
      <!--<div class="text">客户 :</div>-->
      <!--<div class="num">xxxx</div>-->
      <!--</div>-->
      <!--<div class="time">-->
      <!--<div class="text">时间 :</div>-->
      <!--<div class="num">2017-01-01 19:30</div>-->
      <!--<div class="day">【今天】</div>-->
      <!--</div>-->
      <!--<div class="address">-->
      <!--<div class="text">地址 :</div>-->
      <!--<div class="num">厦门xx酒店xx楼xx号</div>-->
      <!--</div>-->
      <li class="item" v-for="item in lists">
        <!--<item :item="item"></item>-->
        <div class="">
          <div class="text">{{lists.text}}</div>
          <div class="num">{{lists.num}}</div>
        </div>
      </li>
      <div class="but">
        <div class="text">完成服务</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  let lists = [
    {
      text: '单号',
      num: '11111111111'
    },
    {
      text: '服务',
      num: '全身理疗（卧）',
      duration: '/60分钟',
      day: 'X1'
    },
    {
      text: '价格',
      num: '111元'
    },
    {
      text: '客户',
      num: 'XXX'
    },
    {
      text: '时间',
      num: '2017-01-01 19:30',
      day: '【今天】'
    },
    {
      text: '地址',
      num: '厦门xx酒店xx楼xx号'
    }
  ]
  export default{
    data () {
      return {
        lists
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .service-page
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background #fff
    .service-wrapper
      width 100%
      height 240px
      border-top 4px solid #f1f1f1
      border-bottom 4px solid #f1f1f1
      .wait
        position relative
        width 100%
        height 30px
        border-left 5px solid #584f60
        border-bottom 1px solid rgba(133, 133, 133, 0.1)
        color rgb(255, 132, 65)
        font-size 15px
        padding-top 11px
        padding-left 15px
      /*.odd, .service, .price, .client, .time, .address
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
          color rgb(255, 172, 48)*/
      .item
        width 100%
        display flex
      .but
        position relative
        width 80%
        height 37px
        background rgb(88, 79, 96)
        border-radius 5px
        margin 15px auto
        .text
          position relative
          color rgb(255, 255, 255)
          text-align center
          padding-top 10px
</style>
