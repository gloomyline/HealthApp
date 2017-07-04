<template>
  <div class="completed-page">
    <div class="completed-wrapper">
      <div class="completed">已完成</div>
      <li v-for="item in lists">
        <item-list :item="item"></item-list>
      </li>
      <div class="ta-wrapper">
        <div class="left-wrapper">
          <div class="grade">
            <div class="text">ta的评分：</div>
            <!--<star></star>-->
          </div>
          <div class="evaluate">
            <div class="text">ta的评价：</div>
            <div class="content">此处是评价此处是评价此处是评价</div>
          </div>
        </div>
        <div class="img"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import itemList from '@/components/technician-order/itemList'
  let lists = [
    {}
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
  .completed-page
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background #fff
    .completed-wrapper
      width 100%
      border-top 4px solid #f1f1f1
      .completed
        position relative
        width 100%
        height 30px
        border-left 5px solid #584f60
        border-bottom 1px solid rgba(133, 133, 133, 0.1)
        color rgb(255, 132, 65)
        font-size 15px
        padding-top 11px
        padding-left 15px
      .ta-wrapper
        display flex
        border-top dotted 1px rgba(133, 133, 133, 0.5)
        border-bottom 4px solid #f1f1f1
        margin-top 10px
        .left-wrapper
          width 80%
      .grade, .evaluate
        display flex
        margin 0 0 0 30px
        padding-top 10px
        .text
          color #7e8c8d
          font-size 14px
          width 30%
        .content
          font-size 13px
      .img
        bg-img(btn_3)
        width 75px
        height 56px
        background-repeat no-repeat
        background-size 50px 25px
        margin-top 25px
</style>
