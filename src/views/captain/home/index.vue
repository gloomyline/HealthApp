<template>
  <div class="captain-home-page">
    <div class="title-wrapper">
      <div class="title">领班首页</div>
    </div>
    <div class="order-wrapper">
      <div class="today-order">
        <div class="title border-1px">
          <h2 class="text">今天</h2>
          <div class="total-order-count">
            <span class="name">总订单:</span>
            <span class="val">6单</span>
          </div>
        </div>
        <div class="order-cate">
          <div class="waiting">
            <i class="icon-waiting"></i>
            <p class="label">待服务<span class="count">3</span>单</p>
          </div>
          <div class="completed">
            <i class="icon-completed"></i>
            <p class="label">已完成<span class="count">2</span>单</p>
          </div>
          <div class="canceled">
            <i class="icon-canceled"></i>
            <p class="label">已取消<span class="count">1</span>单</p>
          </div>
        </div>
      </div>
      <div class="yesterday-order">
        <div class="title border-1px">
          <h2 class="text">昨天</h2>
          <div class="total-order-count">
            <span class="name">总订单:</span>
            <span class="val">11单</span>
          </div>
        </div>
        <div class="income-cate">
          <div class="yesterday-income">
            <h3 class="income-title">昨日收入</h3>
            <p class="income-val">&yen;950</p>
          </div>
          <div class="month-income">
            <h3 class="income-title">本月收入</h3>
            <p class="income-val">&yen;20000</p>
          </div>
          <div class="detail">
            <h3 class="income-title">查看详情</h3>
            <i class="icon-go"></i>
          </div>
        </div>
      </div>
      <div class="latest-order">
        <h2 class="title">营业单数</h2>
        <div class="detail-wrapper">
          <div class="avatar">
            <img src="http://139.196.106.144:8080/testImg/jishi.png" alt="" width="42" height="42">
            <div class="text">林技师</div>
          </div>
          <div class="completed">
            <div class="num">1</div>
            <div class="text">已完成单数</div>
          </div>
          <div class="day">
            <div class="num1">4</div>
            <div class="text">日单数</div>
          </div>
          <div class="month">
            <div class="num2">100</div>
            <div class="text">月单数</div>
          </div>
        </div>
        <div class="detail-wrapper latest-order-hook">
          <div class="avatar">
            <img src="http://139.196.106.144:8080/testImg/jishi.png" alt="" width="42" height="42">
            <div class="text">林技师</div>
          </div>
          <div class="completed">
            <div class="num">0</div>
            <div class="text">已完成单数</div>
          </div>
          <div class="day">
            <div class="num1">5</div>
            <div class="text">日单数</div>
          </div>
          <div class="month">
            <div class="num2">200</div>
            <div class="text">月单数</div>
          </div>
        </div>
        <div class="detail-wrapper">
          <div class="avatar">
            <img src="http://139.196.106.144:8080/testImg/jishi.png" alt="" width="42" height="42">
            <div class="text">林技师</div>
          </div>
          <div class="completed">
            <div class="num">0</div>
            <div class="text">已完成单数</div>
          </div>
          <div class="day">
            <div class="num1">5</div>
            <div class="text">日单数</div>
          </div>
          <div class="month">
            <div class="num2">200</div>
            <div class="text">月单数</div>
          </div>
        </div>
        <div class="detail-wrapper">
          <div class="avatar">
            <img src="http://139.196.106.144:8080/testImg/jishi.png" alt="" width="42" height="42">
            <div class="text">林技师</div>
          </div>
          <div class="completed">
            <div class="num">0</div>
            <div class="text">已完成单数</div>
          </div>
          <div class="day">
            <div class="num1">5</div>
            <div class="text">日单数</div>
          </div>
          <div class="month">
            <div class="num2">200</div>
            <div class="text">月单数</div>
          </div>
        </div>
        <div class="detail-wrapper">
          <div class="avatar">
            <img src="http://139.196.106.144:8080/testImg/jishi.png" alt="" width="42" height="42">
            <div class="text">林技师</div>
          </div>
          <div class="completed">
            <div class="num">0</div>
            <div class="text">已完成单数</div>
          </div>
          <div class="day">
            <div class="num1">5</div>
            <div class="text">日单数</div>
          </div>
          <div class="month">
            <div class="num2">200</div>
            <div class="text">月单数</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default{
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el.querySelector('.latest-order-hook'), {click: true})
        } else {
          this.scroll.refresh()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .captain-home-page
    background #f1f1f1
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    .title-wrapper
      position relative
      z-index 10
      background rgb(88, 79, 96)
      height 44px
      width 100%
      .title
        text-align center
        color rgb(255, 255, 255)
        padding-top 10px

    .order-wrapper
      margin-top 10px
      .today-order, .yesterday-order
        background #fff
        .title
          position relative
          width 100%
          height 40px
          box-sizing border-box
          padding 0 46px
          letter-spacing 2px
          borderB-1px(rgb(238, 238, 238))
          .text
            line-height 40px
            font-size 16px
            color rgb(88, 79, 96)
          .total-order-count
            position absolute
            right 80px
            top 0
            line-height 40px
            font-size 0
            color rgb(155, 155, 155)
            .name
              font-size 15px
              margin-right 6px
            .val
              font-size 15px

        /*.today-order
          !*margin-bottom 8px*!*/
        .order-cate
          display flex
          border-bottom 1px solid rgb(238, 238, 238)
          .waiting
            flex 1
            border-right 1px solid rgb(238, 238, 238)
            .icon-waiting
              display block
              width 30px
              height 30px
              margin 18px auto 15px
              bg-img('icon_waiting')
              background-size 30px 30px
              background-repeat no-repeat
            .label
              margin-bottom 30px
              text-align center
              font-size 12px
              color rgb(88, 79, 96)
              .count
                padding 0 2px
                color rgb(255, 172, 48)
          .completed
            flex 1
            border-right 1px solid rgb(238, 238, 238)
            .icon-completed
              display block
              width 30px
              height 30px
              margin 18px auto 15px
              bg-img('icon_completed')
              background-size 30px 30px
              background-repeat no-repeat
            .label
              margin-bottom 30px
              text-align center
              font-size 12px
              color rgb(88, 79, 96)
              .count
                padding 0 2px
                color rgb(45, 182, 118)
          .canceled
            flex 1
            border-right 1px solid rgb(238, 238, 238)
            .icon-canceled
              display block
              width 30px
              height 30px
              margin 18px auto 15px
              bg-img('icon_canceled')
              background-size 30px 30px
              background-repeat no-repeat
            .label
              margin-bottom 30px
              text-align center
              font-size 12px
              color rgb(88, 79, 96)
              .count
                padding 0 2px
                color rgb(255, 105, 119)

      .yesterday-order
        margin-top 8px
        .income-cate
          display flex
          .yesterday-income
            flex 1
            color #9b9b9b
            .income-title
              padding 21px 0 21px 17px
              box-sizing border-box
              border-right 1px solid rgb(238, 238, 238)
              font-size 14px
            .income-val
              box-sizing border-box
              margin-bottom 33px
              line-height 24px
              font-size 16px
              text-align center
          .month-income
            flex 1
            color #9b9b9b
            .income-title
              padding 21px 0 21px 17px
              box-sizing border-box
              border-right 1px solid rgb(238, 238, 238)
              font-size 14px
            .income-val
              box-sizing border-box
              margin-bottom 33px
              line-height 24px
              font-size 16px
              text-align center
          .detail
            flex 1
            color #9b9b9b
            .income-title
              padding 21px 0 21px 17px
              box-sizing border-box
              border-right 1px solid rgb(238, 238, 238)
              font-size 14px
            .icon-go
              display block
              width 29px
              height 21px
              margin 0 auto
              box-sizing border-box
              bg-img('icon_go')
              background-repeat no-repeat
              background-size 29px 21px
      .latest-order
        margin-top 8px
        background #fff
        .title
          height 36px
          line-height 36px
          padding 0 16px
          box-sizing border-box
          border-bottom 1px solid rgb(238, 238, 238)
          font-size 16px
          color rgb(88, 79, 96)
        .detail-wrapper
          display flex
          border-bottom 1px solid rgb(238, 238, 238)
          .avatar
            margin 6px 0 6px 15px
            width 25%
            .text
              font-size 13px
              margin-top 10px

          .completed, .day, .month
            position relative
            text-align center
            width 25%
            .text
              padding-top 15px
              color rgb(155, 155, 155)
            .num, .num1, .num2
              font-size 15px
              padding-top 15px
            .num
              color rgb(45, 182, 118)
            .num1
              color rgb(242, 70, 115)
            .num2
              color rgb(255, 172, 48)
</style>
