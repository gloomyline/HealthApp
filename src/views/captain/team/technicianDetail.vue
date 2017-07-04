<template>
  <div class="captain-technicianDetail-page">
    <div class="title-wrapper">
      <title-wrapper title="技师详情" @close-page="closeDetail"></title-wrapper>
    </div>
    <div class="header-wrapper">
      <div class="avatar">
        <img src="http://www.wangsanchuan.cn/testImg/jishi.png" alt="" width="73" height="73">
      </div>
      <div class="detail-wrapper">
        <div class="name">林技师</div>
        <div class="detail">
          <div class="sex">女•</div>
          <div class="age">年龄•</div>
          <div class="address">福建</div>
        </div>
        <div class="level">高级按摩师</div>
      </div>
      <div class="right-wrapper" @click="showToggle">
        <div class="icon"></div>
        <div class="text">修改管理</div>
      </div>
    </div>
    <group class="indent-wrapper">
      <cell-box is-link style="arrow-direction:up-down" class="indent">近一个月的单子</cell-box>
    </group>
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
        <div class="time">
          <span class="name">时间:</span>
          <span class="text">2015-06-27 19:30</span>
          <span class="desc">【今天】</span>
        </div>
        <div class="address">
          <span class="name">订单状态:</span>
          <span class="desc">待服务</span>
        </div>
      </div>
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
        <div class="time">
          <span class="name">时间:</span>
          <span class="text">2015-06-27 19:30</span>
          <span class="desc">【今天】</span>
        </div>
        <div class="address">
          <span class="name">订单状态:</span>
          <span class="desc">已完成</span>
        </div>
        <div class="bottom-wrapper">
          <div class="grade">
            <span class="name">ta的评分：</span>
            <span></span>
          </div>
          <div class="evaluate">
            <span class="name">ta的评价：</span>
            <span class="text">这里是评价这里是评价这里是评价这里是评价</span>
          </div>
        </div>
      </div>
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
        <div class="time">
          <span class="name">时间:</span>
          <span class="text">2015-06-27 19:30</span>
          <span class="desc">【今天】</span>
        </div>
        <div class="address">
          <span class="name">订单状态:</span>
          <span class="desc">已取消</span>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="modification-wrapper" v-show="isShow">
        <modification ref="modification" @close-captain-page="showToggle"></modification>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleWrapper from '@/components/uiComponents/titleWrapper'
  import modification from '@/views/captain/team/modification'
  import { Group, CellBox } from 'vux'
  export default{
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      closeDetail () {
        this.$emit('close-captain-page')
      },
      showToggle: function () {
        this.isShow = !this.isShow
      }
    },
    components: {
      titleWrapper,
      modification,
      Group,
      CellBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .captain-technicianDetail-page
    background #f1f1f1
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    .header-wrapper
      position relative
      width 100%
      display flex
      background rgb(255, 255, 255)
      .avatar
        padding 16px 10px
      .detail-wrapper
        position relative
        padding-top 16px
        margin-left 5px
        .name
          font-size 15px
          color rgb(41, 41, 46)
        .detail
          display flex
          font-size 12px
          color rgb(181, 166, 195)
          padding-top 11px
        .level
          font-size 12px
          border 1px solid
          border-radius 4px
          border-color cornflowerblue
          color cornflowerblue
          padding 5px
          margin 11px 0px 10px 0
      .right-wrapper
        position fixed
        right 16px
        display flex
        margin-top 40px
        .icon
          bg-img(icon_xiugai)
          width 30px
          height 30px
          background-size 18px 18px
          background-repeat no-repeat
        .text
          font-size 14px
          padding-top 2px
          color rgb(88, 79, 96)
    .indent-wrapper
      width 100%
      position relative
      .weui-cells
        margin-top 10px
        .indent
          margin-left 8px
          color rgb(33, 34, 36)
          font-size 15px
    .content-wrapper
      position relative
      background rgb(255, 255, 255)
      .content
        padding 10px 16px 0
        margin-top 7px
        line-height 24px
        display flex
        flex-direction column
        border-bottom 7px solid #f1f1f1
        .name
          font-size 14px
          color #9b9b9b
        .time
          color #7e8c8d
        .text
          font-size 14px
          color rgb(88, 79, 96)
        .count
          color #ffac30
        .price-val
          color #584f60
        .desc
          color #ffac30
        .bottom-wrapper
          border-top 1px dotted rgb(88, 79, 96)
          .name
            font-size 14px
            color #9b9b9b
          .text
            font-size 13px
            font-weight bold

    .modification-wrapper
      position fixed
      left 0
      top 0
      bottom 0
      width 100%
      z-index 20
      transform translate3d(0, 0, 0)
      &.fade-enter-active, &.fade-leave-active
        transition all .4s ease
      &.fade-enter, &.fade-leave-active
        opacity 0
        transform translate3d(100%, 0, 0)
</style>
