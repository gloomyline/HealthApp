<template>
  <div class="header">
    <div class="title-wrapper">
      <h1 class="title">好多养生</h1>
      <div class="address-site">
        <span class="site">泉州</span>
        <span class="icon-arrow-down">></span>
      </div>
    </div>
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
  import { Swiper } from 'vux'

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
        bannerList,
        bannerIndex: 0
      }
    },
    methods: {
      onIndexChange (index) {
        this.bannerIndex = index
      }
    },
    components: {
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
      .title
        padding-top 12px
        text-align center
        font-size 18px
      .address-site
        position absolute
        left 0
        top 0
        padding 14px 15px
        font-size 0
        color #fff
        .site
          display inline-block
          vertical-align top
          margin-right 6px
          font-size 15px
        .icon-arrow-down
          display inline-block
          vertical-align top
          font-size 15px
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
