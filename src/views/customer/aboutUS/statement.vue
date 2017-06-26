<template>
  <div class="statement-page" v-show="pageShow">
    <title-wrapper title="责任声明" @close-page="hidePage"></title-wrapper>
    <div class="content">
      <p>这里是责任声明界面</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleWrapper from '@/components/uiComponents/titleWrapper'
  export default{
    data () {
      return {
        pageShow: false
      }
    },
    methods: {
      showPage () {
        this.pageShow = true
      },
      hidePage () {
        this.pageShow = false
      }
    },
    components: {
      titleWrapper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .statement-page
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background #f1f1f1
</style>
