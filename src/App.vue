<template>
  <div id="app">
    <!-- loading animation -->
    <div class="loading-wrapper">
      <loading v-model="isLoading"></loading>
    </div>
    <keep-alive>
      <router-view :tech-list="technicians"></router-view>
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
        isLoading: 'isLoading',
        technicians: 'allTechnicians'
      })
    },
    created () {
      let postData = {
        page_now: 1,
        page_size: 10
      }
      this.$store.dispatch('getAllTechnicians', postData)
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
    .header-wrapper
      width 100%
    .footer
      position fixed
      width 100%
      height 49px
      left 0
      bottom 0
</style>
