<template>
  <!--<transition name="fade">-->
  <div class="protocol-page" v-show="pageShow">
    <title-wrapper title="使用协议" @close-page="hidePage"></title-wrapper>
    <div class="content">
      <p>这里是使用协议界面</p>
    </div>
  </div>
  <!--</transition>-->
</template>

<script type="text/ecmascript-6">
  import titleWrapper from '@/components/uiComponents/titleWrapper'
  export default{
//    props: {
//      title: {
//        type: Object,
//        text: ''
//      },
//      content: {
//        type: Object,
//        text: ''
//      }
//    },
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
  .protocol-page
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background #f1f1f1
</style>
