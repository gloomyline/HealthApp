<template>
  <div id="app">
    <!-- loading animation -->
    <div class="loading-wrapper">
      <loading v-model="isLoading"></loading>
    </div>
    <keep-alive>
      <router-view></router-view>
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
  import userApi from '@/api/user'
  import allApi from '@/api/all'
  export default {
    name: 'app',
    computed: {
      ...mapGetters({
        isLoading: 'isLoading'
      })
    },
    created () {
      userApi.getCouponList(null, (data) => {
        console.log('13', data)
      })
      userApi.addFavorite({CustomerId: 1111, Type: 0}, (data) => {
        console.log('06', data)
      })
      userApi.cancelFavorite({CustomerId: 1111, Type: 0}, (data) => {
        console.log('07', data)
      })
      userApi.getFavoriteList({CustomerId: 1111, Type: 0}, (data) => {
        console.log('08', data)
      })
      allApi.submitOrder({CUSTOMER_ID: 1111}, (data) => {
        console.log('09', data)
      })
      allApi.getOrderList({}, (data) => {
        console.log('10', data)
      })
      allApi.getAdsList({}, (data) => {
        console.log('12', data)
      })
      allApi.registerTechnician({}, (data) => {
        console.log('16', data)
      })
      allApi.getAllCertificatelist({}, (data) => {
        console.log('17', data)
      })
      allApi.changeGiftInfo({}, (data) => {
        console.log('18', data)
      })
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
