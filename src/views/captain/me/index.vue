<template>
  <div class="me-page">
    <router-view class="me-pages-container"></router-view>
    <div class="header">
      <group>
        <cell-box is-link>
          <div class="avatar">
            <img src="http://www.wangsanchuan.cn/testImg/jishi.png" alt="" width="73" height="73">
          </div>
          <div class="content-wrapper">
            <div class="content">
              <div class="name">周领班</div>
              <div class="detail">(女▪26岁▪福建)</div>
            </div>
            <div class="tel">13655646646</div>
          </div>
        </cell-box>
      </group>
    </div>
    <div class="examine-wrapper">
      <group>
        <cell-box is-link link="/captain/me/balance">
          <div class="yue-wrapper">
            <div class="icon"></div>
            <div class="yue">余额</div>
          </div>
        </cell-box>
        <cell-box is-link>
          <div class="mima-wrapper">
            <div class="icon"></div>
            <div class="mima">提现密码</div>
          </div>
        </cell-box>
        <cell-box is-link>
          <div class="card-wrapper">
            <div class="icon"></div>
            <div class="card">银行卡</div>
          </div>
        </cell-box>
      </group>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { CellBox, Group, Cell } from 'vux'
  //  let list = [{link1: '/information'}]
  export default{
    data () {
      return {
//        list: [{link: '/information'}]
      }
    },
    methods: {
//      toNew: function () {
//        this.$router.push({path: '/technician/me/information'})
//      }
    },
    components: {
      CellBox,
      Group,
      Cell
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .me-page
    background #f1f1f1
    .me-pages-container
      z-index 100
    .header
      .weui-cells
        margin 0
        height 100px
        width 100%
        background rgb(88, 79, 96)
        .weui-cell_access.vux-cell-box
          padding 0
      .vux-cell-box > div
        padding 0px
        display flex
      .avatar
        position relative
        width 73px
        height 73px
        padding 15px
      .content-wrapper
        position relative
        .content
          margin 20px auto
          display flex
          .name
            font-size 15px
            color rgb(255, 255, 255)
          .detail
            font-size 13px
            color rgb(184, 169, 198)
            padding-left 12px
        .tel
          font-size 13px
          color rgb(184, 169, 198)
    .examine-wrapper
      width 100%
      height 86px
      background rgb(255, 255, 255)
      border-bottom 7px solid #f1f1f1
      .weui-cells
        margin 0
        .weui-cell_access.vux-cell-box
          padding 0
        .yue-wrapper
          display flex
          height 43px
          .icon
            padding 5px
            bg-img(list_icon_2)
            width 38px
            height 38px
            background-repeat no-repeat
            background-size 20px 20px
            background-position center
          .yue
            font-size 13px
            padding-top 15px
        .mima-wrapper
          display flex
          height 43px
          .icon
            bg-img(list_icon_3)
            padding-left 3px
            padding-right 5px
            width 38px
            height 43px
            background-repeat no-repeat
            background-size 18px 18px
            background-position center
          .mima
            font-size 13px
            padding-top 13px
        .card-wrapper
          display flex
          height 43px
          .icon
            bg-img(list_icon_4)
            padding-left 3px
            padding-right 5px
            width 38px
            height 43px
            background-repeat no-repeat
            background-size 18px 18px
            background-position center
          .card
            font-size 13px
            padding-top 13px
</style>
