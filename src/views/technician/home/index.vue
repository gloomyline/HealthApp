<template>
  <div class="home-page">
    <div class="title-wrapper">
      <div class="working-status">
        <span class="title">当前状态:</span>
        <span class="status">{{nowStatusStr}}</span>
        <span class="list-toggle-btn" @click="toggleList">
          <i class="btn-img" :class="classMap"></i>
        </span>
      </div>
      <transition name="fade">
        <div class="status-list" v-show="listShow">
          <li class="list-item border-1px" v-for="(item, index) in statusList" @click="selectStatus(index)">{{item.name}}</li>
        </div>
      </transition>
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
            <span class="val">6单</span>
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
        <h2 class="title">最近订单</h2>
        <div class="content-wrapper">
          <div class="content">
            <div class="order-num">
              <span class="name">单号:</span>
              <span class="text">12645a56gd465465</span>
            </div>
            <div class="order-service">
              <span class="name">服务:</span>
              <span class="text">全身理疗 (卧)</span>
              <span class="time">/60分钟</span>
              <span class="count">x1</span>
            </div>
            <div class="price">
              <span class="name">价格:</span>
              <span class="price-val">168元</span>
            </div>
            <div class="customer">
              <span class="name">客户:</span>
              <span class="text">飞天螳螂</span>
            </div>
            <div class="time">
              <span class="name">时间:</span>
              <span class="text">2015-06-27 19:30</span>
              <span class="desc">【今天】</span>
            </div>
            <div class="address">
              <span class="name">地址:</span>
              <span class="text">厦门希尔顿酒店A座1306号</span>
            </div>
          </div>
          <div class="btn-container">
            <a class="check-order-btn">确认接单</a>
          </div>
        </div>
      </div>
    </div>
    <transition name="mask-fade">
      <div class="mask" v-show="listShow" @click="toggleList"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  const OFF_WORKING = 0
  const ON_WORKING = 1
  const statusList = [
    {
      name: '上班',
      status: ON_WORKING
    },
    {
      name: '下班',
      status: OFF_WORKING
    }
  ]

  export default{
    data () {
      return {
        nowStatus: 1,
        statusList,
        listShow: false
      }
    },
    computed: {
      classMap () {
        return {
          'arrow_up': this.listShow === true,
          'arrow_down': this.listShow === false
        }
      },
      nowStatusStr () {
        let str = this.nowStatus === OFF_WORKING ? '下班' : '上班'
        return str
      }
    },
    methods: {
      selectStatus (index) {
        this.nowStatus = this.statusList[index].status
        this.toggleList()
      },
      toggleList () {
        this.listShow = !this.listShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixin.styl"

  .home-page
    background #f1f1f1
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    .title-wrapper
      position relative
      z-index 10
      .working-status
        position relative
        width 100%
        height 41px
        line-height 41px
        padding-left 16px
        box-sizing border-box
        font-size 0
        color #fff
        background rgb(88, 79, 96)
        z-index 10
        .title
          font-size 15px
          margin-right 6px
        .status
          font-size 15px
        .list-toggle-btn
          position absolute
          right 12px
          top 13px
          height 14px
          padding 4px
          box-sizing border-box
          .btn-img
            inline-icon(11px, 6px)
            bg-img('arrow_down')
            transition all .4s
            &.arrow_up
              transform matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(135deg)
            &.arrow_down
              transform matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-45deg)
      .status-list
        position absolute
        left 0
        top 0
        width 100%
        transform translate3d(0, 50%, 0)
        background #f1f1f1
        z-index 5
        .list-item
          height 41px
          line-height 41px
          text-align center
          box-sizing border-box
          border-bottom 1px solid rgb(155, 155, 155)
          font-size 15px
          color rgb(47, 47, 53)
        &.fade-enter-active, &.fade-leave-active
          transition all .4s ease
        &.fade-enter, &.fade-leave-active
          opacity 0
          transform translate3d(0, 0, 0)
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
      .today-order
        /*margin-bottom 8px*/
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
        .content-wrapper
          .content
            padding 10px 16px 0
            line-height 24px
            .name
              font-size 14px
              color #9b9b9b
            .text
              font-size 14px
              color rgb(88, 79, 96)
            .count
              color #ffac30
            .price-val
              color #584f60
            .desc
              color #ffac30
          .btn-container
            margin-top 10px
            .check-order-btn
              display block
              width 330px
              height 37px
              line-height 37px
              text-align center
              margin 0 auto
              border-radius 5px
              font-size 18px
              color #fff
              background rgb(88, 79, 96)
              &:active
                box-shadow inset 2px 5px 5px rgba(0, 0, 0, .5)
    .mask
      position fixed
      left 0
      bottom 49px
      width 100%
      height 100%
      background rgba(0, 0, 0, .5)
      z-index 5
      &.mask-fade-enter-active, &.mask-fade-leave-active
        transition all .3s ease
      &.mask-fade-enter, &.mask-fade-leave-active
        opacity 0
</style>
