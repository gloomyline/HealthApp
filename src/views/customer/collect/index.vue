<template>
  <div class="collect-page">
    <div class="header-wrapper">
      <h1 class="title">我的收藏</h1>
      <div class="back">
        <router-link to="/me">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
      </div>
    </div>
    <div>
      <tab class="nav" v-model="index" :line-width=2 active-color="#5B4F60" custom-bar-width="76px">
        <tab-item class="vux-center" v-for="(item, index) in list" :selected="selected === item" :key="index"
                  @click.native="select(index)">{{item.title}}
        </tab-item>
      </tab>
      <swiper v-model="index" height="530px" style="width: 100%" :show-dots="false">
        <swiper-item>
          <teches></teches>
        </swiper-item>
        <swiper-item>
          <combo></combo>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import teches from './teches.vue'
  import combo from './combo.vue'

  export default{
    data () {
      return {
        list: [
          {
            title: '技师',
            template: '<teches></teches>'
          },
          {
            title: '套餐',
            template: '<combo></combo>'
          }
        ],
        selected: '技师',
        index: 0
      }
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      teches,
      combo
    },
    methods: {
      select (index) {
        console.log('on item click:', index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .collect-page
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    z-index 100
    background #f1f1f1
    .header-wrapper
      width 100%
      height 47px
      color #fff
      background rgb(88, 79, 96)
      .title
        padding-top 15px
        text-align center
        font-size 18px
        vertical-align top
      .back
        position absolute
        left 12px
        top 6px
        padding 4px
</style>
