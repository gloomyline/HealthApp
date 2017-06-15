<template>
  <div class="me-page">
    <div class="head-wrapper">
      <div class="logo">
        <span class="img"></span>
      </div>
      <div class="account">
        <span class="text">账户:</span>
        <span class="content">136XXXX2315</span>
      </div>
    </div>
    <group class="about-me">
      <li class="about-me-item" v-for="(item, index) in lists.aboutMe">
        <cell :title="item.title" is-link :link="item.link"></cell>
      </li>
    </group>
    <group class="extra">
      <li class="extra-item" v-for="item in lists.extra">
        <cell :title="item.title" is-link :link="item.link"></cell>
      </li>
    </group>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="bind-cell-phone" @click="toggleBind">
      <span class="text" :class="{unbind: bindFlag}">{{isBindCellPhone}}</span>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import { Group, Cell, CellBox } from 'vux'
  import { mapGetters } from 'vuex'

  let lists = {
    aboutMe: [
      {
        name: 'order',
        title: '我的订单',
        link: ''
      },
      {
        name: 'favorite',
        title: '我的收藏',
        link: '/me/collect'
      },
      {
        name: 'ticket',
        title: '我的优惠券',
        link: '/me/ticket'
      }
    ],
    extra: [
      {
        name: 'score',
        title: '积分商城',
        link: ''
      },
      {
        name: 'us',
        title: '关于我们',
        link: ''
      },
      {
        name: 'questing',
        title: '常见问题&联系客服',
        link: ''
      }
    ]
  }

  export default {
    data () {
      return {
        lists,
        bindFlag: true
      }
    },
    computed: {
      ...mapGetters({
        ticketsShow: 'ticketsShow'
      }),
      isBindCellPhone () {
        return this.bindFlag ? '解绑手机' : '绑定手机'
      }
    },
    methods: {
      toggleBind () {
        this.bindFlag = !this.bindFlag
      }
    },
    components: {
      Group,
      Cell,
      CellBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .me-page
    position fixed
    left 0
    top 0
    bottom 49px
    width 100%
    height 100%
    background #f1f1f1
    .head-wrapper
      padding 31px 0
      background rgb(88, 79, 96)
      .logo
        width 71px
        margin 0 auto 20px
        .img
          inline-icon(71px, 71px)
          bg-img('head')
      .account
        text-align center
        font-size 0
        color #f1f1f1
        .text
          font-size 15px
          margin-right 6px
        .content
          font-size 15px

    .about-me, .extra
      margin-top 7px
      .weui-cells
        margin-top 0
        &::before, &::after
          display none
        .about-me-item, .extra-item
          height 42px
          font-size 15px
          color #322e36
          borderB-1px(rgb(241, 241, 241))
          &:last-child
            border-none()
    .bind-cell-phone
      margin-top 18px
      height 42px
      line-height 42px
      text-align center
      background #fff
      border-1px(rgb(241, 241, 241))
      borderB-1px(rgb(241, 241, 241))
      .text
        font-size 15px
        color #322e36
        &.unbind
          color #ff7474
</style>
