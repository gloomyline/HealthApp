<template>
  <div class="myOrders-page">
    <div class="header-wrapper">
      <h1 class="title">我的订单</h1>
      <div class="back">
        <router-link to="/me">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
      </div>
    </div>
    <div class="nav">
      <tab active-color="#5B4F60" v-model="index">
        <tab-item class="vux-center" v-for="(item, index) in list" :selected="selected === item" :key="index"
                  @click.native="select(index)">{{item.title}}
        </tab-item>
      </tab>
      <swiper v-model="index" height="530px" :show-dots="false">
        <swiper-item>
          <go-on selected></go-on>
        </swiper-item>
        <swiper-item>
          <complete></complete>
        </swiper-item>
        <swiper-item>
          <cancel></cancel>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import goon from './goon.vue'
  import complete from './complete.vue'
  import cancel from './cancel.vue'

  export default{
    data () {
      return {
        list: [
          {
            title: '进行中',
            template: '<go-on></go-on>'
          },
          {
            title: '已完成',
            template: '<complete></complete>'
          },
          {
            title: '已取消',
            template: '<cancel></cancel>'
          }
        ],
        selected: '进行中',
        index: 0
      }
    },
    methods: {
      select (index) {
        console.log('on item click:', index)
      }
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      'go-on': goon,
      complete,
      cancel
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myOrders-page
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
        .icon-back
          display inline-block
</style>
