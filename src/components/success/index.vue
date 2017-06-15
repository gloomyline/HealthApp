<template>
  <div class="success">
    <div class="header-wrapper">
      <h1 class="title">下单成功</h1>
      <div class="back" @click="closeDetail">
        <span class="icon-back">返回</span>
      </div>
    </div>
    <div class="success-wrapper">
      <msg :title="title" :button="button.text" :icon="icon"></msg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Msg, Divider, XButton } from 'vux'

  export default{
    components: {
      Msg,
      Divider,
      XButton
    },
    methods: {
      closeDetail (event) {
        if (!event._constructed) return
        this.$store.commit('TOGGLE_TECH_DETAIL')
      },
      changeIcon () {
        if (!this.icon || this.icon === 'success') {
          return
        }
      },
      data () {
        return {
          title: '下单成功',
          icon: '',
          button: [{
            text: '查看订单详情',
            onClick: this.changeIcon.bind(this)
          }]
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl

  .success
    position fixed
    top 0
    left 0
    bottom 49px
    width 100%
    height 100%
    overflow hidden
    background #f1f1f1
    .headerWapper
      width 100%
      height 47px
      text-align center
      background rgb(88, 79, 96)
      .title
        line-height 41px
        font-size 18px
      .back
        position absolute
        left 12px
        top 10px
        padding 4px
        .icon-back
          display inline-block
</style>
