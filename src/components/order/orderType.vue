<template>
  <div :class="orderClass" class="order-items-wrapper">
    <div class="container">
      <p>This is orderType!{{$route.params.type}}</p>
      <li class="item" v-for="item in itemsList">
        <item :item="item"></item>
      </li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import item from '@/components/order/item'

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
        itemsList
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    computed: {
      orderClass () {
        return 'order-' + this.$route.params.type
      }
    },
    methods: {
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el, {click: true})
        } else {
          this.scroll.refresh()
        }
      }
    },
    components: {
      item
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order-items-wrapper
    position fixed
    left 0
    top 35px
    bottom 0
    overflow hidden
    .container
      padding: 7px 7px 0
      background #f1f1f1
      .item
        margin-bottom 7px
        &:last-child
          margin-bottom 0
</style>
