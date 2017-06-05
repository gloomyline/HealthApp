<template>
  <div class="home-page">
    <div class="tech-list-wrapper tech-list-hook">
      <ul>
        <li v-for="(tech, index) in techList" class="tech-item">
          <div class="avatar">
            <img width="73" height="73" :src="tech.AVATAR" class="avatar-img">
            <span v-show="tech.LEVEL === 1" class="level"></span>
          </div>
          <div class="content">
            <div class="title-wrapper">
              <span class="name">{{tech.NAME}}</span>
              <span class="today-about">{{tech.TODAY_ABOUT | todayAbout}}</span>
            </div>
            <div class="info-wrapper">
              <span class="age">{{tech.AGE}}岁</span>
              <dot></dot>
              <span class="registar">{{tech.REGISTAR}}</span>
              <dot v-show="tech.CERTIFICATE_IDS"></dot>
              <span class="cretificate">高级推拿师</span>
            </div>
            <div class="desc-wrapper">
              <p class="text">{{tech.SERVE_CONTENT}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import dot from '@/components/uiComponents/dot'

  export default {
    props: {
      techList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        techs: []
      }
    },
    created () {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    watch: {
      'techList' () {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    methods: {
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el.querySelector('.tech-list-hook'), {click: true})
        } else {
          this.scroll.refresh()
        }
      }
    },
    filters: {
      todayAbout (num) {
        return num === 0 ? '可约' : '不可约'
      }
    },
    components: {
      dot
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .home-page
    .tech-list-wrapper
      position absolute
      left 0
      top 188px
      bottom 49px
      width 100%
      overflow hidden
      .tech-item
        display flex
        padding 11px 15px
        .avatar
          flex 0 0 103px
          position relative
          .avatar-img
            width 73px
            height 73px
          .level
            display inline-block
            position absolute
            left 12px
            bottom 15px
            width 51px
            height 14px
            bg-img('level')
            background-size contain
        .content
          flex 1
          .title-wrapper
            margin-bottom 16px
            .name
              margin-right 10px
              font-size 15px
              color #29292E
            .today-about
              display inline-block
              width 50px
              height 15px
              line-height 15px
              text-align center
              padding 2px
              border-radius 10px
              font-size 10px
              color #fff
              background rgb(88, 79, 96)
          .info-wrapper
            margin-bottom 16px
            font-size 12px
            color #555
          .desc-wrapper
            margin-bottom 16px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            font-size 11px
            color #919191
</style>
