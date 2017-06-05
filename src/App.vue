<template>
  <div id="app">
    <div class="header-wrapper">
      <v-header></v-header>
    </div>
    <router-view :tech-list="technicians"></router-view>
    <div class="footer">
      <tab></tab>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vHeader from '@/components/header'
  import tab from '@/components/tab'

  export default {
    name: 'app',
    computed: {
      ...mapGetters({
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
      vHeader,
      tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    position relative
    .header-wrapper
      width 100%
    .footer
      position fixed
      width 100%
      height 49px
      left 0
      bottom 0
</style>
