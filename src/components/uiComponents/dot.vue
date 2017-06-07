<template>
  <span class="dot"></span>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dot
    position relative
    &:after
      display block
      position absolute
      left -4px
      top 2px
      font-weight 500
      content: '·'
</style>
