<template>
  <div class="item-detail-page">
    <title-wrapper title="套餐详情" @close-page="closeDetail"></title-wrapper>
    <!--<div class="content">-->
    <!--<div class="avatar">-->
    <!--<img :img="" width="375" height="174" onerror="this.src='http://localhost:9999/static/imgs/default-item.png'">-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import titleWrapper from '@/components/uiComponents/titleWrapper'

  export default{
    methods: {
      closeDetail () {
        this.$emit('close-item-page')
      }
    },
    components: {
      titleWrapper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .item-detail-page
    position fixed
    left 0
    top 0
    bottom -49px
    width 100%
    height 100%
    background #f1f1f1
</style>
