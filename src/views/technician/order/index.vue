<template>
  <div class="order-page">
    <div class="header">
      <tab class="nav" v-model="index" :line-width=2 active-color="#5B4F60" custom-bar-width="76px"
           style="color: #7e8c8d">
        <tab-item class="vux-center" v-for="(item, index) in list" :selected="selected === item" :key="index"
                  @click.native="select(index)">{{item.title}}
        </tab-item>
      </tab>
      <swiper v-model="index" height="530px" :show-dots="false">
        <swiper-item>
          <combo></combo>
        </swiper-item>
        <swiper-item>
          <service></service>
        </swiper-item>
        <swiper-item>
          <completed></completed>
        </swiper-item>
        <swiper-item>
          <canceled></canceled>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import combo from './combo.vue'
  import service from './service.vue'
  import completed from './completed.vue'
  import canceled from './canceled.vue'
  export default{
    data () {
      return {
        list: [
          {
            title: '待确认',
            template: ''
          },
          {
            title: '待服务',
            template: ''
          },
          {
            title: '已完成',
            template: ''
          },
          {
            title: '已取消',
            template: ''
          }
        ],
        selected: '待确认',
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
      combo,
      service,
      completed,
      canceled
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .order-page
    position relative
    top 0
    left 0
    width 100%
    height 100%
    background #f1f1f1
</style>
