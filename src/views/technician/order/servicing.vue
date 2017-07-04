<template>
  <div class="service-page">
    <div class="service-wrapper">
      <div class="wait">待服务</div>
      <li v-for="item in lists">
        <item-list :item="item"></item-list>
      </li>
      <div class="but">
        <div class="text">完成服务</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import itemList from '@/components/technician-order/itemList'
  let lists = [
    {
      text: '单号',
      num: '11111111111'
    }
//    /*{
//      text: '服务',
//      num: '全身理疗（卧）',
//      duration: '/60分钟',
//      day: 'X1'
//    },
//    {
//      text: '价格',
//      num: '111元'
//    },
//    {
//      text: '客户',
//      num: 'XXX'
//    },
//    {
//      text: '时间',
//      num: '2017-01-01 19:30',
//      day: '【今天】'
//    },
//    {
//      text: '地址',
//      num: '厦门xx酒店xx楼xx号'
//    }*/
  ]
  export default{
    data () {
      return {
        lists
      }
    },
    components: {
      itemList
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
