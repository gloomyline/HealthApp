<template>
  <div id="app">
    <div class="header">
      <v-header></v-header>
    </div>
    <router-view></router-view>
    <div class="footer">
      <tab></tab>
    </div>
  </div>
</template>

<script>
  import header from 'components/header'
  import tab from 'components/tab'

  export default {
    name: 'app',
    components: {
      'v-header': header,
      tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .header
      width 100%
      height 152px
    .footer
      position fixed
      width 100%
      height 49px
      left 0
      bottom 0
</style>
