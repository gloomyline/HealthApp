<template>
  <div class="order-page">
    <tab class="order-tab" :line-width=2 active-color='rgb(88, 79, 96)' v-model="selectedIndex">
      <tab-item class="vux-center"
                :selected="defaultSelected === item"
                v-for="(item, index) in orderList"
                :key="index">{{item}}
      </tab-item>
    </tab>
    <swiper v-model="selectedIndex" :show-dots="false" height="600px">
      <swiper-item v-for="(item, index) in orderList" :key="index">
        <div class="tab-swiper">
          <confirming v-if="selectedIndex === 0"></confirming>
          <servicing v-if="selectedIndex === 1"></servicing>
          <completed v-if="selectedIndex === 2"></completed>
          <canceled v-if="selectedIndex === 3"></canceled>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import confirming from '@/views/technician/order/confirming'
  import servicing from '@/views/technician/order/servicing'
  import completed from '@/views/technician/order/completed'
  import canceled from '@/views/technician/order/canceled'

  const orderList = ['待确认', '待服务', '已完成', '已取消']

  export default{
    data () {
      return {
        orderList,
        selectedIndex: 0
      }
    },
    computed: {
      defaultSelected () {
        return this.orderList[0]
      }
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      confirming,
      servicing,
      completed,
      canceled
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .order-page
    position fixed
    top 0
    left 0
    background #f1f1f1
    width 100%
    height 100%
    .order-tab
      height 37px
      .vux-tab-item
        line-height 37px
        font-size 15px
        color rgb(133, 133, 133)
</style>
