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
      <cell is-link class="content" @click.native="showProtocol">
        <div class="text">使用协议</div>
      </cell>
      <cell is-link class="content" @click.native="showStatement">
        <div class="text">责任声明</div>
      </cell>
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
  @import "../../common/stylus/mixin.styl"
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
      margin 80px 150px
      display flex
      flex-direction column
      .img
        inline-icon(71px, 71px)
        bg-img('iTunesArtwork-Retina')
      .text
        font-size 13px
        margin 15px 8px
    .content-wrapper
      width 100%
      height 90px
      margin-top -175px
      .content
        font-size 13px
        .text
          color #000
          text-align left
          margin-right 280px
    .iphone
      display flex
      width 100%
      height 40px
      font-size 13px
      padding-top 40px
      .icon
        width 15px
        height 15px
        padding-left 60px
      .text
        padding-left 15px
      .num
        padding-left 25px
    .copyright
      font-size 11px
      color #7e8c8d
      width 100%
      height 50px
      text-align center
      padding-top 125px
</style>
