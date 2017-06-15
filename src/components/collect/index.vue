<template>
  <div class="collect-page">
    <div class="header-wrapper">
      <h1 class="title">我的收藏</h1>
      <div class="back" @click="closeDetail">
        <span class="icon-back">返回</span>
      </div>
    </div>

    <!--<tab :line-width=2 class="nav" active-color="#5B4F60" custom-bar-width="76px">-->
    <!--<tab-item class="vux-center" v-for="(item, index) in list" :key="index">{{item.name}}</tab-item>-->
    <!--&lt;!&ndash;<tabbar-item v-for="(item, index) in list" vue-link="item.link">{{item.link}}</tabbar-item>&ndash;&gt;-->
    <!--</tab>-->
    <div class="tab">
      <router-link to="/me/collect/teches">技师</router-link>
      <router-link to="/me/collect/combo">套餐</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, TabbarItem } from 'vux'
  //  const list = () => [{
  //    name: '技师',
  //    link: '/me/collect/teches'
  //  }, {
  //    name: '套餐',
  //    link: '/me/collect/combo'
  //  }]
  export default{
    data () {
      return {
        list: [{
          name: '技师',
          link: '/me/collect/teches'
        }, {
          name: '套餐',
          link: '/me/collect/combo'
        }]
      }
    },
    components: {
      Tab,
      TabItem,
      TabbarItem
    },
    methods: {
      closeDetail (event) {
        if (!event._constructed) return
        this.$store.commit('')
      },
      onItemClick (index) {
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
        padding-top 12px
        text-align center
        font-size 18px
        vertical-align top
      .back
        position absolute
        left 12px
        top 10px
        padding 4px
        .icon-back
          display inline-block
    .tab
      display flex
      background #fff
      height 44px
</style>
