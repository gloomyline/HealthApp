<template>
  <div class="service-page">
    <div class="header-wrapper">
      <h1 class="title">客服</h1>
    </div>
    <div class="tel">
      <div class="icon"></div>
      <div class="title">客服电话:</div>
      <div class="num">100-000-000</div>
    </div>
    <group class="collapse">
      <cell :title="text.title" :border-intent="false" class="que"></cell>
      <cell-box
        class="title"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="toggleCont01">
        <span class="num">{{num[0]}}</span>
        <span class="text">{{text.text1}}</span>
      </cell-box>

      <div class="sub-item-wrapper sub-item-hook" v-show="showContent001">
        <div class="sub-item-content">
          <li v-for="item in contArr" class="sub-item">{{item}}</li>
        </div>
      </div>

      <cell-box
        is-link
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="toggleCont02" class="title">
        <span class="num">{{num[1]}}</span>
        <span class="text">{{text.text2}}</span>
      </cell-box>
      <div class="sub-item-wrapper a-item-hook" v-show="showContent002">
        <div class="sub-item-content">
          <li v-for="item in contArr" class="sub-item">{{item}}</li>
        </div>
      </div>
      <cell-box
        class="title"
        is-link
        :border-intent="false"
        :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="toggleCont03">
        <span class="num">{{num[2]}}</span>
        <span class="text">{{text.text3}}</span>
      </cell-box>
      <div class="sub-item-wrapper b-item-hook" v-show="showContent003">
        <div class="sub-item-content">
          <li v-for="item in contArr" class="sub-item">{{item}}</li>
        </div>
      </div>
    </group>
    <group class="join">
      <cell
        class="title"
        :title="text.text4"
        is-link
        :border-intent="false"
        :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="toggleCont04"></cell>
      <div class="sub-item-wrapper s-item-hook" v-show="showContent004">
        <div class="sub-item-content">
          <li v-for="item in contArr" class="sub-item">{{item}}</li>
        </div>
      </div>
      <cell
        class="title"
        :title="text.text5"
        is-link
        :border-intent="false"
        :arrow-direction="showContent005 ? 'up' : 'down'"
        @click.native="toggleCont05"></cell>
      <div class="sub-item-wrapper u-item-hook" v-show="showContent005">
        <div class="sub-item-content">
          <li v-for="item in contArr" class="sub-item">{{item}}</li>
        </div>
      </div>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cell, CellBox, Group } from 'vux'
  import BScroll from 'better-scroll'

  let contArr = ['content001', 'content001', 'content001', 'content001', 'content001', 'content001', 'content001']
  export default {
    data () {
      return {
        contArr,
        num: [1, 2, 3],
        text: {
          title: '常见问题',
          text1: '怎么支付订单 ',
          text2: '怎么取消订单',
          text3: '怎么充值',
          text4: '领班如何加入好多养生',
          text5: '足浴城如何加入好多养生'
        },
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false,
        showContent005: false
      }
    },
    mounted () {
    },
    methods: {
      _initScroll01 () {
        if (!this.scroll01) {
          this.scroll01 = new BScroll(this.$el.querySelector('.sub-item-hook'), {click: true})
        } else {
          this.scroll01.refresh()
        }
      },
      _initScroll02 () {
        if (!this.scroll02) {
          this.scroll02 = new BScroll(this.$el.querySelector('.a-item-hook'), {click: true})
        } else {
          this.scroll02.refresh()
        }
      },
      _initScroll03 () {
        if (!this.scroll03) {
          this.scroll03 = new BScroll(this.$el.querySelector('.b-item-hook'), {click: true})
        } else {
          this.scroll03.refresh()
        }
      },
      _initScroll04 () {
        if (!this.scroll04) {
          this.scroll04 = new BScroll(this.$el.querySelector('.s-item-hook'), {click: true})
        } else {
          this.scroll04.refresh()
        }
      },
      _initScroll05 () {
        if (!this.scroll05) {
          this.scroll05 = new BScroll(this.$el.querySelector('.u-item-hook'), {click: true})
        } else {
          this.scroll05.refresh()
        }
      },
      toggleCont01 () {
        this.showContent001 = !this.showContent001
        if (this.showContent001) {
          this.$nextTick(() => {
            this._initScroll01()
          })
        }
      },
      toggleCont02 () {
        this.showContent002 = !this.showContent002
        if (this.showContent002) {
          this.$nextTick(() => {
            this._initScroll02()
          })
        }
      },
      toggleCont03 () {
        this.showContent003 = !this.showContent003
        if (this.showContent003) {
          this.$nextTick(() => {
            this._initScroll03()
          })
        }
      },
      toggleCont04 () {
        this.showContent004 = !this.showContent004
        if (this.showContent004) {
          this.$nextTick(() => {
            this._initScroll04()
          })
        }
      },
      toggleCont05 () {
        this.showContent005 = !this.showContent005
        if (this.showContent005) {
          this.$nextTick(() => {
            this._initScroll05()
          })
        }
      }
    },
    components: {
      Cell,
      CellBox,
      Group
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'

  .service-page
    position fixed
    top 0
    left 0
    bottom 49px
    width 100%
    height 100%
    overflow hidden
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
    .tel
      background #fff
      display flex
      height 40px
      width 100%
      color #322E36
      border-bottom 6px solid #f1f1f1
      .icon
        padding 16px 12px 16px 12px
      .title
        font-size 15px
        padding-top 11px
      .num
        padding-top 11px
        padding-left 30px
    .collapse
      width 100%
      position relative
      .weui-cells
        margin-top 0
        .que
          font-size 13px
        .title
          font-size 13px
          height 30px
          .num
            display inline-block
            width 10px
            height 10px
            left 13px
            line-height 13px
            text-align center
            padding 5px
            font-size 15px
            border-radius 50%
            color #fff
            background rgb(88, 79, 96)
          .text
            padding-left 13px
        .sub-item-wrapper
          height 150px
          overflow hidden
          padding 15px
          line-height 1px
          .sub-item
            height 38px
        &::after
          display none
      .sub-item
        font-size 13px
    .join
      margin-top 71px
      width 100%
      .weui-cells
        margin-top 0
        &::before
          display none
      .weui-cells
        &::after
          display none
      .title
        font-size 13px
        height 30px
      .sub-item-wrapper
        height 150px
        overflow hidden
        padding 15px
        line-height 1px
        .sub-item
          height 38px
          font-size 13px
</style>
