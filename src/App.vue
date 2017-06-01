<template>
  <div id="app">
    <div class="header-wrapper">
      <v-header></v-header>
    </div>
    <router-view></router-view>
    <div class="footer">
      <tab></tab>
    </div>
  </div>
</template>

<script>
  import vHeader from '@/components/header'
  import tab from '@/components/tab'

  export default {
    name: 'app',
    components: {
      vHeader,
      tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    z-index 100
    .header-wrapper
      width 100%
    .footer
      position fixed
      width 100%
      height 49px
      left 0
      bottom 0
</style>
