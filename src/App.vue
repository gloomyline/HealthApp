<template>
  <div id="app">
    <!-- loading animation -->
    <div class="loading-wrapper">
      <loading v-model="isLoading"></loading>
    </div>
    <div class="client-container">
      <!-- 客户端 -->
      <div class="customer-client" v-if="appStat === 0">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <div class="footer">
          <tab></tab>
        </div>
      </div>
      <!-- 技师端 -->
      <div class="technician-client" v-else-if="appStat === 1">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <div class="footer">
          <tab></tab>
        </div>
      </div>
      <!-- 领班端 -->
      <div class="captain-client" v-else>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <div class="footer">
          <tab></tab>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Loading } from 'vux'
  import vHeader from '@/components/header'
  import tab from '@/components/tab'
  //  import userApi from '@/api/user'
  //  import allApi from '@/api/all'
  export default {
    name: 'app',
    computed: {
      ...mapGetters({
        appStat: 'appStat',
        isLoading: 'isLoading'
      })
    },
    created () {
      if (this.appStat === 0) {
        this.$router.push('/home')
      } else if (this.appStat === 1) {
        this.$router.push('/technician/home')
      } else if (this.appStat === 2) {
        this.$router.push('/captain/home')
      }
//      userApi.addFavorite({CustomerId: 1111, Type: 0}, (data) => {
//        console.log('06', data)
//      })
//      userApi.cancelFavorite({CustomerId: 1111, Type: 0}, (data) => {
//        console.log('07', data)
//      })
//      userApi.getFavoriteList({CustomerId: 1111, Type: 0}, (data) => {
//        console.log('08', data)
//      })
//      allApi.submitOrder({}, (data) => {
//        console.log('09', data)
//      })
//      allApi.getOrderList({}, (data) => {
//        console.log('10', data)
//      })
//      allApi.getTechnicianIds({}, (data) => {
//        console.log('11', data)
//      })
//      allApi.getAdsList({}, (data) => {
//        console.log('12', data)
//      })
//      userApi.getCouponlist(null, (data) => {
//        console.log('13', data)
//      })
//      allApi.getAdsList({}, (data) => {
//        console.log('15', data)
//      })
//      allApi.registerTechnician({}, (data) => {
//        console.log('16', data)
//      })
//      allApi.changeGiftInfo({}, (data) => {
//        console.log('18', data)
//      })
//      allApi.withdrawDeposit({}, (data) => {
//        console.log('19', data)
//      })
//      allApi.getGiftsdetaillist({TechnicianId: '15babeda564b4bf987395f60f3c1768f'}, (data) => {
//        console.log('20', data)
//      })
//      allApi.getItemfootcitylist({}, (data) => {
//        console.log('21', data)
//      })
//      allApi.getTechnicianIds({}, (data) => {
//        console.log('22', data)
//      })
//      allApi.getTechnicianListByLeaderid({TechleaderId: 1}, (data) => {
//        console.log('23', data)
//      })
//      allApi.getOrderListOfTechByTechid({}, (data) => {
//        console.log('24', data)
//      })
//      allApi.leaderDeletedTech({}, (data) => {
//        console.log('25', data)
//      })
//      allApi.getOrderlisttoday({TechleaderId: 1}, (data) => {
//        console.log('26', data)
//      })
    },
    methods: {},
    components: {
      Loading,
      vHeader,
      tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
