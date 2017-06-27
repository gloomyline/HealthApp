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
        <div class="title">
          <h2 class="text">今天</h2>
          <div class="total-order-count">
            <span class="name">总订单</span>
            <span class="val">6单</span>
          </div>
        </div>
        <div class="order-cate">
          <div class="waiting"></div>
          <div class="completed"></div>
          <div class="canceled"></div>
        </div>
      </div>
      <div class="yesterday-order">
        <div class="title">
          <h2 class="text">昨天</h2>
          <div class="total-order-count">
            <span class="name">总订单</span>
            <span class="val">6单</span>
          </div>
        </div>
        <div class="income-cate">
          <div class="yesterday-income"></div>
          <div class="month-income"></div>
          <div class="detail"></div>
        </div>
      </div>
      <div class="latest-order">
        <h2 class="title">最近订单</h2>
        <div class="content-wrapper">
          <div class="content"></div>
          <div class="btn-container">
            <button>确认接单</button>
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
      name: '下班',
      status: OFF_WORKING
    },
    {
      name: '上班',
      status: ON_WORKING
    }
  ]

  export default{
    data () {
      return {
        nowStatus: 0,
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
        transform translate3d(0, 80%, 0)
        background #fff
        z-index 5
        .list-item
          height 24px
          line-height 24px
          padding 0 12px
          border-bottom 1px solid rgb(155, 155, 155)
          font-size 12px
          color rgb(155, 155, 155)
        &.fade-enter-active, &.fade-leave-active
          transition all .4s ease
        &.fade-enter, &.fade-leave-active
          opacity 0
          transform translate3d(0, 0, 0)
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
