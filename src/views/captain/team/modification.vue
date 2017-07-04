<template>
  <div class="modification-page">
    <div class="title-wrapper">
      <title-wrapper title="修改管理" @close-page="closeDetail"></title-wrapper>
    </div>
    <group class="avatar">
      <cell-box is-link>头像</cell-box>
    </group>
    <group class="content-wrapper">
      <cell-box is-link>姓名</cell-box>
      <cell-box is-link>性别</cell-box>
      <cell-box is-link>服务范围</cell-box>
      <cell-box is-link>技师等级</cell-box>
    </group>
    <group class="item-wrapper">
      <cell-box is-link>精油SPA（卧）</cell-box>
      <cell-box is-link>全身理疗（卧）</cell-box>
      <cell-box is-link>全身理疗（卧）</cell-box>
      <cell-box @click="showToggle">添加项目</cell-box>
    </group>
    <div class="submit">提交</div>
    <div class="expel">开除</div>
    <transition name="fade">
      <div class="addItem-page-wrapper" v-show="isShow">
        <addItem ref="addItem" @close-captain-page="showToggle"></addItem>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, CellBox } from 'vux'
  import addItem from '@/views/captain/team/addItem'
  import titleWrapper from '@/components/uiComponents/titleWrapper'
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
      addItem,
      Group,
      CellBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .modification-page
    background #f1f1f1
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    .avatar
      width 100%
      height 66px
      border-bottom 7px solid #f1f1f1
      .weui-cells
        margin 0
        padding 11px 0 11px 0
    .content-wrapper
      border-bottom 7px solid #f1f1f1
      .weui-cells
        margin 0
    .item-wrapper
      .weui-cells
        margin 0
    .submit
      width 80%
      margin auto
      margin-top 15px
      height 30px
      color rgb(255, 255, 255)
      text-align center
      background rgb(88, 79, 96)
      border-radius 10px
      padding-top 11px
    .expel
      width 80%
      margin auto
      margin-top 15px
      height 30px
      color rgb(255, 255, 255)
      text-align center
      background rgb(233, 93, 98)
      border-radius 10px
      padding-top 11px

    .addItem-page-wrapper
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

