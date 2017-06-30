<template>
  <div class="about-page">
    <div class="header-wrapper">
      <h1 class="title">关于我们</h1>
      <div class="back">
        <router-link to="/me">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
      </div>
    </div>
    <div class="logo">
      <span class="img"></span>
      <span class="text">好多养生</span>
    </div>
    <group class="content-wrapper">
      <cell-box is-link class="content" @click.native="showProtocol">
        <div class="text">使用协议</div>
      </cell-box>
      <cell-box is-link class="content" @click.native="showStatement">
        <div class="text">责任声明</div>
      </cell-box>
    </group>
    <div class="iphone">
      <div class="icon"></div>
      <div class="text">客服电话:</div>
      <div class="num">100-000-000</div>
    </div>
    <div class="copyright">
      <div class="text">厦门多好信息科技有限公司</div>
      <div class="es">xiamenduohaoxinxikejiyouxiangongsi</div>
    </div>
    <protocol ref="protocol"></protocol>
    <statement ref="statement"></statement>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, CellBox, Cell } from 'vux'
  import protocol from './protocol'
  import statement from './statement'
  export default{
    methods: {
      showProtocol () {
        this.$refs.protocol.showPage()
      },
      showStatement () {
        this.$refs.statement.showPage()
      }
    },
    components: {
      Group,
      CellBox,
      Cell,
      protocol,
      statement
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .about-page
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    z-index 100
    background #f1f1f1
    .header-wrapper
      width 100%
      height 47px
      color #fff
      background rgb(88, 79, 96)
      .title
        padding-top 15px
        text-align center
        font-size 18px
        vertical-align top
      .back
        position absolute
        left 12px
        top 6px
        padding 4px
    .logo
      width 100%
      height 250px
      display flex
      justify-content center
      margin 50px auto
      /*padding-top 80px*/
      /*padding-bottom 50px*/
      /*flex-direction column*/
      .img
        inline-icon(71px, 71px)
        bg-img('iTunesArtwork-Retina')
      .text
        position fixed
        font-size 13px
        padding-top 90px
    .content-wrapper
      width 100%
      margin-top -175px
      .content
        font-size 13px
        .text
          color #000
          width 100%
          text-align left
          margin-right 280px
    .iphone
      display flex
      width 100%
      /*height 40px*/
      font-size 13px
      padding-top 40px
      justify-content center
      .icon
        /*flex 0 0 30%*/
        bg-img(list_icon)
        background-repeat no-repeat
        background-position right
        width 36px
        /*height 15px*/
        background-size 15px
      .text
        padding-left 10px
      .num
        padding-left 15px
    .copyright
      position fixed
      bottom 0
      left 0
      font-size 11px
      color #7e8c8d
      width 100%
      text-align center
      margin-bottom 55px
</style>
