<template>
  <div class="page-title-wrapper">
    <h1 class="title"></h1>
    <div class="return-btn" @click="closePage">
      <x-icon type="ios-arrow-back" size="30"></x-icon>
      <span class="label">返回</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      title: {
        type: String,
        defult: ''
      }
    },
    methods: {
      closePage () {
        this.$emit('close-page')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .page-title-wrapper
    position relative
    height 47px
    background rgb(88, 79, 96)
    .return-btn
      position absolute
      left 0
      top 0
      font-size 0
      .vux-x-icon
        padding 8px 0 8px 4px
      .label
        display inline-block
        vertical-align top
        line-height 47px
        font-size 16px
        color #fff
    .title
      text-align center
      line-height 47px
      font-size 18px
      color #fff
</style>
