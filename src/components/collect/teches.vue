<template>
  <div class="teches">
    <span class="name">林技师</span>
    <span class="age">26岁</span>
    <span class="area">福建</span>
    <span class="registar">高级推拿师</span>
    <span class="details">详情</span>
  </div>

</template>

<script type="text/ecmascript-6">
  import dot from '@/components/uiComponents/dot'
  export default{
    components: {
      dot
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .teches
    position fixed
    left 0
    top 60
    width 100%
    height 100%
    background #fff
</style>
