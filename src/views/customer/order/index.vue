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
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import config from '@/assets/config'

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
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // default to massage type
        if (vm.$route.params !== 'manipulation') {
          vm.$router.push('/order/manipulation')
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order-page
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
</style>
