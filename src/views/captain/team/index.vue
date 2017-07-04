<template>
  <div class="team-page">
    <div class="search-wrapper">
      <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"
              placeholder="搜索附属技师"></search>
    </div>
    <div class="content-wrapper">
      <div class="content" @click="showToggle">
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
    <transition name="fade">
      <div class="technician-wrapper" v-show="isShow">
        <technicianDetail ref="technician" @close-captain-page="showToggle"></technicianDetail>
      </div>
    </transition>
    <!--<div class="technician-mask"></div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import { Search } from 'vux'
  import technicianDetail from '@/views/captain/team/technicianDetail'
  export default{
    data () {
      return {
        autoFixed: false,
        isShow: false
      }
    },
    methods: {
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      },
      showToggle: function () {
        this.isShow = !this.isShow
      }
    },
    components: {
      Search,
      technicianDetail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .team-page
    background #f1f1f1
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    .search-wrapper
      width 100%
      position relative
      .weui-search-bar
        background rgb(125, 114, 135)
        padding-left 25px
        padding-right 25px
      .weui-search-bar__form
        background-color black
        border-color rgb(88, 79, 96)
        border-radius 10px
      .weui-search-bar__label
        /*background rgba(125, 114, 135, 0.8)*/
        color rgb(88, 79, 96)
        padding-left 10px
        text-align left
        border-radius 10px
        border-color black
      /*.weui-search-bar__label span*/

      .weui-search-bar__cancel-btn
        color rgb(255, 255, 255)

    .content-wrapper
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
    .technician-wrapper
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
