<template>
  <div id="app">
    <div class="header-wrapper">
      <v-header></v-header>
    </div>
    <router-view :tech-list="techList"></router-view>
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
    data () {
      return {
        techList: []
      }
    },
    created () {
      let postData = {
        page_now: 1,
        page_size: 10
      }
      let url = 'http://192.168.0.237:8080/massage/appTechnicianData/getTechniciansList.do'
      this.$http.post(url, postData, {emulateJSON: true})
        .then((res) => {
          res = res.body
          if (res.Status === 0) {
            this.techList = res.Data.technicianLists
          } else {
            console.log(res.ErrMsg)
          }
        })
    },
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
