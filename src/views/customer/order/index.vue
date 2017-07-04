<template>
  <div class="order-page">
    <div class="order-tab-wrapper order-tab-wrapper-hook">
      <div class="order-tab order-tab-hook">
        <li v-for="order in orders" class="order-tab-item">
          <router-link :to="order.path">{{order.text}}</router-link>
        </li>
      </div>
    </div>
    <router-view></router-view>
    <!-- 项目（套餐）详情页 -->
    <transition name="fade">
      <div class="item-detail-wrapper" v-show="itemDetailShow">
        <item-detail @close-item-page="hideDetail"></item-detail>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapGetters } from 'vuex'
  import config from '@/assets/config'
  import itemDetail from '@/components/order/itemDetail'

  let orderTypes = config.massageTypeList
  let typesArr = ['manipulation', 'SPA', 'children', 'moxibustion', 'recover', 'scraping', 'foot']
  let orderList = []
  typesArr.forEach((item, index) => {
    let obj = {path: '/order/' + item, text: orderTypes[index].MassagetypeName}
    orderList.push(obj)
  })

  export default {
    data () {
      return {
        orders: orderList
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initHScroll()
      })
    },
    watch: {
      'itemDetailShow' () {
        if (this.itemDetailShow) {
          this.$el.style.zIndex = 10
        }
      }
    },
    computed: {
      ...mapGetters({
        itemDetailShow: 'itemDetailShow'
      })
    },
    methods: {
      _initHScroll () {
        if (this.orders) {
          // 计算出 order tab 的宽度
          let windowWidth = document.documentElement.clientWidth
          let itemWidth = 61
          let scrollWidth = itemWidth * this.orders.length
          let nodeOrderTab = this.$el.querySelector('.order-tab-hook')
          if (windowWidth > scrollWidth + itemWidth) {
            nodeOrderTab.style.width = windowWidth + 'px'
          } else {
            nodeOrderTab.style.width = scrollWidth + 'px'
          }
          if (!this.hScroll) {
            this.hScroll = new BScroll(this.$el.querySelector('.order-tab-wrapper-hook'), {
              click: true,
              scrollX: 'true',
              eventPassThrough: 'vertical'
            })
          } else {
            this.hScroll.refresh()
          }
        }
      },
      hideDetail () {
        this.$store.commit('TOGGLE_ITEM_DETAIL')
        this.$el.style.zIndex = 0
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // default to massage type
        if (vm.$route.params !== 'manipulation') {
          vm.$router.push('/order/manipulation')
        }
      })
    },
    components: {
      itemDetail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order-page
    position fixed
    left 0
    top 0
    bottom 0
    width 100%
    height 100%
    .order-tab-wrapper
      height 35px
      width 100%
      overflow hidden
      white-space nowrap
      .order-tab
        height 100%
        padding 0 7px
        line-height 35px
        text-align center
        font-size 0
        .order-tab-item
          display inline-block
          width 61px
          & > a
            display inline-block
            width 100%
            height 32px
            font-size 11px
            color #939393
            &.active
              color #584f60
              border-bottom 2px solid rgb(88, 79, 96)
    .item-detail-wrapper
      position fixed
      left 0
      top 0
      bottom 0
      width 100%
      height 100%
      transform translate3d(0, 0, 0)
      &.fade-enter-active, &.fade-leave-active
        transition all .4s ease
      &.fade-enter, &.fade-leave-active
        opacity 0
        transform translate3d(100%, 0, 0)
</style>
