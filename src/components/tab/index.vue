<template>
  <div class="tab" v-show="tabShow">
    <li v-for="button in buttons" class="tab-item">
      <router-link :to="button.route">
        <span class="icon" :class="button.icon"></span>
        <span class="title">{{button.title}}</span>
      </router-link>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  const customerButtons = [
    {
      icon: 'home',
      title: '首页',
      route: '/home'
    },
    {
      icon: 'order',
      title: '订单',
      route: '/order'
    },
    {
      icon: 'me',
      title: '我的',
      route: '/me'
    },
    {
      icon: 'service',
      title: '客服',
      route: '/service'
    }
  ]

  const technicianButtons = [
    {
      icon: 'home',
      title: '首页',
      route: '/technician/home'
    },
    {
      icon: 'order',
      title: '订单',
      route: '/technician/order'
    },
    {
      icon: 'me',
      title: '我的',
      route: '/technician/me'
    }
  ]

  const captainButtons = [
    {
      icon: 'home',
      title: '首页',
      route: '/captain/home'
    },
    {
      icon: 'team',
      title: '团队',
      route: '/captain/team'
    },
    {
      icon: 'me',
      title: '我的',
      route: '/captain/me'
    }
  ]

  export default {
    data () {
      return {
        buttons: []
      }
    },
    beforeCreate () {
    },
    created () {
      switch (this.appStat) {
        case 0:
          this.buttons = customerButtons
          break
        case 1:
          this.buttons = technicianButtons
          break
        case 2:
          this.buttons = captainButtons
          break
        default:
          this.buttons = customerButtons
          break
      }
    },
    mounted () {
    },
    computed: {
      ...mapGetters({
        appStat: 'appStat',
        tabShow: 'tabShow'
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .tab
    display flex
    width 100%
    height 100%
    background #fff
    border-1px(#c6c5cc)
    .tab-item
      flex 1
      height 100%
      text-align center
      & > a
        display block
        color #c6c5cc
        font-size 11px
        font-weight 300
        .icon
          display block
          width 24px
          height 24px
          background-repeat no-repeat
          background-size contain
          margin 5px auto 0
          &.home
            bg-img('home')
          &.order
            bg-img('order')
          &.me
            bg-img('me')
          &.service
            bg-img('service')
        .title
          display block
          margin-top 4px
        &.active
          color #584f60
          & > .home
            bg-img('home-on')
          & > .order
            bg-img('order-on')
          & > .me
            bg-img('me-on')
          & > .service
            bg-img('service-on')

</style>
