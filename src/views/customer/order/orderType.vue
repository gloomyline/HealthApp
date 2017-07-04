<template>
  <div :class="orderClass" class="order-items-wrapper">
    <div class="container">
      <li class="item" v-for="item in itemsList" @click="showDetail">
        <item :item="item"></item>
      </li>
    </div>
    <transition name="fade" @after-enter="afterEnter" @after-leave="afterLeave">
      <item-detail class="item-detail" v-show="detailShow" @close-item-page="hideDetail"></item-detail>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapGetters } from 'vuex'
  import item from '@/components/order/item'
  import itemDetail from '@/components/order/itemDetail'

  let itemsList = [
    {
      img: '',
      name: '精品水疗养生SPA套餐',
      score: 5,
      price: 153,
      desc: '实力派按摩套餐',
      chooseCount: 200
    },
    {
      img: '',
      name: '精品水疗养生SPA套餐',
      score: 5,
      price: 153,
      desc: '实力派按摩套餐',
      chooseCount: 200
    },
    {
      img: '',
      name: '精品水疗养生SPA套餐',
      score: 5,
      price: 153,
      desc: '实力派按摩套餐',
      chooseCount: 200
    },
    {
      img: '',
      name: '精品水疗养生SPA套餐',
      score: 5,
      price: 153,
      desc: '实力派按摩套餐',
      chooseCount: 200
    },
    {
      img: '',
      name: '精品水疗养生SPA套餐',
      score: 5,
      price: 153,
      desc: '实力派按摩套餐',
      chooseCount: 200
    },
    {
      img: '',
      name: '精品水疗养生SPA套餐',
      score: 5,
      price: 153,
      desc: '实力派按摩套餐',
      chooseCount: 200
    },
    {
      img: '',
      name: '精品水疗养生SPA套餐',
      score: 5,
      price: 153,
      desc: '实力派按摩套餐',
      chooseCount: 200
    }
  ]

  export default{
    data () {
      return {
        itemsList,
        loadedItemsLists: [], // 已加载数据的项目列表
        detailShow: false
      }
    },
    created () {
      this._fetchData()
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    watch: {
      'manipulation' () {
        this._afterDataUpdate()
      },
      'SPA' () {
        this._afterDataUpdate()
      },
      'children' () {
        this._afterDataUpdate()
      },
      'moxibustion' () {
        this._afterDataUpdate()
      },
      'recover' () {
        this._afterDataUpdate()
      },
      'scraping' () {
        this._afterDataUpdate()
      },
      'foot' () {
        this._afterDataUpdate()
      },
      '$route.params.type': '_fetchData'
    },
    computed: {
      orderClass () {
        return 'order-' + this.$route.params.type
      },
      ...mapGetters({
        manipulation: 'manipulation',
        SPA: 'SPA',
        children: 'children',
        moxibustion: 'moxibustion',
        recover: 'recover',
        scraping: 'scraping',
        foot: 'foot'
      })
    },
    methods: {
      _fetchData () {
        if (!this.$route.params.type) return
        if (this._isLoadedList()) {
          let loadedIndex = (function () {
            for (let i = 0; i < this.loadedItemsLists.length; i++) {
              let item = this.loadedItemsLists[i]
              if (item.listName === this.$route.params.type) {
                return i
              }
            }
          }.bind(this))()
          this.itemsList = this.loadedItemsLists[loadedIndex].list
          this.$nextTick(() => {
            this._initScroll()
          })
        } else {
          this.$store.dispatch('getItemListById', this.$route.params.type)
        }
      },
      _afterDataUpdate () {
        let itemType = this.$route.params.type
        let itemList = this[itemType]
        this.itemsList = itemList.length === 0 ? [] : itemList
        this.loadedItemsLists.push({listName: this.$route.params.type, list: itemList})
        this.$nextTick(() => {
          this._initScroll()
        })
      },
      _isLoadedList () { // 判断当前路由页面中所需套餐列表数据是否已加载
        for (let i = 0; i < this.loadedItemsLists.length; i++) {
          let item = this.loadedItemsLists[i]
          if (item.listName === this.$route.params.type) {
            return true
          }
        }

        return false
      },
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el, {click: true})
        } else {
          this.scroll.refresh()
        }
      },
      showDetail (event) {
        if (!event._constructed) return
        this.detailShow = true
      },
      hideDetail () {
        this.detailShow = false
      },
      afterEnter () {
//        this.$store.commit('HIDETAB')
      },
      afterLeave () {
//        this.$store.commit('SHOWTAB')
      }
    },
    components: {
      item,
      itemDetail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order-items-wrapper
    position fixed
    left 0
    top 35px
    bottom 49px
    width 100%
    overflow hidden
    .container
      padding: 7px 7px 0
      background #f1f1f1
      .item
        margin-bottom 7px
        &:last-child
          margin-bottom 0
    .item-detail
      transform translate3d(0, 0, 0)
      &.fade-enter-active, &.fade-leave-active
        transition all .4s ease
      &.fade-enter, &.fade-leave-active
        opacity 0
        transform translate3d(100%, 0, 0)
</style>
