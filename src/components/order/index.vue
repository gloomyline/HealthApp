<template>
  <div class="order-page">
    <div class="order-tab-wrapper order-tab-wrapper-hook">
      <div class="order-tab order-tab-hook">
        <li v-for="order in orders" class="order-item">
          <router-link :to="order.path">{{order.text}}</router-link>
        </li>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  //  import router from '../../router'
  import BScroll from 'better-scroll'

  let orderList = [
    {
      path: '/order/massage',
      text: '按摩'
    },
    {
      path: '/order/children',
      text: '小儿'
    },
    {
      path: '/order/SPA',
      text: 'SPA'
    },
    {
      path: '/order/foot',
      text: '足疗'
    },
    {
      path: '/order/moxibustion',
      text: '艾灸'
    },
    {
      path: '/order/recover',
      text: '康复'
    },
    {
      path: '/order/scraping',
      text: '刮痧'
    },
    {
      path: '/order/nightTalk',
      text: '夜间'
    }
  ]

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
          let itemWidth = 61
          let scrollWidth = itemWidth * this.orders.length
          this.$el.querySelector('.order-tab-hook').style.width = scrollWidth + 'px'
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
        if (vm.$route.params !== 'massage') {
          vm.$router.push('/order/massage')
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
        .order-item
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
