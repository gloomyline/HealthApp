<template>
  <div id="app">
    <!-- loading animation -->
    <div class="loading-wrapper">
      <loading v-model="isLoading"></loading>
    </div>
    <keep-alive>
      <transition>
        <router-view></router-view>
      </transition>
    </keep-alive>
    <div class="footer">
      <tab></tab>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Loading } from 'vux'
  import vHeader from '@/components/header'
  import tab from '@/components/tab'

  export default {
    name: 'app',
    computed: {
      ...mapGetters({
        isLoading: 'isLoading'
      })
    },
    created () {
    },
    methods: {},
    components: {
      Loading,
      vHeader,
      tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .loading-wrapper
      .weui-toast
        top 40%
        background none
      .weui-toast__content
        margin 15px 0 15px 0
        font-size 16px
        color #7e8c8d
    .footer
      position fixed
      width 100%
      height 49px
      left 0
      bottom 0
</style>
