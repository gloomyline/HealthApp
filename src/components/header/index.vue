<template>
  <div class="header">
    <group class="title-wrapper">
      <h1 class="title">好多养生</h1>
      <x-address class="address-site" :title="title" :list="addressData" v-model="value" hide-district
                 value-text-align="center" raw-value>
      </x-address>
      <span class="site">{{site}}</span>
      <div class="search" @click="search">
        <span class="icon"></span>
        <span class="text">搜索</span>
      </div>
    </group>
    <div class="swiper-wrapper">
      <div class="swiper">
        <swiper loop auto dots-position="center" dots-class="dots" :list="bannerList" :index="bannerIndex"
                @on-index-change="onIndexChange" :min-moving-distance="20" :interval="5000"
                :aspect-ratio="1/2"></swiper>
      </div>
    </div>
    <div class="more-wrapper">
      <span class="title">为您推荐</span>
      <span class="more">更多>></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, XAddress, ChinaAddressV3Data, Swiper, Value2nameFilter as value2name } from 'vux'

  const bannerList = [
    {
      url: 'javascript:',
      img: 'http://localhost:9999/static/imgs/banner-01.jpg',
      title: '这里是轮播图'
    },
    {
      url: 'javascript:',
      img: 'http://localhost:9999/static/imgs/banner-01.jpg',
      title: '这里是轮播图'
    },
    {
      url: 'javascript:',
      img: 'http://localhost:9999/static/imgs/banner-01.jpg',
      title: '这里是轮播图'
    }
  ]

  export default {
    data () {
      return {
        title: '',
        value: ['福建省', '泉州市'],
        addressData: ChinaAddressV3Data,
        bannerList,
        bannerIndex: 0
      }
    },
    mounted () {
    },
    computed: {
      site () {
        let str = value2name(this.value, ChinaAddressV3Data)
        return str.split(' ')[1]
      }
    },
    methods: {
      onIndexChange (index) {
        this.bannerIndex = index
      },
      search (event) {
        console.log('click' + event.target + 'start search')
      }
    },
    components: {
      Group,
      XAddress,
      Swiper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'

  .header
    .title-wrapper
      position relative
      width 100%
      height 47px
      color #fff
      background rgb(88, 79, 96)
      .weui-cells
        margin-top 0
        background none
        &:after, &:before
          display none
        .title
          padding-top 12px
          text-align center
          font-size 18px
        .address-site
          position absolute
          left 0
          top 0
          padding 16 15px
          font-size 0
          z-index 20
          color #fff
          .vux-cell-box
            .vux-tap-active
              background none
            &:before
              display none
            .vux-popup-picker-select
              width 60px
              height 30px

      .site
        position absolute
        left 0
        top 0
        padding 12px 14px
        z-index 10

      .search
        position absolute
        right 0
        top 0
        height 47px
        line-height 47px
        padding 0 15px
        .icon
          margin-top 16px
          inline-icon(18px, 18px)
          bg-img('fangdajing')
        .text
          display inline-block
          vertical-align top
          font-size 12px
  .swiper-wrapper
    position relative
    width 100%
    padding-top 50%
    .swiper
      position absolute
      left 0
      top 0
      width 100%
      .dots
        a
          margin-left 8px
        .vux-icon-dot
          background rgba(193, 188, 182, .6)
          &.active
            background #584f60

  .more-wrapper
    position relative
    height 30px
    line-height 30px
    padding 0 16px
    color rgb(40, 41, 49)
    border-bottom 1px solid rgb(241, 241, 241)
    .title
      font-size 16px
    .more
      position absolute
      top 0
      right 16px
      font-size 10px
</style>
